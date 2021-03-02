const express = require('express')
const routes = express.Router()
const verify = require('../middleware/verifyUser')
const fishController = require('../controller/fishController')
// get links
routes.get('/', fishController.index)

// get all fishes
routes.get('/all', fishController.getAll)
// save new fish
routes.post('/', verify, fishController.addOne)
// get specific fish
routes.get('/:Id', fishController.getOne)
// delete a fish
routes.delete('/:Id', verify, fishController.deleteOne)
// update one
routes.patch('/:Id', verify, fishController.updateOne)

module.exports = routes
