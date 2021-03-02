const User = require('../model/users')
const bcrypt = require('bcryptjs')
const registerController = {}

registerController.register = async (req, res) => {
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(req.body.password, salt)

  const user = new User({
    username: req.body.username,
    password: hashPassword
  })
  try {
    const savedUser = await user.save()
    res.status(201).send(savedUser)
  } catch (err) {
    res.status(400).send(err)
  }
}

module.exports = registerController
