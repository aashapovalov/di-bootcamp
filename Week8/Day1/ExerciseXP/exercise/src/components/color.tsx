import {useEffect, useState} from "react";

export function Color() {
    const [favoriteColor, setFavoriteColor ] = useState("red");
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
