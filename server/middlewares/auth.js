const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const authorization = req.headers['authorization']

  if (!authorization) {
    return res.status(401).send('Unauthorized. Token is missing')
  }

  const token = authorization.replace('Bearer ', '')
  let payload
  
  try {
    payload = jwt.verify(token, process.env.SECRET)
    if (payload) {
      req.user = payload
      return next()
    }
  } catch(err) {
    return res.status(401).send(err)
  }
}