require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/user')
const expenseRouter = require('./routes/expense')
const auth = require('./middlewares/auth')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/expenses-app')
mongoose.set('strictQuery', false)

app.use('/auth', userRouter)
app.use('/expenses', auth ,expenseRouter)

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT}`)
})