let divEl = document.getElementById("container")
console.log(divEl)

const ulFirst = document.getElementsByClassName("list")[0]
const ulSec = document.getElementsByClassName("list")[1]
Array.from(ulFirst.children).find(el => el.textContent === "Pete").textContent = "Richard"
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

if (divEl.style.backgroundColor === "lightblue") {
  alert(`Hello ${ulFirst.firstElementChild.textContent} and ${ulSec.firstElementChild.textContent}`)
}