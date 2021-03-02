const express = require('express')
const routes = express.Router()
const Fish = require('../model/fish')
const verify = require('../middleware/verifyUser')

// get links
routes.get('/', (req, res) => {
  res.status(200).json({
    links: {
      self: { href: '/api/fish', method: 'GET', desc: 'Fish starting point, here you will get all links within fish' },
      allFishes: { href: '/api/fish/all', method: 'GET', desc: 'get all fishes' },
      specificFish: { href: '/api/fish/:Id', method: 'GET', desc: 'get a specifik fish, by using the _id for a fish' },
      createFish: {
        href: '/api/fish',
        method: 'POST',
        desc: 'url to add a new fish, please change values to your own information',
        headers: { xaccesstoken: 'yourToken' },
        body: {
          username: 'yourUsername',
          location: { type: 'Point', coordinates: [60.000000, -60.000000] },
          lake: 'lakeName',
          city: 'cityName',
          specie: 'nameOfFish',
          weight: 0,
          length: 0
        }
      },
      deleteFish: { href: '/api/fish/:Id', method: 'DELETE', desc: 'url to deleting a fish, delete a specific fish by using _id for the fish', headers: { xaccesstoken: 'yourToken' } }
    }
  })
})

// get all fishes
routes.get('/all', async (req, res) => {
  try {
    const fishes = await Fish.find()
    res.json(fishes)
  } catch (err) {
    res.json({ message: err })
  }
})
// save new fish
routes.post('/', verify, async (req, res) => {
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
// delete a fish
routes.delete('/:Id', verify, async (req, res) => {
  try {
    const removeFish = await Fish.remove({ _id: req.params.Id })
    res.json(removeFish)
  } catch (err) {
    res.json({ message: err })
  }
})

routes.patch('/:Id', verify, async (req, res) => {
  try {
    const updateFish = await Fish.updateOne({ _id: req.params.Id },
      { $set: { username: req.body.username } })
    res.json(updateFish)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = routes
