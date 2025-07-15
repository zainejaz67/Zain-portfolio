import React from 'react';
import '../styles/Education.css';

const educationData = [
  {
    degree: 'BS in Computer Science',
    institution: 'FAST NUCES Islamabad, Pakistan',
    year: '2021 – Present',
    description: 'Object Oriented Programming, Data Structures and Algorithms, Database Systems, Software and Design Analysis, Linear Algebra, Probability and Statistics',
  },
];

const Education = () => (
  <section id="education" className="education-section">
    <div className="container">
      <h2 className="section-title">
        <span className="title-number">01.</span> Education
      </h2>
      <div className="education-list">
        {educationData.map((edu, idx) => (
          <div className="custom-experience-card education-card-theme" key={idx}>
            <div className="custom-experience-content">
              <div className="custom-role gradient-text" style={{fontSize: '1.2rem', marginBottom: '0.3rem'}}>{edu.degree}</div>
              <div className="custom-company-period-row">
                <span className="custom-company">{edu.institution}</span>
                <span className="custom-period">{edu.year}</span>
              </div>
              <div className="custom-divider" />
              <div className="custom-description">{edu.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education; 