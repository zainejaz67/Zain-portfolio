import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Startovate – Lean Canvas Automation Web App (FYP)',
    description: 'Full-stack MERN app for Lean Canvas editing, export, and AI-powered guidance. Includes LMS, admin dashboard, and responsive design.',
    technologies: ['MERN', 'AI', 'RAG', 'LMS', 'React', 'Node.js'],
    github: 'https://github.com/usman2335/Startovate_FYP',
    category: 'Full Stack',
    icon: 'fas fa-rocket'
  },
  {
    id: 2,
    title: 'Real-Time Environmental Monitoring & AQI Prediction (MLOps)',
    description: 'Live AQI prediction pipeline using Python, DVC, MLflow, and Flask API. Automated data, model training, and monitoring with Grafana.',
    technologies: ['Python', 'DVC', 'MLflow', 'Flask', 'Prometheus', 'Grafana'],
    github: 'https://github.com/zainejaz67/Real-Time-Environmental-Monitoring-AQI-Prediction',
    category: 'MLOps',
    icon: 'fas fa-globe-americas'
  },
  {
    id: 3,
    title: 'TA Management System (SQL Server, ASP .NET)',
    description: 'Web app for TA management using ASP .NET, C#, and SQL Server. Features dynamic UI, relational database, and secure data handling.',
    technologies: ['ASP .NET', 'C#', 'HTML', 'CSS', 'SQL Server'],
    github: '',
    category: 'Web Development',
    icon: 'fas fa-chart-bar'
  },
  {
    id: 4,
    title: 'Parallel Log Analysis (PDC Project)',
    description: 'Parallel log-analysis system using MPI for large-scale attack detection with distributed event correlation and performance benchmarking.',
    technologies: ['C', 'MPI', 'Parallel Computing', 'Log Analysis'],
    github: '',
    category: 'Systems Programming',
    icon: 'fas fa-bolt'
  }
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className={`projects-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">
            <span className="title-number">02.</span>
            Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className={`projects-grid ${isVisible ? 'visible' : ''}`}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              category={project.category}
              icon={project.icon}
              animationDelay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;