import React, { useState, useEffect } from 'react';
import '../styles/Experience.css';
import ExperienceItem from './ExperienceItem';

const experiences = [
  {
    id: 1,
    role: 'Backend Intern',
    company: 'Sky Infinit',
    period: 'June 2025 – July 2025',
    location: 'Faisalabad, Punjab',
    description: 'Developed scalable Flask-based APIs integrating Ollama and other LLMs to deliver AI-driven features for production systems.',
    technologies: ['Flask', 'Python', 'Ollama', 'LLMs', 'API Development'],
    achievements: [
      'Developed scalable Flask-based APIs integrating Ollama and other LLMs to deliver AI-driven features for production systems',
      'Fine-tuned large language models and optimized inference pipelines, reducing average response time from 45s to 15s',
      'Implemented parallel request processing and improved load-handling mechanisms, significantly increasing API throughput',
      'Designed efficient text chunking and tokenization pipelines, improving LLM accuracy and reducing processing overhead'
    ],
    logo: '/src/assets/sky_infinit_logo.jpg'
  }
];

const Experience = () => {
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

    const section = document.getElementById('experience');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className={`experience-header ${isVisible ? 'visible' : ''}`}> 
          <h2 className="section-title">
            <span className="title-number">03.</span>
            Work Experience
          </h2>
        </div>

        {/* Centered Card for Single Experience */}
        <div className={`experience-single-card-wrapper ${isVisible ? 'visible' : ''}`}> 
          <ExperienceItem 
            {...experiences[0]} 
            isSingle={true}
            animationDelay={0}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience; 