import { useState } from 'react';
import useSEOMetaTags from '../hooks/useSEOMetaTags';
import './styles/CertificationsPage.css';

// Certificate data with skills mapped
const initialCertificates = [
  {
    id: '2',
    title: 'Meta Front-End Development',
    issuer: 'Meta',
    issuerLogo: '🎯',
    date: '2023-11-22',
    category: 'Development',
    status: 'In Progress',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'Git', 'UX/UI'],
    credentialUrl: 'https://coursera.org/professional-certificates/meta-front-end-developer',
    takeaway: [
      'Built a full front-end stack with HTML5 and modern CSS (Flexbox, Grid)',
      'Mastered JavaScript ES6+, DOM manipulation, and debugging techniques',
      'Learned React component model, hooks, and routing patterns',
      'Authored a capstone Single Page Application (SPA)',
      'Applied UX/UI heuristics, wire-framing, and responsive design principles',
      'Used Git/GitHub for real-world version control and peer collaboration',
      'Completed coding-interview prep with algorithmic problem-solving exercises'
    ],
    children: [
      {
        id: '2-1',
        title: 'Introduction to Front-End Development',
        takeaway: 'Front-end vs back-end roles, how the web works, basic HTML/CSS.',
        certificateLink: 'https://coursera.org/share/fd7ee9d775c78021fae48139f5953a7b',
        status: 'Completed'
      },
      {
        id: '2-2',
        title: 'Programming with JavaScript',
        takeaway: 'JS syntax, data structures, functions, OOP, debugging.',
        certificateLink: 'https://coursera.org/share/e00e1e065c7d33319d8f68fc4f295588',
        status: 'Completed'
      },
      {
        id: '2-3',
        title: 'Version Control',
        takeaway: 'Git basics, branching, merging, GitHub collaboration workflow.',
        certificateLink: 'https://coursera.org/share/ba8f1d90a0d34dd512f00c854003f900',
        status: 'Completed'
      },
      {
        id: '2-4',
        title: 'HTML & CSS in Depth',
        takeaway: 'Semantic HTML, Flexbox, Grid, media queries, accessibility.',
        certificateLink: 'https://coursera.org/share/<your-cert-link-4>',
        status: 'In Progress'
      },
      {
        id: '2-5',
        title: 'React Basics',
        takeaway: 'Components, JSX, props, state, simple UI interactions.',
        certificateLink: 'https://coursera.org/share/63c238e2094e735116181846e8d77b03',
        status: 'Completed'
      },
      {
        id: '2-6',
        title: 'Advanced React',
        takeaway: 'Hooks, Context API, React Router, performance optimisation.',
        certificateLink: 'https://coursera.org/share/<your-cert-link-6>',
        status: 'In Progress'
      },
      {
        id: '2-7',
        title: 'Principles of UX/UI Design',
        takeaway: 'Design thinking, wire-frames, prototypes, usability testing.',
        certificateLink: 'https://coursera.org/share/<your-cert-link-7>',
        status: 'In Progress'
      },
      {
        id: '2-8',
        title: 'Front-End Developer Capstone',
        takeaway: 'Built & deployed a production-ready React SPA as final project.',
        certificateLink: 'https://coursera.org/share/<your-cert-link-8>',
        status: 'In Progress'
      },
      {
        id: '2-9',
        title: 'Coding Interview Preparation',
        takeaway: 'Algorithm practice, white-boarding, behavioural interview tips.',
        certificateLink: 'https://coursera.org/share/<your-cert-link-9>',
        status: 'In Progress'
      }
    ]
  },
  {
    id: '3',
    title: 'Microsoft Power BI Data Analyst',
    issuer: 'Microsoft',
    issuerLogo: '🔷',
    date: '2023-08-10',
    category: 'Data',
    status: 'In Progress',
    skills: ['Power BI', 'DAX', 'Data Modeling', 'Excel', 'ETL'],
    credentialUrl: 'https://www.coursera.org/professional-certificates/microsoft-power-bi-data-analyst',
    takeaway: [
      'Learned end-to-end analytics process from asking questions to driving decisions',
      'Excel data cleaning, profiling, and reshaping techniques',
      'Power BI analyst roles and data-analysis lifecycle overview',
      'Storage modes, Power Query transforms, dataflows, and anomaly detection',
      'Star-schema data modeling with DAX calculations and performance tuning',
      'Built interactive visuals, reports, and dashboards for data storytelling',
      'Created and published apps with row-level security implementation',
      'Completed comprehensive capstone project applying all concepts'
    ],
    children: [
      { 
        id: '3-1',
        title: 'Preparing Data for Analysis with Microsoft Excel',
        takeaway: 'Excel techniques for cleaning, profiling & reshaping data prior to Power BI.',
        certificateLink: 'https://coursera.org/share/<CERT-LINK-1>',
        status: 'Completed'
      },
      { 
        id: '3-2',
        title: 'Harnessing the Power of Data with Power BI',
        takeaway: 'Power BI analyst roles, data-analysis lifecycle & core service overview.',
        certificateLink: 'https://coursera.org/share/<CERT-LINK-2>',
        status: 'Completed'
      },
      { 
        id: '3-3',
        title: 'Extract, Transform and Load Data in Power BI',
        takeaway: 'Storage modes, Power Query transforms, dataflows & anomaly detection.',
        certificateLink: 'https://coursera.org/share/<CERT-LINK-3>',
        status: 'In Progress'
      },
      { 
        id: '3-4',
        title: 'Data Modeling in Power BI',
        takeaway: 'Star-schema modelling, DAX calculations & model performance tuning.',
        certificateLink: 'https://coursera.org/share/<CERT-LINK-4>',
        status: 'In Progress'
      },
      { 
        id: '3-5',
        title: 'Data Analysis and Visualization with Power BI',
        takeaway: 'Built interactive visuals, reports and dashboards for data storytelling.',
        certificateLink: 'https://coursera.org/share/<CERT-LINK-5>',
        status: 'In Progress'
      },
      { 
        id: '3-6',
        title: 'Creative Designing in Power BI',
        takeaway: 'Advanced visuals, custom themes, streaming tiles and multimedia add-ins.',
        certificateLink: 'https://coursera.org/share/<CERT-LINK-6>',
        status: 'In Progress'
      },
      { 
        id: '3-7',
        title: 'Deploy and Maintain Power BI Assets & Capstone',
        takeaway: 'Created & published apps, implemented row-level security, completed capstone.',
        certificateLink: 'https://coursera.org/share/<CERT-LINK-7>',
        status: 'In Progress'
      },
      { 
        id: '3-8',
        title: 'Microsoft PL-300 Exam Preparation & Practice',
        takeaway: 'Mock exams and practice labs covering the full PL-300 exam blueprint.',
        certificateLink: 'https://coursera.org/share/<CERT-LINK-8>',
        status: 'In Progress'
      }
    ]
  },
  {
    id: '4',
    title: 'Excel Skills for Business',
    issuer: 'Macquarie University',
    issuerLogo: '📊',
    date: '2023-09-15',
    category: 'Data',
    status: 'Completed',
    skills: ['Excel', 'Data Analysis', 'Macros', 'VBA', 'Dashboards'],
    credentialUrl: 'https://www.coursera.org/specializations/excel',
    takeaway: [
      'Progressed from Excel essentials to power-user level across four courses',
      'Built dashboards and cleaned large datasets with advanced techniques',
      'Automated tasks using advanced formulas and macros',
      'Applied data-validation, what-if analysis, and forecasting methods',
      'Implemented modeling techniques for complex business scenarios',
      'Completed real-world business case projects with downloadable workbooks'
    ],
    children: [
      { 
        id: '4-1',
        title: 'Excel Skills for Business: Essentials',
        takeaway: 'Navigation, formatting, basic formulas, charts & foundational spreadsheet skills.',
        certificateLink: 'https://coursera.org/share/e9b946c8df2c85e70d1ba00b29b29eb9',
        status: 'Completed'
      },
      { 
        id: '4-2',
        title: 'Excel Skills for Business: Intermediate I',
        takeaway: 'Large-dataset management, logical & lookup functions, productivity features.',
        certificateLink: 'https://coursera.org/share/70874b50c9a484f601f77670f1cf45a3',
        status: 'Completed'
      },
      { 
        id: '4-3',
        title: 'Excel Skills for Business: Intermediate II',
        takeaway: 'Error-proofing, advanced formulas, automation with macros, forecasting models.',
        certificateLink: 'https://coursera.org/share/477cc362c9e434e81edeeb1efd2ba20c',
        status: 'Completed',
      },
      { 
        id: '4-4',
        title: 'Excel Skills for Business: Advanced',
        takeaway: 'Power-user techniques: advanced lookups, data cleaning, professional dashboards.',
        certificateLink: 'https://coursera.org/share/0368fc9498f32572d799b0b75c0ed176',
        status: 'Completed'
      }
    ]
  },
  {
    id: '5',
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'AWS Training',
    issuerLogo: '☁️',
    date: '2025-06-20',
    category: 'Cloud',
    status: 'In Progress',
    skills: ['AWS', 'Cloud Computing', 'EC2', 'S3', 'Security'],
    credentialUrl: 'https://www.coursera.org/learn/aws-cloud-technical-essentials',
    takeaway: 'Gaining foundational knowledge of AWS services, cloud concepts, security, and architecture best practices.',
    children: [
      {
        id: '5-1',
        title: 'AWS Cloud Technical Essentials',
        takeaway: 'Learning core AWS services, terminology, compute, storage, database, and security basics.',
        certificateLink: 'https://coursera.org/share/<CERT-LINK-A1>',
        status: 'In Progress'
      }
    ]
  },
  {
    id: '6',
    title: 'Masters in Data Analytics',
    issuer: 'National College of Ireland (NCI)',
    issuerLogo: '🎓',
    date: '2025-02-06',
    category: 'Academic',
    status: 'Completed',
    skills: ['Machine Learning', 'Python', 'R', 'Statistics', 'Data Visualization'],
    credentialUrl: 'https://www.ncirl.ie/',
    takeaway: 'Completed advanced coursework in machine learning, statistical modeling, data visualization, and big data architecture. Thesis achieved 88% accuracy in predictive modeling of Dublin property prices.'
  },
  {
    id: '7',
    title: 'Bachelors in Computer Science',
    issuer: 'SASTRA University',
    issuerLogo: '🎓',
    date: '2021-08-10',
    category: 'Academic',
    status: 'Completed',
    skills: ['Java', 'C++', 'Algorithms', 'Data Structures', 'Software Engineering'],
    credentialUrl: 'https://www.sastra.edu/',
    takeaway: 'Foundational education in computer science principles, data structures, algorithms, and software development methodologies.'
  },
  {
    id: '8',
    title: 'Software Engineer Intern',
    issuer: 'HackerRank',
    issuerLogo: '💻',
    date: '2025-05-09',
    category: 'Development',
    status: 'Completed',
    skills: ['Problem Solving', 'Algorithms', 'Data Structures', 'Coding'],
    credentialUrl: `${process.env.PUBLIC_URL}/assets/sei_certificate.pdf`,
    takeaway: [
      'Demonstrated strong problem-solving abilities through algorithmic challenges',
      'Applied core software engineering principles in practical coding tasks',
      'Developed proficiency in data structures and algorithms',
      'Improved coding efficiency and best practices',
      'Showcased real-world technical aptitude in competitive programming'
    ]
  },
  {
    id: '9',
    title: 'Frontend Developer (React)',
    issuer: 'HackerRank',
    issuerLogo: '⚛️',
    date: '2025-05-09',
    category: 'Development',
    status: 'Completed',
    skills: ['React', 'JSX', 'Hooks', 'State Management', 'Component Lifecycle'],
    credentialUrl: `${process.env.PUBLIC_URL}/assets/fde_react.pdf`,
    takeaway: [
      'Validated practical skills in building modern web applications with React',
      'Mastered key frontend concepts: JSX and component lifecycle',
      'Developed expertise in React Hooks and state management patterns',
      'Implemented React Router for multi-page application navigation',
      'Built responsive and interactive user interfaces in production-like environments'
    ]
  }
];

const CertificationsPage = () => {
  const [certificates] = useState(initialCertificates);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [filter, setFilter] = useState('All');
  const [skillFilter, setSkillFilter] = useState(null);
  
  // Set SEO meta tags for Certifications page
  useSEOMetaTags({
    title: 'Professional Certifications & Credentials | Yugandhar Reddy Bana',
    description: 'Browse my professional certifications in React, AWS, Power BI, Data Analytics, and more. Verified credentials from Meta, Microsoft, HackerRank, and leading universities.',
    url: 'https://iTzMeYuGiBoo.github.io/Portfolio/certifications/',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=630&fit=crop',
  });
  
  const categories = ['All', 'Development', 'Data', 'Cloud', 'Academic'];
  
  // Generate structured data for all certificates
  const certificatesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yugandhar Reddy Bana',
    hasCredential: certificates.map(cert => ({
      '@type': 'EducationalOccupationalCredential',
      name: cert.title,
      credentialCategory: cert.category === 'Academic' ? 'degree' : 'certificate',
      recognizedBy: {
        '@type': cert.category === 'Academic' ? 'EducationalOrganization' : 'Organization',
        name: cert.issuer
      },
      dateCreated: cert.date,
      ...(cert.credentialUrl && { url: cert.credentialUrl })
    }))
  };
  
  const filteredCertificates = certificates.filter(cert => {
    const matchesCategory = filter === 'All' || cert.category === filter;
    const matchesSkill = !skillFilter || (cert.skills && cert.skills.includes(skillFilter));
    return matchesCategory && matchesSkill;
  });

  const handleSkillClick = (skill) => {
    setSkillFilter(skillFilter === skill ? null : skill);
  };

  return (
    <div className="certifications-page">
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(certificatesSchema)}
      </script>

      <div className="container">
        <header className="certifications-header">
          <h1>Professional Certifications & Credentials</h1>
          <p className="intro-text">
            Verified credentials and certifications demonstrating expertise in full-stack development, 
            data analytics, cloud computing, and software engineering. Click any card to view details and credential verification.
          </p>
          
          <nav className="filter-controls" aria-label="Certificate filters">
            <div className="categories-filter">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-button ${filter === category ? 'active' : ''}`}
                  onClick={() => {
                    setFilter(category);
                    setSkillFilter(null);
                  }}
                  aria-pressed={filter === category}
                >
                  {category}
                </button>
              ))}
            </div>
            {skillFilter && (
              <div className="active-skill-filter">
                <span>Filtering by skill: <strong>{skillFilter}</strong></span>
                <button 
                  onClick={() => setSkillFilter(null)}
                  className="clear-filter-btn"
                  aria-label="Clear skill filter"
                >
                  ✕
                </button>
              </div>
            )}
          </nav>
        </header>
        
        <div className="certificates-bento-grid">
          {filteredCertificates.length > 0 ? (
            filteredCertificates.map(certificate => (
              <article 
                className={`certificate-bento-card ${certificate.status === 'Completed' ? 'completed' : 'in-progress'}`}
                key={certificate.id}
              >
                <div className="cert-card-header">
                  <span className="issuer-logo" aria-hidden="true">{certificate.issuerLogo}</span>
                  <div className="cert-meta">
                    <span className="cert-issuer">{certificate.issuer}</span>
                    <time className="cert-date" dateTime={certificate.date}>
                      {new Date(certificate.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short'
                      })}
                    </time>
                  </div>
                  <span className={`cert-status-badge ${certificate.status === 'Completed' ? 'completed' : 'in-progress'}`}>
                    {certificate.status}
                  </span>
                </div>
                
                <h3 className="cert-title">{certificate.title}</h3>
                
                {certificate.skills && certificate.skills.length > 0 && (
                  <div className="skills-pills" role="list" aria-label="Skills covered">
                    {certificate.skills.map((skill, idx) => (
                      <button
                        key={idx}
                        className={`skill-pill ${skillFilter === skill ? 'active' : ''}`}
                        onClick={() => handleSkillClick(skill)}
                        role="listitem"
                        aria-pressed={skillFilter === skill}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                )}
                
                <button 
                  className="view-credential-btn"
                  onClick={() => setSelectedCertificate(certificate)}
                  aria-label={`View details for ${certificate.title}`}
                >
                  View Credential
                </button>
              </article>
            ))
          ) : (
            <div className="no-results">
              <p>No certificates found for the selected filters.</p>
              <button 
                className="button"
                onClick={() => {
                  setFilter('All');
                  setSkillFilter(null);
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
        
        {selectedCertificate && (
          <div 
            className="certificate-modal" 
            onClick={() => setSelectedCertificate(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="certificate-modal-content" onClick={e => e.stopPropagation()}>
              <button 
                className="close-button" 
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
              
              <div className="certificate-modal-details">
                <div className="modal-header">
                  <span className="modal-issuer-logo">{selectedCertificate.issuerLogo}</span>
                  <div>
                    <h2 id="modal-title">{selectedCertificate.title}</h2>
                    <p className="modal-issuer">Issued by {selectedCertificate.issuer}</p>
                  </div>
                </div>
                
                <div className="modal-meta">
                  <div className="meta-item">
                    <strong>Date Issued:</strong>
                    <time dateTime={selectedCertificate.date}>
                      {new Date(selectedCertificate.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  <div className="meta-item">
                    <strong>Status:</strong>
                    <span className={selectedCertificate.status === 'Completed' ? 'status-completed' : 'status-progress'}>
                      {selectedCertificate.status}
                    </span>
                  </div>
                </div>

                {selectedCertificate.skills && selectedCertificate.skills.length > 0 && (
                  <div className="modal-skills">
                    <strong>Skills Validated:</strong>
                    <div className="skills-pills">
                      {selectedCertificate.skills.map((skill, idx) => (
                        <span key={idx} className="skill-pill">{skill}</span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="certificate-takeaway-section">
                  <h3>What I Learned</h3>
                  {Array.isArray(selectedCertificate.takeaway) ? (
                    <ul className="takeaway-bullets">
                      {selectedCertificate.takeaway.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{selectedCertificate.takeaway || "No summary available."}</p>
                  )}
                </div>

                {selectedCertificate.children && selectedCertificate.children.length > 0 && (
                  <div className="course-certifications">
                    <h3>Course Certifications</h3>
                    <p className="course-intro">
                      Individual courses completed within the {selectedCertificate.title} program:
                    </p>
                    <div className="course-cert-list">
                      {selectedCertificate.children.map(child => (
                        <div className="course-card" key={child.id}>
                          <h4>{child.title}</h4>
                          <p>{child.takeaway}</p>
                          {child.status === 'In Progress' ? (
                            <p className="status ongoing">Status: {child.status}</p>
                          ) : (
                            <a 
                              href={child.certificateLink} 
                              target='_blank' 
                              rel="noopener noreferrer"
                              className="cert-link"
                            >
                              View Certificate →
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedCertificate.credentialUrl && (
                  <div className="credential-actions">
                    <a 
                      href={selectedCertificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button primary"
                    >
                      View Official Credential
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

export default CertificationsPage;
