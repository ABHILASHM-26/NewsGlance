const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  link: {
    type: String,
    required: false,
  },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
