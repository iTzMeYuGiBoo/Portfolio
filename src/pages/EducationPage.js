import { useEffect, useState } from 'react';
import useSEOMetaTags from '../hooks/useSEOMetaTags';
import ThesisModal from '../components/layout/ThesisModal';
import './EducationPage.css';

const EducationPage = () => {
  const [animate, setAnimate] = useState(false);   // flips CSS animations on
  const [isThesisModalOpen, setIsThesisModalOpen] = useState(false);

  // Set SEO meta tags for Education page
  useSEOMetaTags({
    title: 'Education | Yugandhar Reddy Bana',
    description: 'My educational background includes MSc in Data Analytics from UCD and BSc in Computer Science. Specialized in machine learning, data visualization, and full-stack development.',
    url: 'https://iTzMeYuGiBoo.github.io/Portfolio/education',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70504cbf?w=1200&h=630&fit=crop',
  });

  /* start animations on first paint */
  useEffect(() => {
    requestAnimationFrame(() => setAnimate(true));
  }, []);

  return (
    <div className="education-page">
      <div className="container">
        {/* ───── header ───── */}
        <div className={`education-header fade-in-up ${animate ? 'run' : ''}`}>
          <h1>Education</h1>
          <p className="education-intro">
            My academic journey combines foundational computer science knowledge
            with specialized data analytics expertise.
          </p>
        </div>

        {/* ───── timeline ───── */}
        <div className="education-timeline">
          {/* MSc card */}
          <div
            className={`education-card fade-in-up ${animate ? 'run' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="education-year">2025</div>
            <div className="education-content">
              <h2>MSc Data Analytics</h2>
              <h3>National College of Ireland</h3>

              <section className="education-details">
                <div className="thesis-section">
                  <h4>Thesis</h4>
                  <p>
                    “Impact of Macroeconomic Factors on Newly Built Residential
                    Property Prices in Dublin” (88% model accuracy)
                  </p>                  <button 
                    className="view-thesis-btn"
                    onClick={() => setIsThesisModalOpen(true)}
                  >
                    📊 Click here to view thesis details
                  </button>                </div>

                <div className="courses-section">
                  <h4>Key Modules</h4>
                  <ul>
                    <li>Advanced Machine Learning</li>
                    <li>Statistical Modelling</li>
                    <li>Data Visualization</li>
                    <li>Big Data Architecture</li>
                    <li>Time Series Analysis</li>
                    <li>Research Methods</li>
                  </ul>
                </div>

                <div className="skills-section">
                  <h4>Skills Developed</h4>
                  <div className="skills-tags">
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">R</span>
                    <span className="skill-tag">SQL</span>
                    <span className="skill-tag">TensorFlow</span>
                    <span className="skill-tag">scikit-learn</span>
                    <span className="skill-tag">Tableau</span>
                    <span className="skill-tag">Power BI</span>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* BSc card */}
          <div
            className={`education-card fade-in-up ${animate ? 'run' : ''}`}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="education-year">2021</div>
            <div className="education-content">
              <h2>BSc Computer Science &amp; Engineering</h2>
              <h3>SASTRA University, India</h3>

              <section className="education-details">
                <div className="thesis-section">
                  <h4>Final Project</h4>
                  <p>
                    Developed an interactive web application for automated
                    student attendance tracking using facial recognition.
                  </p>
                </div>

                <div className="courses-section">
                  <h4>Key Modules</h4>
                  <ul>
                    <li>Data Structures &amp; Algorithms</li>
                    <li>Object-Oriented Programming</li>
                    <li>Database Management Systems</li>
                    <li>Web Technologies</li>
                    <li>Software Engineering</li>
                    <li>Computer Networks</li>
                  </ul>
                </div>

                <div className="skills-section">
                  <h4>Skills Developed</h4>
                  <div className="skills-tags">
                    <span className="skill-tag">Java</span>
                    <span className="skill-tag">C++</span>
                    <span className="skill-tag">HTML/CSS</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">MySQL</span>
                    <span className="skill-tag">Software Design</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* ───── continuing education ───── */}
        <div
          className={`continuing-education fade-in-up ${animate ? 'run' : ''}`}
          style={{ animationDelay: '0.6s', marginLeft:'242px'}}
        >
          <h2>Continuing Education</h2>
          <p>
            Beyond formal education, I'm committed to continuous learning
            through professional certifications and online courses.
          </p>

          <div className="continuing-education-content">
            <a href="/certifications" className="button">
              View My Certifications
            </a>
            <p className="note">
              Full project list, semester certificates, and earlier internships
              available on request.
            </p>
          </div>
        </div>
      </div>

      {/* Thesis Modal */}
      <ThesisModal isOpen={isThesisModalOpen} onClose={() => setIsThesisModalOpen(false)} />
    </div>
  );
};

export default EducationPage;
