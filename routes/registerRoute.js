const express = require('express')
const routes = express.Router()
const User = require('../model/users')
const fetch = require('node-fetch')
routes.get('/', async (req, res) => {
  try {
    const fetched = await fetch('http://56a40c3e9076.ngrok.io/fish')
    const result = fetched.json()
    console.log(result)
  } catch (err) {
    res.json({ message: err })
  }
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
