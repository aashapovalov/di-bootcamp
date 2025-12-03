// 1st daily challenge
// Create two functions. Each function should return a promise.
//     The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
//     else, reject the promise with a reason.
//     The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
//     else, reject the promise with a reason.

async function  makeAllCaps(arr) {
  try {
    let arr1 = []
    for (let element of arr) {
      if (typeof element !== 'string') {
        throw new Error(`${element} is not a string`);
      } else {
        arr1.push(element.toUpperCase())
      }
    }

    return arr1

  }
  catch (error) {
    throw error;
  }
}

async function sortWords(arr) {
  try {
    if (arr.length > 4) {
      return arr.sort((a, b) => a.localeCompare(b));
    } else {
      throw new Error(`The length of the array should be 4, not ${arr.length}`)
    }
  }
  catch (error) {
    throw error;
  }
}

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

async function toJs(jsonStr){
  try {
    const morseObj = JSON.parse(jsonStr);
    if (Object.keys(morseObj).length > 0) {
      return morseObj;
    } else {
      throw new Error('Your JSON string is empty')
    }
  }
  catch(error){
    throw error;
  }
}

async function toMorse(morseJS){
  try {
    const userStr = prompt("Enter a string: ");
    const intoMorseArr = []
    for (let i = 0; i < userStr.length; i++) {
      if (morseJS[userStr[i]]) {
        intoMorseArr.push(morseJS[userStr[i]]);
      } else {
        throw new Error(`Character "${userStr[i]}" can't be translated`)
      }
    }
    return intoMorseArr;
  }
  catch(error){
    throw error;
  }
}

function joinWords(morseTranslation) {
  console.log(morseTranslation.join('\n'))
}