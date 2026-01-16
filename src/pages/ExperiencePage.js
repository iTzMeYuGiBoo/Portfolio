import { useState,useEffect } from 'react';
// import { motion } from 'framer-motion';
import './ExperiencePage.css';
import report from '../assets/report.pdf'; // Import the report fil
import flashcard from '../assets/flashcard.png' // Import the report file
import portfolio from '../assets/portfolio.png'; // Import the portfolio image

const experiences = [

  {
    id: 1,
    position: "Security Officer",
    company: "Bidvest Noonan (Client: JABIL)",
    period: "2025 — Current",
    description: [
      "Ensured the safety and security of a high-tech manufacturing facility, honing vigilance and quick decision-making skills applicable to dynamic work environments.",
      "Monitored access control systems and conducted regular patrols, demonstrating attention to detail and adherence to protocols while balancing part-time security duties with MSc studies.",
      "Collaborated with a team to respond to incidents and emergencies, developing communication and teamwork skills relevant to agile project environments."
    ],
    technologies: ["Vigilance", "Attention to Detail", "Teamwork", "Communication", "Emergency Response", "Time Management", "Multitasking", "Situational Awareness", "Conflict Resolution"],
    featured: true
  },
  {
    id: 2,
    position: "Chef",
    company: "Skylon Hotel (Dublin)",
    period: "2024 — 2025",
    description: [
      "Mastered high-pressure teamwork, time-boxing, and quality control—skills that translate surprisingly well to sprint rooms.",
      "Worked evening and weekend kitchen shifts as a part-time chef while simultaneously completing my MSc, balancing high-pressure service with graduate-level coursework.",
      "Coordinated with kitchen and service staff to ensure timely delivery of high-quality dishes, enhancing my ability to manage multiple tasks and deadlines effectively."
    ],
    technologies: ["Team Coordination", "Time Management", "Quality Control", "Multitasking", "Communication", "Adaptability", "Problem-Solving", "Attention to Detail", "Stress Management", "Customer Service"],
    featured: true
  },
  {
    id: 3,
    position: "Software Engineer",
    company: "Verizon — Incedo Technologies Solutions Limited (Client: Verizon)",
    period: "2021 — 2024",
    description: [
      "Engineered full-stack Telecom modules for 50K+ users using a React, Node.js, and Java (Spring Boot) stack, optimizing SQL execution to ensure 99.9% system availability.",
      "Slashed frontend latency by 67% (reducing load times from 30s to <10s) by implementing React memoization, code-splitting, and a Node.js middle-tier for optimized data aggregation.",
      "Architected a migration from legacy monolithic codebases to a Micro-frontend architecture using Webpack Module Federation, increasing deployment frequency by 30%.",
      "Developed an Asynchronous CSV Engine using Java Spring Boot batch-processing and Node.js streams to process millions of records, reducing manual errors by 70%.",
      "Enforced 100% security standards by implementing Spring Security with OAuth 2.0 and JWT for secure, stateless authentication between React and Java/Node.js backends.",
      "Increased automated test coverage from 30% to 90% by integrating Jest and JUnit frameworks within a CI/CD pipeline, resolving 90% of live issues before production.",
      "Standardized a reusable TypeScript UI library with full WCAG accessibility compliance, reducing user-end form submission errors by 40%.",
      "Boosted user task completion rates by 15% through detailed data analysis of user behavior and subsequent performance tuning of React component structures.",
      "Scaled engineering team capabilities by mentoring 10+ developers and conducting 20+ technical interviews, reducing new hire onboarding time by 20%.",
      "Led Agile delivery within distributed squads by facilitating all Scrum ceremonies and managing version control via Git, resulting in a 15% increase in sprint velocity."
    ],
    technologies: ["React", "Node.js", "Javascript", "CI/CD", "HTML","CSS","JUnit","Java","PostgresQL","Git","Agile Scrum", "Jira", "Confluence"],
    featured: true
  }
];

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
    technologies: ["React", "React Router", "Redux Toolkit", "JavaScript", "CSS", "HTML", "Git", "GitHub","Responsive Design", "Accessibility",],
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
    technologies: ["React", "React Router", "Redux Toolkit", "JavaScript", "CSS", "HTML","Node.js" ,"Git", "GitHub","Responsive Design", "Accessibility",],
    imageUrl: flashcard,
    featured: true,
    gitHubLink: "https://github.com/BanaYugandharReddy08/Flashcard",
    reportFile: null,
    projectLink: "https://flashcard-1-5xj3.onrender.com/"
  },
];



const ExperiencePage = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [selectedProject, setSelectedProject] = useState(null);
  const [animate, setAnimate] = useState(false);          // triggers CSS keyframes
  const [canEmbed,  setCanEmbed]  = useState(true);

  /* start animations after first paint */
  useEffect(() => {
    requestAnimationFrame(() => setAnimate(true));
  }, []);

  return (
    <div className="experience-page">
      <div className="container">
        {/* ───────── header + tabs ───────── */}
        <div className={`experience-header fade-in-up ${animate ? 'run' : ''}`}>
          <h1>Experience &amp; Projects</h1>
          <p className="experience-intro">
            Browse through my professional experience and featured projects.
          </p>

          <div className="tabs">
            <button
              className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              Professional Experience
            </button>
            <button
              className={`tab ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              Projects
            </button>
          </div>
        </div>

        {/* ───────── timeline or grid ───────── */}
        {activeTab === 'experience' ? (
          <div className="experience-timeline">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className={`experience-card ${exp.featured ? 'featured' : ''} fade-in-up ${
                  animate ? 'run' : ''
                }`}
                style={{ animationDelay: `${0.1 * i + 0.2}s` }}
              >
                <div className="experience-period">{exp.period}</div>
                <div className="experience-content">
                  <div className="experience-header">
                    <h2>{exp.position}</h2>
                    <h3>{exp.company}</h3>
                  </div>

                  <ul className="experience-description">
                    {exp.description.map((item, k) => (
                      <li key={k}>{item}</li>
                    ))}
                  </ul>

                  <div className="technologies">
                    {exp.technologies.map((tech, k) => (
                      <span key={k} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
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
        )}

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
                          Your browser can’t display PDFs inline.
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

export default ExperiencePage;
