const Sequelize = require("sequelize");
const {db} = require("../db");

const Trainer = db.define("Trainer", {
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    team: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imageURL: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: "https://w7.pngwing.com/pngs/591/992/png-transparent-pokemon-platinum-unown-exclamation-mark-pokemon-trainer-unown-pokemon-celebi-technology-thumbnail.png",
    },
});

module.exports = Trainer;