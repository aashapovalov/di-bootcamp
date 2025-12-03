// Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
//     In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
//     Allow the user to delete a specific gif by clicking the DELETE button.
//     Allow the user to remove all of the GIFs by clicking a DELETE ALL button.


const BASE_URL =   "https://api.giphy.com/v1/gifs/search?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
let gifList = [];
const form = document.getElementById('form');
const output = document.getElementById('output');
const searchBtn = document.getElementById('search-btn')
let url = ''

async function getGif(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const inputStr = formData.get('input');
  if (!inputStr.length) {
    url = BASE_URL
  } else {
    url = BASE_URL + "&q=" + inputStr;
  }
  const gifData = await fetchGIF(url);
  const randNum = Math.floor(Math.random() * gifData['data'].length);
  const gifID = gifList.length;
  const gifURL = gifData['data'][randNum]['images']['downsized']['url'];
  gifList.push({ gifID, gifURL });
  displayGif({ gifID, gifURL })
}

function displayGif({gifID, gifURL}) {
  if (output.children.length === 0) {
    const deleteAllBtn = document.createElement('button');
    deleteAllBtn.id = 'delete-all-btn';
    deleteAllBtn.style.display = 'block';
    deleteAllBtn.textContent = 'Delete All';
    deleteAllBtn.style.margin = '0 auto';
    output.appendChild(deleteAllBtn);
    deleteAllBtn.addEventListener('click', removeAllGif)
  }
  const gifContainer = document.createElement('div');
  const gifImg = document.createElement('img');
  const deleteBtn = document.createElement('button');
  gifContainer.id = gifID;
  gifContainer.style.margin = '1rem'
  gifImg.style.maxWidth = '200px'
  gifImg.style.maxHeight = '200px'
  gifImg.src = gifURL;
  deleteBtn.id = 'delete-btn';
  deleteBtn.style.display = 'block';
  deleteBtn.textContent = 'Delete';
  gifContainer.appendChild(gifImg);
  gifContainer.appendChild(deleteBtn);
  gifContainer.style.display = 'inline-block';
  output.appendChild(gifContainer);
  gifContainer.addEventListener('click', removeGif)

}

async function fetchGIF(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log(error)
  }
}

function removeGif(event) {
  if(event.target.id === 'delete-btn') {
    const elementID = event.currentTarget.id
    const gifToDelete = document.getElementById(elementID);
    gifToDelete.parentNode.removeChild(gifToDelete);
    gifList.splice(elementID, 1);
  }
}

function removeAllGif () {
  output.innerHTML = '';
  gifList = [];
}

searchBtn.addEventListener('click', getGif);