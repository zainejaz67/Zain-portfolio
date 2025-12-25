import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ 
  title, 
  description, 
  bullets,
  technologies, 
  link, 
  github, 
  category,
  icon,
  animationDelay = 0 
}) => (
  <div 
    className="modern-project-card"
    style={{ animationDelay: `${animationDelay}s` }}
  >
    <div className="project-header">
      <div className="project-icon">
        <i className={icon || 'fas fa-laptop-code'}></i>
      </div>
      <div className="project-title-section">
        <h3 className="project-title">{title}</h3>
        {category && <span className="project-category-badge">{category}</span>}
      </div>
    </div>
    
    <p className="project-description">{description}</p>
    
    {bullets && bullets.length > 0 && (
      <div className="project-features">
        <h4 className="features-title">Key Features</h4>
        <ul className="features-list">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="feature-item">
              • {bullet}
            </li>
          ))}
        </ul>
      </div>
    )}
    
    <div className="project-technologies">
      <h4 className="tech-title">Technologies Used</h4>
      <div className="tech-tags">
        {technologies.map((tech, idx) => (
          <span key={idx} className="tech-tag">{tech}</span>
        ))}
      </div>
    </div>
    
    {github && (
      <div className="project-actions">
        <a
          href={github}
          className="github-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub →
        </a>
      </div>
    )}
  </div>
);

export default ProjectCard; 