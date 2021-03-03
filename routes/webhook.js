const express = require('express')
const routes = express.Router()
const registerController = require('../controller/registerController')

routes.post('/', registerController.webhook)
module.exports = routes
