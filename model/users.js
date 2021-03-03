const mongoose = require('mongoose')

const Schema = mongoose.Schema

mongoose.set('useCreateIndex', true)

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

const User = mongoose.model('User', UserSchema)
module.exports = User
