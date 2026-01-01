const { google } = require('googleapis');
const { GoogleGenAI } = require("@google/genai");
require('dotenv').config();

const FILE_NAME = "Manutention - Têtes de sécurité.pdf";
// Note: filename might have unicode normalization issues, matching logically.

async function inspect() {
    try {
        const auth = new google.auth.GoogleAuth({
            scopes: ['https://www.googleapis.com/auth/drive.readonly']
        });
        const drive = google.drive({ version: 'v3', auth });

        console.log(`Searching for file: ${FILE_NAME}...`);

        const res = await drive.files.list({
            q: `name = '${FILE_NAME}' and trashed = false`,
            fields: 'files(id, name, size, mimeType)'
        });

        if (res.data.files.length === 0) {
            console.log('File not found with exact name. Listing candidates...');
            const list = await drive.files.list({
                q: `name contains 'Manutention' and trashed = false`,
                fields: 'files(id, name, size, mimeType)'
            });
            list.data.files.forEach(f => console.log(f));
            return;
        }

        const file = res.data.files[0];
        console.log('File found:', file);
        console.log(`Size: ${(parseInt(file.size) / 1024 / 1024).toFixed(2)} MB`);

        console.log('Downloading file...');
        const destResponse = await drive.files.get(
            { fileId: file.id, alt: 'media' },
            { responseType: 'arraybuffer' }
        );

        const buffer = Buffer.from(destResponse.data);
        console.log(`Downloaded ${buffer.length} bytes.`);

        console.log('Sending to Gemini for analysis (with 30s timeout test)...');

        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

        const timeoutPromise = new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Timeout Gemini')), 30000)
        );

        const analysisPromise = ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: {
                parts: [
                    { inlineData: { mimeType: 'application/pdf', data: buffer.toString('base64') } },
                    { text: "Extract references." }
                ]
            }
        });

        const start = Date.now();
        try {
            await Promise.race([analysisPromise, timeoutPromise]);
            console.log(`Success! Took ${(Date.now() - start) / 1000}s`);
        } catch (e) {
            console.error(`Failed after ${(Date.now() - start) / 1000}s. Error:`, e.message);
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

inspect();
