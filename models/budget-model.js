// Your server should incorporate at least one table that, at minimum, includes:
// id - A unique number for each item
// item_name- string - the name of the transaction (ie: income, savings, cat food, etc.)
// amount -number - the amount of the transaction
// date- string - the date should be a simple string. As a bonus activity, use the date object and date input field and format it to be human-readable
// from - string - who this transaction was with (ie. employer, bank, pet store, grocery store, etc)
// category - string - what category does this fall into (income, savings, pets, food, etc)

module.exports = [
    {
        itemName: "income",
        from: "employer",
        amount: 5000,
        category: "income",
        date: [2023, 1, 10],
        id: 10001,
    },
    {
        itemName: "savings",
        from: "bank",
        amount: 500,
        category: "savings",
        date: [2023, 1, 11],
        id: 10002,
    },
    {
        itemName: "Car Insurance",
        from: "Geico",
        amount: 88,
        category: "bills",
        date: [2023, 1, 15],
        id: 10003,
    },
    {
        itemName: "Cell Phone",
        from: "T-mobile",
        amount: 155,
        category: "bills",
        date: [2023, 1, 24],
        id: 10004,
    },
];
