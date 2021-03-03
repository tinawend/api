const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 4000
const cors = require('cors')
const https = require('https')
const registerRoutes = require('./routes/registerRoute')
const fishRoutes = require('./routes/fishDataRoute')
const authenticationRoutes = require('./routes/authenticationRoute')
const homeRoutes = require('./routes/homeRoute')
const webhook = require('./routes/webhook')
const fs = require('fs')
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

app.use('/api/users/register', registerRoutes)
app.use('/api/users/login', authenticationRoutes)
app.use('/api/fish', fishRoutes)
app.use('/api', homeRoutes)
app.use('/api/webhook', webhook)

https.createServer({
  key: fs.readFileSync('./ssl/server.key'),
  cert: fs.readFileSync('./ssl/server.cert')
}, app).listen(port)

console.log('RESTful API server started on: ' + port)

app.use((req, res, next) => {
  res.status(404).send('Not found')
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something went wrong!')
})
