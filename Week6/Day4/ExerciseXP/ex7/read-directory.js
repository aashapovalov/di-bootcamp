import fs from "fs/promises";

const curDir = './'
const files = await fs.readdir(curDir);
console.log(files);