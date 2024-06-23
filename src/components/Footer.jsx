// Footer.jsx

import React from 'react';
import '../styles/Footer.css'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h4>Murali Karthik V</h4>
          <div className="social-links">
        <a href="https://github.com/muralikarthikv" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/muralikarthikv/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://x.com/MuraliKarthikV1" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
          <p className="copyright">&copy; {new Date().getFullYear()} Murali Karthik V. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
