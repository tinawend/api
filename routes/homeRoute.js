const express = require('express')
const routes = express.Router()
const homeController = require('../controller/homeController')

// get links
routes.get('/', homeController.index)

module.exports = routes
