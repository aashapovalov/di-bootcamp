import './App.css'
import {Exercise} from "./exercise3.tsx";

export function App() {
    const myelement = <h1>I Love JSX!</h1>;
    const sum: number = 5 + 5;
    const user = {
        firstName: 'Bob',
        lastName: 'Dylan',
        favAnimals : ['Horse','Turtle','Elephant','Monkey']
    };
    return (
        <>
            {myelement}
            <h1>React is {sum} times better with JSX</h1>
            <h3>{user.firstName} {user.lastName}</h3>
            <Exercise/>
        </>
    )
}