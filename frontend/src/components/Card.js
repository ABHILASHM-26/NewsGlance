import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Card = ({ title, text, imageUrl, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (typeof link === 'string') {
      if (link.startsWith('http') || link.startsWith('www')) {
        window.open(link, '_blank', 'noopener,noreferrer');
      } else {
        navigate(link);
      }
    } else {
      console.warn('Invalid or missing link:', link);
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <img
        src={imageUrl || 'https://via.placeholder.com/300x200?text=No+Image'}
        alt={title || 'News Image'}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
        }}
      />
      <div className="p-4 flex flex-col flex-1">
        <h5 className="text-lg font-semibold mb-1 text-gray-800 line-clamp-2">
          {title || 'Untitled Article'}
        </h5>
        <p className="text-sm text-gray-600 line-clamp-3 flex-grow">
          {text || 'No description available.'}
        </p>
        <div className="read-more">Read more</div>
      </div>
    </div>
  );
};

export default Card;
