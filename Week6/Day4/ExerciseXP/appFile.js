import { readFile, writeFile } from "./fileManager.js";

const helloWorld = "./Hello World.txt";
const byeWorld = "./Bye World.txt";
const content = "Writing to the file";

async function runApp() {
  try {
    const helloContent = await readFile(helloWorld);
    console.log("Hello World.txt contains:", helloContent);

    await writeFile(byeWorld, content);
    console.log("Bye World.txt was updated successfully.");
  } catch (error) {
    console.error(error.message);
  }
}

runApp();
