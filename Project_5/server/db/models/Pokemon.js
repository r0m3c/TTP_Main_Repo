const Sequelize = require("sequelize");
const {db} = require("../db");
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
    image: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png",
    },
});

module.exports = Pokemon;