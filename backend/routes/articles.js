const express = require('express');
const axios = require('axios');
const Article = require('../models/Article'); 
const {
  createArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
  deleteArticle
} = require('../controllers/articlesController');

const router = express.Router();


router.post('/add', createArticle);
router.get('/getall', getAllArticles);
router.get('/getby/:id', getArticleById);
router.put('/update/:id', updateArticle);
router.delete('/delete/:id', deleteArticle);


router.get('/newsapi', async (req, res) => {
  try {
    const response = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=us&pageSize=100&apiKey=2057fa2cc1a740aaa1771b5761d82562'
    );
    res.json(response.data.articles);
  } catch (error) {
    console.error('❌ Error fetching NewsAPI:', error.message);
    res.status(500).json({ message: 'Error fetching news', error: error.message });
  }
});


router.post('/report', async (req, res) => {
  try {
    const { title, description, link, imageUrl } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: 'Title and Description are required' });
    }

    const newArticle = new Article({
      title: title.trim(),
      description: description.trim(),
      link: link || '#',
      imageUrl: imageUrl || 'https://picsum.photos/300/200?grayscale'
    });

    await newArticle.save();

    return res.status(201).json({ message: 'Article reported successfully' });
  } catch (err) {
    console.error('❌ Error saving article:', err.message);
    return res.status(500).json({ message: 'Server error while submitting news' });
  }
});

module.exports = router;
