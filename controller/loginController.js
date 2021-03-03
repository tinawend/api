const User = require('../model/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const loginController = {}

loginController.login = async (req, res) => {
  const user = await User.findOne({ username: req.body.username })
  if (!user) {
    return res.status(400).send('username or password is incorrect')
  }
  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if (!validPassword) {
    return res.status(400).send('username or password is incorrect')
  }
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)

  res.header('auth-token', token).send(token)
}
module.exports = loginController
