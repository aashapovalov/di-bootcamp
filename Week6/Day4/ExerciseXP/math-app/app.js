import _ from 'lodash';
import { addition, multiply} from "./math.js";

const sumResult = addition(5, 3);
const multiplyResult = multiply(4, 6);

const expectedSum = _.sum([5, 3]);           // Lodash helper
const expectedMultiply = _.reduce([4, 6], _.multiply ?? ((a, b) => a * b), 1);

console.log("Sum result:", sumResult);
console.log("Sum verified:", _.isEqual(sumResult, expectedSum));

console.log("Multiply result:", multiplyResult);
console.log("Multiply verified:", _.isEqual(multiplyResult, expectedMultiply));