const express = require("express");
const app = express();
const morgan = require("morgan");
const pokemon = require('./pokebank.js');

const allPokemons = pokemon.list();
console.log(allPokemons);

app.use(morgan("dev"));
app.use(express.static('public'));
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send("Internal Server Error");
});

app.get("/", (req, res) => {
    res.send(
        `<!DOCTYPE html>
        <html>
        <head>
            <title>My Pokedex</title>
            <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
            <div class="pokemon-list">
            <header><img src="/pokedex.png" /></header>
            <h1>Pokedex</h1>
            <br>
            <hr>
            ${allPokemons.map((pokemon) => `
                <div class="pokemon-item">
                    <a href="/pokemon/${pokemon.id}">
                    <span class="pokemon-position">${pokemon.id}. ▲</span>${pokemon.name}
                    </a> <br>
                    <img src="${pokemon.image}" />
                    <p>
                    <small>(Trained by ${pokemon.trainer})</small>
                    </p>
                    <small class="pokemon-info">
                    Type: ${pokemon.type} <br> Date Caught: ${pokemon.date.toLocaleDateString()}
                    </small>
                </div>
            `
                )
                .join("")}
            </div>
        </body>
        </html>
        `
    );
});

app.get("/pokemon/:id", (req, res) => {
    const pokemonId = req.params.id;
    console.log("pokemonId",pokemonId)
    const pokemon = allPokemons.find((pokemon) => pokemon.id === parseInt(pokemonId));
    console.log("pokemon",pokemon);
    if (!pokemon) {
      res.status(404).send("Pokemon not found");
    } else {
        res.send(
            `<!DOCTYPE html>
            <html>
            <head>
                <title>My Pokedex</title>
                <link rel="stylesheet" href="/style.css" />
            </head>
            <body>
                <div class="a-view">
                    <a href="/">
                    Go back
                    </a>
                </div>
                <div class="pokemon-list">
                <header><img src="/pokedex.png" /></header>
                <h1>Pokedex</h1>
                <hr>
                <br>
                    <div class="pokemon-item">
                        <h2>${pokemon.name}</h2>
                        <img src="${pokemon.image}" />
                        <p>${pokemon.type}</p>
                        <p>${pokemon.trainer}</p>
                        <p>${pokemon.date.toLocaleDateString()}</p>
                    </div>
                </div>
            </body>
            </html>`
        )
        }
}   );

const PORT = 2003;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});