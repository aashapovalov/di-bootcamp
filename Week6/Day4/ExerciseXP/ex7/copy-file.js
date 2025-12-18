import fs from "fs/promises";

const sourceFile = './source.txt';
const destFile = './destination.txt'

const data = await fs.readFile(sourceFile, 'utf8');
await fs.writeFile(destFile, data, 'utf8');
const dataCopy = await fs.readFile(destFile, 'utf8');
console.log('Initial data:', data);
console.log('Copied data', dataCopy)