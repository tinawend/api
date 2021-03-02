const express = require('express')
const routes = express.Router()

// get all fishes
routes.get('/', async (req, res) => {
  const baseURL = 'http://localhost' + req.baseUrl
  req.nextURL = baseURL + '/register'
  //   console.log(req.nextURL)
  res.status(200).send('Go to: ' + req.nextURL)
})

module.exports = routes
