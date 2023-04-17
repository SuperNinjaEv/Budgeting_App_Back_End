const express = require("express");
const app = express();
const cors = require("cors");
const budgetController = require("./controllers/budget-controller");

app.use(express.json());
app.use(cors());

app.use("/budget", budgetController);

app.get("/", (req, res) => {
    res.send("Welcome to the Budget Back-end");
});

app.get("*", (req, res) => {
    res.status(404).json({ error: "Page not found." });
});

module.exports = app;
