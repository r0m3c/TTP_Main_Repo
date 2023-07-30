const router = require("express").Router();

// Connect your API routes here!

// Pokemon
const pokemonRoutes = require("./routes/Pokemon");
router.use("/pokemon", pokemonRoutes);

// Trainer
const trainerRoutes = require("./routes/Trainer");
router.use("/trainer", trainerRoutes);

module.exports = router;

// Without using Routes folder
// const { db } = require("../db");
// const {Pokemon, Trainer} = require("../db");

// // Get all pokemons
// router.get("/pokemon", async (req, res, next) => {
//     try {
//       const pokemons = await Pokemon.findAll();
//       res.send(pokemons);
//     } catch (err) {
//       next(err);
//     }
// });

// // Get a single Pokemon
// router.get("/pokemon/:id", async (req, res, next) => {
//     try {
//     //   const pokemon = await Pokemon.findOne({
//     //     where: { id: req.params.id }
//     //   });
//     const pokemon = await Pokemon.findOne({
//         where: { id: req.params.id },
//         attributes: ["id", "name", "type", "trainer", "image", "createdAt"], // Add other fields you want to fetch here
//     });
  
//       console.log(pokemon);
  
//       res.send(pokemon);
//     } catch (err) {
//       next(err);
//     }
// });

// // Post a Pokemon
// router.post("/pokemon", async (req, res) => {
//     try {
//         const newPokemon = await Pokemon.create(req.body);
//         res.json(newPokemon);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// // Create a route to update a Pokemon by ID
// router.put("/pokemon/:id", async (req, res) => {
//     try {
//         const pokemon = await Pokemon.findByPk(req.params.id);
//         if (pokemon) {
//             await pokemon.update(req.body);
//             res.json(pokemon);
//         } else {
//             res.status(404).send("Pokemon not found");
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// // Create a route to delete a Pokemon by ID
// router.delete("/pokemon/:id", async (req, res) => {
//     try {
//         const pokemon = await Pokemon.findByPk(req.params.id);
//         if (pokemon) {
//             await pokemon.destroy();
//             res.status(204).send();
//         } else {
//             res.status(404).send("Pokemon not found");
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// Trainer

// // Get all trainers
// router.get("/trainer", async (req, res, next) => {
//     try {
//       const trainers = await Trainer.findAll();
//       res.send(trainers);
//     } catch (err) {
//       next(err);
//     }
// });

// // Get a single trainer
// router.get("/trainer/:id", async (req, res, next) => {
//     try {
//       const trainer = await Trainer.findOne({
//         where: { id: req.params.id },
//         attributes: ["id", "firstName", "lastName", "team", "imageURL", "createdAt"],
//       });
  
//       console.log(trainer);
  
//       res.send(trainer);
//     } catch (err) {
//       next(err);
//     }
// });

// // Post a Trainer
// router.post("/trainer", async (req, res) => {
//     try {
//         const newTrainer = await Trainer.create(req.body);
//         res.json(newTrainer);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// router.put("/trainer/:id", async (req, res) => {
//     try {
//       const trainer = await Trainer.findByPk(req.params.id);
//       if (trainer) {
//         await trainer.update(req.body);
//         res.json(trainer);
//       } else {
//         res.status(404).send("Trainer not found");
//       }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });
  
// router.delete("/trainer/:id", async (req, res) => {
//     try {
//       const trainer = await Trainer.findByPk(req.params.id);
//       if (trainer) {
//         await trainer.destroy();
//         res.status(204).send();
//       } else {
//         res.status(404).send("Trainer not found");
//       }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });

// 

// module.exports = router;
