import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useSEOMetaTags from '../hooks/useSEOMetaTags';
import './styles/NotFoundPage.css';

const NotFoundPage = () => {
  const [animate, setAnimate] = useState(false);

  // Set SEO meta tags for 404 page
  useSEOMetaTags({
    title: '404 - Page Not Found | Yugandhar Reddy Bana',
    description: 'The page you\'re looking for doesn\'t exist. Return to the homepage to explore my portfolio, projects, and professional experience.',
    url: 'https://iTzMeYuGiBoo.github.io/Portfolio/404',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop',
  });

  useEffect(() => {
    requestAnimationFrame(() => setAnimate(true));
  }, []);

  return (
    <div className="not-found-page">
      <div className="container">
        <div className={`not-found-content fade-in-up ${animate ? 'run' : ''}`}>
          <div className="error-illustration">
            <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
              {/* 404 Text with style */}
              <text x="200" y="150" fontSize="120" fontWeight="700" textAnchor="middle" fill="currentColor" className="error-number">
                404
              </text>
              {/* Decorative elements */}
              <circle cx="100" cy="100" r="15" fill="currentColor" opacity="0.3" />
              <circle cx="300" cy="200" r="20" fill="currentColor" opacity="0.25" />
              <rect x="50" y="220" width="30" height="30" fill="currentColor" opacity="0.2" />
              <rect x="320" y="80" width="25" height="25" fill="currentColor" opacity="0.25" />
            </svg>
          </div>
          <h1>Oops! Page Not Found</h1>
          <h2>404 Error</h2>
          <p>The page you're looking for doesn't exist or may have been moved. Don't worry, you can navigate back to the homepage and continue exploring.</p>
          <div className="not-found-actions">
            <Link to="/" className="button">
              ← Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;