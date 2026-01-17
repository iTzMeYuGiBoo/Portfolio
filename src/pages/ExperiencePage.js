import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
import './ExperiencePage.css';

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
    technologies: ["React", "Node.js", "Javascript", "CI/CD", "HTML", "CSS", "JUnit", "Java", "PostgresQL", "Git", "Agile Scrum", "Jira", "Confluence"],
    featured: true
  }
];

const ExperiencePage = () => {
  const [animate, setAnimate] = useState(false);

  /* start animations after first paint */
  useEffect(() => {
    requestAnimationFrame(() => setAnimate(true));
  }, []);

  return (
    <div className="experience-page">
      <div className="container">
        {/* ───────── header ───────── */}
        <div className={`experience-header fade-in-up ${animate ? 'run' : ''}`}>
          <h1>Professional Experience</h1>
          <p className="experience-intro">
            Browse through my professional experience and career journey.
          </p>
        </div>

        {/* ───────── timeline ───────── */}
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
      </div>
    </div>
  );
};

export default ExperiencePage;
