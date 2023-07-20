const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost/mydatabase");

const Dog = db.define("dog", {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    age: {
      type: Sequelize.INTEGER,
    },
});
  
// Define an async function to perform Sequelize operations
async function syncAndCreateDog() {
    try {
      // Sync the model with the database
      await Dog.sync();
  
      // Create a new dog instance
      const dog = await Dog.create({
        name: "summer", // makes sense 🤔
        age: 3,
      });
  
      console.log(dog); // { id: 5, name: "bear", age: 3 }
    } catch (error) {
      console.error("Error:", error.message);
    }
}

async function dogLoop() {
    const dogs = await Dog.findAll();

    // returns a array-like object that can be looped thru
    dogs.forEach((dog) => console.log(dog.name));
}

async function main() {
    try {
        // await syncAndCreateDog();
        await dogLoop();
        const dog2 = await Dog.findByPk(2);

        console.log(dog2.age); // displays dog age to terminal
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();