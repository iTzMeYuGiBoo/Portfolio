import { useState, useEffect } from 'react';
import useSEOMetaTags from '../hooks/useSEOMetaTags';
import './styles/ProjectsPage.css';
import flashcard from '../assets/flashcard.png';
import portfolio from '../assets/portfolio.png';
import projectsData from '../data/projects.json';

// Map image URLs from JSON to imported images
const imageMap = {
  portfolio,
  flashcard
};

// Transform project data to include actual image imports
const projects = projectsData.map(project => ({
  ...project,
  imageUrl: imageMap[project.imageUrl]
}));

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [canEmbed, setCanEmbed] = useState(true);

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
                <img src={proj.imageUrl} alt={proj.title} width="1024" height="1024" loading="lazy" />
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
                width="1024"
                height="1024"
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
