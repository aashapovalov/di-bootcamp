import { quotes } from "./quotes-database.ts"

export function getRandomColorRGB() {
    const getRandomNum = () =>  Math.floor(Math.random() * 255);
    const red = getRandomNum();
    const green = getRandomNum();
    const blue = getRandomNum();
    return `rgb(${red}, ${green}, ${blue})`;
}

export function getRandomQuote(prevNum: number) {
    const num: number = Math.floor(Math.random() * quotes.length);
    if (num === prevNum && prevNum === 0) {
        return num + 1
    } else if (num === prevNum && prevNum !== 0) {
        return prevNum - 1;
    } return num;
}