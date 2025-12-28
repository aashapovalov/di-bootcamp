import { useState } from "react";
import type { ChangeEvent } from "react";


export function Forms() {
    const [ username, setUsername ] = useState("");
    const [age, setAge ] = useState(0);
    const [errormessage, setErrormessage] = useState("");
    const [comment, setComment ] = useState("");
    const [carBrand, setCarBrand] = useState("");

    function onChangeName(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        if (value) {
            setUsername(value);
        }
    }

    function onChangeAge(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        if (typeof Number(value) !== "number") {
            setErrormessage("Please enter a valid number");
        }
        if (value) {
            setAge(Number(value));
        }
    }

    function onChangeComment(event: ChangeEvent<HTMLTextAreaElement>) {
        setComment(event.target.value);
    }

    function mySubmitHandler() {
        alert(`You are submitting ${username}`)
    }

    function onChangeCarBrand(event: ChangeEvent<HTMLSelectElement>) {
        setCarBrand(event.target.value);
    }

    return (
        <>
            <h1>HELLO {username.toUpperCase()}</h1>
            <form onSubmit={mySubmitHandler}>
                <label htmlFor="username">Enter your name:</label>
                <input
                    onChange={onChangeName}
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Enter your name"
                    value={username}
                />
                <label htmlFor="age">Enter your age:</label>

                <input
                    onChange={onChangeAge}
                    id="age"
                    name="age"
                    placeholder="Enter your age"
                    value={age}
                />
                {errormessage && (<span>{errormessage}</span>)}
                <textarea value={comment} onChange={onChangeComment}></textarea>
                <label htmlFor="select-brand">Select Car Brand</label>
                <select id="select-brand" value={carBrand} onChange={onChangeCarBrand}>
                    <option value="volvo">Volvo</option>
                    <option value="ford">Ford</option>
                    <option value="fiat">Fiat</option>
                </select>
            </form>
        </>
    )
}

