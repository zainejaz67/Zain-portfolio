import { useState, useEffect, useRef } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';

function App() {
  const sectionComponents = [
    { id: 'education', Component: Education },
    { id: 'projects', Component: Projects },
    { id: 'experience', Component: Experience },
    { id: 'skills', Component: Skills },
    { id: 'certifications', Component: Certifications },
  ];

  const sectionRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState(Array(sectionComponents.length).fill(false));

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, idx) => {
      if (!ref) return null;
      return new window.IntersectionObserver(
        ([entry]) => {
          setVisibleSections(prev => {
            const updated = [...prev];
            updated[idx] = entry.isIntersecting;
            return updated;
          });
        },
        { threshold: 0.2 }
      );
    });
    sectionRefs.current.forEach((ref, idx) => {
      if (ref && observers[idx]) observers[idx].observe(ref);
    });
    return () => {
      observers.forEach((observer, idx) => {
        if (observer && sectionRefs.current[idx]) observer.disconnect();
      });
    };
  }, []);

  // Scroll-reactive background effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight ? scrollY / docHeight : 0;
      // Move gradients and change intensity
      document.documentElement.style.setProperty('--grad1-x', `${20 + 60 * scrollPercent}%`);
      document.documentElement.style.setProperty('--grad1-y', `${80 - 60 * scrollPercent}%`);
      document.documentElement.style.setProperty('--grad1-alpha', `${0.1 + 0.2 * scrollPercent}`);
      document.documentElement.style.setProperty('--grad2-x', `${80 - 60 * scrollPercent}%`);
      document.documentElement.style.setProperty('--grad2-y', `${20 + 60 * scrollPercent}%`);
      document.documentElement.style.setProperty('--grad2-alpha', `${0.1 + 0.2 * (1 - scrollPercent)}`);
    };
    window.addEventListener('scroll', handleScroll);
    // Set initial values
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container loaded">
      <Header />
      <main>
        <Intro />
        {sectionComponents.map(({ id, Component }, idx) => (
          <div
            key={id}
            ref={el => sectionRefs.current[idx] = el}
            className={visibleSections[idx] ? 'section-animate-in' : 'section-hidden'}
            data-section-idx={idx}
          >
            <Component visible={visibleSections[idx]} />
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App
