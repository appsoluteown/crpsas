const { google } = require('googleapis');
const path = require('path');
require('dotenv').config();

const DRIVE_FOLDER_ID = '1W7gVPXh33TJ2Q7qQULBGd1csycZBUS5S';
const TEST_REF = '10002000FOND60';

async function debugDrive() {
    try {
        console.log('Authenticating...');
        const auth = new google.auth.GoogleAuth({
            scopes: ['https://www.googleapis.com/auth/drive.readonly']
        });
        const drive = google.drive({ version: 'v3', auth });

        console.log(`Searching in folder: ${DRIVE_FOLDER_ID}`);

        // 1. List ALL files in folder to see what we have
        console.log('\n--- Listing first 20 files in folder ---');
        const listRes = await drive.files.list({
            q: `'${DRIVE_FOLDER_ID}' in parents and trashed = false`,
            pageSize: 20,
            fields: 'files(id, name, mimeType)'
        });

        if (listRes.data.files.length === 0) {
            console.log('No files found in folder!');
        } else {
            listRes.data.files.forEach(f => console.log(`[${f.id}] ${f.name} (${f.mimeType})`));
        }

        // 2. Test the CURRENT query
        console.log(`\n--- Testing CURRENT query for ref: ${TEST_REF} ---`);
        const currentQuery = `'${DRIVE_FOLDER_ID}' in parents and fullText contains '${TEST_REF}' and mimeType = 'application/pdf' and trashed = false`;
        console.log(`Query: ${currentQuery}`);
        const currentRes = await drive.files.list({
            q: currentQuery,
            fields: 'files(id, name)'
        });
        console.log(`Found: ${currentRes.data.files.length} files`);
        currentRes.data.files.forEach(f => console.log(` - ${f.name}`));

        // 3. Test NAME contains query
        console.log(`\n--- Testing NAME contains query for ref: ${TEST_REF} ---`);
        const nameQuery = `'${DRIVE_FOLDER_ID}' in parents and name contains '${TEST_REF}' and mimeType = 'application/pdf' and trashed = false`;
        console.log(`Query: ${nameQuery}`);
        const nameRes = await drive.files.list({
            q: nameQuery,
            fields: 'files(id, name)'
        });
        console.log(`Found: ${nameRes.data.files.length} files`);
        nameRes.data.files.forEach(f => console.log(` - ${f.name}`));

    } catch (error) {
        console.error('Error:', error);
    }
}

debugDrive();
