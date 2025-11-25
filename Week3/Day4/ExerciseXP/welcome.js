let navbarElement = document.getElementById("navbar");
(function(name){
  let parElem = document.createElement("div");
  let imgElem = document.createElement("img");
  parElem.textContent = name;
  imgElem.src = "./assets/images/logo.png";
  navbarElement.appendChild(parElem);
  navbarElement.appendChild(imgElem);
})("Garry")