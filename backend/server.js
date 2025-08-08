const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const articlesRoutes = require("./routes/articles");
const authRoutes = require("./routes/auth");

dotenv.config();

const app = express();


const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'https://newsglance-frontend.onrender.com'
];

app.use(cors({
  origin: function (origin, callback) {
    
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {})
  .then(() => console.log(" MongoDB connected successfully"))
  .catch((err) => console.error(" MongoDB connection error:", err));


app.get("/", (req, res) => {
  res.send("Welcome to the News Application API");
});

app.use("/api/articles", articlesRoutes);
app.use("/api/auth", authRoutes);


const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(` Server started on port ${PORT}`);
});
