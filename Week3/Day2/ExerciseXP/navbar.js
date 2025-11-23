let divEl = document.querySelector('div');
divEl.setAttribute("id", "socialNetworkNavigation")

let ulEl = document.querySelector('ul');
const newLi = document.createElement("li")
const logout = document.createTextNode("Logout")
newLi.appendChild(logout)
ulEl.appendChild(newLi)

const firstLi = ulEl.firstElementChild
const lastLi = ulEl.lastElementChild
console.log(lastLi.textContent)
console.log(firstLi.textContent)