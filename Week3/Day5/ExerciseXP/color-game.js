let COLORS = [
  ["#E53935", "#FB8C00", "#F4A62A"],
  ["#FFEE58", "#9CCC65", "#AED581"],
  ["#388E3C", "#4DD0E1", "#80DEEA"],
  ["#90CAF9", "#64B5F6", "#0D47A1"],
  ["#1A237E", "#4A148C", "#7B1FA2"],
  ["#CE93D8", "#F8BBD0", "#E0E0E0"],
  ["#757575", "#000000", "#FFFFFF"]
]

let GRID_COLUMN_NUMBER = 70;
let GRID_ROW_NUMBER = 25;
let currentColor = '';
let colorOn = false;

const cellElCollection = document.getElementsByClassName("cell")


function displayBoard() {
  const style = document.createElement("style");
  style.textContent = `
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;
  document.head.appendChild(style);
  document.body.style.margin = "0";
  document.body.style.backgroundColor = "gray";


  //Main
  let mainEl = document.createElement("main");
  document.body.appendChild(mainEl);
  mainEl.style.display = "flex"
  mainEl.style.gap = "10px";
  mainEl.style.flexDirection = "row";
  mainEl.style.height = "100vh";
  mainEl.style.padding = "10px";

  //Section COLORS
  let colorSectionEl = document.createElement("section");
  mainEl.appendChild(colorSectionEl);
  colorSectionEl.style.flex = "1"
  colorSectionEl.style.display = "flex";
  colorSectionEl.style.flexDirection = "column";

  //Clear Button
  let clearBtnEl = document.createElement("button");
  clearBtnEl.setAttribute("type", "button");
  clearBtnEl.setAttribute("id", "clearBtn");
  clearBtnEl.style.borderRadius = "10px";
  clearBtnEl.style.backgroundColor = "lightgray";
  clearBtnEl.style.display = "block";
  clearBtnEl.style.margin = "10px auto";
  clearBtnEl.textContent = "Clear"
  clearBtnEl.style.fontSize = "2rem"
  clearBtnEl.style.width = "100%"
  clearBtnEl.style.border = "1px solid black";
  clearBtnEl.style.padding = "10px"
  colorSectionEl.appendChild(clearBtnEl);

  //Color palette
  let colorPaletteEl = document.createElement("div")
  colorPaletteEl.setAttribute("id", "colorPalette");
  colorPaletteEl.style.flex = "1";
  colorPaletteEl.style.display = "grid"
  colorPaletteEl.style.gridTemplateColumns = "repeat(3, 1fr)"
  colorPaletteEl.style.gridTemplateRows = "repeat(7, 1fr)"
  colorPaletteEl.style.gap = "10px"
  colorSectionEl.appendChild(colorPaletteEl);

  //Colors
  for (let i = 0; i < COLORS.length; i++) {
    for (let j = 0; j < COLORS[i].length; j++) {
      let colorEl = document.createElement("div");
      colorPaletteEl.appendChild(colorEl);
      colorEl.setAttribute("id", `color${i}${j}`);
      colorEl.setAttribute("class", "color")
      colorEl.style.backgroundColor = COLORS[i][j];
      colorEl.style.gridRow = `${i+1} / ${i+2}`
      colorEl.style.gridColumn = `${j+1} / ${j+2}`
      colorEl.style.width = "100%"
      colorEl.style.height = "100%"
      colorEl.style.border = "1px solid black"
    }
  }

  //Section GRID
  let gridSectionEl = document.createElement("section");
  gridSectionEl.setAttribute("id", "gridSection");
  gridSectionEl.style.flex = "4";
  gridSectionEl.style.display = "grid";
  gridSectionEl.style.gridTemplateColumns = `repeat(${GRID_COLUMN_NUMBER}, 1fr)`;
  gridSectionEl.style.gridTemplateRows = `repeat(${GRID_ROW_NUMBER}, 1fr)`;
  mainEl.appendChild(gridSectionEl);

  //Cells
  for (let i = 0; i < GRID_ROW_NUMBER; i++) {
    for (let j = 0; j < GRID_COLUMN_NUMBER; j++) {
      let cellEl = document.createElement("div")
      cellEl.setAttribute("class", "cell");
      cellEl.setAttribute("id", `cell${i}${j}`);
      cellEl.style.border = "1px solid lightgray";
      cellEl.style.backgroundColor = "white";
      gridSectionEl.appendChild(cellEl);
    }
  }
}

//Detect color and set it to current color variable
function detectColor(event) {
  if (event.target.classList.contains("color")) {
    console.log(event.target.style.backgroundColor)
    currentColor = event.target.style.backgroundColor
  }
}

//Set all cells' background color to white
function clearGrid() {
  for (let cell of cellElCollection) {
    cell.style.backgroundColor = "white"
  }
}

//Initiates coloring
function colorStart(event) {
  if (event.target.classList.contains("cell")) {
    colorOn = true;
    event.target.style.backgroundColor = currentColor;
  }
}

//Checks if the color mode is on and colors cells
function colorCell(event) {
  if (event.target.classList.contains("cell") && colorOn) {
    event.target.style.backgroundColor = currentColor;
  }
}

//Turns off color mode
function colorEnd() {
  colorOn = false;
}

displayBoard()

//Event listeners
let clearButton = document.getElementById("clearBtn");
let gridSection = document.getElementById("gridSection");
let colorPalette = document.getElementById("colorPalette");

colorPalette.addEventListener("click", detectColor);
gridSection.addEventListener("mousedown", colorStart);
gridSection.addEventListener("mouseover", colorCell);
document.body.addEventListener("mouseup", colorEnd);
clearButton.addEventListener("click", clearGrid);