import path from "path";
import fs from "fs";

export function fileSpecs() {
  const fullPath = path.join('./data/', 'example.txt');
  const fileExists = fs.existsSync(fullPath);
  if (fileExists) {
    const fileInfo = fs.statSync(fullPath);
    console.log(`File ${fullPath} exists`);
    console.log(fileInfo.size, fileInfo.birthtimeMs);
  } else {
    console.error("File does not exist");
  }
}
