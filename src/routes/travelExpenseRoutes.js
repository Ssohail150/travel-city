const express = require("express");
const router = express.Router();

const{ createTravelExpense,} = require("../controllers/travelExpenseController");

router.post('/', createTravelExpense);

module.exports = router