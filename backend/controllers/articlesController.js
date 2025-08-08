const Article = require("../models/Article");

const createArticle = async (req, res) => {
  try {
    const article = new Article(req.body);
    const saved = await article.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add article', error });
  }
};


const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find().sort({ publishedAt: -1 });
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching articles', error });
  }
};


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
