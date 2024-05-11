import fs from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

export async function readCSV(filename : string): Promise<string[][]> {
    try {
        const data = await readFileAsync(filename, 'utf-8');
        return data.split('\n').map(row => row.split(','));
    } catch (error) {
        if(error.code === 'ENOENT') {
            console.log('Arquivo não encontrado. Criando um novo...');
            await writeFileAsync(filename, '');
            return [];
        }
        throw error
    }
}

export async function writeCSV(filename: string, data: string[][]) {
    const csv = data.map(row => row.join(',')).join('\n');
    await writeFileAsync(filename, csv);
}