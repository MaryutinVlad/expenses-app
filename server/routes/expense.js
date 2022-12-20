const expenseRouter = require('express').Router()

const {
  getExpenses,
  createItemOfExpenditure,
  deleteItemOfExpenditure,
  addExpense,
  deleteExpense
} = require('../controllers/expense')

expenseRouter.get('/', getExpenses)

expenseRouter.post('/', createItemOfExpenditure)

expenseRouter.delete('/:id', deleteItemOfExpenditure)

expenseRouter.put('/:id', addExpense)

expenseRouter.delete('/:id/pop', deleteExpense)

module.exports = expenseRouter