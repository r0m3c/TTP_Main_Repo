const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const axios = require("axios");
  
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/people", async (req, res) => {
  try {
    const response = await axios.get("https://swapi.dev/api/people/");
    res.send(response.data);
  } catch (error) {
    console.error("Error fetching data", error);
    res.status(500).send("Error fetching data from Star Wars API");
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});