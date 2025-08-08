import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sign from './components/Sign';
import News from './components/News';
import Profile from './components/Profile';
import ReportNews from './components/ReportNews';
import Footer from './components/Footer'; 
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userName = localStorage.getItem('userName');
    if (token && userName) {
      setUser(userName);
    }
  }, []);

  const hideNavbar = location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <div className="app-wrapper">
      {!hideNavbar && (
        <Navbar
          setUser={setUser}
          onSearch={(query) => setSearchQuery(query)}
        />
      )}

      <div className="app-content">
        <Routes>
          <Route path="/signin" element={<Sign setUser={setUser} />} />
          <Route path="/signup" element={<Sign setUser={setUser} />} />

          {user ? (
            <>
              <Route path="/" element={<News searchQuery={searchQuery} />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/report" element={<ReportNews />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/signin" replace />} />
          )}
        </Routes>
      </div>

      {}
      <Footer />
    </div>
  );
}

export default App;
