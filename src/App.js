import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EducationPage from './pages/EducationPage';
import CertificationsPage from './pages/CertificationsPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import ResumeAndCoverPage from './pages/ResumeAndCoverPage';
import { useAuth } from './context/AuthContext';
import FloatingChatBot from './pages/FloatingChatBot';
import './styles/App.css';

// List of valid routes (excluding catch-all)
const validRoutes = ['/', '/about', '/education', '/certifications', '/experience', '/projects', '/contact', '/resume-and-cover'];

function App() {
  const location = useLocation();
  const { user } = useAuth();
  const [isNotFound, setIsNotFound] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if current path is valid
    const isValid = validRoutes.some(route => {
      if (route === '/') return location.pathname === '/' || location.pathname === '';
      return location.pathname === route || location.pathname.startsWith(route + '/');
    });
    
    setIsNotFound(!isValid);
  }, [location.pathname]);

  return (
    <div className="app">
      {!isNotFound && <Header />}
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume-and-cover" element={<ResumeAndCoverPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {!isNotFound && <Footer />}
      {!isNotFound && <FloatingChatBot />}
    </div>
  );
}

export default App;
