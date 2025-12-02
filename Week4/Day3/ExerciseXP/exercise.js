//🌟 Exercise 1 : Comparison
// Create a function called compareToTen(num) that takes a number as an argument.
//     The function should return a Promise:
//     the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.
async function compareToTen(num) {
  try {
    if (num <= 10) {
      return "Number is less than 10"
    } else {
      throw new Error("Number is greater than 10");
    }
  }
    catch(error) {
    console.log(error);    }
}
compareToTen(2)
console.log(compareToTen(2));
console.log(compareToTen(13));

// 🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

async function promises() {
  try {
    setTimeout(()=>{return "Success"},4000)
  } catch(error) {
    console.log(error);
  }
}

// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

async function resolveReject() {
  try {
    return 3;
  }
  catch(error) {
    console.log("Boo!")
  }
}