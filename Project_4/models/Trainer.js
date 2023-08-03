// const Sequelize = require("sequelize");
// const db = require("../db");
// const Pokemon = require("./Pokemon.js");

// const Trainer = db.define("Trainer", {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
// });

// Trainer.hasMany(Pokemon);

// module.exports = Trainer;

const Sequelize = require("sequelize");
const db = require("../db");
const Pokemon = require("./Pokemon.js");

const Trainer = db.define("Trainer", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});


module.exports = Trainer;