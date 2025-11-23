let divEl = document.querySelector("div")
console.log(divEl)

const ulFirst = document.getElementsByTagName("ul")[0]
ulFirst.lastElementChild.textContent = "Richard"
const ulSec = document.getElementsByTagName("ul")[1]
ulSec.children[1].remove()

const ulEl = document.getElementsByTagName("ul")
for (let element of ulEl) {
  element.firstElementChild.textContent = "Alex"
  element.classList.add("student_list")
}

ulFirst.classList.add("university", "attendance")

divEl.style.backgroundColor = "lightblue"
ulSec.lastElementChild.style.display="none"

ulFirst.lastElementChild.style.border = "1px solid blue"

document.body.style.fontSize = "20px"

if (divEl.style.backgroundColor = "lightblue") {
  alert("Hello x and y")
}