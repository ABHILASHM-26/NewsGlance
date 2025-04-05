const express = require("express");
const {createArticle, getAllArticles, getArticleById, updateArticle, deleteArticle,} = require("../controllers/articlesController");

const router = express.Router();

router.post("/add", createArticle);
router.get("/getall", getAllArticles);
router.get("/getby/:id", getArticleById);
router.put("/update/:id", updateArticle);
router.delete("/delete/:id", deleteArticle);

module.exports = router;
