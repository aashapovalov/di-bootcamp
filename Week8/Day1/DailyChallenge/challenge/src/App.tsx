import {useState} from "react";

type Language = {
    name: string;
    votes: number;
}

export function App() {
    const [languages, setLanguages] = useState([
        {name: "Php", votes: 0},
        {name: "Python", votes: 0},
        {name: "JavaSript", votes: 0},
        {name: "Java", votes: 0}
    ])
    function handleCount(name: string) {
        setLanguages(prev => prev.map(lang => lang.name === name ? { ...lang, votes: lang.votes + 1 } : lang));
    }

    return (
        <>
        {languages.map((language: Language) => (
            <div key={language.name} style={{display:"flex", flexDirection:"row", gap:"1rem"}}>
                <span>{language.votes}</span>
                <span>{language.name}</span>
                <button onClick={() => handleCount(language.name)}>Click Here</button>
            </div>
            ))}
        </>
    )
}