import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-links">
          <a 
            href="mailto:zain.ejaz67@gmail.com" 
            className="footer-link"
            aria-label="Email"
          >
            <i className="fas fa-envelope"></i>
            zain.ejaz67@gmail.com
          </a>
          <a 
            href="https://www.linkedin.com/in/zain-ijaz-b9864a1a4/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
            LinkedIn
          </a>
        </div>
        <div className="footer-text">
          <p>&copy; 2025 Zain Ijaz. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;