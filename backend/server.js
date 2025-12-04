const express = require('express');
const multer = require('multer');
const { GoogleGenAI, Type } = require("@google/genai");
const { google } = require('googleapis');
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
  origin: '*', // En production, idéalement restreindre au domaine du frontend
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Endpoint de santé pour vérifier que le déploiement GCP est up
app.get('/', (req, res) => {
  res.status(200).send('API CRP Backend is running.');
});

// ============================================================
// SERVE STATIC FRONTEND (React build from /dist)
// ============================================================
// Serve static files from the built React app
app.use(express.static(path.join(__dirname, 'dist')));


// CONFIGURATION
const DRIVE_FOLDER_ID = '1W7gVPXh33TJ2Q7qQULBGd1csycZBUS5S';

// Configuration Auth Drive
// Sur GCP (Cloud Run), on utilise Application Default Credentials (ADC) si aucun fichier clé n'est fourni.
const authConfig = {
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
};

// Si un chemin de clé est fourni explicitement (dev local), on l'utilise.
if (process.env.GOOGLE_APPLICATION_CREDENTIALS_PATH) {
  authConfig.keyFile = process.env.GOOGLE_APPLICATION_CREDENTIALS_PATH;
  console.log(`Authentification via fichier clé : ${process.env.GOOGLE_APPLICATION_CREDENTIALS_PATH}`);
} else {
  console.log('Authentification via ADC (GCP Default)');
}

const auth = new google.auth.GoogleAuth(authConfig);
const drive = google.drive({ version: 'v3', auth });

// Initialisation Gemini
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post('/api/process-devis', upload.single('devis'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Aucun fichier fourni' });
  }

  try {
    // ---------------------------------------------------------
    // ÉTAPE 1 : Analyse Gemini du Devis pour extraire les Refs
    // ---------------------------------------------------------
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
    console.log(`> ${references.length} références identifiées.`);

    // ---------------------------------------------------------
    // ÉTAPE 2 : Préparation du ZIP
    // ---------------------------------------------------------
    const archive = archiver('zip', { zlib: { level: 9 } });

    // On pipe l'archive directement dans la réponse HTTP
    res.attachment('fiches_techniques_verifiees.zip');
    archive.pipe(res);

    const logSummary = [];
    let filesAddedCount = 0;

    // ---------------------------------------------------------
    // ÉTAPE 3 : Boucle sur chaque Référence
    // ---------------------------------------------------------
    for (const ref of references) {
      console.log(`Traitement référence : ${ref}`);

      // Recherche floue (contains) dans le dossier spécifique
      const query = `'${DRIVE_FOLDER_ID}' in parents and name contains '${ref.replace(/'/g, "\\'")}' and trashed = false`;

      const searchRes = await drive.files.list({
        q: query,
        fields: 'files(id, name, mimeType)',
      });

      const candidates = searchRes.data.files || [];

      if (candidates.length === 0) {
        logSummary.push(`[INTROUVABLE] Réf: ${ref} -> Aucun fichier correspondant dans Drive.`);
        continue;
      }

      let verifiedFilesForThisRef = 0;

      // Boucle sur TOUS les fichiers candidats trouvés dans Drive pour cette réf
      for (const file of candidates) {
        if (file.mimeType !== 'application/pdf') continue; // On ne traite que les PDF

        console.log(`  -> Vérification candidat : ${file.name}`);

        // Téléchargement du fichier en buffer pour l'envoyer à Gemini
        // IMPORTANT: On utilise responseType 'stream' puis on collecte les chunks
        // car 'arraybuffer' ne fonctionne pas correctement avec le SDK googleapis
        const destResponse = await drive.files.get(
          { fileId: file.id, alt: 'media' },
          { responseType: 'stream' }
        );

        // Collecter les chunks du stream en un seul buffer
        const chunks = [];
        await new Promise((resolve, reject) => {
          destResponse.data.on('data', (chunk) => chunks.push(chunk));
          destResponse.data.on('end', resolve);
          destResponse.data.on('error', reject);
        });
        const pdfBuffer = Buffer.concat(chunks);

        console.log(`  -> Téléchargé: ${pdfBuffer.length} bytes`);

        // Vérifier que le buffer n'est pas vide
        if (pdfBuffer.length === 0) {
          console.log(`  -> ERREUR: Fichier vide téléchargé pour ${file.name}`);
          logSummary.push(`[ERREUR] Réf: ${ref} -> Fichier ${file.name} téléchargé mais vide`);
          continue;
        }

        const pdfBase64 = pdfBuffer.toString('base64');

        // ---------------------------------------------------------
        // ÉTAPE 4 : Vérification du contenu par Gemini
        // ---------------------------------------------------------
        try {
          const verifyResp = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: {
              parts: [
                { inlineData: { mimeType: 'application/pdf', data: pdfBase64 } },
                {
                  text: `Tu es un assistant technique rigoureux. Tâche: Vérifier la présence d'une référence produit.
                    
                    Référence cherchée : "${ref}"
                    
                    Instructions :
                    1. Analyse tout le texte du document PDF fourni.
                    2. Cherche la référence exacte "${ref}" dans le document.
                    3. Si la référence est présente, réponds 'true'. Sinon 'false'.
                    
                    Réponds uniquement au format JSON.` }
              ]
            },
            config: {
              responseMimeType: "application/json",
              responseSchema: {
                type: Type.OBJECT,
                properties: {
                  present: { type: Type.BOOLEAN },
                }
              }
            }
          });

          const verificationResult = JSON.parse(verifyResp.text || "{}");

          if (verificationResult.present === true) {
            // VICTOIRE ! On ajoute au ZIP
            // On utilise le nom du fichier original du Drive pour le zip
            archive.append(pdfBuffer, { name: file.name });
            logSummary.push(`[OK] Réf: ${ref} -> Trouvé et validé dans ${file.name}`);
            verifiedFilesForThisRef++;
            filesAddedCount++;
          } else {
            console.log(`  -> Rejeté par IA (Réf absente du contenu)`);
          }
        } catch (verifErr) {
          console.error("Erreur vérification IA", verifErr);
          logSummary.push(`[ERREUR IA] Réf: ${ref} -> Erreur lors de l'analyse de ${file.name}`);
        }
      }

      if (verifiedFilesForThisRef === 0) {
        logSummary.push(`[REJETÉ] Réf: ${ref} -> ${candidates.length} fichiers trouvés mais aucun ne contient la référence exacte à l'intérieur.`);
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
// SPA FALLBACK - Serve index.html for all non-API routes
// ============================================================
// This must be AFTER all API routes to avoid conflicts
app.get('*', (req, res) => {
  // Only serve index.html for non-API routes
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