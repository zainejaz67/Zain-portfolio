import React from 'react';
import '../styles/ExperienceItem.css';

const ExperienceItem = ({ role, company, period, location, description, technologies, achievements }) => (
  <div className="custom-experience-card">
    <div className="custom-experience-content">
      <div className="custom-experience-header">
        <div className="custom-role gradient-text">{role}</div>
        <div className="custom-company-period-row">
          <span className="custom-company">{company}</span>
          <span className="custom-period">{period}</span>
        </div>
        {location && <div className="custom-location">{location}</div>}
      </div>
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
      <div className="custom-divider" />
      <div className="custom-achievements">
        <div className="custom-achievements-title gradient-text">Key Achievements:</div>
        <ul className="custom-achievements-list">
          {achievements.map((ach, idx) => (
            <li className="custom-achievement-item" key={idx}>
              <span className="custom-check">✔</span> {ach}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default ExperienceItem; 