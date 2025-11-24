const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune"
];

const planetColors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "pink"
];

const section = document.querySelector(".listPlanets");
for (let i = 0; i < planets.length; i++) {
  let planet = document.createElement("div")
  planet.classList.add("planet");
  planet.style.backgroundColor = planetColors[i];
  section.appendChild(planet)
}

planetElements = document.querySelectorAll(".planets");
console.log(planetElements)
for (let element of planetElements) {
  let moon = document.createElement("div")
  moon.classList.add("moon");
  moon.style.backgroundColor = "white";
  element.appendChild(moon)
}