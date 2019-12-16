const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  blog: {
    type: Schema.Types.ObjectId,
    ref: 'blog'
  },
  site: {
    type: Schema.Types.ObjectId,
    ref: 'site'
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Comment = mongoose.model('comment', CommentSchema)
