
const containerDiv = document.getElementById("container");
console.log(containerDiv);

const lists = document.querySelectorAll("ul.list");
const firstList = lists[0];
const secondList = lists[1];

const firstListItems = firstList.querySelectorAll("li");
firstListItems[1].textContent = "Richard";

const secondListItems = secondList.querySelectorAll("li");
secondList.removeChild(secondListItems[1]); // удаляем "Sarah"

lists.forEach(ul => {
  const firstLi = ul.firstElementChild;
  firstLi.textContent = "Aleksei"; // или то имя, которое хочешь
});

lists.forEach(ul => {
  ul.classList.add("student_list");
});

firstList.classList.add("university", "attendance");

containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";


const updatedSecondListItems = secondList.querySelectorAll("li");
updatedSecondListItems.forEach(li => {
  if (li.textContent === "Dan") {
    li.style.display = "none";
  }
});

const allLis = document.querySelectorAll("li");
allLis.forEach(li => {
  if (li.textContent === "Richard") {
    li.style.border = "1px solid black";
  }
});

document.body.style.fontSize = "18px";


if (containerDiv.style.backgroundColor === "lightblue") {
  const usersNames = Array.from(firstList.querySelectorAll("li")).map(li => li.textContent);
  if (usersNames.length >= 2) {
    alert(`Hello ${usersNames[0]} and ${usersNames[1]}`);
  }
}
