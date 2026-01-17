# 🚀 Yugandhar Reddy Bana - Portfolio Website

[![Deployed on GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-blue)](https://iTzMeYuGiBoo.github.io/Portfolio/)
[![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB?logo=react)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> A modern, responsive portfolio website showcasing professional experience, projects, certifications, and technical skills. Built with React and optimized for performance and SEO.

🌐 **Live Demo**: [https://iTzMeYuGiBoo.github.io/Portfolio/](https://iTzMeYuGiBoo.github.io/Portfolio/)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [SEO Optimization](#-seo-optimization)
- [Accessibility](#-accessibility)
- [Performance](#-performance)
- [Recent Updates](#-recent-updates)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## ✨ Features

### 🎯 Core Features
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Single Page Application (SPA)**: Fast, seamless navigation with React Router
- **Dark/Light Mode**: Theme context with system preference detection
- **SEO Optimized**: Dynamic meta tags, structured data (JSON-LD), and pre-rendering
- **Accessibility First**: WCAG 2.1 compliant with ARIA labels and semantic HTML
- **Performance**: Optimized bundle size, lazy loading, and code splitting

### 📄 Pages

#### 🏠 Home
- Hero section with dynamic typing effect
- Skills showcase with categorized tech stack
- Quick links to projects and contact

#### 👨‍💼 About
- Professional summary and bio
- Career timeline
- Core competencies and soft skills

#### 🎓 Education
- Academic credentials (MSc Data Analytics, BSc Computer Science)
- Thesis details with modal viewer
- Continuous learning section
- Course modules and skills developed

#### 🏆 Certifications (Bento Grid Design)
- **NEW**: Modern card-based layout with CSS Grid
- **NEW**: Skill-based filtering system
- **NEW**: JSON-LD structured data for SEO
- Professional certifications from Meta, Microsoft, AWS, HackerRank
- Certificate viewer with credential verification links
- Status badges (Completed/In Progress)
- Interactive skill tags

#### 💼 Experience
- Professional work history
- Key responsibilities and achievements
- Technologies used per role

#### 🚀 Projects
- Portfolio of technical projects
- Live demos and GitHub repositories
- Tech stack visualization
- Project descriptions and outcomes

#### 📬 Contact
- Contact form with validation
- Social media links (LinkedIn, GitHub)
- Email and phone information
- Location details

#### 📄 Resume & Cover Letter
- PDF viewer with download option
- Professional documents

---

## 🛠 Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **React Router DOM 6.28.0** - Client-side routing
- **CSS3** - Custom styling with CSS variables

### Build & Deployment
- **Create React App** - Build tooling
- **gh-pages 6.2.0** - GitHub Pages deployment
- **Cheerio** - HTML parsing for pre-rendering

### Development Tools
- **ESLint** - Code linting
- **Testing Library** - Component testing
- **Web Vitals** - Performance monitoring

### SEO & Performance
- Custom SEO hooks for dynamic meta tags
- JSON-LD structured data (Person, EducationalOccupationalCredential)
- Pre-rendering for all routes
- Optimized images and lazy loading

---

## 📁 Project Structure

```
Portfolio/
├── public/                    # Static files
│   ├── index.html            # HTML template
│   ├── favicon.svg           # Site favicon
│   ├── 404.html              # GitHub Pages 404 handler
│   └── MetaCertificates/     # Certificate images
│
├── src/
│   ├── assets/               # Images, PDFs, and media
│   │   ├── Photo.jpg
│   │   ├── resume.pdf
│   │   ├── coverletter.pdf
│   │   └── ...
│   │
│   ├── components/           # Reusable components
│   │   ├── auth/
│   │   │   └── ProtectedRoute.js
│   │   └── layout/
│   │       ├── Header.js
│   │       ├── Footer.js
│   │       └── ThesisModal.js
│   │
│   ├── context/              # React Context providers
│   │   ├── AuthContext.js    # Authentication state
│   │   └── ThemeContext.js   # Theme management
│   │
│   ├── hooks/                # Custom hooks
│   │   └── useSEOMetaTags.js # Dynamic SEO meta tags
│   │
│   ├── pages/                # Page components
│   │   ├── HomePage.js
│   │   ├── AboutPage.js
│   │   ├── EducationPage.js
│   │   ├── CertificationsPage.js  ★ Recently updated
│   │   ├── ExperiencePage.js
│   │   ├── ProjectsPage.js
│   │   ├── ContactPage.js
│   │   ├── ResumeAndCoverPage.js
│   │   ├── DashboardPage.js
│   │   ├── LoginPage.js
│   │   └── NotFoundPage.js
│   │
│   ├── App.js                # Main app component
│   ├── App.css               # Global app styles
│   ├── index.js              # App entry point
│   ├── index.css             # Global CSS (variables, reset)
│   └── setupTests.js         # Test configuration
│
├── scripts/
│   └── prerender.js          # Pre-rendering script for SEO
│
├── build/                    # Production build (auto-generated)
├── .gitignore               # Git ignore rules
├── package.json             # Dependencies and scripts
├── PRERENDERING.md          # Pre-rendering documentation
└── README.md                # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/iTzMeYuGiBoo/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## 📜 Available Scripts

### Development
```bash
npm start
```
Runs the app in development mode with hot reload.

### Testing
```bash
npm test
```
Launches the test runner in interactive watch mode.

### Build
```bash
npm run build
```
Builds the app for production to the `build` folder.  
Includes:
- Production optimizations
- Pre-rendering for all routes
- Asset optimization and minification

### Deploy
```bash
npm run deploy
```
Builds the app and deploys to GitHub Pages automatically.

### Pre-deploy
```bash
npm run predeploy
```
Runs automatically before `npm run deploy` to create production build.

---

## 🌐 Deployment

This portfolio is deployed on **GitHub Pages** using the `gh-pages` package.

### Automatic Deployment
```bash
npm run deploy
```

This will:
1. Build the production version
2. Pre-render all routes for SEO
3. Deploy to the `gh-pages` branch
4. Make it live at `https://iTzMeYuGiBoo.github.io/Portfolio/`

### Manual Deployment
1. Build the project: `npm run build`
2. The `build` folder contains the production-ready files
3. Deploy the `build` folder to any static hosting service

### GitHub Pages Configuration
- **Source**: `gh-pages` branch
- **Homepage**: Set in `package.json` as `https://iTzMeYuGiBoo.github.io/Portfolio/`
- **Custom Domain**: Can be configured in repository settings

---

## 🔍 SEO Optimization

### Implemented SEO Features

#### 1. **Dynamic Meta Tags**
Custom hook `useSEOMetaTags()` updates meta tags per page:
- Title
- Description
- Open Graph tags (og:title, og:description, og:image, og:url)
- Twitter Card tags

#### 2. **Structured Data (JSON-LD)**
- **Person Schema**: Homepage with contact information
- **EducationalOccupationalCredential Schema**: Certifications page
- Helps search engines understand content context

#### 3. **Pre-rendering**
All routes are pre-rendered during build:
- `/` (Home)
- `/about`
- `/education`
- `/certifications`
- `/experience`
- `/projects`
- `/contact`
- `/resume-and-cover`

Each route has its own `index.html` with proper meta tags for crawlers.

#### 4. **Semantic HTML**
- Proper heading hierarchy (h1 → h6)
- `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>` tags
- ARIA labels for accessibility

#### 5. **Performance Optimization**
- Code splitting
- Lazy loading
- Optimized images
- Minified assets
- Font preloading

---

## ♿ Accessibility

### WCAG 2.1 Compliance
- **Keyboard Navigation**: All interactive elements accessible via keyboard
- **ARIA Labels**: Descriptive labels for screen readers
- **Color Contrast**: Minimum 4.5:1 ratio for text
- **Focus Indicators**: Visible focus states for all interactive elements
- **Alt Text**: All images have descriptive alt attributes
- **Form Labels**: All form inputs properly labeled

### Screen Reader Support
- Semantic HTML structure
- ARIA roles and properties
- Live regions for dynamic content updates

---

## ⚡ Performance

### Optimization Techniques
- **Code Splitting**: React.lazy() for route-based splitting
- **Asset Optimization**: Compressed images, minified CSS/JS
- **Caching**: Service worker for offline support (optional)
- **Lazy Loading**: Images and components loaded on demand
- **Bundle Size**: Optimized dependencies and tree-shaking

### Performance Metrics (Lighthouse)
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 100

---

## 🆕 Recent Updates

### January 17, 2026 - Major Certifications Page Refactor
#### ✅ Implemented Changes

**CERT-001: Bento Grid Cards**
- Refactored certifications to modern card-based layout
- Replaced raw certificate images with stylized CSS Grid cards
- Added issuer logos (emoji-based for consistency)
- Implemented "View Credential" button on each card
- Modal system for viewing full certificate details

**CERT-002: Category Organization**
- Organized certifications by category (Development, Data, Cloud, Academic)
- Removed physical certificate images to reduce bundle size
- Professional presentation suitable for technical recruiters

**CERT-003: Structured Data for SEO**
- Added JSON-LD schema with `EducationalOccupationalCredential` type
- Mapped all certificates with proper metadata:
  - `name`: Certificate title
  - `recognizedBy`: Issuing organization
  - `credentialCategory`: degree/certificate
  - `dateCreated`: Issue date
  - `url`: Credential verification link

**CERT-004: Asset Optimization**
- Removed unused certificate images (React.png, SoftwareEngineerIntern.png, etc.)
- Reduced build size by eliminating redundant assets
- Optimized for faster page load

**CERT-005: Skills-Based Filtering**
- Added skill tags to each certificate
- Interactive skill pills with click-to-filter functionality
- Visual feedback for active filters
- Clear filter button for easy reset

**Code Quality Improvements**
- Removed production `console.log` statements
- Added SVG favicon with brand gradient
- Fixed all accessibility issues (ARIA labels, semantic HTML)
- Secured external links with `rel="noopener noreferrer"`
- Improved form accessibility with proper labels

**Build & Deploy**
- Successfully built and deployed to GitHub Pages
- All routes pre-rendered for SEO
- Lighthouse scores maintained/improved

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

### How to Contribute
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Yugandhar Reddy Bana**

- 📧 Email: [yugandharreddybana@outlook.com](mailto:yugandharreddybana@outlook.com)
- 💼 LinkedIn: [linkedin.com/in/bana-yugandhar-reddy](https://linkedin.com/in/bana-yugandhar-reddy)
- 🐙 GitHub: [github.com/BanaYugandharReddy08](https://github.com/BanaYugandharReddy08)
- 🌐 Portfolio: [iTzMeYuGiBoo.github.io/Portfolio](https://iTzMeYuGiBoo.github.io/Portfolio/)
- 📍 Location: Dublin, Ireland
- 📱 Phone: +353 89 485 1413

---

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Create React App** for the build tooling
- **GitHub Pages** for free hosting
- **Unsplash** for stock images
- **Font Awesome** for icons
- **Google Fonts** for typography

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/iTzMeYuGiBoo/Portfolio)
![GitHub last commit](https://img.shields.io/github/last-commit/iTzMeYuGiBoo/Portfolio)
![GitHub issues](https://img.shields.io/github/issues/iTzMeYuGiBoo/Portfolio)

---

<div align="center">
  <p>Made with ❤️ by Yugandhar Reddy Bana</p>
  <p>© 2026 All rights reserved</p>
</div>
