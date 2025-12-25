import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const NAV_LINKS = [
  { id: 'intro', label: 'About', icon: 'fas fa-user' },
  { id: 'education', label: 'Education', icon: 'fas fa-graduation-cap' },
  { id: 'projects', label: 'Projects', icon: 'fas fa-code' },
  { id: 'experience', label: 'Experience', icon: 'fas fa-briefcase' },
  { id: 'skills', label: 'Skills', icon: 'fas fa-tools' },
  { id: 'certifications', label: 'Certifications', icon: 'fas fa-certificate' },
];

const SOCIAL_LINKS = [
  { href: 'https://github.com/zainejaz67', icon: 'fab fa-github', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/zain-ijaz-b9864a1a4/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
  { href: 'mailto:zain.ejaz67@gmail.com', icon: 'fas fa-envelope', label: 'Email' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      let found = 'intro';
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            found = link.id;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header-enhanced${isScrolled ? ' scrolled' : ''}`} role="banner">
      <div className="container header-container">

        {/* Desktop Navigation */}
        <nav className="nav-desktop" role="navigation" aria-label="Main navigation">
          <ul className="nav-list">
            {NAV_LINKS.map((link, index) => (
              <li key={link.id} className="nav-item">
                <a
                  href={`#${link.id}`}
                  onClick={e => handleNavClick(e, link.id)}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  <i className={link.icon}></i>
                  <span className="nav-text">{link.label}</span>
                  <span className="nav-number">0{index + 1}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="header-socials">
          {SOCIAL_LINKS.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={link.label}
              className="social-link"
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <nav className={`nav-mobile ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-mobile-list">
            {NAV_LINKS.map((link, index) => (
              <li key={link.id} className="nav-mobile-item">
                <a
                  href={`#${link.id}`}
                  onClick={e => handleNavClick(e, link.id)}
                  className={`nav-mobile-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  <i className={link.icon}></i>
                  <span className="nav-mobile-text">{link.label}</span>
                  <span className="nav-mobile-number">0{index + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-socials">
            {SOCIAL_LINKS.map(link => (
              <a 
                key={link.href} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={link.label}
                className="mobile-social-link"
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 