const Fish = require('../model/fish')

const fishController = {}

// get links
fishController.index = (req, res) => {
  res.status(200).json({
    links: {
      self: { href: '/api/fish', method: 'GET', desc: 'Fish starting point, here you will get all links within fish' },
      allFishes: { href: '/api/fish/all', method: 'GET', desc: 'get all fishes' },
      specificFish: { href: '/api/fish/:Id', method: 'GET', desc: 'get a specifik fish, by using the _id for a fish' },
      createFish: {
        href: '/api/fish',
        method: 'POST',
        desc: 'url to add a new fish, please change values to your own information',
        headers: { key: 'auth-token', xaccesstoken: 'yourToken' },
        body: {
          user: 'yourUsername',
          location: { type: 'Point', coordinates: [60.000000, -60.000000] },
          lake: 'lakeName',
          city: 'cityName',
          specie: 'nameOfFish',
          weight: 0,
          length: 0
        }
      },
      deleteFish: { href: '/api/fish/:Id', method: 'DELETE', desc: 'url to deleting a fish, delete a specific fish by using _id for the fish', headers: { key: 'auth-token', xaccesstoken: 'yourToken' } },
      updateFish: {
        href: '/api/fish/:Id',
        method: 'PATCH',
        desc: 'url to updating a fish, use _id to update one',
        headers: { key: 'auth-token', xaccesstoken: 'yourToken' },
        body: {
          user: 'yourUsername',
          location: { type: 'Point', coordinates: [60.000000, -60.000000] },
          lake: 'lakeName',
          city: 'cityName',
          specie: 'nameOfFish',
          weight: 0,
          length: 0
        }
      }
    }
  })
}
// get all fish
fishController.getAll = async (req, res) => {
  try {
    const fishes = await Fish.find()
    res.status(200).json(fishes)
  } catch (err) {
    res.status(400).json({ message: err })
  }
}
// add a fish
fishController.addOne = async (req, res) => {
  const fish = new Fish({
    user: req.body.user,
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
    res.status(201).json(savedFish)
  } catch (err) {
    res.status(400).json({ message: err })
  }
}
// get specific fish
fishController.getOne = async (req, res) => {
  try {
    const fish = await Fish.findById(req.params.Id)
    res.json(fish)
  } catch (err) {
    res.status(400).json({ message: err })
  }
}
// delete a fish
fishController.deleteOne = async (req, res) => {
  try {
    const removeFish = await Fish.remove({ _id: req.params.Id })
    res.json(removeFish)
  } catch (err) {
    res.status(400).json({ message: err })
  }
}
// update a fish
fishController.updateOne = async (req, res) => {
  try {
    const updateFish = await Fish.updateOne({ _id: req.params.Id },
      {
        $set: {
          user: req.body.user,
          location: req.body.location,
          lake: req.body.lake,
          city: req.body.city,
          specie: req.body.specie,
          weight: req.body.weight,
          length: req.body.length,
          imageUrl: req.body.imageUrl,
          time: req.body.time
        }
      })
    res.json(updateFish)
  } catch (err) {
    res.status(400).json({ message: err })
  }
}

module.exports = fishController
