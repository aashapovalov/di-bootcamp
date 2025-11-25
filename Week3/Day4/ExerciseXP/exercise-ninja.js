const mergeWords = (string) => {
  return (another_string) => {
    if (another_string === undefined) {
      return string;
    } else {
      return mergeWords(string + ' ' + another_string);
    }
  }
}

console.log(mergeWords('Hello')("world")("of")())

