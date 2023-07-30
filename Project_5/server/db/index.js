const { db } = require("./db");
const Sequelize = require("sequelize");
const Pokemon = require("./models/Pokemon");
const Trainer = require("./models/Trainer");

// place your associations here!
Pokemon.belongsTo(Trainer);
Trainer.hasMany(Pokemon);

// export your models below

module.exports = {
  db,
  Pokemon,
  Trainer
};



// Without using the models folder
// const { db } = require("./db");
// const Sequelize = require("sequelize");

// // require each of your models
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
//   image: {
//     type: Sequelize.STRING,
//     allowNull: true,
//     defaultValue: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png",
//   },
// });

// const Trainer = db.define("Trainer", {
//   firstName: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   lastName: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   team: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   imageURL: {
//     type: Sequelize.STRING,
//     allowNull: true,
//     defaultValue: "https://w7.pngwing.com/pngs/591/992/png-transparent-pokemon-platinum-unown-exclamation-mark-pokemon-trainer-unown-pokemon-celebi-technology-thumbnail.png",
//   },
// });

// // place your associations here!
// Pokemon.belongsTo(Trainer);
// Trainer.hasMany(Pokemon);

// // export your models below

// module.exports = {
//   db,
//   Pokemon,
//   Trainer
// };
