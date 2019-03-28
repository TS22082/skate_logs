const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  street: {
    type: String
  },
  zip: {
    type: String
  },
  longitude: {
    type: String
  },
  latitude: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Post = mongoose.model('post', PostSchema)
