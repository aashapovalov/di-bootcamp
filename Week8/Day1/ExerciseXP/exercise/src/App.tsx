import {Car} from "./components/car.tsx";
import {Phone} from "./components/phone.tsx";

const carinfo = {name: "Ford", model: "Mustang"};

export function App() {
    return (
        <>
            <Car name={carinfo.name} model={carinfo.model} />
            <Phone/>
        </>
    )
}