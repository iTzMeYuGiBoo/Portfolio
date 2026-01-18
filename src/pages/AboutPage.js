import { useEffect, useState } from 'react';
import useSEOMetaTags from '../hooks/useSEOMetaTags';
import useJSONLD from '../hooks/useJSONLD';
import './styles/AboutPage.css';
import Photo from '../assets/Photo.jpg';

const AboutPage = () => {
  const [animate, setAnimate] = useState(false);

  useSEOMetaTags({
    title: 'About Me | Yugandhar Reddy Bana - Full-Stack Engineer',
    description: 'Full-stack engineer specializing in React, data visualization, and performance optimization. 2.5 years building scalable applications with 95+ Lighthouse scores.',
    url: 'https://iTzMeYuGiBoo.github.io/Portfolio/about',
    image: Photo,
  });

  // Add JSON-LD schema for About page
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yugandhar Reddy Bana',
    jobTitle: 'Full-Stack Engineer & Data Analyst',
    description: 'Architecting high-performance, data-rich interfaces that solve complex problems. 2.5 years building React applications with measurable impact.',
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
          <h2 id="about-heading">About Me</h2>
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
                I'm a <strong>full-stack engineer specializing in React, performance optimization, and data visualization</strong>. I architect accessible, high-performance interfaces that help teams deliver user-centric products faster. In my <strong>2.5 years of professional experience</strong>, I've built solutions that improved application load times by 60%, enhanced user engagement through intuitive UX design, and mentored teammates in modern frontend best practices.
              </p>

              {/* Journey - Past */}
              <section className="about-section">
                <h3>My Journey</h3>
                <p>
                  I began my tech career with a <strong>BSc in Computer Science & Engineering</strong> from SASTRA University, where I learned to think systematically about scalable systems and clean code. After graduation, I joined <strong>Incedo Technologies Solutions Limited</strong> (client: Verizon) as a Software Engineer, where I worked on mission-critical frontend projects serving millions of telecom users. There, I owned performance optimization initiatives, implemented accessibility improvements that increased usability scores, and collaborated with cross-functional teams on architectural decisions.
                </p>
                <p>
                  To deepen my expertise in data-driven insights, I pursued an <strong>MSc in Data Analytics</strong> from the National College of Ireland. My research thesis—"Impact of Macroeconomic Factors on Dublin Housing Prices"—achieved <strong>88% model accuracy</strong> using ensemble machine-learning techniques. This fusion of frontend engineering and data science enables me to build smarter interfaces that leverage real insights to solve business problems.
                </p>
              </section>

              {/* Quick Stats - Bento Grid */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">2.5</div>
                  <div className="stat-label">Years of Experience</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">60%</div>
                  <div className="stat-label">Avg Load Time Improvement</div>
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
                <h3>How I Help the Industry</h3>
                <p>I contribute to teams and products through these core skills:</p>
                <ul className="philosophy-list">
                  <li>
                    <strong>Performance Architecture:</strong> I optimize React applications for speed and scale. Faster apps mean better user retention, improved SEO rankings, and reduced infrastructure costs—directly impacting business metrics.
                  </li>
                  <li>
                    <strong>Accessibility & Inclusive Design:</strong> Building for all users isn't just ethical—it's smart business. I implement WCAG standards that expand market reach and reduce legal risk while improving experience for everyone.
                  </li>
                  <li>
                    <strong>Data-Driven Problem Solving:</strong> With analytics expertise, I help teams understand user behavior, validate design decisions with data, and iterate on features that actually matter. This bridges the gap between product vision and measurable outcomes.
                  </li>
                </ul>
              </section>

              {/* Ambition - Future */}
              <section className="about-section">
                <h3>What's Next</h3>
                <p>
                  I'm looking for roles where I can own end-to-end product features, collaborate with designers and product teams, and contribute to architectural decisions. I'm particularly interested in <strong>fintech, SaaS, or data-intensive products</strong> where every 100ms of performance, every accessibility feature, and every insight matter. I thrive in teams that value both craftsmanship and measurable business impact.
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
