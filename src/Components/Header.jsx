import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  sticky-top bg-dark ">
      <div className="container ">
        <Link to="/" className="navbar-brand text-white">P V H DEVELOPERS</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-light"></span>
         
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link text-white">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
