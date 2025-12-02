const quotes = [
  {
    id: 0,
    author: "Albert Einstein",
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    likes: 0
  },
  {
    id: 1,
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
    likes: 0
  },
  {
    id: 2,
    author: "Maya Angelou",
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    likes: 0
  },
  {
    id: 3,
    author: "Steve Jobs",
    quote: "Stay hungry, stay foolish.",
    likes: 0
  },
  {
    id: 4,
    author: "Yoda",
    quote: "Do or do not. There is no try.",
    likes: 0
  }
];
const buttonContainer = document.getElementById("button-container")
const genButton = document.getElementById("generate-btn")

const nextPrevContainer = document.getElementById("next-prev-btns");
const quoteSection = document.getElementById("quotes-section");
const form = document.getElementById("form");
const filterForm = document.getElementById("filter-form");
let currentQuoteID = null;

function generateQuote() {
  let newQuoteID = Math.floor(Math.random() * quotes.length);
  if (newQuoteID === currentQuoteID) {
    if (newQuoteID === quotes.length - 1) {
      newQuoteID --;
    } else {newQuoteID ++}
  }
  currentQuoteID = newQuoteID;
  changeQuote(quotes[currentQuoteID]);
}

function changeQuote({id, author, quote}) {
  const quoteContainer = document.querySelector(".quote-container");
  const quoteElement = document.getElementById('quote-element');
  const authorElement = document.getElementById('author-element');
  quoteContainer.id = id;
  quoteElement.textContent = quote;
  authorElement.textContent = author
}

function createTextElements() {
  const quoteContainer = document.createElement("div");
  quoteContainer.classList.add("quote-container");
  const quoteElement = document.createElement("p");
  quoteElement.setAttribute("id", 'quote-element')
  quoteElement.style.fontStyle = "italic";
  const authorElement = document.createElement("p");
  authorElement.setAttribute("id", 'author-element');
  authorElement.style.fontWeight = "bold";
  authorElement.style.textAlign = "right";
  quoteContainer.appendChild(quoteElement);
  quoteContainer.appendChild(authorElement);
  quoteSection.appendChild(quoteContainer);
}

function addNewQuote(event) {
  event.preventDefault();
  let newQuoteObj = {}
  const formData = new FormData(form);
  for (let [key, value] of formData.entries()) {
    newQuoteObj['id'] = quotes.length;
    if (key === 'author') {
      newQuoteObj['author'] = value;
    } else if (key === 'quote') {
      newQuoteObj['quote'] = value;
    }
  }
  quotes.push(newQuoteObj);
}

function onButtonClick(event) {
  const buttonID = event.target.id;
  const quoteContainer = document.querySelector(".quote-container");
  const quoteStr = quotes[quoteContainer.id]['quote'];
  switch (buttonID) {

    case "words-number-btn":
      const quoteWords = quoteStr.split(' ');
      const wordsNum = quoteWords.length;
      alert(`In this quote ${wordsNum} words`);
      break;

    case "char-spaces-btn":
      const stringLengthSpaces = quoteStr.length;
      alert(`In this quote ${stringLengthSpaces} chars`);
      break;

    case "char-btn":
      const stringWithoutSpaces = quoteStr.split(' ').join('');
      const stringLength = stringWithoutSpaces.length;
      alert(`In this quote ${stringLength} chars (not including spaces)`);
      break;

    case "like-btn":
      quotes[quoteContainer.id]["likes"]++;
      alert(`This quote has ${quotes[quoteContainer.id]["likes"]} likes`);
      break;
  }
}

function filterQuotes(event) {
  event.preventDefault();
  const formData = new FormData(filterForm);
  const authorName = formData.get("author-name");
  const filteredQuotes = [];
  if (authorName) {
    for (let quoteObj of quotes) {
      if (quoteObj['author'] === authorName) {
        filteredQuotes.push(quoteObj['quote']);
      }
    }
    const filteredQuotesStr = filteredQuotes.join("\n");
    const quoteElement = document.getElementById('quote-element');
    const authorElement = document.getElementById('author-element');
    if (filteredQuotes.length === 0) {
      quoteElement.textContent = "Sorry, I didn't find any quotes.";
    } else {
      quoteElement.textContent = filteredQuotesStr;
      authorElement.textContent = authorName;
    }
  }
}

function scrollQuote(event) {
  const buttonID = event.target.id;
  const quoteContainer = document.querySelector(".quote-container");
  const idNumber = Number(quoteContainer.id);
  switch (buttonID) {
    case "next-btn":
      currentQuoteID = (idNumber === quotes.length - 1) ? 0 : idNumber + 1;
      break;
    case "prev-btn":
      currentQuoteID = (idNumber === 0) ? quotes.length - 1 : idNumber - 1;
      }
  changeQuote(quotes[currentQuoteID]);
}

createTextElements();
genButton.addEventListener("click", generateQuote);
form.addEventListener("submit", addNewQuote);
filterForm.addEventListener("submit", filterQuotes)
buttonContainer.addEventListener("click", onButtonClick);
nextPrevContainer.addEventListener("click", scrollQuote)