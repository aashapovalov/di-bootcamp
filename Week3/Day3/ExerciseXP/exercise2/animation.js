let startButton = document.getElementsByTagName('button')
let box = document.getElementById("animate")
let container = document.getElementById("container")

function myMove() {
  let start = Date.now(); // start date
  let timer = setInterval(() => {
    let timePassed = Date.now() - start;
    console.log(timePassed)
    box.style.left = timePassed/5 + 'px';
    console.log(box.style.left)
    if (timePassed > 2000 || box.offsetLeft + box.offsetWidth  >=  container.offsetWidth) {
      clearInterval(timer);
    }
  }, 1);
}