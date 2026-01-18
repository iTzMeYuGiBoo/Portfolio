import { useEffect, useState } from 'react';
import useSEOMetaTags from '../hooks/useSEOMetaTags';
import ThesisModal from '../components/layout/ThesisModal';
import './styles/EducationPage.css';

const EducationPage = () => {
  const [animate, setAnimate] = useState(false);
  const [isThesisModalOpen, setIsThesisModalOpen] = useState(false);

  // Set SEO meta tags for Education page
  useSEOMetaTags({
    title: 'Education | Yugandhar Reddy Bana',
    description: 'Educational background: MSc Data Analytics from National College of Ireland, BSc Computer Science from SASTRA University. Specialized in ML, data visualization, and full-stack development.',
    url: 'https://iTzMeYuGiBoo.github.io/Portfolio/education/',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70504cbf?w=1200&h=630&fit=crop',
  });

  // JSON-LD Educational Credential Schema
  const educationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yugandhar Reddy Bana',
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        educationalLevel: 'Master Degree',
        name: 'MSc Data Analytics',
        recognizedBy: {
          '@type': 'EducationalOrganization',
          name: 'National College of Ireland',
          location: 'Dublin, Ireland'
        },
        dateEarned: '2025'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        educationalLevel: 'Bachelor Degree',
        name: 'BSc Computer Science & Engineering',
        recognizedBy: {
          '@type': 'EducationalOrganization',
          name: 'SASTRA University',
          location: 'Thanjavur, India'
        },
        dateEarned: '2021'
      }
    ]
  };

  // Continuous learning data
  const learningTopics = [
    { topic: 'Microsoft Full Stack Developer', progress: 65 },
    { topic: 'Google Data Analytics', progress: 50 }
  ];

  useEffect(() => {
    requestAnimationFrame(() => setAnimate(true));
  }, []);

  // Scroll to projects section
  const scrollToProject = (projectName) => {
    const projectsSection = document.querySelector('#projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="education-page">
      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(educationSchema)}
      </script>

      <div className="container">
        {/* ───── header ───── */}
        <div className={`education-header fade-in-up ${animate ? 'run' : ''}`}>
          <h1>Education</h1>
          <p className="education-intro">
            My academic journey combines foundational computer science knowledge
            with specialized data analytics expertise.
          </p>
        </div>

        {/* ───── vertical timeline ───── */}
        <div className="education-timeline">
          {/* MSc card with icon */}
          <div
            className={`education-card fade-in-up ${animate ? 'run' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="education-icon">🎓</div>
            <div className="education-content">
              <h2>MSc Data Analytics</h2>
              <h3>National College of Ireland</h3>
              <div className="education-year">2025</div>

              <section className="education-details">
                <div className="thesis-section">
                  <h4>Thesis</h4>
                  <p>
                    "Impact of Macroeconomic Factors on Newly Built Residential
                    Property Prices in Dublin" (88% model accuracy)
                  </p>
                  <button 
                    className="view-thesis-btn"
                    onClick={() => setIsThesisModalOpen(true)}
                  >
                    📊 Click here to view thesis details
                  </button>
                </div>

                {/* <div className="related-projects">
                  <h4>Related Projects</h4>
                  <p>Capstone: <button className="project-link" onClick={() => scrollToProject('data-dashboard')}>Built predictive models using Python & TensorFlow concepts learned in Advanced ML</button></p>
                </div> */}

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

          {/* BSc card with icon */}
          <div
            className={`education-card fade-in-up ${animate ? 'run' : ''}`}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="education-icon">📚</div>
            <div className="education-content">
              <h2>BSc Computer Science & Engineering</h2>
              <h3>SASTRA University, India</h3>
              <div className="education-year">2021</div>

              <section className="education-details">
                <div className="thesis-section">
                  <h4>Final Project</h4>
                  <p>
                    Developed an interactive web application for automated
                    student attendance tracking using facial recognition.
                  </p>
                </div>

                {/* <div className="related-projects">
                  <h4>Related Projects</h4>
                  <p>Capstone: <button className="project-link" onClick={() => scrollToProject('flashcard-app')}>Facial Recognition system built using Java & OpenCV from Database & Web Technologies modules</button></p>
                </div> */}

                <div className="courses-section">
                  <h4>Key Modules</h4>
                  <ul>
                    <li>Data Structures & Algorithms</li>
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

        {/* ───── continuous learning widget ───── */}
        <div
          className={`continuous-learning fade-in-up ${animate ? 'run' : ''}`}
          style={{ animationDelay: '0.6s' }}
        >
          <h2>Currently Learning</h2>
          <p className="learning-intro">
            Constantly upskilling through active learning and professional development
          </p>

          <div className="learning-topics">
            {learningTopics.map((item, index) => (
              <div key={index} className="learning-card">
                <h4>{item.topic}</h4>
                <div className="progress-container">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${item.progress}%` }}></div>
                  </div>
                  <span className="progress-text">{item.progress}% Complete</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ───── certifications section ───── */}
        <div
          className={`certifications-section fade-in-up ${animate ? 'run' : ''}`}
          style={{ animationDelay: '0.8s'}}
        >
          <h2>Professional Certifications</h2>
          <p>
            Beyond formal education, I've earned professional certifications across
            development, cloud technologies, and data analytics.
          </p>

          <div className="certifications-content">
            <a href="/certifications/" className="button">
              View All Certifications
            </a>
            <p className="note">
              Including Meta Front-End Development, AWS, Google, and more...
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
