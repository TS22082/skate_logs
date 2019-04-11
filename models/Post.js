const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],

  pictures: [
    {
      img: {
        type: Buffer,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      },
      name: {
        type: String
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],

  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Post = mongoose.model('post', PostSchema)
