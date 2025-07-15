import React, { useState, useEffect } from 'react';
import '../styles/Intro.css';
import myPhoto from '../assets/myphoto.png';

const ROLES = [
  'Full Stack Developer',
  'AI Enthusiast',
  'UI/UX Designer',
  'MERN Specialist',
  'Lifelong Learner'
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

  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-left">
          <div className="intro-card">
            <div className="intro-greeting animate-fade-in-up">Hi, I’m</div>
            <h1 className="intro-title animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <span className="intro-name gradient-text">Zain Ijaz</span>
            </h1>
            <h2 className="intro-special animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <span className="gradient-text">{typedText}</span>
              <span className="typewriter-cursor" style={{opacity: showCursor ? 1 : 0}}>|</span>
            </h2>
            <p className="intro-summary animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              Passionate about building modern web apps and smart AI solutions. Always learning, always building.
            </p>
            <div className="intro-buttons animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <a href="https://linkedin.com/in/zainijaz67" target="_blank" rel="noopener noreferrer" className="intro-btn intro-btn-primary">Contact on LinkedIn</a>
              <a href="https://github.com/zainijaz67" target="_blank" rel="noopener noreferrer" className="intro-btn intro-btn-outline">GitHub</a>
            </div>
          </div>
        </div>
        <div className="intro-right animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <div className="intro-photo-border">
            <img src="/src/assets/myphoto.png" alt="Zain Ijaz" className="intro-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro; 