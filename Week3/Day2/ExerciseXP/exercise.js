//🌟 Exercise 1 : Find the numbers divisible by 23
function displayNumbersDivisible(divisor) {
  if (divisor) {
    let sum = 0;
    let divisorStr = ""
    for (let i = 0; i < 500; i++) {
      if (i % divisor === 0) {
        divisorStr += i.toString() + " "
        sum += i;
      }
    }
    console.log(`Outcome: ${divisorStr}`)
    console.log(`Sum: ${sum}`);
  } else {
    console.log("Divisor should be a positive integer");
  }
}
displayNumbersDivisible()

//🌟 Exercise 2 : Shopping List
const stock = {
  "banana": 6,
  "apple": 0,
  "pear": 12,
  "orange": 32,
  "blueberry":1
}

const prices = {
  "banana": 4,
  "apple": 2,
  "pear": 1,
  "orange": 1.5,
  "blueberry":10
}

let shoppingList = ["banana", "orange", "apple"]

function myBill() {
  let billSum = 0;
  for (let element of shoppingList) {
    if (element in stock && stock[element] !== 0) {
      stock[element] --
      billSum += prices[element];
    }
  }
  console.log(`My Bill Sum: $${billSum}`);
  console.log(stock);
}

myBill()

//Exercise 3 : What’s in my wallet ?
function changeEnough(itemPrice, amountOfChange){
  const changeNominal = [0.25, 0.1, 0.05, 0.01]
  let changeSum = 0
  for (let i = 0; i < amountOfChange.length; i++) {
    changeSum += amountOfChange[i]*changeNominal[i]
  }
  if (changeSum >= itemPrice) {
    return true
  } else {
    return false
  }
}

console.log(changeEnough(4.25, [5, 20, 5, 0]))

//🌟 Exercise 4 : Vacations Costs
function hotelCost(){
  const costPerNight = 140;
  let i;
  while (true) {
    nigthsNumber = prompt("How many nights are you going to stay in out hotel?");
    if (typeof parseFloat(nigthsNumber) === "number") {
      return parseFloat(nigthsNumber)*costPerNight;
    }
    console.log("Incorrect, you should enter a number!")
  }
}

function planeRideCost() {
  const flightDirection = {"London": 183, "Paris": 220};
  const anyDirection = 300
  while (true) {
    let direction = prompt("Where do you want to fly?").toString();
    if (typeof direction.toString() === "string") {
      if (direction in flightDirection) {
        return flightDirection[direction];
      } else {
        return anyDirection;
      }
    }
    console.log("Incorrect, you should enter a city!")
  }
}

  function rentalCarCost() {
      const costPerDay = 40;
      const discount = 0.05
      while (true) {
        let daysNumber = prompt("How many days you want to a car for?");
        if (typeof parseFloat(daysNumber) === "number") {
          if (daysNumber <= 10) {
            return parseFloat(daysNumber)*costPerDay;
          } else { return daysNumber*costPerDay*(1-discount).toFixed(2); }
        } else {
          console.log("Incorrect, you should enter a number!")
        }
      }
    }

    function totalVacationCost() {
      let rent = rentalCarCost();
      let plane = planeRideCost();
      let hotel = hotelCost();
      console.log(rent, plane, hotel);
      return rent+plane+hotel;
    }

console.log(totalVacationCost())

