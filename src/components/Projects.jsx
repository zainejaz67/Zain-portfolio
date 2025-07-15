import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Startovate – Lean Canvas Automation Web App (FYP)',
    description: 'Full-stack MERN app for Lean Canvas editing, export, and AI-powered guidance. Includes LMS, admin dashboard, and responsive design.',
    bullets: [
      'Built a full-stack MERN application with an interactive Lean Canvas editor based on Dr. Arabela Bhutto’s methodology, supporting Word/PDF export for stakeholder sharing.',
      'Integrated an AI-powered chatbot using RAG-based architecture for real-time guidance, along with a custom LMS for user learning via video tutorials.',
      'Deployed the platform with an admin dashboard, role-based access, and responsive design for seamless user experience across devices.'
    ],
    technologies: ['MERN', 'AI', 'RAG', 'LMS', 'React', 'Node.js'],
    link: '',
    github: 'https://github.com/usman2335/Startovate_FYP',
    category: 'Full Stack'
  },
  {
    id: 2,
    title: 'Real-Time Environmental Monitoring & AQI Prediction (MLOps)',
    description: 'Live AQI prediction pipeline using Python, DVC, MLflow, and Flask API. Automated data, model training, and monitoring with Grafana.',
    bullets: [
      'Built a real-time pollution prediction pipeline using Python, DVC, and MLflow, integrating and cleaning live data from OpenWeatherMap and AirVisual APIs.',
      'Preprocessed data (handled missing values, outliers), trained ARIMA/LSTM models, and deployed via Flask API with monitoring using Prometheus and Grafana.',
      'Automated data collection and versioning with cron jobs, ensuring reproducible and scalable MLOps workflows.'
    ],
    technologies: ['Python', 'DVC', 'MLflow', 'Flask', 'Prometheus', 'Grafana'],
    link: '',
    github: '',
    category: ''
  },
  {
    id: 3,
    title: 'TA Management System (SQL Server, ASP .NET)',
    description: 'Web app for TA management using ASP .NET, C#, and SQL Server. Features dynamic UI, relational database, and secure data handling.',
    bullets: [
      'Developed using ASP .NET WebForms, employing C#, HTML, and CSS to build a dynamic and interactive web application.',
      'Designed the relational schemas for the various entities and created the database with SQL Server, also wrote queries to perform relevant data transactions.'
    ],
    technologies: ['ASP .NET', 'C#', 'HTML', 'CSS', 'SQL Server'],
    link: '',
    github: '',
    category: ''
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
              link={project.link}
              github={project.github}
              category={project.category}
              animationDelay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 