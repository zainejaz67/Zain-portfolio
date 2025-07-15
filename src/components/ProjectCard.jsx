import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  link, 
  github, 
  category,
  animationDelay = 0 
}) => (
  <div 
    className="custom-experience-card project-card-theme"
    style={{ animationDelay: `${animationDelay}s` }}
  >
    <div className="custom-experience-content">
      <div className="custom-role gradient-text" style={{fontSize: '1.3rem', marginBottom: '0.3rem'}}>{title}</div>
      <div className="custom-divider" />
      <div className="custom-description">{description}</div>
      <div className="custom-divider" />
      <div className="custom-technologies">
        <span className="custom-tech-label">Technologies:</span>
        <div className="custom-tech-tags">
          {technologies.map((tech, idx) => (
            <span className="custom-tech-tag" key={idx}>{tech}</span>
          ))}
        </div>
      </div>
      {github && (
        <div className="project-actions" style={{marginTop: '1.2rem'}}>
          <a
            href={github}
            className="github-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      )}
    </div>
  </div>
);

export default ProjectCard; 