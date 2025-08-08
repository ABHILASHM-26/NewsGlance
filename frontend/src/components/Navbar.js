import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Navbar = ({ onSearch, setUser }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('email');
    setUser(null);
    navigate('/signin');
  };

  const handleHome = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <nav
      className="navbar navbar-dark fixed-top px-3"
      style={{ background: 'linear-gradient(to right, #1f1c2c, #928dab)'}}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <button className="navbar-brand btn btn-link text-white fw-bold fs-5 m-0 p-0" onClick={handleHome}>
          Latest News
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
          style={{ background: 'linear-gradient(to right, #1f1c2c, #928dab)' }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title text-white fw-bold fs-5" id="offcanvasDarkNavbarLabel">
              Latest News
            </h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body px-3">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-2">
              <li className="nav-item mb-2">
                <button className="btn btn-link nav-link text-white btn-sm" onClick={handleHome}>Home</button>
              </li>
              <li className="nav-item mb-2">
                <button className="btn btn-link nav-link text-white btn-sm" onClick={() => navigate('/profile')}>Profile</button>
              </li>
              <li className="nav-item mb-2">
                <button className="btn btn-link nav-link text-white btn-sm" onClick={() => navigate('/report')}>Report News</button>
              </li>
              <li className="nav-item mb-3">
                <button className="btn btn-link nav-link text-danger btn-sm" onClick={handleLogout}>Logout</button>
              </li>
            </ul>

            <form className="d-flex mt-3" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search news..."
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-success btn-sm" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
