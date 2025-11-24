const navBarDiv = document.getElementById("navBar");
navBarDiv.setAttribute("id", "socialNetworkNavigation");

const ulEl = navBarDiv.querySelector("ul");

const newLi = document.createElement("li");
const newLink = document.createElement("a");
newLink.setAttribute("href", "#");
newLink.textContent = "Logout";
newLi.appendChild(newLink);

ulEl.appendChild(newLi);

const firstLi = ulEl.firstElementChild;
const lastLi = ulEl.lastElementChild;

console.log(firstLi.querySelector("a").textContent);
console.log(lastLi.querySelector("a").textContent);
