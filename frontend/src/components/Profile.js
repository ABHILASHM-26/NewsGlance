import React, { useEffect, useState } from 'react';
import '../App.css';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedUserName = localStorage.getItem('userName');
    if (storedEmail) setEmail(storedEmail);
    if (storedUserName) setUserName(storedUserName);
  }, []);

  return (
    <div className="min-h-screen d-flex justify-content-center align-items-center profile-container">
      <div className="card p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-center mb-4">User Profile</h2>
        <div className="mb-3">
          <strong>Username:</strong>
          <div className="text-muted">{userName || 'Not available'}</div>
        </div>
        <div className="mb-3">
          <strong>Email:</strong>
          <div className="text-muted">{email || 'Not available'}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
