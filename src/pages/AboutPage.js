import { useEffect, useState } from 'react';
import useSEOMetaTags from '../hooks/useSEOMetaTags';
import './AboutPage.css';
import Photo from '../assets/Photo.jpg';

const AboutPage = () => {
  const [animate, setAnimate] = useState(false);   // flips CSS keyframes on

  // Set SEO meta tags for About page
  useSEOMetaTags({
    title: 'About Me | Yugandhar Reddy Bana - Frontend Engineer',
    description: 'Learn about Yugandhar Reddy Bana, a passionate frontend engineer with expertise in React, data visualization, and performance optimization. Based in Dublin, Ireland.',
    url: 'https://iTzMeYuGiBoo.github.io/Portfolio/about',
    image: Photo,
  });

  /* launch animations on first paint */
  useEffect(() => {
    requestAnimationFrame(() => setAnimate(true));
  }, []);

  return (
    <div className="about-page">
      <div className="container">
        {/* ───── header ───── */}
        <div className={`about-header fade-in-up ${animate ? 'run' : ''}`}>
          <h1>About Me</h1>
        </div>

        <div className="about-content">
          {/* profile photo */}
          <div
            className={`about-image slide-in-left ${animate ? 'run' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="about-image-container">
              <img
                src={Photo}
                alt="Yugandhar Reddy Bana"
              />
            </div>
          </div>

          {/* bio text */}
          <div
            className={`about-text slide-in-right ${animate ? 'run' : ''}`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="about-bio">
              <p className="about-intro" style={{ textAlign: 'justify' }}>
                I'm a full-stack engineer specializing in React and performance optimization, combining front-end excellence with data analytics expertise. I architect pixel-perfect interfaces that handle complex data workflows—turning raw datasets into intuitive, accessible user experiences. With 88% ML model accuracy and 95+ Lighthouse scores across my projects, I deliver measurable results that accelerate business value.
              </p>

              <h2>My Journey</h2>
              <p style={{ textAlign: 'justify' }}>
                My journey into tech began with a BSc in Computer Science & Engineering from SASTRA University, 
                where I built a strong foundation in programming and software design. After graduation, 
                I joined Incedo Technologies Solutions Limited (client: Verizon) as a software engineer, where I worked on high-impact front-end projects, 
                performance optimization, and scalable system architecture in a global telecom environment.
              </p>

              <p style={{ textAlign: 'justify' }}>
                Eager to deepen my understanding of data and analytics, I pursed MSc in Data Analytics at the National College of
                Ireland, I&apos;m focused on the intersection of front-end
                engineering and data science. My thesis on &quot;Impact of
                Macroeconomic Factors on Newly Built Residential Property Prices
                in Dublin&quot; achieved 88 % model accuracy using ensemble
                machine-learning techniques.
              </p>

              <p style={{ textAlign: 'justify' }}>
                While studying, I also followed a personal interest and worked part-time as a chef at Skylon Hotel, Dublin. 
                This hands-on experience helped me develop strong time management, multitasking, 
                and pressure-handling skills — qualities that complement my work as a developer.
              </p>

              <p style={{ textAlign: 'justify' }}>
                Today, I bring together my experience in software engineering, data analytics,
                 and the discipline of hospitality to deliver solutions that are efficient, reliable, and user-focused.
              </p>

              <h2>My Approach</h2>
              <p style={{ textAlign: 'justify' }}>
                I believe the best digital products are those that disappear –
                interfaces so intuitive and responsive that users never have to
                think about them. This philosophy guides my development process,
                where I combine:
              </p>

              <ul className="approach-list">
                <li>Meticulous attention to UI details and accessibility</li>
                <li>Performance-first engineering with comprehensive testing</li>
                <li>Data-driven decision making backed by analytics</li>
                <li>
                  Collaborative problem-solving with cross-functional teams
                </li>
              </ul>

              <h2>Beyond Coding</h2>
              <p style={{ textAlign: 'justify' }}>
                When I&apos;m not coding, you can find me experimenting with new
                recipes (old habits die hard!), exploring Dublin&apos;s hidden
                corners, or diving into data-visualization projects that make
                complex information accessible.
              </p>

              <div className="cta-buttons">
                <a href="/contact" className="button">
                  Get in Touch
                </a>
                <a href="/experience" className="button outline">
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
