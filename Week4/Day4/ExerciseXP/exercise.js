// 🌟 Exercise 1 : Giphy API
// Create a program to retrieve the data from the API URL provided above.
//     Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
//     api_key Request Paramater : GIPHY API Key. Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
const url =   "https://api.giphy.com/v1/gifs/search?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"

async function fetchGIF(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data)
    }
  } catch (error) {
    console.log(error)
  }
}

fetchGIF(url)

// 🌟 Exercise 2 : Giphy API
// Instructions
// Read carefully the documention to understand all the possible queries that the URL accept.
//     Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
//     Console.log the Javascript Object that you receive.

const newUrl = "https://api.giphy.com/v1/gifs/search?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=cat&offset=2"
fetchGIF(newUrl)

// 🌟 Exercise 3 : Async function
// Instructions
// Improve the program below :
//
//     fetch("https://www.swapi.tech/api/starships/9/")
//         .then(response => response.json())
//         .then(objectStarWars => console.log(objectStarWars.result));
// Create an async function, that will await for the above GET request.
//     The program shouldn’t contain any then() method.
//     Make sure to check the status of the Response and to catch any occuring errors.
async function fetchSW(url) {
  const urlSW = "https://www.swapi.tech/api/starships/9/"
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data)
    }
  } catch (error) {
    console.log(error)
  }
}