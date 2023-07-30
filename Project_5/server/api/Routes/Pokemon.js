const express = require("express");
const router = express.Router();
const {Pokemon} = require("../../db/index");
const {Trainer} = require("../../db/index");


// Get all pokemons
router.get("/", async (req, res, next) => {
    try {
      const pokemons = await Pokemon.findAll();
    //   console.log(pokemons);
      res.send(pokemons);
    } catch (err) {
        next(err);
    }
});

// Get a single Pokemon
router.get("/:id", async (req, res, next) => {
    try {
        const pokemon = await Pokemon.findOne({
            where: { id: req.params.id },
            attributes: ["id", "name", "type", "trainer", "image", "createdAt"],
            include: [
                {
                  model: Trainer,
                  attributes: ["id", "firstName", "lastName", "team", "imageURL", "createdAt"],
                },
            ],
        });
  
      console.log(pokemon);
  
      res.send(pokemon);
    } catch (err) {
        next(err);
    }
});

// Post a Pokemon
router.post("/", async (req, res) => {
    try {
        const newPokemon = await Pokemon.create(req.body);
        res.json(newPokemon);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Create a route to update a Pokemon by ID
router.put("/:id", async (req, res) => {
    try {
        const pokemon = await Pokemon.findByPk(req.params.id);
        if (pokemon) {
            await pokemon.update(req.body);
            res.json(pokemon);
        } else {
            res.status(404).send("Pokemon not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Create a route to delete a Pokemon by ID
router.delete("/:id", async (req, res) => {
    try {
        const pokemon = await Pokemon.findByPk(req.params.id);
        if (pokemon) {
            await pokemon.destroy();
            res.status(204).send();
        } else {
            res.status(404).send("Pokemon not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;