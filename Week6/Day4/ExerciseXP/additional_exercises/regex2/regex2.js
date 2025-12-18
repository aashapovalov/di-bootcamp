function returnName(str) {
  const regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
  return regex.test(str);
}

console.log(returnName("k5k3q2g5z6x9bn"));
console.log(returnName("John Doe"));   // true

