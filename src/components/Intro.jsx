import React, { useState, useEffect } from 'react';
import '../styles/Intro.css';
import myPhoto from '../assets/myphoto.jpeg';

const ROLES = [
  'Software Developer',
  'Problem Solver', 
  'Tech Enthusiast'
];

const STATS = [
  { number: '15+', label: 'Projects Completed' },
  { number: '3+', label: 'Years Experience' },
  { number: '10+', label: 'Technologies' },
  { number: '100%', label: 'Dedication' }
];

const TYPING_SPEED = 45;
const ERASING_SPEED = 30;
const PAUSE_AFTER_TYPING = 1200;
const PAUSE_AFTER_ERASING = 400;

const Intro = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let timeout;
    const currentRole = ROLES[roleIdx];
    if (isTyping) {
      if (typedText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setIsTyping(false), PAUSE_AFTER_TYPING);
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(currentRole.slice(0, typedText.length - 1));
        }, ERASING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setRoleIdx((prev) => (prev + 1) % ROLES.length);
          setIsTyping(true);
        }, PAUSE_AFTER_ERASING);
      }
    }
    return () => clearTimeout(timeout);
  }, [typedText, isTyping, roleIdx]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="intro" className="intro-section">
      {/* Background Elements */}
      <div className="intro-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
        <div className="grid-pattern"></div>
      </div>

      <div className="intro-container">
        {/* Main Content */}
        <div className="intro-content">
          <div className="intro-left">
            {/* Main Text */}
            <div className={`intro-text ${isVisible ? 'visible' : ''}`}>
              <div className="intro-greeting">
                <span>Hello, I'm</span>
              </div>
              
              <h1 className="intro-name">
                <span className="name-text">Zain Ijaz</span>
                <div className="name-underline"></div>
              </h1>
              
              <h2 className="intro-role">
                <span className="role-prefix">I'm a </span>
                <span className="role-dynamic">{typedText}</span>
                <span className="cursor" style={{opacity: showCursor ? 1 : 0}}>|</span>
              </h2>
              
              <p className="intro-description">
                Passionate about crafting exceptional digital experiences through 
                <span className="highlight"> full-stack development</span> and 
                <span className="highlight"> AI innovation</span>. 
                I transform ideas into scalable, user-centric solutions.
              </p>
            </div>

            {/* Action Buttons */}
            <div className={`intro-actions ${isVisible ? 'visible' : ''}`}>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="cta-button primary"
              >
                <span>View My Work</span>
                <i className="fas fa-arrow-right"></i>
              </button>
              
              <button 
                onClick={() => scrollToSection('experience')} 
                className="cta-button secondary"
              >
                <span>My Experience</span>
                <i className="fas fa-briefcase"></i>
              </button>
            </div>

            {/* Quick Links */}
            <div className={`quick-links ${isVisible ? 'visible' : ''}`}>
              <a href="https://www.linkedin.com/in/zain-ijaz-b9864a1a4/" target="_blank" rel="noopener noreferrer" className="quick-link">
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/zainejaz67" target="_blank" rel="noopener noreferrer" className="quick-link">
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>
              <a href="mailto:zain.ejaz67@gmail.com" className="quick-link">
                <i className="fas fa-envelope"></i>
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="intro-right">
            <div className={`photo-container ${isVisible ? 'visible' : ''}`}>
              <div className="photo-frame">
                <img src={myPhoto} alt="Zain Ijaz" className="profile-photo" />
                <div className="photo-glow"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`scroll-indicator ${isVisible ? 'visible' : ''}`}>
          <div className="scroll-text">Scroll to explore</div>
          <div className="scroll-arrow">
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;