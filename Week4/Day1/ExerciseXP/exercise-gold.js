//Exercise 1 : print Full Name
function printFullName({first, last}) {
  console.log(`Your full name is ${first} ${last}`);
}

printFullName({first: 'Elie', last:'Schoppik'})

//Exercise 2 : keys and values
function keysAndValues(obj) {
  const arr = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))
  const obj1 = Object.fromEntries(arr)
  return [Object.keys(obj1), Object.values(obj1)]
}


console.log(keysAndValues({ key1: true, key2: false, key3: undefined }))

//Exercise 3 : Counter class

class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);
// 3

class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();