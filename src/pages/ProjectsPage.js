import { useState, useEffect } from 'react';
import useSEOMetaTags from '../hooks/useSEOMetaTags';
import './ProjectsPage.css';
import report from '../assets/report.pdf';
import flashcard from '../assets/flashcard.png';
import portfolio from '../assets/portfolio.png';

const projects = [
  {
    id: 1,
    title: "Dublin Housing Price Prediction",
    description: "Created ensemble ML models (Random Forest, XGBoost, LightGBM) that predict Dublin housing prices with 88% accuracy. Integrated macroeconomic factors and location data for comprehensive analysis.",
    technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Jupyter"],
    imageUrl: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
    featured: true,
    reportFile: report
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description:
      "This very portfolio—built with React, JS, HTML and CSS. It showcases my work, CV and contact details in a responsive, animated interface.",
    technologies: ["React", "React Router", "Redux Toolkit", "JavaScript", "CSS", "HTML", "Git", "GitHub", "Responsive Design", "Accessibility"],
    imageUrl: portfolio,
    featured: true,
    gitHubLink: "https://github.com/BanaYugandharReddy08/Portfolio",
    reportFile: null,
    projectLink: "https://banayugandharreddy08.github.io/Portfolio/"
  },
  {
    id: 3,
    title: "Flashcard App",
    description:
      "The project is a full-stack Flashcard App featuring a React frontend and an Express backend that generates flashcards and quiz questions using Google Generative AI.",
    technologies: ["React", "React Router", "Redux Toolkit", "JavaScript", "CSS", "HTML", "Node.js", "Git", "GitHub", "Responsive Design", "Accessibility"],
    imageUrl: flashcard,
    featured: true,
    gitHubLink: "https://github.com/BanaYugandharReddy08/Flashcard",
    reportFile: null,
    projectLink: "https://flashcard-1-5xj3.onrender.com/"
  },
];

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [canEmbed, setCanEmbed] = useState(true);

  // Set SEO meta tags for Projects page
  useSEOMetaTags({
    title: 'Projects | Yugandhar Reddy Bana - Frontend Engineer Portfolio',
    description: 'Explore my featured projects including ML models for housing price prediction, full-stack applications, and responsive web interfaces built with React and modern technologies.',
    url: 'https://iTzMeYuGiBoo.github.io/Portfolio/projects',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=1200&h=630&fit=crop',
  });

  useEffect(() => {
    requestAnimationFrame(() => setAnimate(true));
  }, []);

  return (
    <div className="projects-page">
      <div className="container">
        {/* ───────── header ───────── */}
        <div className={`experience-header fade-in-up ${animate ? 'run' : ''}`}>
          <h1>Projects</h1>
          <p className="experience-intro">
            Explore my featured projects and technical work.
          </p>
        </div>

        {/* ───────── projects grid ───────── */}
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div
              key={proj.id}
              className={`project-card ${proj.featured ? 'featured' : ''} fade-in-up ${
                animate ? 'run' : ''
              }`}
              style={{ animationDelay: `${0.1 * i + 0.2}s` }}
              onClick={() => setSelectedProject(proj)}
            >
              <div className="project-image">
                <img src={proj.imageUrl} alt={proj.title} />
              </div>
              <div className="project-content">
                <h2>{proj.title}</h2>
                <p>{proj.description.slice(0, 100)}…</p>

                <div className="technologies">
                  {proj.technologies.slice(0, 3).map((tech, k) => (
                    <span key={k} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {proj.technologies.length > 3 && (
                    <span className="tech-tag">
                      +{proj.technologies.length - 3}
                    </span>
                  )}
                </div>

                <button className="button outline view-project-btn">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ───────── modal ───────── */}
        {selectedProject && (
          <div
            className="project-modal"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="project-modal-content fade-in-up run"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-button"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              <img
                className="project-modal-image"
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
              />

              <div className="project-modal-details">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.description}</p>

                <h3>Technologies Used</h3>
                <div className="technologies">
                  {selectedProject.technologies.map((tech, k) => (
                    <span key={k} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                {selectedProject.reportFile && (
                  <div className="project-report-details">
                    <h3>Report Details</h3>
                    {canEmbed ? (
                      <iframe
                        title={selectedProject.title}
                        src={`${selectedProject.reportFile}#toolbar=0&view=FitH`}
                        loading="lazy"
                        style={{ width: '100%', height: '60vh', border: 'none' }}
                      />
                    ) : (
                      <div className="no-preview-wrapper">
                        <p className="no-preview">
                          Your browser can't display PDFs inline.
                        </p>
                        <a
                          href={selectedProject.reportFile}
                          download
                          className="button outline download-report-btn"
                        >
                          Download Report
                        </a>
                      </div>
                    )}
                  </div>
                )}
                {selectedProject.gitHubLink && (
                  <div className="project-links">
                    <a
                      href={selectedProject.gitHubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button outline github-link-btn"
                    >
                      View on GitHub
                    </a>
                    <a
                      href={selectedProject.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button outline project-link-btn"
                    >
                      View Live Project
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
