import {useState} from "react";
import {Garage} from "./garage.tsx";

type carData = {
    name: string;
    model: string;
}

export function Car(data: carData) {
    const size: string = 'small';
    const [color] = useState("black");
    return (
        <>
            <h1>This car {data.name} is a {color} {data.model}</h1>
            <Garage size={size} />
        </>
    )
}