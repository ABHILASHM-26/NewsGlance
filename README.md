#  NewsGlance

**NewsGlance** is a MERN full-stack news application that allows users to browse the latest headlines, report their own articles, and manage their profile.

## Live Demo

- Frontend: [https://newsglance-frontend.onrender.com](https://newsglance-frontend.onrender.com)
- Backend: [https://newsglance-backend.onrender.com](https://newsglance-backend.onrender.com)

##  Features

- User Authentication (Login / Register)
-  View latest articles from NewsAPI & MongoDB
-  Submit your own news (stored in MongoDB)
-  Search bar for filtering articles
-  Responsive UI
-  Built using MERN stack (MongoDB, Express, React, Node.js)

## Tech Stack

| Frontend      | Backend         | Database        |
| ------------- | --------------- | --------------- |
| React.js      | Node.js, Express| MongoDB Atlas   |
| Node.js , CSS | RESTful API     | Mongoose ORM    |

## Folder Structure

NewsGlance/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js, App.css
│   │   └── index.js
│   └── .env

## Getting Started Locally

### Prerequisites

- Node.js & npm
- MongoDB Atlas URI
- News API Key

### Backend Setup

cd backend
npm install
# Create .env file and add:
# MONGO_URI=your_mongo_uri
# PORT=5005
# JWT_SECRET=your_secret
# NEWS_API_KEY=your_api_key
npm start

### Frontend Setup

cd frontend
npm install
# Create .env file and add:
# REACT_APP_API_URL=http://localhost:5005 (for local machine setup)
npm start

## Contact

If you have any questions, suggestions, or would like to collaborate, feel free to reach out:

- **Name**:  Abhilash M

- **Email**: abhilashm1344@gmail.com

- **Phone**: +91-9014578545

- **LinkedIn**: [https://www.linkedin.com/in/Abhilash M](https://www.linkedin.com/in/abhilashmellacheruvu/)

- **GitHub**: [github.com/ABHILASHM-26](https://github.com/ABHILASM-26)
