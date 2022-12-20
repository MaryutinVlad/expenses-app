const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/users')

module.exports.signUp = async (req, res) => {

  const password = await bcrypt.hash(req.body.password, 10)
  const user = new User({...req.body, password: password})

  await user.save()
  return res.json(await User.findOne(user))
}

module.exports.login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({email}).select('+password')
  const isMatched = bcrypt.compare(password, user.password)

  if (isMatched) {
    const token = jwt.sign({
      name: user.name,
      email: user.email
    },
    process.env.SECRET,
    { expiresIn: '3d'})

    return res.json({token})
  }
}

module.exports.logOut = async () => {
  req.headers['authorization'] = ''
  req.user = null
  return res.json('Logged out')
}

module.exports.getUser = async (req, res) => {
  const user = jwt.verify(req.params.token, process.env.SECRET)
  return res.json(await User.findOne({ email: user.email }))
}