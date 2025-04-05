const Article = require("../models/Article");

// Create a new article
const createArticle = async (req, res) => {
  try {
    const { heading, image, description, link } = req.body;
    const newArticle = new Article({ heading, image, description, link });
    await newArticle.save();
    res.status(201).json({ message: "Article created successfully", article: newArticle });
  } catch (error) {
    res.status(500).json({ message: "Error creating article", error: error.message });
  }
};

// Get all articles
const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching articles", error: error.message });
  }
};

// Get a single article by ID
const getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ message: "Error fetching article", error: error.message });
  }
};

// Update an article by ID
const updateArticle = async (req, res) => {
  try {
    const { heading, image, description, date, time } = req.body;
    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      { heading, image, description, date, time },
      { new: true, runValidators: true }
    );
    if (!updatedArticle) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.status(200).json({ message: "Article updated successfully", article: updatedArticle });
  } catch (error) {
    res.status(500).json({ message: "Error updating article", error: error.message });
  }
};

// Delete an article by ID
const deleteArticle = async (req, res) => {
  try {
    const deletedArticle = await Article.findByIdAndDelete(req.params.id);
    if (!deletedArticle) {
      return res.status(404).json({ message: "Article not found" });
    }
    res.status(200).json({ message: "Article deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting article", error: error.message });
  }
};

module.exports = {
  createArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
};
