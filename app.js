const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 4000
const cors = require('cors')
const registerRoutes = require('./routes/registerRoute')
const fishRoutes = require('./routes/fishDataRoute')
const authenticationRoutes = require('./routes/authenticationRoute')
const homeRoutes = require('./routes/homeRoute')

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
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/user/register', registerRoutes)
app.use('/api/user/login', authenticationRoutes)
app.use('/api/fish', fishRoutes)
app.use('/api', homeRoutes)

app.listen(port)

console.log('RESTful API server started on: ' + port)
