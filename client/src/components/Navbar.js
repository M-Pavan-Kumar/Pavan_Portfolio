import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          My Portfolio
        </Link>
        <div className={`menu-icon ${click ? 'active' : ''}`} onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>SERVICES</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>PROJECTS</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;