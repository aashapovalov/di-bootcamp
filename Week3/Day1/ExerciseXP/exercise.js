//🌟 Exercise 1 : List of people
const people = ["Greg", "Mary", "Devon", "James"];
people.splice(0, 1);
people[people.indexOf("James")] = "Jason";
people.push("Alex");
console.log(people.indexOf("Mary"));
const peopleCopy = people.slice(1, 3);
console.log(peopleCopy.indexOf("Foo"));
const last = people[people.length - 1];
console.log(last);

for(let i = 0; i < peopleCopy1.length; i++) {
  console.log(peopleCopy1[i])
}

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}

//🌟 Exercise 2 : Your favorite colors
let colors = ["red", "green", "blue", "yellow", "green"];
let suf = ["st", "nd", "rd", "th", "th"];
for(let i = 0; i < colors.length; i++){
  console.log(`My #${i+1} choice is ${colors[i]}`);
}
for(let i = 0; i < colors.length; i++){
  console.log(`My ${i+1}${suf[i]} choice is ${colors[i]}`);
}

//🌟 Exercise 3 : Repeat the question
let user_number = parseInt(prompt("Enter a number: ", '0'))
if (typeof(user_number) === "number") {
  console.log(user_number + " is a valid number");
} else {
  console.log(user_number + " is not a valid number");
}
while (user_number < 10) {
  user_number = parseInt(prompt("Enter a number: "))
}

//🌟 Exercise 4 : Building Management
const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent:  {
    sarah: [3, 990],
    dan:  [4, 1000],
    david: [1, 500],
  },
}
console.log(building["numberOfFloors"])
console.log(building["numberOfAptByFloor"]["firstFloor"], building["numberOfAptByFloor"]["thirdFloor"]);
const firstTenant = building["nameOfTenants"][0]
const secondTenant = building["nameOfTenants"][1]
const thirdTenant = building["nameOfTenants"][2]

console.log(secondTenant, building["numberOfRoomsAndRent"][secondTenant.toLowerCase()][0])
const sarahRent = building["numberOfRoomsAndRent"][firstTenant.toLowerCase()][1]
let danRent = building["numberOfRoomsAndRent"][secondTenant.toLowerCase()][1]
const davidRent = building["numberOfRoomsAndRent"][thirdTenant.toLowerCase()][1]
if (sarahRent + davidRent > danRent) {
  danRent = 1200
}
console.log(danRent)

//🌟 Exercise 5 : Family
let family = {
  "dad": "John",
  "mom": "Judith",
  "son": "David",
  "daughter": "Joana"
}

for (let familyMember in family) {
  console.log(familyMember)
}

for (let familyMember in family) {
  console.log(family[familyMember])
}

//Exercise 6 : Rudolf
let consoleString = ""
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

for (let element in details) {
  consoleString += element + " " + details[element] + " ";
}
console.log(consoleString)

//Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let namesSorted = names.sort();
let societyName = "";
for (let name of namesSorted) {
  societyName += name[0];
}
console.log(societyName)