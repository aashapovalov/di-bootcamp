import { writeFile, readFile} from "./fileManager.js";

const helloWorld = './hello-world.txt';
const byeWorld = './bye-world.txt';
const content = 'Writing to the file'

readFile(helloWorld);
readFile(byeWorld);
writeFile(byeWorld, content);
readFile(byeWorld);