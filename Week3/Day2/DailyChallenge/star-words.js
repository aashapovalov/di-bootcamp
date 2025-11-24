const userWords = prompt("Enter several words separated by commas");
let userWordsArr = userWords.split(", ");
let maxLength = 0;
for (let word of userWordsArr) {
  if (word.length >= maxLength) {
    maxLength = word.length;
  }
}
console.log("*".repeat(maxLength + 4));
for (let word of userWordsArr) {
  console.log("* " + word + " ".repeat(maxLength - word.length) + " *");
}
console.log("*".repeat(maxLength + 4));


