const navBarDiv = document.getElementById("navBar");
navBarDiv.id = "socialNetworkNavigation";

const ulEl = navBarDiv.querySelector("ul");

const newLi = document.createElement("li");
newLi.textContent = "Logout";
ulEl.appendChild(newLi);

const listItems = ulEl.querySelectorAll("li");

listItems.forEach(li => {
  console.log(li.textContent);
});