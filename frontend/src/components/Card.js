import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, text, imageUrl, link }) => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      if (link.startsWith('http') || link.startsWith('www')) {
        // Open external links in a new tab
        window.open(link, '_blank', 'noopener,noreferrer');
      } else {
        // Navigate to internal routes
        navigate(link);
      }
    };
  
    return (
      <div
        onClick={handleClick}
        className="bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-95 cursor-pointer"
      >
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-gray-600 line-clamp-3">{text}</p>
        </div>
      </div>
    );
  };
  
  export default Card;