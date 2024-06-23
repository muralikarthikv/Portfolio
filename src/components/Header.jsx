import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Import CSS file for styling

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <h1 className="logo">Murali Karthik V</h1>
          <div className="menu-icon" onClick={toggleMenu}>
            &#9776;
          </div>
          <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
            <li className="nav-item"><Link to="/projects" className="nav-link">Projects</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
