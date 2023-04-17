const express = require("express");
const budget = express.Router();
const budgetArray = require("../models/budget-model");

// GET ALL
budget.get("/", (req, res) => {
    if (res) {
        res.status(202).json(budgetArray);
    } else {
        res.status(400).json({ error: "Model not found" });
    }
});

// INDIVIDUAL LOG
budget.get("/:id", (req, res) => {
    const { id } = req.params;
    const budget = budgetArray[id];

    if (budget) {
        res.status(202).json(budget);
    } else {
        res.redirect(302, "/*");
    }
})

// CREATE
budget.post("/", (req, res) => {
    const newBudgetLog = req.body;
    budgetArray.push(newBudgetLog);
    res.status(202).json({ success: true, payload: budgetArray });
});

// UPDATE
budget.put("/:id", (req, res) => {
    const { id } = req.params;
    const updatedBudgetLog = req.body;

    if (budgetArray[id]) {
        budgetArray[id] = updatedBudgetLog;
        res.status(202).json({ success: true, payload: budgetArray[id] });
    } else {
        res.status(404).json({ success: false, error: `There is no log with the id of ${id}` });
    }
})

// DELETE
budget.delete("/:id", (req, res) => {
    const { id } = req.params;

    if (budgetArray[id]) {
        const deletedBudgetLog = budgetArray.splice(id, 1);
        res.status(202).json({ success: true, payload: deletedBudgetLog });
    } else {
        res.status(404).json({ success: false, error: `There is no log with the id of ${id}` });
    }
});

module.exports = budget;
