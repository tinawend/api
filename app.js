const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 4000
const registerRoutes = require('./routes/registerRoute')
const fishRoutes = require('./routes/fishDataRoute')
require('dotenv').config()
mongoose.connect(`${process.env.DB_LINK}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('open')
})

db.on('connected', () => {
  console.log('Opened conection')
})
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/register', registerRoutes)
app.use('/fish', fishRoutes)

app.listen(port)

console.log('RESTful API server started on: ' + port)