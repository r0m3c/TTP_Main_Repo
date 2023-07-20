const express = require('express');
const app = express();
const morgan = require('morgan');
const catRouter = require("./cats")

app.use((req,res,next) => {
    console.log("Time: ", Date.now());
    next();
});

app.use(morgan('tiny'));

// cats router
app.use("/cats", catRouter);

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.get("/books/:bookId/users/:userId", (req, res) => {
    res.send(req.params)
});

// app.post("/", (req, res) => {
//     res.send("this is a post request");
// });

// app.put("/", (req, res) => {
//     res.send("this is a put request");
// });

// app.delete("/", (req, res) => {
//     res.send("this is a delete request");
// });

// router
// app.get("/cats", (req, res) => {
//     res.send("cats (GET)");
// });

// app.post("/cats", (req, res) => {
//     res.send("cats (POST)");
// });

// app.put("/cats", (req, res) => {
//     res.send("cats (PUT)");
// });

// app.delete("/cats", (req, res) => {
//     res.send("cats (DELETE)");
// });

app.listen(2000, () => {
    console.log('Example app listening on port 2000!');
});