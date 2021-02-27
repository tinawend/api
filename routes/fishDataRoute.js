const express = require('express')
const routes = express.Router()
const Fish = require('../model/fish')

// get all fishes
routes.get('/', async (req, res) => {
  try {
    const fishes = await Fish.find()
    res.json(fishes)
  } catch (err) {
    res.json({ message: err })
  }
  res.send('fish')
})
// save new fish
routes.post('/', async (req, res) => {
  const fish = new Fish({
    username: req.body.username,
    location: req.body.location,
    lake: req.body.lake,
    city: req.body.city,
    specie: req.body.specie,
    weight: req.body.weight,
    length: req.body.length,
    imageUrl: req.body.imageUrl,
    time: req.body.time
  })
  try {
    const savedFish = await fish.save()
    res.json(savedFish)
  } catch (err) {
    res.json({ message: err })
  }
})
// get specific fish
routes.get('/:Id', async (req, res) => {
  try {
    const fish = await Fish.findById(req.params.Id)
    res.json(fish)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = routes
