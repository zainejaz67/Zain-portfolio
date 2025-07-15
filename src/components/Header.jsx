import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const NAV_LINKS = [
  { id: 'intro', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
];

const SOCIAL_LINKS = [
  { href: 'https://github.com/', icon: 'fab fa-github', label: 'GitHub' },
  { href: 'https://linkedin.com/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
  { href: 'mailto:zain.ejaz67@gmail.com', icon: 'fas fa-envelope', label: 'Email' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

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
  };

  return (
    <header className={`header-modern${isScrolled ? ' scrolled' : ''}`} role="banner">
      <div className="container header-modern-container">
        <nav className="nav-modern" role="navigation" aria-label="Main navigation">
          <ul className="nav-modern-list">
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={e => handleNavClick(e, link.id)}
                  className={activeSection === link.id ? 'active' : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-modern-socials">
          {SOCIAL_LINKS.map(link => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header; 