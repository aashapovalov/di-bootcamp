//Exercise 1 : Divisible by three
let numbers = [123, 8409, 100053, 333333333, 7]
let result = 0
for (let number of numbers) {
  if (number % 3 !== 0) {
    console.log(false)
  } else {console.log(true)}
}

//Exercise 2 : Attendance
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}
let student_name = prompt("Enter your student name: ")
if (student_name.toLowerCase() in guestList) {
  console.log(`Hi! I'm ${student_name}, and I'm from ${guestList[student_name.toLowerCase()]}`)
} else {
  console.log("Hi! I'm a guest.")
}

//Exercise 3 : Playing with numbers
let age = [20,5,12,43,98,55];
let sum = 0;
let max_age = 0;
for (let age_value of age) {
  sum += age_value;
  if (age_value > max_age) {
    max_age = age_value;
  }
}
console.log(`Sum: ${sum}, highest age: ${max_age}`);
