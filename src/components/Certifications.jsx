import React, { useState, useEffect } from 'react';
import '../styles/Certifications.css';
import CertificationItem from './CertificationItem';

const certifications = [
  {
    id: 1,
    name: 'Getting Started with Git and GitHub',
    issuer: 'IBM',
    year: 'Issued Jul 2025',
    credentialId: 'MHAL7ZGEJBH6',
    description: '',
    skills: ['Git', 'GitHub'],
    link: 'https://coursera.org/share/82bb1ed880a2f4fe8b58633dc7c888b4',
  },
  {
    id: 2,
    name: 'Introduction to Cloud Computing',
    issuer: 'IBM',
    year: 'Issued Jul 2025',
    credentialId: '0RJG0N17TH0Y',
    description: '',
    skills: ['Cloud Computing'],
    link: 'https://coursera.org/share/73dba10b8e5090df9371b0741d312b11',
  },
  {
    id: 3,
    name: 'Introduction to DevOps',
    issuer: 'IBM',
    year: 'Issued Jun 2025',
    credentialId: '93QYS0L87MW9',
    description: '',
    skills: ['DevOps'],
    link: 'https://coursera.org/share/e924216c100a4a7db247e8fac964b1cc',
  },
  {
    id: 4,
    name: 'Supervised Machine Learning: Regression and Classification',
    issuer: 'DeepLearning.AI',
    year: 'Issued Jun 2025',
    credentialId: '04EWENF2S3JV',
    description: '',
    skills: ['Machine Learning'],
    link: 'https://coursera.org/share/5c79561eec2f5646fe2843603189e213',
  },
];

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('certifications');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const filteredCertifications = certifications;

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div className={`certifications-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">
            <span className="title-number">05.</span>
            Certifications
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className={`certifications-grid ${isVisible ? 'visible' : ''}`}>
          {filteredCertifications.map((cert, index) => {
            // Remove image property when passing to CertificationItem
            const { image, ...certProps } = cert;
            return (
              <CertificationItem 
                key={cert.id} 
                {...certProps} 
                animationDelay={index * 0.15}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 