require("dotenv").config();
const express = require("express");

const app = express();

// get all tenants
app.get("/tenants", (req, res) => {

});

// get single tenant
app.get("/tenants/:id", (req, res) => {

});

// create tenent
app.post("/tenants", (req, res) => {

});

// update tenant
app.put("/tenants/:id", (req, res) => {

});

// delete tenant
app.delete("/tenants/:id", (req, res) => {

});

const PORT = process.env.PORT || 2006;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});