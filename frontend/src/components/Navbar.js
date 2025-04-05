import React from 'react';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };
  return (
    <nav
      className="navbar navbar-dark fixed-top"
      style={{
        background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)',
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="test">Latest News</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end "
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
          style={{
            background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)',
          }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" style={{color: 'white'}} id="offcanvasDarkNavbarLabel">
              News Application
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <button type='button' className='Logout-button' style={{color: 'white'}} onClick={handleLogout}>Logout</button>
              </li>
            </ul>
            <form className="d-flex mt-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;