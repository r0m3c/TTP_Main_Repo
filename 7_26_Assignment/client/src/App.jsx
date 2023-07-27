import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"

function StarWarsCharacter({ character }) {
  return (
    <div>
      <h2>{character.name}</h2>
      <p>Gender: {character.gender}</p>
      <p>Birth Year: {character.birth_year}</p>
      <p>Height: {character.height}</p>
      <p>Homeworld: {character.homeworld}</p>
      <p>Species: {character.species[0]}</p>
    </div>
  );
}

function StarWarsCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {

  const fetchData = async () => {
    // try {
    //   const response = await axios.get("http://localhost:3001/api/people");
    //   setCharacters(response.data.results);
    // } catch (error) {
    //   console.error("Error fetching data", error);
    // }
    try {
      const response = await axios.get("https://swapi.dev/api/people/");
      setCharacters(response.data.results);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

    fetchData();
  }, []);
  

  return (
    <div>
      {console.log(characters)}
      <h1>Star Wars Characters</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.name}>
            <StarWarsCharacter character={character} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {

  return (
    <>
      <StarWarsCharacters />
    </>
  )
}

export default App
