function kgToGrams(weight) {
  return weight * 1000
}

console.log(kgToGrams(5));

let newWeight = function kgToGramsNew(weight) {
  return weight * 1000;
}

console.log(newWeight(5));

let anotherWeight = (weight) => weight * 1000;

console.log(anotherWeight(5));