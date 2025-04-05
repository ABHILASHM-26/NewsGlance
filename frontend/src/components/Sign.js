import React, { useState } from 'react';
import axios from "axios";
import '../sign.css';

const SignIn = ({ setUser }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        email,
        name,
        password,
      });

      if (response && response.data) {
        alert('Registration successful! Please log in.');
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      if (response && response.data) {
        const { token, userName } = response.data;
        localStorage.setItem('authToken', token);
        alert(`Welcome, ${userName}`);
        setUser(userName); // Update the user state in App.js
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <>
    <header className='Sign-header'><h1>NEWS APPLICATION</h1></header>
    <div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />

      <div className="signup">
        <form onSubmit={handleRegisterSubmit}>
          <label htmlFor="chk" aria-hidden="true">Register</label>
          <input
            className='Sign-input'
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className='Sign-input'
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className='Sign-input'
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className='Sign-button'>Register</button>
        </form>
      </div>

      <div className="login">
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="chk" aria-hidden="true">Login</label>
          <input
            className='Sign-input'
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className='Sign-input'
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p style={{ color: 'red', margin: '10px 0' }}>{error}</p>}
          <button className='Sign-button'>Login</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default SignIn;
