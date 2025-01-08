const {
  addExpense,
  deleteExpense,
  getExpense,
} = require("../controllers/expense");

const {
  addIncome,
  getIncomes,
  deleteIncome,
} = require("../controllers/income");

const router = require("express").Router();

router.get("/get-incomes", getIncomes);
router.get("/get-expenses", getExpense);

router.post("/add-income", addIncome);
router.post("/add-expense", addExpense);

router.delete("/delete-income/:id", deleteIncome);
router.delete("/delete-expense/:id", deleteExpense);

module.exports = router;
