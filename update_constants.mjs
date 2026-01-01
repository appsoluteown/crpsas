import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataPath = path.join(__dirname, 'public', 'data.json');
const constantsPath = path.join(__dirname, 'constants.ts');

try {
    const data = fs.readFileSync(dataPath, 'utf8');
    const jsonData = JSON.parse(data);

    const tsContent = `import { TransportData } from './types';

export const TRANSPORT_DATA: TransportData = ${JSON.stringify(jsonData, null, 2)};
`;

    fs.writeFileSync(constantsPath, tsContent);
    console.log('Successfully updated constants.ts with data from public/data.json');
} catch (error) {
    console.error('Error updating constants.ts:', error);
    process.exit(1);
}
