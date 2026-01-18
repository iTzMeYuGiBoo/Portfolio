import { useMemo, useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
import useSEOMetaTags from '../hooks/useSEOMetaTags';
import './styles/ExperiencePage.css';

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

const techMeta = {
  React: 'type: UI Library • version: 18.x',
  'Node.js': 'type: Runtime • version: 20.x',
  Java: 'type: Language • version: 17',
  'Spring Boot': 'type: Framework • version: 3.x',
  JUnit: 'type: Testing • version: 5',
  PostgresQL: 'type: Database • version: 15',
  Git: 'type: VCS • version: 2.x',
  Jira: 'type: Project Mgmt • version: Cloud',
  HTML: 'type: Markup • version: 5',
  CSS: 'type: Styling • version: 3',
  Javascript: 'type: Language • version: ES2023',
  'Agile Scrum': 'type: Process • cadence: 2 weeks',
  Confluence: 'type: Docs • version: Cloud',
  'CI/CD': 'type: Automation • provider: Jenkins',
};

const keywordClass = (word) => <span className="syntax-keyword">{word}</span>;
const stringClass = (value) => <span className="syntax-string">{value}</span>;
const commentClass = (value) => <span className="syntax-comment">{value}</span>;

const renderTechTag = (tech) => (
  <span
    key={tech}
    className="syntax-tech"
    data-tooltip={techMeta[tech] || 'type: Skill • version: current'}
  >
    {stringClass(`"${tech}"`)}
  </span>
);

const buildExperienceCode = (exp) => {
  const techs = exp.technologies.slice(0, 8);
  const summaryLines = exp.description.slice(0, 4);
  const experienceLabel = `${exp.position} @ ${exp.company}`;

  const lines = [
    [keywordClass('import'), ' ', stringClass('{ Experience }'), ' ', keywordClass('from'), ' ', stringClass("'career'"), ';'],
    [keywordClass('export'), ' ', keywordClass('interface'), ' ', 'Experience', ' {'],
    ['  ', 'company', ': ', 'string', ';'],
    ['  ', 'role', ': ', 'string', ';'],
    ['  ', 'period', ': ', 'string', ';'],
    ['  ', 'stack', ': ', 'string[]', ';'],
    ['  ', 'achievements', ': ', '() => string[]', ';'],
    ['}'],
    [''],
    [keywordClass('const'), ' company = ', stringClass(`"${exp.company}"`), ';'],
    [keywordClass('const'), ' role = ', stringClass(`"${exp.position}"`), ';'],
    [commentClass(`// ${exp.period}`)],
    [keywordClass('const'), ' stack = [', ...techs.map((tech, index) => [
      renderTechTag(tech),
      index < techs.length - 1 ? ', ' : ''
    ]), '];'],
    [''],
    [keywordClass('const'), ' achievements = () => {'],
    ['  ', keywordClass('return'), ' ['],
    ...summaryLines.map((line, index) => [
      '    ', stringClass(`"${line}"`),
      index < summaryLines.length - 1 ? ',' : ''
    ]),
    ['  ];'],
    ['};'],
    [''],
    [keywordClass('class'), ' ExperienceService {'],
    ['  ', 'getSummary()', ' {'],
    ['    ', keywordClass('return'), ' ', stringClass(`"${experienceLabel}"`), ';'],
    ['  }'],
    ['}'],
    [''],
    [keywordClass('export'), ' ', keywordClass('default'), ' { company, role, stack, achievements };'],
  ];

  return lines;
};

const ExperiencePage = () => {
  const [animate, setAnimate] = useState(false);
  const [activeId, setActiveId] = useState(experiences[0]?.id || 1);
  const [isCodeView, setIsCodeView] = useState(true);

  // Set SEO meta tags for Experience page
  useSEOMetaTags({
    title: 'Professional Experience | Yugandhar Reddy Bana',
    description: 'View my professional experience as a Frontend Engineer at Verizon, Chef at Skylon Hotel, and Security Officer. 3+ years of full-stack development with React, Node.js, and Java.',
    url: 'https://iTzMeYuGiBoo.github.io/Portfolio/experience/',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop',
  });

  /* start animations after first paint */
  useEffect(() => {
    requestAnimationFrame(() => setAnimate(true));
  }, []);

  const activeExperience = useMemo(
    () => experiences.find((exp) => exp.id === activeId) || experiences[0],
    [activeId]
  );

  const codeLines = useMemo(
    () => buildExperienceCode(activeExperience),
    [activeExperience]
  );

  return (
    <div className="experience-page">
      <div className="container">
        <div className={`experience-header fade-in-up ${animate ? 'run' : ''}`}>
          <h1>Professional Experience</h1>
          <p className="experience-intro">
            Browse through my professional experience and career journey.
          </p>
        </div>

        <section className="ide-shell" aria-label="Experience code editor">
          <header className="ide-header">
            <div className="window-controls" aria-hidden="true">
              <span className="control control-red" />
              <span className="control control-yellow" />
              <span className="control control-green" />
            </div>
            <div className="tab-bar">
              <span className="tab-pill">experience.tsx</span>
              <span className="tab-pill active">{activeExperience?.position?.toLowerCase().replace(/\s+/g, '-')}.tsx</span>
            </div>
            <div className="view-toggle">
              <span className="view-label">Code View</span>
              <button
                type="button"
                className={`toggle-switch ${isCodeView ? 'active' : ''}`}
                aria-pressed={isCodeView}
                onClick={() => setIsCodeView((prev) => !prev)}
              >
                <span className="toggle-thumb" />
              </button>
              <span className="view-label">Reader View</span>
            </div>
          </header>

          <div className="ide-body">
            <aside className="ide-sidebar" aria-label="Experience files">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  type="button"
                  className={`file-item ${activeId === exp.id ? 'active' : ''}`}
                  onClick={() => setActiveId(exp.id)}
                >
                  <span className="file-dot" aria-hidden="true" />
                  <span className="file-name">{exp.position.toLowerCase().replace(/\s+/g, '-')}.tsx</span>
                </button>
              ))}
            </aside>

            <main className="ide-content">
              {isCodeView ? (
                <pre
                  className="code-editor"
                  aria-label={`Job Description for ${activeExperience?.position} at ${activeExperience?.company}`}
                >
                  <code>
                    {codeLines.map((line, index) => (
                      <div className="code-line" key={`line-${index}`}>
                        <span className="line-number">{index + 1}</span>
                        <span className="line-content">
                          {line}
                          {index === codeLines.length - 1 && (
                            <span className="cursor" aria-hidden="true">|</span>
                          )}
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
              ) : (
                <div className="reader-view" aria-label="Reader view of experience">
                  <div className="reader-header">
                    <h2>{activeExperience?.position}</h2>
                    <h3>{activeExperience?.company}</h3>
                    <p className="reader-period">{activeExperience?.period}</p>
                  </div>
                  <ul className="reader-list">
                    {activeExperience?.description.map((item, idx) => (
                      <li key={`reader-${idx}`}>{item}</li>
                    ))}
                  </ul>
                  <div className="reader-tech">
                    {activeExperience?.technologies.map((tech) => (
                      <span
                        key={`reader-tech-${tech}`}
                        className="reader-tech-tag"
                        data-tooltip={techMeta[tech] || 'type: Skill • version: current'}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </main>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExperiencePage;
