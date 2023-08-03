const express = require("express");
const router = express.Router();
const Pokemon = require("../models/Pokemon");

router.get("/", async (req, res) => {
    try {
      const pokemon = await Pokemon.findAll();
      res.json(pokemon);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
});
  
router.get("/:id", async (req, res) => {
    try {
        const pokemon = await Pokemon.findByPk(req.params.id);
        if (pokemon) {
        res.json(pokemon);
        } else {
        res.status(404).send("Pokemon not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Create a route to create a new Pokemon.
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