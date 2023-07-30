import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchPokemonDetails() {
      const { data } = await axios.get(`/api/pokemon/${id}`);
      setPokemon(data);
    }

    fetchPokemonDetails();
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>Type: {pokemon.type}</p>
      <p>Trainer: {pokemon.trainer}</p>
      <img src={pokemon.image} />

      <ul key={pokemon.Trainer.id}>
        <li>
          {pokemon.Trainer.firstName} - {pokemon.Trainer.lastName} - {pokemon.Trainer.team}
        </li>
        <li>
          <img src={pokemon.Trainer.imageURL} />
        </li>
      </ul>
    </div>
  );
}
