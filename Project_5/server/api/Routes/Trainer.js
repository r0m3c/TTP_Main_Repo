const express = require("express");
const router = express.Router();
const {Trainer} = require("../../db/index");
const {Pokemon} = require("../../db/index");

// Get all trainers
router.get("/", async (req, res, next) => {
    try {
      const trainers = await Trainer.findAll();
      res.send(trainers);
    } catch (err) {
      next(err);
    }
});

// Get a single trainer
router.get("/:id", async (req, res, next) => {
    try {
      const trainer = await Trainer.findOne({
        where: { id: req.params.id },
        attributes: ["id", "firstName", "lastName", "team", "imageURL", "createdAt"],
        include: {
          model: Pokemon,
          attributes: ["id", "name", "type", "trainer", "image", "createdAt"], 
        },
      });
  
      console.log(trainer);
  
      res.send(trainer);
    } catch (err) {
      next(err);
    }
});

// Post a Trainer
router.post("/", async (req, res) => {
    try {
        const newTrainer = await Trainer.create(req.body);
        res.json(newTrainer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.put("/:id", async (req, res) => {
    try {
      const trainer = await Trainer.findByPk(req.params.id);
      if (trainer) {
        await trainer.update(req.body);
        res.json(trainer);
      } else {
        res.status(404).send("Trainer not found");
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
  
router.delete("/:id", async (req, res) => {
    try {
      const trainer = await Trainer.findByPk(req.params.id);
      if (trainer) {
        await trainer.destroy();
        res.status(204).send();
      } else {
        res.status(404).send("Trainer not found");
      }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;