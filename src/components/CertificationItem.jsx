import React, { useState } from 'react';
import '../styles/CertificationItem.css';

const CertificationItem = ({ 
  name, 
  issuer, 
  year, 
  credentialId, 
  description, 
  skills, 
  link,
  animationDelay = 0 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`certification-item ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      {/* Certification Content */}
      <div className="certification-content">
        <div className="certification-header">
          <h3 className="certification-name">{name}</h3>
          <div className="certification-meta">
            <span className="issuer">{issuer}</span>
            <span className="year">{year}</span>
          </div>
        </div>

        {description && <p className="certification-description">{description}</p>}

        {/* Credential ID */}
        <div className="credential-id">
          <span className="credential-label">Credential ID:</span>
          <span className="credential-value">{credentialId}</span>
        </div>

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div className="certification-skills">
            <span className="skills-label">Skills:</span>
            <div className="skills-tags">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* View Credential Button */}
        <div className="certification-actions">
          <a href={link} className="verify-btn" target="_blank" rel="noopener noreferrer">
            Show credential
          </a>
        </div>
      </div>
      {/* Hover Effect Border */}
      <div className="certification-border"></div>
    </div>
  );
};

export default CertificationItem; 