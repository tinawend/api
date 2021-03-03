const User = require('../model/users')
const bcrypt = require('bcryptjs')
var WebHooks = require('node-webhooks')

var webHooks = new WebHooks({
  db: './webHooksDB.json' // json file that store webhook URLs
})
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
    res.status(201).json(savedUser)
    webHooks.trigger('registerWebhook', savedUser)
  } catch (err) {
    res.status(400).send(err)
  }
}

registerController.webhook = (req, res) => {
  webHooks.add('registerWebhook', 'https://localhost:4000/api/user/register').then(function () {
    // done
    res.status(200).send('webhook added')
  }).catch(function (err) {
    res.status(400).send(err)
  })
}

module.exports = registerController