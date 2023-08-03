// const Sequelize = require("sequelize");
// const db = require("../db");
// const Trainer = require("./Trainer");

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
//     allowNull: false,
//   },
//   image: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
// });

// // const Trainer = require("./Trainer.js");

// Pokemon.belongsTo(Trainer);

// module.exports = Pokemon;

const Sequelize = require("sequelize");
const db = require("../db");
const Trainer = require("./Trainer");

const Pokemon = db.define("Pokemon", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  trainer: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

Pokemon.belongsTo(Trainer);

module.exports = Pokemon;
