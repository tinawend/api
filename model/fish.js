const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.set('useCreateIndex', true)

const FishSchema = new Schema({
  username: { type: String, required: true, unique: true },
  location: {
    type: {
      type: String,
      enum: ['Point']
    },
    coordinates: {
      type: [Number]
    }
  },
  lake: { type: String },
  city: { type: String },
  specie: { type: String },
  weight: { type: Number },
  length: { type: Number },
  imageUrl: {
    data: Buffer,
    contentType: String
  },
  time: { type: Date, default: Date.now }
})

const Fish = mongoose.model('Fish', FishSchema)
module.exports = Fish