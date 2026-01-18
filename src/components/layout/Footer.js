import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-content" aria-label="Site footer">
        <div className="footer-info">
          <h2 className="footer-logo">Yugandhar Reddy Bana</h2>
          <p className="footer-tagline">Data-savvy Front-End Engineer</p>
          <address className="footer-contact">
            <a href="mailto:yugandharreddybana@outlook.com" aria-label="Email Yugandhar">
              yugandharreddybana@outlook.com
            </a><br />
            <a href="tel:+353894851413" aria-label="Call Yugandhar">
              +353 89 485 1413
            </a><br />
            <span aria-label="Location">Dublin, Ireland</span>
          </address>
        </div>

        <nav className="footer-navigation" aria-label="Footer navigation">
          <h3>Navigation</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about/">About</Link></li>
            <li><Link to="/education/">Education</Link></li>
            <li><Link to="/certifications/">Certifications</Link></li>
            <li><Link to="/experience/">Experience</Link></li>
            <li><Link to="/projects/">Projects</Link></li>
            <li><Link to="/resume-and-cover/">Resume</Link></li>
            <li><Link to="/contact/">Contact</Link></li>
          </ul>
        </nav>

        <nav className="footer-social" aria-label="Social links">
          <h3>Connect</h3>
          <ul>
            <li>
              <a
                href="https://linkedin.com/in/bana-yugandhar-reddy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/BanaYugandharReddy08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer-bottom" aria-label="Legal and policies">
        <p className="copyright">© {currentYear} Yugandhar Reddy Bana</p>
        <ul className="legal-links" role="list">
          <li><a href="#privacy" aria-label="Privacy Policy">Privacy</a></li>
          <li><a href="#terms" aria-label="Terms of Use">Terms</a></li>
          <li><a href="#accessibility" aria-label="Accessibility">Accessibility</a></li>
          <li><a href="#sitemap" aria-label="Sitemap">Sitemap</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;