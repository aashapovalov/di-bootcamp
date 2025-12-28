import {useState} from "react";

export const clickMe = () => {
    alert("I was clicked!");
}

export const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
        const value: string | null = event.currentTarget?.value;
        alert(`The Event key was pressed! Your input is ${value}`);
    }
}

export function Events() {
    const [isToggleOn, setIsToggleOn] = useState(true);
    const btnText = isToggleOn ? "ON" : "OFF";
    return (
        <>
            <button onClick={clickMe}>Click me</button>
            <input onKeyDown={handleKeyDown}></input>
            <button onClick={() => setIsToggleOn(!isToggleOn)}>{btnText}</button>
        </>
    )
}