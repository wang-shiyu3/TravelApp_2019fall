const mongoose = require('mongoose')

const SiteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
  // blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'blog' }]
})

module.exports = Site = mongoose.model('site', SiteSchema)
