import { qoutes } from './'

export function getRandomColorRGB() {
    const getRandomNum = () =>  Math.floor(Math.random() * 255);
    const red = getRandomNum();
    const green = getRandomNum();
    const blue = getRandomNum();
    return `rgb(${red}, ${green}, ${blue})`;
}

export function getRandomQuote(prevNum: number) {
    const num = Math.floor(Math.random() * qoutes.length)
}