
const express = require('express')
const routes = express.Router()
const loginController = require('../controller/loginController')

routes.post('/', loginController.login)

module.exports = routes
