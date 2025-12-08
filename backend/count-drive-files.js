const { google } = require('googleapis');
require('dotenv').config();

const DRIVE_FOLDER_ID = '1W7gVPXh33TJ2Q7qQULBGd1csycZBUS5S';

async function countFiles() {
    try {
        const auth = new google.auth.GoogleAuth({
            scopes: ['https://www.googleapis.com/auth/drive.readonly']
        });
        const drive = google.drive({ version: 'v3', auth });

        console.log('Counting PDFs in Drive...');

        let totalPdfs = 0;

        // Recursive function to scan folders
        async function scanFolder(folderId) {
            let pageToken = null;
            do {
                const res = await drive.files.list({
                    q: `'${folderId}' in parents and trashed = false`,
                    fields: 'nextPageToken, files(id, name, mimeType)',
                    pageToken: pageToken
                });

                for (const file of res.data.files) {
                    if (file.mimeType === 'application/vnd.google-apps.folder') {
                        await scanFolder(file.id);
                    } else if (file.mimeType === 'application/pdf') {
                        totalPdfs++;
                    }
                }
                pageToken = res.data.nextPageToken;
            } while (pageToken);
        }

        await scanFolder(DRIVE_FOLDER_ID);
        console.log(`Total PDFs found in Drive: ${totalPdfs}`);

    } catch (error) {
        console.error('Error:', error);
    }
}

countFiles();
