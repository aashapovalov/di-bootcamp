const fs = require("fs/promises");
const { readFile, writeFile } = require("./fileManager");

const helloWorld = "./Hello World.txt";
const byeWorld = "./Bye World.txt";

async function setupFiles() {
  try {
    await fs.access(helloWorld);
  } catch {
    await fs.writeFile(helloWorld, "Hello World !!", "utf8");
  }

  try {
    await fs.access(byeWorld);
  } catch {
    await fs.writeFile(byeWorld, "Bye World !!", "utf8");
  }
}

async function runApp() {
  try {
    await setupFiles();

    const helloContent = await readFile(helloWorld);
    console.log("Hello World.txt contains:", helloContent);

    await writeFile(byeWorld, "Writing to the file");
    console.log("Bye World.txt was updated successfully.");
  } catch (error) {
    console.error(error.message);
  }
}

runApp();
