import fs from 'fs/promises';
import path from 'path';

export const getCardapio = async () => {
    const filePath = path.join(path.dirname(new URL(import.meta.url).pathname), './cardapio.json');
    const cardapioContents = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(cardapioContents);
};