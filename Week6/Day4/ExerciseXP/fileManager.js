import fs from "fs/promises";

export async function readFile(path) {
  try {
    const data = await fs.readFile(path, "utf8");
    return data;
  } catch (error) {
    throw new Error(`Error reading file "${path}": ${error.message}`);
  }
}

export async function writeFile(path, data) {
  try {
    await fs.writeFile(path, data, "utf8");
  } catch (error) {
    throw new Error(`Error writing file "${path}": ${error.message}`);
  }
}
