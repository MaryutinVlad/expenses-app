const Expense = require('../models/expenses')

module.exports.getExpenses = async (req, res) => {
  const data = await Expense.find({ owner: req.user })
  return res.json(data)
}

module.exports.createItemOfExpenditure = async (req, res) => {
  const itemOfExpenditure = new Expense({ name: req.body.name})

  await itemOfExpenditure.save()
  return res.json(await Expense.find(itemOfExpenditure))
}

module.exports.deleteItemOfExpenditure = async (req, res) => {
  const removedItem = await Expense.findByIdAndDelete({ _id: req.params.id })

  if (removedItem) {
    return res.json('Successfully removed')
  }

  return res.status(404).send('Not found')
}

module.exports.addExpense = async (req, res) => {
  const itemToUpdate = await Expense.findById({ _id: req.params.id })
  
  if (!itemToUpdate) {
    return res.status(404).send('Not found')
  }

  itemToUpdate.entries.push(req.body)

  await itemToUpdate.save()
  return res.json(await Expense.findById({ _id: req.params.id }))
}

module.exports.deleteExpense = async (req, res) => {
  const itemToUpdate = await Expense.findById({ _id: req.params.id })
  
  if (!itemToUpdate) {
    return res.status(404).send('Not found')
  }
  
  itemToUpdate.entries.pop()

  await itemToUpdate.save()
  return res.json(await Expense.findById({ _id: req.params.id }))
}
