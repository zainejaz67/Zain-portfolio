import React from 'react';
import '../styles/Skills.css';

const skillGroups = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Numpy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
      { name: 'C++/C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
      { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ]
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React', logo: '/src/assets/react.svg' },
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'MLflow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'DVC', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ]
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Github', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
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
      {skillGroups.map((group, idx) => (
        <div key={group.title} className="skills-group">
          <h3 className="skills-group-title">{group.title}</h3>
          <div className="skills-grid">
            {group.skills.map((skill) => (
              <div key={skill.name} className="custom-experience-card skill-item-logo">
                <div className="custom-experience-content" style={{alignItems: 'center', gap: '0.7rem'}}>
                  <img src={skill.logo} alt={skill.name + ' logo'} className="skill-logo" width={48} height={48} />
                  <span style={{fontWeight: 600}}>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills; 