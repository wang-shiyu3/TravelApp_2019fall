const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  site: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'site'
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Blog = mongoose.model('blog', BlogSchema)
