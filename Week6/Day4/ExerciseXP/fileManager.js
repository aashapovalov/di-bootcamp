import fs from 'fs/promises';

export async function readFile(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    console.log('File contains:', data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
}

export async function writeFile(path, data) {
  try {
    await fs.writeFile(path, data, 'utf8');
    console.log('File updated successfully.');
  } catch (error) {
    console.error('Error writing file:', error);
  }
}