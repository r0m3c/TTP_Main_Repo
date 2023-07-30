import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Trainer() {
  const [trainer, setTrainer] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchTrainerDetails() {
      const { data } = await axios.get(`/api/trainer/${id}`);
      setTrainer(data);
    }

    fetchTrainerDetails();
  }, [id]);

  if (!trainer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{trainer.firstName}</h2>
      <h2>{trainer.team}</h2>
      <img src={trainer.imageURL} />
      <ul>
        {trainer.Pokemons.map((pokemon) => (
          <ul key={pokemon.id}>
            <li>
              {pokemon.name} - {pokemon.type} - {pokemon.trainer}
            </li>
            <li>
              <img src={pokemon.image} />
            </li>
          </ul>
        ))}
      </ul>
    </div>
  );
}
