const express = require("express");
const router = express.Router();
const Trainer = require("../models/Trainer");

router.get("/", async (req, res) => {
    try {
      const trainers = await Trainer.findAll();
      res.json(trainers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
});
  
router.get("/:id", async (req, res) => {
    try {
      const trainer = await Trainer.findByPk(req.params.id);
      if (trainer) {
        res.json(trainer);
      } else {
        res.status(404).send("Trainer not found");
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
});
  
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