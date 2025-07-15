import React, { useState, useEffect } from 'react';
import '../styles/Experience.css';
import ExperienceItem from './ExperienceItem';

const experiences = [
  {
    id: 1,
    role: 'Intern',
    company: 'Sky Infinit',
    period: '2024',
    description: 'Worked as an intern at Sky Infinit, contributing to web development projects and learning industry best practices.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    achievements: [
      'Assisted in building and maintaining web applications',
      'Collaborated with senior developers on real-world projects',
      'Gained hands-on experience with modern web technologies'
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