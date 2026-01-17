import { useEffect, useState } from 'react';
import useSEOMetaTags from '../hooks/useSEOMetaTags';
import useJSONLD from '../hooks/useJSONLD';
import './AboutPage.css';
import Photo from '../assets/Photo.jpg';

const AboutPage = () => {
  const [animate, setAnimate] = useState(false);

  useSEOMetaTags({
    title: 'About Me | Yugandhar Reddy Bana - Full-Stack Engineer',
    description: 'Full-stack engineer specializing in React, data visualization, and performance optimization. 4+ years building scalable applications with 95+ Lighthouse scores.',
    url: 'https://iTzMeYuGiBoo.github.io/Portfolio/about',
    image: Photo,
  });

  // Add JSON-LD schema for About page
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yugandhar Reddy Bana',
    jobTitle: 'Full-Stack Engineer & Data Analyst',
    description: 'Architecting high-performance, data-rich interfaces that solve complex problems. 4+ years building React applications with measurable impact.',
    image: Photo,
    url: 'https://iTzMeYuGiBoo.github.io/Portfolio/about',
    email: 'yugandharreddybana@outlook.com',
    telephone: '+353894851413',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dublin',
      addressCountry: 'IE',
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'National College of Ireland',
        educationalLevel: 'Master Degree',
      },
      {
        '@type': 'EducationalOrganization',
        name: 'SASTRA University',
        educationalLevel: 'Bachelor Degree',
      },
    ],
    workHistory: [
      {
        '@type': 'Organization',
        name: 'Incedo Technologies Solutions Limited',
        position: 'Software Engineer',
      },
    ],
  };

  useEffect(() => {
    requestAnimationFrame(() => setAnimate(true));
  }, []);

  return (
    <div className="about-page">
      {/* JSON-LD Script */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>

      <div className="container">
        {/* Section Header */}
        <div className={`about-header fade-in-up ${animate ? 'run' : ''}`}>
          <h2 id="about-heading">Behind the Code</h2>
          <p className="section-subtitle">Full-Stack Engineer • Data Analyst • Performance Optimizer</p>
        </div>

        {/* Main Content - Asymmetric Split Layout */}
        <section id="about" aria-labelledby="about-heading" className="about-content">
          {/* Profile Image - Left Side */}
          <div
            className={`about-image slide-in-left ${animate ? 'run' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="about-image-container">
              <img
                src={Photo}
                alt="Portrait of Yugandhar Reddy Bana, a full-stack engineer smiling in a professional setting"
                width="400"
                height="400"
              />
            </div>
          </div>

          {/* Bio Text - Right Side */}
          <div
            className={`about-text slide-in-right ${animate ? 'run' : ''}`}
            style={{ animationDelay: '0.3s' }}
          >
            <article className="about-bio">
              {/* Hook - Present */}
              <p className="about-intro">
                I'm a <strong>full-stack engineer specializing in React and data visualization</strong>, architecting pixel-perfect interfaces that transform complex datasets into intuitive, accessible user experiences. With <strong>4+ years of professional experience</strong> and <strong>95+ Lighthouse performance scores</strong> across deployed applications, I deliver measurable impact that accelerates business value.
              </p>

              {/* Journey - Past */}
              <section className="about-section">
                <h3>My Journey</h3>
                <p>
                  I began my tech career with a <strong>BSc in Computer Science & Engineering</strong> from SASTRA University, where I built a strong foundation in full-stack development. After graduation, I joined <strong>Incedo Technologies Solutions Limited</strong> (client: Verizon) as a Software Engineer, working on high-impact frontend projects, performance optimization, and scalable system architecture in a global telecom environment.
                </p>
                <p>
                  To deepen my expertise in data-driven engineering, I pursued an <strong>MSc in Data Analytics</strong> from the National College of Ireland. My thesis—"Impact of Macroeconomic Factors on Dublin Housing Prices"—achieved <strong>88% model accuracy</strong> using ensemble machine-learning techniques, combining my passion for both frontend excellence and data science.
                </p>
              </section>

              {/* Quick Stats - Bento Grid */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">4+</div>
                  <div className="stat-label">Years of Experience</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Projects Deployed</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">95+</div>
                  <div className="stat-label">Lighthouse Score</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">88%</div>
                  <div className="stat-label">ML Model Accuracy</div>
                </div>
              </div>

              {/* Engineering Philosophy */}
              <section className="about-section">
                <h3>How I Work</h3>
                <p>My engineering philosophy centers on three core principles:</p>
                <ul className="philosophy-list">
                  <li>
                    <strong>User-Centric Design:</strong> I build interfaces where every interaction matters. Accessibility, performance, and intuitive design aren't afterthoughts—they're foundational.
                  </li>
                  <li>
                    <strong>Clean Code:</strong> I write code for humans first, machines second. Readable, maintainable code reduces bugs and accelerates team velocity.
                  </li>
                  <li>
                    <strong>Continuous Learning:</strong> Technology evolves rapidly. I stay ahead of trends through experimentation, code reviews, and knowledge sharing with teams.
                  </li>
                </ul>
              </section>

              {/* Ambition - Future */}
              <section className="about-section">
                <h3>What's Next</h3>
                <p>
                  Currently, I'm seeking <strong>complex architectural challenges in fintech or data-intensive products</strong> where performance optimization and user experience directly drive business outcomes. I'm excited about building scalable systems that serve millions of users while maintaining pixel-perfect interfaces.
                </p>
              </section>

              {/* Call-to-Action */}
              <div className="cta-buttons">
                <a href="/contact" className="button">
                  Start a Conversation
                </a>
                <a href="/experience" className="button outline">
                  Explore My Work
                </a>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
