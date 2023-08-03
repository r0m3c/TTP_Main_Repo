// require("dotenv").config();
// const express = require("express");
// const morgan = require("morgan");
// const app = express();
// const Sequelize = require("sequelize");
// // const db = require("./db");
// // const pokeBank = require("./pokeBank");
// // const pokeList = require("./views/pokeList");
// // const pokeDetails = require("./views/pokeDetails");

// // const Pokemon = require("./models/Pokemon");
// // const Trainer = require("./models/Trainer");

// app.use(morgan("dev"));
// app.use(express.static(__dirname + "/public"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// // 
// const db = new Sequelize(process.env.DATABASE_URL);

// const Pokemon = db.define("Pokemon", {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   type: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   trainer: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   date: {
//     type: Sequelize.DATE,
//   },
//   image: {
//     type: Sequelize.STRING,
//   },
// });

// const Trainer = db.define("Trainer", {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
// });

// Trainer.hasMany(Pokemon);
// Pokemon.belongsTo(Trainer);
// // 

// (async () => {
//   try {
//     await db.sync();
//     console.log("Models synced with database");
//   } catch (error) {
//     console.error(error);
//   }
// })();

// // Create a route to get all Pokemon.
// app.get("/pokemon", async (req, res) => {
//   try {
//     const pokemon = await Pokemon.findAll();
//     res.json(pokemon);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.get("/pokemon/:id", async (req, res) => {
//   try {
//     const pokemon = await Pokemon.findByPk(req.params.id);
//     if (pokemon) {
//       res.json(pokemon);
//     } else {
//       res.status(404).send("Pokemon not found");
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // Create a route to create a new Pokemon.
// app.post("/pokemon", async (req, res) => {
//   try {
//     const newPokemon = await Pokemon.create(req.body);
//     res.json(newPokemon);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // Create a route to update a Pokemon by ID
// app.put("/pokemon/:id", async (req, res) => {
//   try {
//     const pokemon = await Pokemon.findByPk(req.params.id);
//     if (pokemon) {
//       await pokemon.update(req.body);
//       res.json(pokemon);
//     } else {
//       res.status(404).send("Pokemon not found");
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // Create a route to delete a Pokemon by ID
// app.delete("/pokemon/:id", async (req, res) => {
//   try {
//     const pokemon = await Pokemon.findByPk(req.params.id);
//     if (pokemon) {
//       await pokemon.destroy();
//       res.status(204).send();
//     } else {
//       res.status(404).send("Pokemon not found");
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // Trainers
// app.get("/trainer", async (req, res) => {
//   try {
//     const trainers = await Trainer.findAll();
//     res.json(trainers);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.get("/trainer/:id", async (req, res) => {
//   try {
//     const trainer = await Trainer.findByPk(req.params.id);
//     if (trainer) {
//       res.json(trainer);
//     } else {
//       res.status(404).send("Trainer not found");
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.post("/trainer", async (req, res) => {
//   try {
//     const newTrainer = await Trainer.create(req.body);
//     res.json(newTrainer);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.put("/trainer/:id", async (req, res) => {
//   try {
//     const trainer = await Trainer.findByPk(req.params.id);
//     if (trainer) {
//       await trainer.update(req.body);
//       res.json(trainer);
//     } else {
//       res.status(404).send("Trainer not found");
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// app.delete("/trainer/:id", async (req, res) => {
//   try {
//     const trainer = await Trainer.findByPk(req.params.id);
//     if (trainer) {
//       await trainer.destroy();
//       res.status(204).send();
//     } else {
//       res.status(404).send("Trainer not found");
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// const PORT = process.env.PORT || 2008;
// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });


require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const Sequelize = require("sequelize");
const db = require("./db");

const Pokemon = require("./models/Pokemon");
const Trainer = require("./models/Trainer");

// Routes
const pokemonRoutes = require("./routes/pokemonRoutes");
const trainerRoutes = require("./routes/trainerRoutes");
// 

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async () => {
  try {
    await db.sync();
    console.log("Models synced with database");
  } catch (error) {
    console.error(error);
  }
})();


// Relationships
Trainer.hasMany(Pokemon);

// Pokemon
app.use("/pokemon", pokemonRoutes);

// Trainer
app.use("/trainer", trainerRoutes);


const PORT = process.env.PORT || 2008;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});