const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Router cats (GET)");
});

router.post("/post", (req, res) => {
    res.send("Router cats (POST)");
});

router.put("/put", (req, res) => {
    res.send("Router cats (PUT)");
});

router.delete("/delete", (req, res) => {
    res.send("Router cats (DELETE)");
});

module.exports = router;