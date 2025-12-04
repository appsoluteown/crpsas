const express = require('express');
const multer = require('multer');
const { GoogleGenAI, Type } = require("@google/genai");
const { google } = require('googleapis');
const { Storage } = require('@google-cloud/storage');
const archiver = require('archiver');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const os = require('os');
require('dotenv').config();

const app = express();

// Cloud Run utilise un système de fichiers en mémoire. /tmp est le seul endroit inscriptible garanti.
const upload = multer({ dest: os.tmpdir() });

// Configuration CORS permissive pour éviter les erreurs "Blocked by CORS" en dev
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// ============================================================
// SERVE STATIC FRONTEND (React build from /dist)
// ============================================================
app.use(express.static(path.join(__dirname, 'dist')));

// Endpoint de santé
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'API CRP Backend is running.' });
});

// CONFIGURATION
const DRIVE_FOLDER_ID = '1W7gVPXh33TJ2Q7qQULBGd1csycZBUS5S';
const GCS_BUCKET_NAME = process.env.GCS_BUCKET_NAME || 'crp-indexation';
const INDEX_FILE_NAME = 'fiches-index.json';

// Configuration Auth Drive
const authConfig = {
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
};

if (process.env.GOOGLE_APPLICATION_CREDENTIALS_PATH) {
  authConfig.keyFile = process.env.GOOGLE_APPLICATION_CREDENTIALS_PATH;
  console.log(`Authentification via fichier clé : ${process.env.GOOGLE_APPLICATION_CREDENTIALS_PATH}`);
} else {
  console.log('Authentification via ADC (GCP Default)');
}

const auth = new google.auth.GoogleAuth(authConfig);
const drive = google.drive({ version: 'v3', auth });

// GCS pour persister l'index
const storage = new Storage();

// Initialisation Gemini
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// ============================================================
// ÉTAT DE L'INDEXATION (en mémoire)
// ============================================================
let indexationState = {
  isRunning: false,
  progress: 0,
  currentFile: '',
  totalFiles: 0,
  processedFiles: 0,
  error: null
};

// ============================================================
// FONCTIONS UTILITAIRES POUR L'INDEX
// ============================================================

async function loadIndex() {
  try {
    const bucket = storage.bucket(GCS_BUCKET_NAME);
    const file = bucket.file(INDEX_FILE_NAME);
    const [exists] = await file.exists();

    if (!exists) {
      return { lastIndexed: null, totalFiles: 0, files: [] };
    }

    const [contents] = await file.download();
    return JSON.parse(contents.toString());
  } catch (error) {
    console.error('Erreur chargement index:', error.message);
    return { lastIndexed: null, totalFiles: 0, files: [] };
  }
}

async function saveIndex(index) {
  try {
    const bucket = storage.bucket(GCS_BUCKET_NAME);
    const file = bucket.file(INDEX_FILE_NAME);
    await file.save(JSON.stringify(index, null, 2), {
      contentType: 'application/json'
    });
    console.log('Index sauvegardé sur GCS');
  } catch (error) {
    console.error('Erreur sauvegarde index:', error.message);
    throw error;
  }
}

// Récupérer tous les sous-dossiers récursivement
async function getAllFolderIds(parentId) {
  const folderIds = [parentId];

  const subFoldersRes = await drive.files.list({
    q: `'${parentId}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
    fields: 'files(id, name)',
    pageSize: 100
  });

  const subFolders = subFoldersRes.data.files || [];

  for (const folder of subFolders) {
    const nestedIds = await getAllFolderIds(folder.id);
    folderIds.push(...nestedIds);
  }

  return folderIds;
}

// Récupérer tous les PDFs dans tous les dossiers
async function getAllPDFs(folderIds) {
  const allPDFs = [];

  for (let i = 0; i < folderIds.length; i++) {
    const folderId = folderIds[i];
    console.log(`  Scan dossier ${i + 1}/${folderIds.length}: ${folderId}`);

    try {
      let pageToken = null;
      let folderPDFCount = 0;

      do {
        const res = await drive.files.list({
          q: `'${folderId}' in parents and mimeType = 'application/pdf' and trashed = false`,
          fields: 'nextPageToken, files(id, name, webViewLink)',
          pageSize: 100,
          pageToken: pageToken
        });

        const files = res.data.files || [];
        folderPDFCount += files.length;
        allPDFs.push(...files);
        pageToken = res.data.nextPageToken;
      } while (pageToken);

      if (folderPDFCount > 0) {
        console.log(`    -> ${folderPDFCount} PDFs trouvés`);
      }
    } catch (error) {
      console.error(`  ERREUR scan dossier ${folderId}:`, error.message);
    }
  }

  return allPDFs;
}

// Analyser un PDF avec Gemini pour extraire les références
async function extractReferencesFromPDF(fileId, fileName) {
  try {
    // Télécharger le PDF
    const destResponse = await drive.files.get(
      { fileId: fileId, alt: 'media' },
      { responseType: 'stream' }
    );

    const chunks = [];
    await new Promise((resolve, reject) => {
      destResponse.data.on('data', (chunk) => chunks.push(chunk));
      destResponse.data.on('end', resolve);
      destResponse.data.on('error', reject);
    });
    const pdfBuffer = Buffer.concat(chunks);

    if (pdfBuffer.length === 0) {
      console.log(`  -> Fichier vide: ${fileName}`);
      return [];
    }

    const pdfBase64 = pdfBuffer.toString('base64');

    // Analyser avec Gemini
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: {
        parts: [
          { inlineData: { mimeType: 'application/pdf', data: pdfBase64 } },
          {
            text: `Tu es un assistant technique CRP SAS. Analyse cette fiche technique PDF.

Tâche: Extraire TOUTES les références produit mentionnées dans ce document.

Les références produit CRP suivent généralement ces formats:
- Codes numériques comme "10002000FOND60", "10002000H60E", "10002000TETE"
- Codes alphanumériques avec des patterns comme "XXXX-XXXX" ou séquences de chiffres/lettres

Instructions:
1. Lis attentivement tout le document
2. Identifie toutes les références produit (codes article, numéros de référence)
3. Retourne une liste JSON de toutes les références uniques trouvées

Si aucune référence n'est trouvée, retourne un tableau vide [].` }
        ]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });

    const references = JSON.parse(response.text || "[]");
    console.log(`  -> ${fileName}: ${references.length} références trouvées`);
    return references;

  } catch (error) {
    console.error(`  -> Erreur analyse ${fileName}:`, error.message);
    return [];
  }
}

// ============================================================
// ENDPOINTS D'INDEXATION
// ============================================================

// Statut de l'index
app.get('/api/index-status', async (req, res) => {
  try {
    const index = await loadIndex();
    res.json({
      lastIndexed: index.lastIndexed,
      totalFiles: index.totalFiles || index.files?.length || 0,
      isRunning: indexationState.isRunning
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Progression de l'indexation en cours
app.get('/api/indexation-progress', (req, res) => {
  res.json(indexationState);
});

// Lancer l'indexation
app.post('/api/start-indexation', async (req, res) => {
  if (indexationState.isRunning) {
    return res.status(400).json({ error: 'Indexation déjà en cours' });
  }

  // Répondre immédiatement et lancer en arrière-plan
  res.json({ message: 'Indexation démarrée', status: 'started' });

  // Lancer l'indexation en arrière-plan
  runIndexation().catch(err => {
    console.error('Erreur indexation:', err);
    indexationState.error = err.message;
    indexationState.isRunning = false;
  });
});

async function runIndexation() {
  console.log('=== DÉBUT INDEXATION ===');

  indexationState = {
    isRunning: true,
    progress: 0,
    currentFile: 'Recherche des dossiers...',
    totalFiles: 0,
    processedFiles: 0,
    error: null
  };

  try {
    // Étape 1: Trouver tous les dossiers
    console.log('Recherche des sous-dossiers...');
    const allFolderIds = await getAllFolderIds(DRIVE_FOLDER_ID);
    console.log(`${allFolderIds.length} dossiers trouvés`);

    indexationState.currentFile = 'Listage des PDFs...';

    // Étape 2: Lister tous les PDFs
    console.log('Listage des PDFs...');
    const allPDFs = await getAllPDFs(allFolderIds);
    console.log(`${allPDFs.length} PDFs trouvés`);

    indexationState.totalFiles = allPDFs.length;

    // Étape 3: Analyser chaque PDF
    const indexedFiles = [];

    for (let i = 0; i < allPDFs.length; i++) {
      const pdf = allPDFs[i];

      indexationState.processedFiles = i;
      indexationState.progress = Math.round((i / allPDFs.length) * 100);
      indexationState.currentFile = pdf.name;

      console.log(`[${i + 1}/${allPDFs.length}] Analyse: ${pdf.name}`);

      const references = await extractReferencesFromPDF(pdf.id, pdf.name);

      indexedFiles.push({
        fileId: pdf.id,
        fileName: pdf.name,
        webViewLink: pdf.webViewLink,
        references: references
      });

      // Petite pause pour éviter de surcharger l'API (rate limiting)
      await new Promise(r => setTimeout(r, 500));
    }

    // Étape 4: Sauvegarder l'index
    const newIndex = {
      lastIndexed: new Date().toISOString(),
      totalFiles: indexedFiles.length,
      files: indexedFiles
    };

    await saveIndex(newIndex);

    indexationState.progress = 100;
    indexationState.processedFiles = allPDFs.length;
    indexationState.currentFile = 'Terminé!';
    indexationState.isRunning = false;

    console.log('=== INDEXATION TERMINÉE ===');
    console.log(`${indexedFiles.length} fichiers indexés`);

  } catch (error) {
    console.error('Erreur indexation:', error);
    indexationState.error = error.message;
    indexationState.isRunning = false;
  }
}

// ============================================================
// ENDPOINT PROCESS-DEVIS (UTILISE L'INDEX LOCAL)
// ============================================================

app.post('/api/process-devis', upload.single('devis'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Aucun fichier fourni' });
  }

  try {
    // Charger l'index
    const index = await loadIndex();

    if (!index.files || index.files.length === 0) {
      return res.status(400).json({
        error: 'Index vide. Veuillez lancer l\'indexation d\'abord.'
      });
    }

    // ÉTAPE 1: Analyse Gemini du Devis pour extraire les Refs
    console.log('1. Analyse du devis pour extraction des références...');
    const fileBuffer = fs.readFileSync(req.file.path);
    const base64Data = fileBuffer.toString('base64');

    const geminiExtraction = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: {
        parts: [
          { inlineData: { mimeType: 'application/pdf', data: base64Data } },
          { text: "Analyse ce devis. Identifie la colonne 'Ref Article Client' (ou Référence Article). Extrais la liste de toutes ces références exactes (ex: '10002000FOND60'). Retourne uniquement une liste JSON de chaînes de caractères." }
        ]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });

    const references = JSON.parse(geminiExtraction.text || "[]");
    console.log(`> ${references.length} références identifiées: ${references.join(', ')}`);

    // ÉTAPE 2: Recherche dans l'index local
    const archive = archiver('zip', { zlib: { level: 9 } });
    res.attachment('fiches_techniques_verifiees.zip');
    archive.pipe(res);

    const logSummary = [];
    let filesAddedCount = 0;
    const addedFileIds = new Set(); // Éviter les doublons

    for (const ref of references) {
      console.log(`Recherche référence: ${ref}`);

      // Chercher dans l'index les fichiers qui contiennent cette référence
      const matchingFiles = index.files.filter(file =>
        file.references && file.references.some(r =>
          r.toLowerCase().includes(ref.toLowerCase()) ||
          ref.toLowerCase().includes(r.toLowerCase())
        )
      );

      if (matchingFiles.length === 0) {
        logSummary.push(`[INTROUVABLE] Réf: ${ref} -> Aucune fiche technique indexée pour cette référence.`);
        continue;
      }

      for (const file of matchingFiles) {
        if (addedFileIds.has(file.fileId)) continue; // Éviter les doublons

        console.log(`  -> Trouvé: ${file.fileName}`);

        // Télécharger le PDF
        try {
          const destResponse = await drive.files.get(
            { fileId: file.fileId, alt: 'media' },
            { responseType: 'stream' }
          );

          const chunks = [];
          await new Promise((resolve, reject) => {
            destResponse.data.on('data', (chunk) => chunks.push(chunk));
            destResponse.data.on('end', resolve);
            destResponse.data.on('error', reject);
          });
          const pdfBuffer = Buffer.concat(chunks);

          if (pdfBuffer.length > 0) {
            archive.append(pdfBuffer, { name: file.fileName });
            addedFileIds.add(file.fileId);
            filesAddedCount++;
            logSummary.push(`[OK] Réf: ${ref} -> ${file.fileName}`);
          }
        } catch (dlError) {
          console.error(`  -> Erreur téléchargement: ${dlError.message}`);
          logSummary.push(`[ERREUR] Réf: ${ref} -> Impossible de télécharger ${file.fileName}`);
        }
      }
    }

    // Ajout du rapport
    archive.append(logSummary.join('\n'), { name: 'rapport_verification.txt' });

    console.log(`Traitement terminé. ${filesAddedCount} fichiers ajoutés au ZIP.`);
    await archive.finalize();

    // Nettoyage upload
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }

  } catch (error) {
    console.error("Erreur Globale:", error);
    if (!res.headersSent) {
      res.status(500).json({ error: error.message });
    }
    if (req.file && fs.existsSync(req.file.path)) fs.unlinkSync(req.file.path);
  }
});

// ============================================================
// SPA FALLBACK
// ============================================================
app.get('*', (req, res) => {
  if (!req.path.startsWith('/api/')) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  } else {
    res.status(404).json({ error: 'API endpoint not found' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur Backend démarré sur le port ${PORT}`);
});