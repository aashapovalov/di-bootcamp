const fs = require("fs/promises");
async function readFile() {
  const fileUrl = "./ex3_files/file-data.txt";
  try {
    const data = await fs.readFile(fileUrl, "utf8");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

module.exports = readFile;
