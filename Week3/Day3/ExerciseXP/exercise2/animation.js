let box = document.getElementById("animate");
let container = document.getElementById("container");
let btn = document.querySelector("button");

btn.addEventListener("click", myMove);

function myMove() {
  let pos = 0;
  box.style.left = "0px";
  let timer = setInterval(() => {
    pos += 1;
    box.style.left = pos + "px";
    if (pos >= container.offsetWidth - box.offsetWidth) {
      clearInterval(timer);
    }
  }, 1);
}
