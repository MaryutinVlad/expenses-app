const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [3, 'minimum length is 3 characters'],
    maxLength: [20, 'maximum length is 20 characters'],
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    minLength: [6, 'password is too short'],
    select: false
  },
  expenses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Expense'
  }],
  timestamps: {}
})

module.exports = mongoose.model('User', userSchema)