const charName = document.getElementById("name");
const charHeight = document.getElementById("height");
const charGender = document.getElementById("gender");
const charBirthYear = document.getElementById("birthyear");
const charHomeWorld = document.getElementById("home-world");
const findButton = document.getElementById("find-btn");
const baseURL = "https://www.swapi.tech/api/people"
let charId = 0;
let MAX_CHARS = 83

async function fetchInfo(fetchURL) {
  try {
    const response = await fetch(fetchURL);
    if (response.ok) {
      return await response.json();
    } else {
      throw Error("Oh No! That person isn't available!");
    }
  } catch (error) {
    console.log(error);
  }
}

function randomCharURL() {
  let newID = Math.floor(Math.random() * MAX_CHARS);
  if (newID === charId) {

    if (charId === MAX_CHARS) {
      charId = newID - 1;
    } else {
      charId = charId + 1;
    }
  } else { charId = newID }
  return `${baseURL}/${ charId }`;
}

findButton.addEventListener("click", async () => {
  const characters = await fetchInfo(randomCharURL());
  const charInfo = characters['result']['properties'];
  console.log(charInfo);
  charName.textContent = charInfo['name'];
  charHeight.textContent = `Height: ${charInfo['height']}`;
  charGender.textContent = `Gender: ${charInfo['gender']}`;
  charBirthYear.textContent = `Birth Year: ${charInfo['birth_year']}`
  const homeWorldData = await fetchInfo(charInfo['homeworld'])
  const homeWorldName = homeWorldData['result']['properties']['name'];
  console.log(homeWorldName);
  charHomeWorld.textContent = `Home World: ${homeWorldName}`;
})