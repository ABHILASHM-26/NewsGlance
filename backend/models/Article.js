const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: String,
  description: String,
  link: String,
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Article', articleSchema);
