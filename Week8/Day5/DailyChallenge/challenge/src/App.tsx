import {type ChangeEvent, useState} from 'react'
import './App.css'

function App() {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [sumNumber, setSumNumber] = useState(0);

  function handleChangeNumberOne(event: ChangeEvent<HTMLInputElement>) {
      setNumberOne(Number(event.currentTarget.value));
  }

    function handleChangeNumberTwo(event: ChangeEvent<HTMLInputElement>) {
        setNumberTwo(Number(event.currentTarget.value));
    }

    function handleSumButtonClick() {
      setSumNumber(numberOne + numberTwo);
    }

  return (
    <>
        <label htmlFor="number-one">Number one</label>
        <input id="number-one" type="number" value={numberOne}  onChange={handleChangeNumberOne}/>
        <label htmlFor="number-two">Number one</label>
        <input id="number-two" type="number" value={numberTwo} onChange={handleChangeNumberTwo} />
        <button onClick={handleSumButtonClick}>Add them</button>
        <p>{sumNumber}</p>
    </>
  )
}

export default App
