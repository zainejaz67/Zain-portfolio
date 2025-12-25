import React from 'react';
import '../styles/Education.css';

const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science',
    institution: 'FAST-NUCES',
    year: '2021 – 2025',
    status: 'Graduated',
    icon: 'fas fa-graduation-cap'
  },
  {
    id: 2,
    degree: 'Cambridge A Levels',
    institution: 'Cambridge International',
    year: '2019 – 2021',
    status: 'Graduated',
    icon: 'fas fa-book'
  },
  {
    id: 3,
    degree: 'Cambridge O Levels',
    institution: 'Cambridge International',
    year: '2017 – 2019',
    status: 'Graduated',
    icon: 'fas fa-book-open'
  }
];

const Education = () => (
  <section id="education" className="education-section">
    <div className="container">
      <h2 className="section-title">
        <span className="title-number">01.</span> Education
      </h2>
      <div className="education-grid">
        {educationData.map((edu, idx) => (
          <div className="modern-education-card" key={edu.id}>
            <div className="education-header">
              <div className="education-icon">
                <i className={edu.icon}></i>
              </div>
              <div className="education-title-section">
                <h3 className="education-degree">{edu.degree}</h3>
                <div className="education-institution">{edu.institution}</div>
              </div>
              <div className="education-status-section">
                <span className="education-status">{edu.status}</span>
                <div className="education-year">{edu.year}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education; 