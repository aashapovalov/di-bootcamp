import { people} from "./data.js";

function averageAge(arr) {
  let sum = 0;
  let count = arr.length;
  for (let person of arr) {
    sum += person.age;
  }
  console.log((sum / count).toFixed(1));
}

averageAge(people);