const express = require('express')
const routes = express.Router()
const User = require('../model/users')

routes.get('/', async (req, res) => {
  // try {
  //   const users = await User.find()
  // } catch (err) {
  //   res.json({ message: err })
  // }
})

routes.post('/', async (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  })
  try {
    const savedUser = await user.save()
    res.json(savedUser)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = routes
