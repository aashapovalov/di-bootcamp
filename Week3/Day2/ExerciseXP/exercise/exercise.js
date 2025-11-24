//🌟 Exercise 1 : Find the numbers divisible by 23

  function displayNumbersDivisible(divisor = 23) {
    if (divisor) {
      let sum = 0;
      let divisorArr = []
      for (let i = 0; i < 500; i++) {
        if (i % divisor === 0) {
          divisorArr.push(i)
          sum += i;
        }
      }
      console.log(`Outcome: ${divisorArr.join(", ")}`)
      console.log(`Sum: ${sum}`);
    } else {
      console.log("Divisor should be a positive integer");
    }
  }
displayNumbersDivisible()
displayNumbersDivisible(23)
displayNumbersDivisible(45)


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
    return changeSum >= itemPrice
  }

  console.log(changeEnough(4.25, [5, 20, 5, 0]))

// 🌟 Exercise 4 : Vacations Costs

function hotelCost(nights) {
  const costPerNight = 140;
  return nights * costPerNight;
}

function planeRideCost(destination) {
  const flightDirection = {
    London: 183,
    Paris: 220
  };
  const anyDirection = 300;

  const normalized = destination.trim();

  if (normalized in flightDirection) {
    return flightDirection[normalized];
  }
  return anyDirection;
}

function rentalCarCost(days) {
  const costPerDay = 40;
  const discount = 0.05;

  let total = days * costPerDay;

  if (days > 10) {
    total = total * (1 - discount);
  }

  return Number(total.toFixed(2));
}


function totalVacationCost() {
  let nights;
  while (true) {
    const input = prompt("How many nights are you going to stay in our hotel?");
    nights = Number(input);
    if (!Number.isNaN(nights) && nights > 0) break;
    alert("Incorrect, you should enter a positive number of nights.");
  }

  let destination;
  while (true) {
    const input = prompt("Where do you want to fly?");
    if (input && input.trim().length > 0) {
      destination = input;
      break;
    }
    alert("Incorrect, you should enter a city name.");
  }

  let days;
  while (true) {
    const input = prompt("How many days do you want to rent a car for?");
    days = Number(input);
    if (!Number.isNaN(days) && days > 0) break;
    alert("Incorrect, you should enter a positive number of days.");
  }

  const hotel = hotelCost(nights);
  const plane = planeRideCost(destination);
  const car = rentalCarCost(days);

  console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);

  const total = hotel + plane + car;
  console.log(`Total vacation cost: $${total}`);

  return total;
}

totalVacationCost();


