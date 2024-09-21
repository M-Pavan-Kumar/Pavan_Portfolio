import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Pavan Kumar Maruboina</h3>
          <p>Web Developer | MERN Stack | Aspiring AI/ML Engineer</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/pavan-kumar-maruboina-685765271/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/M-Pavan-Kumar" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://x.com/Pavan_kumar5555" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/_pavan_kumar_555/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Pavan Kumar Maruboina. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;