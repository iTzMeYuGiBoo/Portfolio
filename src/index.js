import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'
import { AuthProvider } from './context/AuthContext.js'
import { ThemeProvider } from './context/ThemeContext.js'

const basename = process.env.NODE_ENV === 'production' ? '/Portfolio' : '/';

// Handle 404.html redirect from GitHub Pages
// When user refreshes on a subroute, GitHub Pages serves 404.html which redirects here
// with the path encoded as query parameter, we need to decode it back
if (window.location.pathname.includes('/?/')) {
  const redirectPath = '/' + window.location.pathname.split('/?/')[1];
  window.history.replaceState(null, null, redirectPath + window.location.hash);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <AuthProvider>
          <Router basename={basename}>
            <App />
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
)
