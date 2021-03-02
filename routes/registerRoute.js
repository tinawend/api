const express = require('express')
const routes = express.Router()
const User = require('../model/users')
const bcrypt = require('bcryptjs')
// const fetch = require('node-fetch')

routes.post('/', async (req, res) => {
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
})

// const fetched = await fetch('http://56a40c3e9076.ngrok.io/fish')
// const result = fetched.json()
// console.log(result)

module.exports = routes
