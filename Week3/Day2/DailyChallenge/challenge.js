const planetData = [
  { name: "Mercury", color: "red",    moons: 1 },
  { name: "Venus",   color: "orange", moons: 2 },
  { name: "Earth",   color: "yellow", moons: 3 },
  { name: "Mars",    color: "green",  moons: 4 },
  { name: "Jupiter", color: "blue",   moons: 5 },
  { name: "Saturn",  color: "indigo", moons: 6 },
  { name: "Uranus",  color: "violet", moons: 7 },
  { name: "Neptune", color: "pink",   moons: 8 }
];

const section = document.querySelector(".listPlanets");
for (let i = 0; i < planetData.length; i++) {
  let planet = document.createElement("div")
  planet.classList.add("planet");
  planet.style.backgroundColor = planetData[i]["color"];
  section.appendChild(planet)
  for (let j = 1; j <= planetData[i]["moons"];j++) {
    console.log(planetData[i]["moons"])
    let moon = document.createElement("div");
    moon.classList.add("moon");
    moon.style.backgroundColor = "white";
    planet.appendChild(moon)
  }
}
