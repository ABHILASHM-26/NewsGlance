import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import Card from './Card';
import '../App.css';

const News = ({ searchQuery }) => {
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        const mongoRes = await axios.get('http://localhost:5005/api/articles/getall');
        const mongoArticles = mongoRes.data.map(article => ({
          title: article.title || 'No Title',
          description: article.description || 'No Description',
          imageUrl: article.imageUrl?.startsWith('http') ? article.imageUrl : 'https://picsum.photos/300/200?grayscale',
          link: article.link || '#',
        }));

        const newsApiRes = await axios.get('http://localhost:5005/api/articles/newsapi');
        const apiArticles = (newsApiRes.data || []).map(article => ({
          title: article.title || 'No Title',
          description: article.description || 'No Description',
          imageUrl: article.urlToImage || 'https://via.placeholder.com/300x200?text=No+Image',
          link: article.url || '#',
        }));

        setAllArticles([...mongoArticles, ...apiArticles]);
        setLoading(false);
      } catch (err) {
        console.error('News fetch error:', err.message);
        setError('Failed to fetch news');
        setLoading(false);
      }
    };

    fetchAllNews();
  }, []);

  const filteredArticles = searchQuery
    ? allArticles.filter(article =>
        (article?.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
        (article?.description || '').toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allArticles;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-gray-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-8">
      <div className="card-grid">
        {filteredArticles.map((article, index) => (
          <Card
            key={index}
            title={article.title}
            text={article.description}
            imageUrl={article.imageUrl}
            link={article.link}
          />
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          <p>No articles found matching "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
};

export default News;
