import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  github, 
  category,
  icon,
  animationDelay = 0 
}) => {
  return (
    <div 
      className="project-card"
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
      
      <div className="project-technologies">
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
            <i className="fab fa-github"></i>
            <span>View on GitHub</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard; 