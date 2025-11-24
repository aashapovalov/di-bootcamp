let box = document.getElementById("animate");
let container = document.getElementById("container");

function myMove() {
  const start = performance.now();
  const speed = 200;
  const maxLeft = container.offsetWidth - box.offsetWidth;

  function animate(now) {
    const left = Math.min(((now - start) / 1000) * speed, maxLeft);
    box.style.left = left + "px";
    if (left < maxLeft) requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}
