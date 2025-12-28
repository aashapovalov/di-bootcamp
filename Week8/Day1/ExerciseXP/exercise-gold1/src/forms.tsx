import {type ChangeEvent, useState} from "react";


export function Forms() {
    const [ username, setUsername ] = useState("");

    function onChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        if (value) {
            setUsername(value);
        }
    }

    return (
        <>
            <h1>HELLO</h1>
            <form>
                <label htmlFor="username">Enter your name:</label>
                <input
                    onChange={onChange}
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Enter your name"
                    value={username}
                />
            </form>
        </>
    )
}

