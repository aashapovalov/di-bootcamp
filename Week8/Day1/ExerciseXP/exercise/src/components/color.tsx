import {useEffect, useState} from "react";

const [favoriteColor, setFavoriteColor ] = useState("red");
export function Color() {
    useEffect(() => {
        setFavoriteColor("yellow");
    }, [setFavoriteColor]);
    return (
        <>
            <h3>My favorite color is {favoriteColor}</h3>
            <button onClick={() => setFavoriteColor("blue")}>Change Color</button>
        </>
    )
}
