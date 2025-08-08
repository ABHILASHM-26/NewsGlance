import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import '../App.css';

const SignIn = ({ setUser }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const navigate = useNavigate();

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/register`,
        { email, name, password }
      );

      if (response && response.data) {
        alert('Registration successful! Please log in.');
        setName("");
        setEmail("");
        setPassword("");
        setIsRegister(false);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        { email, password }
      );

      if (response && response.data) {
        const { token, userName } = response.data;
        localStorage.setItem('authToken', token);
        localStorage.setItem('userName', userName);
        localStorage.setItem('email', email);
        setUser(userName);
        navigate('/');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="text-center mb-4">NewsGlance</h2>

        {isRegister ? (
          <form onSubmit={handleRegisterSubmit}>
            <label className="form-title">Register</label>
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
            <p className="toggle-link">
              Already have an account? <span onClick={() => setIsRegister(false)}>Login here</span>
            </p>
          </form>
        ) : (
          <form onSubmit={handleLoginSubmit}>
            <label className="form-title">Login</label>
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
            {error && <p className="error-text">{error}</p>}
            <button className='Sign-button'>Login</button>
            <p className="toggle-link">
              Don’t have an account? <span onClick={() => setIsRegister(true)}>Register here</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignIn;
