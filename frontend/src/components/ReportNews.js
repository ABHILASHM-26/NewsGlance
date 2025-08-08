import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';

const ReportNews = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/api/articles/report`, {
        title,
        description,
        link,
        imageUrl
      });
      alert('News reported successfully!');
      setTitle('');
      setDescription('');
      setLink('');
      setImageUrl('');
    } catch (err) {
      console.error('Failed to report news:', err);
      alert('Error reporting news.');
    }
  };

  return (
    <div className="min-h-screen d-flex justify-content-center align-items-center report-container">
      <div className="card p-4" style={{ maxWidth: '600px', width: '100%' }}>
        <h2 className="text-center mb-4">Report News Article</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="form-control mb-3"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="News Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ReportNews;
