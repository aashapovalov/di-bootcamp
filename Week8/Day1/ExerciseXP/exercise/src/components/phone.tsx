import {useState} from "react";

const [brand] = useState("Samsung");
const [model] = useState("Galaxy S20");
const [color, setColor ] = useState("black");
const [year] = useState(2020);

export function Phone() {
    return (
        <>
        <h3>My phone is a {brand}</h3>
            <p>It is a {color} {model} from {year}</p>
            <button onClick={changeColor}>Change Color</button>
        </>
    )
}

function changeColor() {
    setColor("blue");
}