import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import {Route, Routes, Link, useParams} from "react-router-dom";


function AllCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await axios.get("https://swapi.dev/api/people/");
        setCharacters(response.data.results);
      } catch (err) {
        console.log(err);
      }
    }

    fetchCharacters();
  }, []);

  return (
    <ul>
      {characters.map((character, index) => (
        <React.Fragment key={index}>
          <li><Link to={`/singleCharacter/${index+1}`}>{character.name}</Link></li>
          <li>{character.height}</li>
          <li>{character.mass}</li>
          <br/>
        </React.Fragment>
      ))}
    </ul>
  );
}

function SingleCharacter () {
  const [character, setCharacter] = useState([]);
  const {id} = useParams();
  // const navigate = useNavigate();

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}`);
        setCharacter(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchCharacters();
  }, [id]);

  return (
    <ul>
        <React.Fragment>
          <li>{character.name}</li>
          <li>{character.height}</li>
          <li>{character.mass}</li>
          {/* <button onClick={navigate("/")}>click</button> */}
          <br/>
        </React.Fragment>
    </ul>
  );
}

function LandingPage () {
  return "Home"
}

function App() {

  return (
    <>
      <Routes>
        <Route path="/singleCharacter/:id" element={<SingleCharacter />} />
        <Route path="/allCharacters" element={<AllCharacters />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
