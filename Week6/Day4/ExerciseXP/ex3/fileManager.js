const fs = require("fs/promises");

async function readFile(path) {
  try {
    return await fs.readFile(path, "utf8");
  } catch (error) {
    throw new Error(`Error reading file "${path}": ${error.message}`);
  }
}

async function writeFile(path, data) {
  try {
    await fs.writeFile(path, data, "utf8");
  } catch (error) {
    throw new Error(`Error writing file "${path}": ${error.message}`);
  }
}

module.exports = {
  readFile,
  writeFile,
};
