import {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [characters, setCharacters] = useState([])
    const [query, setQuery] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
                const data = await response.json();
                setCharacters(data.results)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [query])

    return (
        <div className="App">
            <div className="search">
                <input type="text"
                       placeholder={"Search Character"}
                       className={"input"}
                       onChange={event => setQuery(event.target.value)}
                       value={query}
                />
            </div>
            <div className="results">
                {characters.map(character => (
                    <div>
                        <img src={character.image} alt={character.name}/>
                        {character.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;