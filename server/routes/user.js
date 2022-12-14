const userRouter = require('express').Router()
const { signUp, login, logOut } = require('../controllers/user')

userRouter.post('/sign-up', signUp)

userRouter.post('/login', login)

userRouter.delete('/log-out', logOut)

module.exports = userRouter