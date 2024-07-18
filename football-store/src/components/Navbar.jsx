import React from 'react';
import { FaUser, FaCog } from 'react-icons/fa';

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${theme === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'} sticky-top`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Tottenham Store</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Catalog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About Us</a>
            </li>
          </ul>
          <div className="d-flex">
            <a href="#" className="nav-link"><FaUser /></a>
            <a href="#" className="nav-link" onClick={toggleTheme}><FaCog /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
