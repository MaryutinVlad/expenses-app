const userRouter = require('express').Router()
const { signUp, login, logOut, getUser, getAny } = require('../controllers/user')

userRouter.post('/sign-up', signUp)

userRouter.post('/login', login)

userRouter.delete('/log-out', logOut)

userRouter.get('/:token', getUser)

userRouter.get('/', getAny)

module.exports = userRouter