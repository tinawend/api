const User = require('../model/users')
const bcrypt = require('bcryptjs')
var WebHooks = require('node-webhooks')

var webHooks = new WebHooks({
  db: './webHooksDB.json'
})
const registerController = {}
// register a user
registerController.register = async (req, res) => {
  const existingUser = await User.findOne({ username: req.body.username })
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(req.body.password, salt)
  if (existingUser) {
    res.status(400).send('try to register with a different username')
  }
  const user = new User({
    username: req.body.username,
    password: hashPassword
  })
  try {
    const savedUser = await user.save()
    res.status(201).json(savedUser)
    webHooks.trigger('registerWebhook', savedUser)
  } catch (err) {
    res.status(400).send(err)
  }
}
// add a webhook (following guide on npm site)
registerController.webhook = (req, res) => {
  webHooks.add('registerWebhook', 'https://localhost:4000/api/users/register').then(function () {
    res.status(200).send('webhook added')
  }).catch(function (err) {
    res.status(400).send(err)
  })
}

module.exports = registerController
