import { useState } from 'react'
import './App.css'
import {quotes} from "./quotes-database.ts";
import {getRandomColorRGB, getRandomQuote} from "./utils.ts";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("gray");
  const [buttonColor, setButtonColor] = useState("white");
  const [quoteIndex, setQuoteIndex] = useState(0);

  function handleChangeQuote() {
      setQuoteIndex(getRandomQuote(quoteIndex));
      setButtonColor(getRandomColorRGB());
      setBackgroundColor(getRandomColorRGB());
  }

  return (
    <>
      <div style={{ backgroundColor: backgroundColor}}>
          <p >{quotes[quoteIndex].quote}</p>
          <p>{quotes[quoteIndex].author}</p>
          <button style={{ backgroundColor: buttonColor}} onClick={handleChangeQuote}>Change</button>
      </div>
    </>
  )
}

export default App
