import {type FormEvent, useState} from "react";
import type { ChangeEvent } from "react";


export function FormSecond() {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ phone, setPhone ] = useState(0);
    const [ email, setEmail ] = useState("");
    const [ formSubmitted, setFormSubmitted ] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setFormSubmitted(true);
    }

    function onChangeFirstName (event: ChangeEvent<HTMLInputElement>) {
        setFirstName(event.target.value);
    }

    function onChangeLastName (event: ChangeEvent<HTMLInputElement>) {
        setLastName(event.target.value);
    }

    function onChangePhone (event: ChangeEvent<HTMLInputElement>) {
        setPhone(Number(event.target.value));
    }

    function onChangeEmail (event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function handleReset() {
        setFormSubmitted(false);
        setEmail("");
        setPhone(0);
        setFirstName("");
        setLastName("");
    }

    return (
        <>
            {formSubmitted ? (
                <>
                    <p>{lastName}, {firstName}</p>
                    <p>{phone} | {email}</p>
                    <button onClick={handleReset}>Reset</button>
                </>
            ):(
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">Enter first name:</label>
                <input
                    onChange={onChangeFirstName}
                    id="firstName"
                    type="text"
                    name="firstName"
                    placeholder="Enter first name"
                    value={firstName}
                />
                <label htmlFor="lastName">Enter last name:</label>
                <input
                    onChange={onChangeLastName}
                    id="lastName"
                    type="text"
                    name="lastName"
                    placeholder="Enter last name"
                    value={lastName}
                />
                <label htmlFor="phone">Enter phone:</label>
                <input
                    onChange={onChangePhone}
                    id="phone"
                    type="number"
                    name="phone"
                    placeholder="Enter phone"
                    value={phone}
                />
                <label htmlFor="email">Enter email:</label>
                <input
                    onChange={onChangeEmail}
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Enter email"
                    value={email}
                />
                <button type="submit">Submit</button>
            </form>)}
        </>
    )
}

