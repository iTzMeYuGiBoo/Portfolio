import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'
import { AuthProvider } from './context/AuthContext.js'
import { ThemeProvider } from './context/ThemeContext.js'

const basename = process.env.NODE_ENV === 'production' ? '/Portfolio' : '/';

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
