import React from 'react';
import '../styles/Skills.css';

const skillGroups = [
  {
    title: 'Programming Languages',
    icon: 'fas fa-code',
    skills: [
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'C++' },
      { name: 'C' },
      { name: 'C#' },
      { name: 'Dart' },
      { name: 'Kotlin' },
      { name: 'SQL' }
    ]
  },
  {
    title: 'Web & Mobile Development',
    icon: 'fas fa-globe',
    skills: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Flutter' },
      { name: 'Flask' },
      { name: 'FastAPI' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: 'fas fa-robot',
    skills: [
      { name: 'TensorFlow' },
      { name: 'Scikit-learn' },
      { name: 'RAG' },
      { name: 'Ollama' }
    ]
  },
  {
    title: 'Databases & Storage',
    icon: 'fas fa-database',
    skills: [
      { name: 'SQL Server' },
      { name: 'MongoDB' },
      { name: 'Firebase' },
      { name: 'MySQL' }
    ]
  },
  {
    title: 'Cloud & DevOps',
    icon: 'fas fa-cloud',
    skills: [
      { name: 'AWS' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'Jenkins' },
      { name: 'Prometheus' },
      { name: 'Grafana' }
    ]
  },
  {
    title: 'Development Tools',
    icon: 'fas fa-tools',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'GitHub Actions' },
      { name: 'Visual Studio' },
      { name: 'Jenkins' }
    ]
  }
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <div className="container">
      <h2 className="section-title">
        <span className="title-number">04.</span>
        Technical Skills
      </h2>
      <div className="skills-categories-grid">
        {skillGroups.map((group, idx) => (
          <div key={group.title} className="skill-category-card">
            <div className="category-header">
              <div className="category-icon">
                <i className={group.icon}></i>
              </div>
              <h3 className="category-title">{group.title}</h3>
            </div>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill.name} className="skill-tag">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills; 