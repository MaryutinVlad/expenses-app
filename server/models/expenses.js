const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
  name: String,
  entries: [{
    title: String,
    value: {
      type: Number,
      required: true
    },
    created: {
      type: Date,
      default: Date.now
    }
  }]
})

module.exports = mongoose.model('Expense', expenseSchema)