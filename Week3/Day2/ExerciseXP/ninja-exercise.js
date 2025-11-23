//Exercise 1: Random Number
const randNum = Math.floor(Math.random()*100);

for (let i = 1; i <= randNum; i++) {
  if (i % 2 === 0) {console.log(i)}
}

//Exercise 2: Capitalized letters
function capitalize(word) {
  const wordArrayEven = word.split('');
  const wordArrayOdd = word.split('')
  for (let i = 0; i < wordArrayEven.length; i++) {
    if (i % 2 === 0) {
      wordArrayEven[i] = wordArrayEven[i].toUpperCase();
      wordArrayOdd[i] = wordArrayOdd[i].toLowerCase();
    } else {
      wordArrayEven[i] = wordArrayEven[i].toLowerCase();
      wordArrayOdd[i] = wordArrayOdd[i].toUpperCase();
    }
  }
  return [wordArrayEven.join(''), wordArrayOdd.join('')];
}


//Exercise 3 : Is palindrome?
function isPalindrome(str) {
  let strArr = str.toLowerCase().split('');
  return strArr.reverse().join('') === str.toLowerCase()
}


//Exercise 4 : Biggest Number
function biggestNum(array) {
  let arrayFilteredSorted = array.filter((x) => typeof x === 'number').sort((a, b) => a - b);
  const lastElement = arrayFilteredSorted[arrayFilteredSorted.length - 1]
    return (lastElement) ? lastElement : 0;
}

//Exercise 5: Unique Elements
function uniqueElements(array) {
  return Array.from(new Set(array))
}

console.log(uniqueElements([1,2,3,3,3,3,4,5]));

//Exercise 6 : Calendar

function createCalendar(year, month) {
  const dayCountObj = {0: 31, 1: 28, 2: 31, 3: 30, 4: 31, 5: 30, 6: 31, 7: 31, 8: 30, 9: 31, 10: 30, 11: 31}
  const theadArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const tableCal = document.createElement('table')
  tableCal.style.border = "1px solid gray"
  document.body.appendChild(tableCal);
  const thead = document.createElement('thead')
  tableCal.appendChild(thead)
  for (let i = 0; i < 7; i++) {
    const th = document.createElement('th');
    thead.appendChild(th);
    th.textContent = theadArr[i];
  }
  const dateStart = new Date(year, month-1, 1)
  const dayStart = dateStart.getDay();
  let dayCount = dayCountObj[month-1]
  if (year % 4 === 0 && month - 1 === 1) {
    dayCount ++
  }
  const weekCount = Math.ceil((dayStart + dayCount)/7)
  console.log(weekCount)
  console.log(dayStart)
  console.log(dayCount)
  for (let i = 0; i < weekCount; i++) {
    let dataRow = document.createElement('tr');
    if (i % 2 === 0) {dataRow.style.backgroundColor = 'lightgrey'}
    tableCal.appendChild(dataRow);
    for (let j = 1; j <= 7; j++) {
      let td = document.createElement('td');
      if (0 < (i*7 + j - dayStart) && (i*7 + j - dayStart) <= dayCount ) {
        td.textContent = (i*7 + j - dayStart).toString();
      } else {
        td.textContent = ""
      }
      dataRow.appendChild(td)
      td.style.border = "1px solid gray"
      td.style.padding = "7px"
      td.style.width = "25px"

    }
  }
}

createCalendar(2016, 6)
