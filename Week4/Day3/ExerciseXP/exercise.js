//🌟 Exercise 1 : Comparison
// Create a function called compareToTen(num) that takes a number as an argument.
//     The function should return a Promise:
//     the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.
async function compareToTen(num) {
  if (num <= 10) {
    return "Number is less than 10";
  } else {
    throw new Error("Number is greater than 10");
  }
}
compareToTen(2)
    .then(res => console.log(res))
    .catch(err => console.log(err.message));

compareToTen(13)
    .then(res => console.log(res))
    .catch(err => console.log(err.message));

// 🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

function promises() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Success");
    }, 4000);
  });
}

promises().then(msg => console.log(msg));

// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const p1 = Promise.resolve(3);
p1.then(value => console.log(value));

const p2 = Promise.reject("Boo!");
p2.catch(err => console.log(err));