const express = require('express');
const multer = require('multer');
const { GoogleGenerativeAI } = require("@google/generative-ai");
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
const apiKey = process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.trim() : "";
console.log(`[DEBUG] API Key loaded: ${apiKey ? apiKey.substring(0, 10) + '...' : 'UNDEFINED'} (Length: ${apiKey.length})`);
const genAI = new GoogleGenerativeAI(apiKey);

// Endpoint de test Gemini simple
app.get('/api/test-gemini', async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-3-flash-preview' });
    const result = await model.generateContent('Hello Gemini!');
    const response = await result.response; 
    res.json({ 
      status: 'success', 
      message: response.text(),
      model: 'gemini-3-flash-preview'
    });
  } catch (error) {
    console.error('Test Gemini Failed:', error);
    res.status(500).json({ 
      status: 'error', 
      message: error.message,
      stack: error.stack
    });
  }
});

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
    const downloadPromise = new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        destResponse.data.destroy(); // Tuer le stream
        reject(new Error('Timeout Download (30s)'));
      }, 30000);

      destResponse.data.on('data', (chunk) => chunks.push(chunk));
      destResponse.data.on('end', () => {
        clearTimeout(timer);
        resolve();
      });
      destResponse.data.on('error', (err) => {
        clearTimeout(timer);
        reject(err);
      });
    });

    await downloadPromise;
    const pdfBuffer = Buffer.concat(chunks);

    if (pdfBuffer.length === 0) {
      console.log(`  -> Fichier vide: ${fileName}`);
      return [];
    }

    const pdfBase64 = pdfBuffer.toString('base64');

    // Analyser avec Gemini avec Timeout de 30s
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout Gemini')), 30000)
    );

    const analysisPromise = genAI.getGenerativeModel({
      model: 'gemini-3-flash-preview',
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "ARRAY",
          items: { type: "STRING" }
        }
      }
    }).generateContent({
      contents: [
        {
          role: "user",
          parts: [
            { inlineData: { mimeType: 'application/pdf', data: pdfBase64 } },
            {
              text: `Tu es un assistant technique CRP SAS. Analyse cette fiche technique PDF.

Tâche: Extraire UNIQUEMENT les références produit COMPLÈTES mentionnées dans ce document.

IMPORTANT - Règles d'extraction:
1. Une référence VALIDE est un code COMPLET comme:
   - "10002000FOND60" (chiffres + lettres, 10+ caractères)
   - "800800H60" (format dimensions + code)
   - "BOUCHDAL45" (code produit complet)
   - "15002500H301B" (référence avec variante)

2. NE PAS extraire les fragments isolés comme:
   - "H60", "H80", "H100" seuls (ce sont des hauteurs, pas des références)
   - "TETE" seul (incomplet)
   - "FOND" seul (incomplet)
   - Des chiffres seuls comme "1000", "2000"

3. Les références valides contiennent généralement:
   - Au moins 6 caractères
   - Un mélange de chiffres et lettres
   - Des patterns comme: XXXXYYYYZZZZ où X=dimensions, Y=type, Z=variante

Retourne UNIQUEMENT les codes COMPLETS trouvés, pas les fragments.
Si aucune référence complète n'est trouvée, retourne un tableau vide [].` }
          ]
        }
      ]
    });

    const result = await Promise.race([analysisPromise, timeoutPromise]);
    const response = await result.response;

    const references = JSON.parse(response.text() || "[]");
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
    // Charger l'index existant pour reprendre si interrompu
    let existingIndex = await loadIndex();
    const alreadyIndexedIds = new Set((existingIndex.files || []).map(f => f.fileId));
    console.log(`Index existant: ${alreadyIndexedIds.size} fichiers déjà indexés`);

    // Étape 1: Trouver tous les dossiers
    console.log('Recherche des sous-dossiers...');
    const allFolderIds = await getAllFolderIds(DRIVE_FOLDER_ID);
    console.log(`${allFolderIds.length} dossiers trouvés`);

    indexationState.currentFile = 'Listage des PDFs...';

    // Étape 2: Lister tous les PDFs
    console.log('Listage des PDFs...');
    const allPDFs = await getAllPDFs(allFolderIds);
    console.log(`${allPDFs.length} PDFs trouvés au total`);

    // Filtrer ceux déjà indexés
    const pdfsToIndex = allPDFs.filter(pdf => !alreadyIndexedIds.has(pdf.id));
    console.log(`${pdfsToIndex.length} nouveaux PDFs à indexer`);

    indexationState.totalFiles = allPDFs.length;
    indexationState.processedFiles = alreadyIndexedIds.size;

    // Étape 3: Analyser chaque PDF
    const indexedFiles = [...(existingIndex.files || [])]; // Garder les existants

    for (let i = 0; i < pdfsToIndex.length; i++) {
      const pdf = pdfsToIndex[i];

      indexationState.processedFiles = alreadyIndexedIds.size + i;
      indexationState.progress = Math.round(((alreadyIndexedIds.size + i) / allPDFs.length) * 100);
      indexationState.currentFile = pdf.name;

      console.log(`[${alreadyIndexedIds.size + i + 1}/${allPDFs.length}] Analyse: ${pdf.name}`);

      let references = [];
      try {
        references = await extractReferencesFromPDF(pdf.id, pdf.name);
      } catch (err) {
        console.error(`  -> Erreur analyse ${pdf.name}: ${err.message}. Ignoré.`);
        references = []; // On continue avec 0 références
      }

      indexedFiles.push({
        fileId: pdf.id,
        fileName: pdf.name,
        webViewLink: pdf.webViewLink,
        references: references
      });

      // Sauvegarde progressive toutes les 5 fichiers
      if ((i + 1) % 5 === 0) {
        console.log(`>> Sauvegarde progressive (${indexedFiles.length} fichiers)...`);
        const partialIndex = {
          lastIndexed: new Date().toISOString(),
          totalFiles: indexedFiles.length,
          files: indexedFiles
        };
        await saveIndex(partialIndex);
      }

      // Petite pause pour éviter de surcharger l'API (rate limiting)
      await new Promise(r => setTimeout(r, 300));
    }

    // Étape 4: Sauvegarder l'index final
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

    // ÉTAPE 1: Analyse Gemini du Devis pour extraire les Refs + Descriptions
    console.log('1. Analyse du devis pour extraction des références et descriptions...');
    const fileBuffer = fs.readFileSync(req.file.path);
    const base64Data = fileBuffer.toString('base64');

    const geminiExtraction = await genAI.getGenerativeModel({
      model: 'gemini-3-flash-preview',
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "ARRAY",
          items: {
            type: "OBJECT",
            properties: {
              reference: { type: "STRING" },
              description: { type: "STRING" }
            }
          }
        }
      }
    }).generateContent({
      contents: [
        {
          role: "user",
          parts: [
            { inlineData: { mimeType: 'application/pdf', data: base64Data } },
            {
              text: `Analyse ce devis. Pour chaque ligne de produit, extrais:
- reference: le code article/référence (ex: "10002000FOND60")
- description: la description complète incluant dimensions et poids (ex: "Elément de fond 1000 x 2000 - H600 - 1645kg")

Retourne un tableau JSON avec ces objets.` }
          ]
        }
      ]
    });

    const response = await geminiExtraction.response;
    const products = JSON.parse(response.text() || "[]");
    console.log(`> ${products.length} produits identifiés`);
    products.forEach(p => console.log(`  - ${p.reference}: ${p.description}`));

    // ÉTAPE 2: Recherche et vérification dans l'index local
    const archive = archiver('zip', { zlib: { level: 9 } });
    res.attachment('fiches_techniques_verifiees.zip');
    archive.pipe(res);

    const issuesLog = []; // Uniquement les problèmes (introuvables + ambigus)
    let filesAddedCount = 0;
    let notFoundCount = 0;
    let ambiguousCount = 0;
    const addedFileIds = new Set(); // Éviter les doublons

    for (const product of products) {
      const ref = product.reference;
      const desc = product.description || '';
      console.log(`Recherche: ${ref} (${desc})`);

      // Chercher dans l'index les fichiers qui contiennent cette référence
      const matchingFiles = index.files.filter(file =>
        file.references && file.references.some(r =>
          r.toLowerCase() === ref.toLowerCase() ||
          r.toLowerCase().includes(ref.toLowerCase())
        )
      );

      if (matchingFiles.length === 0) {
        notFoundCount++;
        issuesLog.push({
          type: 'INTROUVABLE',
          ref: ref,
          desc: desc,
          message: 'Aucune fiche technique indexée pour cette référence'
        });
        continue;
      }

      console.log(`  -> ${matchingFiles.length} fichier(s) candidat(s)`);

      // Si un seul match, on le prend directement
      if (matchingFiles.length === 1) {
        const file = matchingFiles[0];
        if (!addedFileIds.has(file.fileId)) {
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
              // Plus de log pour les [OK]
            }
          } catch (e) {
            notFoundCount++;
            issuesLog.push({
              type: 'ERREUR',
              ref: ref,
              desc: desc,
              message: 'Téléchargement du fichier échoué'
            });
          }
        }
        continue;
      }

      // Plusieurs matchs: utiliser Gemini pour vérifier lequel correspond vraiment
      let bestMatch = null;

      for (const file of matchingFiles) {
        if (addedFileIds.has(file.fileId)) continue;

        console.log(`  -> Vérification: ${file.fileName}`);

        try {
          // Télécharger le PDF pour vérification
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

          if (pdfBuffer.length === 0) continue;

          const pdfBase64 = pdfBuffer.toString('base64');

          // Demander à Gemini de vérifier si ce PDF contient le produit exact
          // Demander à Gemini de vérifier si ce PDF contient le produit exact
          const verifyResp = await genAI.getGenerativeModel({
            model: 'gemini-3-flash-preview',
            generationConfig: {
              responseMimeType: "application/json",
              responseSchema: {
                type: "OBJECT",
                properties: {
                  match: { type: "BOOLEAN" },
                  reason: { type: "STRING" }
                }
              }
            }
          }).generateContent({
            contents: [
              {
                role: "user",
                parts: [
                  { inlineData: { mimeType: 'application/pdf', data: pdfBase64 } },
                  {
                    text: `Vérifie si cette fiche technique correspond au produit suivant:
Référence: ${ref}
Description: ${desc}

Réponds:
- "match": true si la fiche contient ce produit EXACT (même référence ET caractéristiques similaires comme dimensions/poids)
- "match": false si la référence n'est pas présente ou si les caractéristiques ne correspondent pas
- "reason": explication courte` }
                ]
              }
            ]
          });

          const response = await verifyResp.response;
          const verifyResult = JSON.parse(response.text() || "{}");
          console.log(`    -> Match: ${verifyResult.match} (${verifyResult.reason})`);

          if (verifyResult.match === true) {
            archive.append(pdfBuffer, { name: file.fileName });
            addedFileIds.add(file.fileId);
            filesAddedCount++;
            // Plus de log pour les [OK]
            bestMatch = file;
            break; // On a trouvé le bon, on arrête
          }
        } catch (e) {
          console.error(`    -> Erreur vérification: ${e.message}`);
        }
      }

      if (!bestMatch) {
        ambiguousCount++;
        issuesLog.push({
          type: 'AMBIGU',
          ref: ref,
          desc: desc,
          message: `${matchingFiles.length} fichiers trouvés mais aucun ne correspond exactement`,
          candidats: matchingFiles.map(f => f.fileName).slice(0, 5) // Max 5 noms
        });
      }
    }

    // Génération du rapport amélioré (uniquement les problèmes)
    const separator = '═'.repeat(60);
    const thinSeparator = '─'.repeat(60);
    const reportLines = [];

    reportLines.push(separator);
    reportLines.push('   RAPPORT D\'EXTRACTION DES FICHES TECHNIQUES');
    reportLines.push(`   Date: ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}`);
    reportLines.push(separator);
    reportLines.push('');

    // Statistiques
    const totalProducts = products.length;
    const successCount = filesAddedCount;
    const issuesCount = notFoundCount + ambiguousCount;

    reportLines.push('📊 RÉSUMÉ');
    reportLines.push(thinSeparator);
    reportLines.push(`   ✓ Fiches trouvées et ajoutées : ${successCount}/${totalProducts}`);
    reportLines.push(`   ✗ Problèmes à résoudre       : ${issuesCount}`);
    reportLines.push(`       → Introuvables : ${notFoundCount}`);
    reportLines.push(`       → Ambigus      : ${ambiguousCount}`);
    reportLines.push('');

    // Si aucun problème
    if (issuesLog.length === 0) {
      reportLines.push(separator);
      reportLines.push('   ✅ AUCUN PROBLÈME DÉTECTÉ');
      reportLines.push('   Toutes les fiches techniques ont été trouvées !');
      reportLines.push(separator);
    } else {
      // Section des introuvables
      const introuvables = issuesLog.filter(i => i.type === 'INTROUVABLE' || i.type === 'ERREUR');
      if (introuvables.length > 0) {
        reportLines.push(separator);
        reportLines.push(`   ❌ RÉFÉRENCES INTROUVABLES (${introuvables.length})`);
        reportLines.push(separator);
        reportLines.push('');

        introuvables.forEach((issue, idx) => {
          reportLines.push(`   ${idx + 1}. Référence : ${issue.ref}`);
          if (issue.desc) {
            reportLines.push(`      Description : ${issue.desc}`);
          }
          reportLines.push(`      Problème : ${issue.message}`);
          reportLines.push('');
        });
      }

      // Section des ambigus
      const ambigus = issuesLog.filter(i => i.type === 'AMBIGU');
      if (ambigus.length > 0) {
        reportLines.push(separator);
        reportLines.push(`   ⚠️ CORRESPONDANCES AMBIGUËS (${ambigus.length})`);
        reportLines.push(separator);
        reportLines.push('');

        ambigus.forEach((issue, idx) => {
          reportLines.push(`   ${idx + 1}. Référence : ${issue.ref}`);
          if (issue.desc) {
            reportLines.push(`      Description : ${issue.desc}`);
          }
          reportLines.push(`      Problème : ${issue.message}`);
          if (issue.candidats && issue.candidats.length > 0) {
            reportLines.push(`      Fichiers candidats :`);
            issue.candidats.forEach(c => {
              reportLines.push(`         • ${c}`);
            });
          }
          reportLines.push('');
        });
      }
    }

    reportLines.push(separator);
    reportLines.push('   Généré par CRP SAS - Outil Fiches Techniques');
    reportLines.push(separator);

    archive.append(reportLines.join('\n'), { name: 'rapport_extraction.txt' });

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