const _ = require("lodash");
const { addition, multiply } = require("./math");

try {
  const sumResult = addition(5, 3);
  const multiplyResult = multiply(4, 6);

  const expectedSum = _.sum([5, 3]);
  const expectedMultiply = _.reduce([4, 6], (a, b) => a * b, 1);

  console.log("Sum result:", sumResult);
  console.log("Sum verified:", _.isEqual(sumResult, expectedSum));

  console.log("Multiply result:", multiplyResult);
  console.log("Multiply verified:", _.isEqual(multiplyResult, expectedMultiply));
} catch (error) {
  console.error("Error:", error.message);
}
