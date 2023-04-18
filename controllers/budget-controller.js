// REQUIRES
const express = require("express");
const transaction = express.Router();
const transactionArray = require("../models/budget-model");

// GET ALL
transaction.get("/", (req, res) => {
    if (res) {
        res.status(202).json(transactionArray);
    } else {
        res.status(400).json({ error: "Model not found" });
    }
});

// INDIVIDUAL LOG
transaction.get("/:id", (req, res) => {
    const { id } = req.params;
    const transaction = transactionArray[id];

    if (transaction) {
        res.status(202).json(transaction);
    } else {
        res.redirect(302, "/*");
    }
})

// CREATE
transaction.post("/", (req, res) => {
    const newtransactionLog = req.body;
    transactionArray.push(newtransactionLog);
    res.status(202).json({ success: true, payload: transactionArray });
});

// UPDATE
transaction.put("/:id", (req, res) => {
    const { id } = req.params;
    const updatedtransactionLog = req.body;

    if (transactionArray[id]) {
        transactionArray[id] = updatedtransactionLog;
        res.status(202).json({ success: true, payload: transactionArray[id] });
    } else {
        res.status(404).json({ success: false, error: `There is no log with the id of ${id}` });
    }
})

// DELETE
transaction.delete("/:id", (req, res) => {
    const { id } = req.params;

    if (transactionArray[id]) {
        const deletedtransactionLog = transactionArray.splice(id, 1);
        res.status(202).json({ success: true, payload: deletedtransactionLog });
    } else {
        res.status(404).json({ success: false, error: `There is no log with the id of ${id}` });
    }
});

module.exports = transaction;
