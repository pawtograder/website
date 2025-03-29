import React, { useRef } from 'react';
import './App.css';
import { navLinks, features, audiences, stats, footerSections } from './data';
import { useScrollPosition } from './hooks/useScrollPosition';

const App: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isScrolled = useScrollPosition(heroRef.current?.offsetHeight ?? 0);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 1000; // Duration in milliseconds (1 second)
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function for smooth acceleration and deceleration
        const easeInOutCubic = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        window.scrollTo(0, startPosition + (distance * easeInOutCubic));
        
        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <main>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="nav-left">
            <div className="logo">
              <img src="/logo-transparent.png" alt="Pawtograder Logo" />
            </div>
            <div className="nav-links">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href.substring(1))}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="nav-right">
            <a href="https://app.pawtograder.com" className="nav-button secondary">Sign in</a>
          </div>
        </div>
      </nav>
      <div className="hero" ref={heroRef}>
        <div className="hero-content">
          <h1>Pawtograder</h1>
          <p className="caption">The open-source, all in one platform for students and educators in Computer Science courses. Assignments, Grading, Discussion, Office Hours and more, paws-itively covered.</p>
          <div className="cta-buttons">
            <a href="https://app.pawtograder.com" className="cta-button primary">Sign in</a>
            <a href="https://github.com/pawtograder/platform" target="_blank" rel="noopener noreferrer" className="cta-button secondary">View on GitHub</a>
          </div>
        </div>
      </div>
      <div className="sections">
        <section className="section core-features" id="features">
          <h2>Core Features</h2>
          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.title} className="feature-card">
                <h3>{feature.emoji} {feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section who-its-for" id="who-its-for">
          <h2>Who it's for</h2>
          <div className="audience-grid">
            {audiences.map((audience) => (
              <div key={audience.title} className="audience-card">
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* <section className="section demo">
          <h2>See it in action</h2>
          <div className="demo-container">
            <div className="demo-placeholder">
              <p>Interactive Demo Coming Soon</p>
            </div>
          </div>
        </section> */}

        <section className="section open-source" id="open-source">
          <h2>Open Source & Community</h2>
          <div className="community-content">
            <p>Pawtograder is free, open-source (GPLv3), and always improving with input from CS educators like you.</p>
            <div className="community-cta-buttons">
              <a href="https://github.com/pawtograder/platform" target="_blank" rel="noopener noreferrer" className="community-cta-button primary">Find Pawtograder on GitHub</a>
              <a href="https://docs.pawtograder.com" target="_blank" rel="noopener noreferrer" className="community-cta-button secondary">Read the Docs</a>
            </div>
          </div>
        </section>

        {/* <section className="section testimonial">
          <h2>Instructor Testimonial</h2>
          <div className="testimonial-card">
            <blockquote>
              "Pawtograder has transformed how I manage my CS courses. The automated grading saves me countless hours, and my students love the intuitive interface."
            </blockquote>
            <div className="testimonial-author">
              <p className="author-name">Dr. Sarah Johnson</p>
              <p className="author-title">Computer Science Professor, Northeastern University</p>
            </div>
          </div>
        </section> */}

        <footer className="footer">
          {/* <div className="footer-content">
            {footerSections.map((section) => (
              <div key={section.title} className="footer-section">
                <h3>{section.title}</h3>
                {section.description && <p>{section.description}</p>}
                {section.links && (
                  <ul>
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div> */}
          <div className="footer-bottom">
            <p>&copy; 2025 Jonathan Bell</p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default App; 