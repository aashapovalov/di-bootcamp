//Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
function hello() {
  alert("hello world");
}

setTimeout(hello, 2000)

//Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
let divElement = document.getElementById("container");
setTimeout(addElement, 2000)
function addElement() {
  let newP = document.createElement("p");
  newP.textContent = "Hello World";
  divElement.appendChild(newP);
}

//Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
let myInterval = setInterval(addElement, 2000)
let controlInt = setInterval(() => {
  if (divElement.children.length > 4) {
    clearInterval(myInterval)
    clearInterval(controlInt)
  }
},100);
function clearInt(myInterval) {
  clearInterval(myInterval)
}
