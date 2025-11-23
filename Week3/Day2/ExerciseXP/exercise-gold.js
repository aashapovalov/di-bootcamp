//Exercise 1 : is_Blank
function isBlanc(str) {
  return !!str
}

//Exercise 2 : Abbrev_name
function abbrevName(name) {
  let nameArr = name.split(' ')
  if (nameArr.length > 1) {
    for (let i = 1; i < nameArr.length; i++) {
      nameArr[i] = nameArr[i][0] + "."
    }
  }
  return nameArr.join(' ')
}

//Exercise 3 : SwapCase
function swapCase(str) {
  let strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === ' ') {
      continue;
    } else if (strArr[i] === strArr[i].toUpperCase()) {
      strArr[i] = strArr[i].toLowerCase();
    } else {strArr[i] = strArr[i].toUpperCase()}
  }
  return strArr.join('');
}


//Exercise 4 : Omnipresent value
function omnipresent(array, value) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(value)) {
      count++;
    }
  }
  return count === array.length
}

console.log(omnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6))

//Exercise 4 : Omnipresent value

