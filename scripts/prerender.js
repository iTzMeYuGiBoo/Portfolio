#!/usr/bin/env node

/**
 * Smart Pre-rendering script for React SPA
 * Copies the built index.html to route subdirectories for GitHub Pages
 * React Router + our meta tag solution handles dynamic content for crawlers
 * 
 * How it works:
 * 1. User visits /Portfolio/projects
 * 2. GitHub Pages looks for /projects/index.html
 * 3. Finds our pre-rendered copy with full meta tags
 * 4. Browser downloads index.html with og:image, description, title in <head>
 * 5. React hydrates and takes over for client-side navigation
 * 6. OpenGraph meta tags in HTML are what crawlers/social media see
 */

const fs = require('fs');
const path = require('path');

// Define all your routes that need pre-rendering
const routes = [
  '/',
  '/about',
  '/education',
  '/certifications',
  '/experience',
  '/projects',
  '/contact',
  '/resume-and-cover'
];

const buildDir = path.join(__dirname, '..', 'build');
const indexPath = path.join(buildDir, 'index.html');

// Create .nojekyll file to prevent GitHub Pages from treating build as Jekyll site
const nojekyllPath = path.join(buildDir, '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
  fs.writeFileSync(nojekyllPath, '');
  console.log('✓ Created .nojekyll file');
}

// Read the base HTML once
if (!fs.existsSync(indexPath)) {
  console.error('❌ Error: build/index.html not found. Run "npm run build" first.');
  process.exit(1);
}

const baseHTML = fs.readFileSync(indexPath, 'utf8');

console.log('🔍 Starting pre-rendering for all routes...\n');

// Process each route
routes.forEach((route, index) => {
  try {
    if (route === '/') {
      // Root already has index.html
      console.log(`✓ [${index + 1}/${routes.length}] Root route (/) - using default index.html`);
      return;
    }

    // Create directory structure for the route
    // e.g., /projects -> build/projects/index.html
    const routeParts = route.split('/').filter(Boolean);
    const routeDir = path.join(buildDir, ...routeParts);

    // Ensure directory exists
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    // Write the index.html to the route directory
    const routeIndexPath = path.join(routeDir, 'index.html');
    fs.writeFileSync(routeIndexPath, baseHTML);
    
    console.log(`✓ [${index + 1}/${routes.length}] Pre-rendered: ${route} → ${routeParts.join('/')}/index.html`);
  } catch (error) {
    console.error(`✗ [${index + 1}/${routes.length}] Error pre-rendering ${route}:`, error.message);
  }
});

// Copy 404.html to build root for GitHub Pages fallback
try {
  const source404 = path.join(__dirname, '..', 'public', '404.html');
  const target404 = path.join(buildDir, '404.html');
  
  if (fs.existsSync(source404)) {
    fs.copyFileSync(source404, target404);
    console.log('\n✓ 404.html copied for fallback routing');
  }
} catch (error) {
  console.error('Error copying 404.html:', error.message);
}

console.log('\n✅ Pre-rendering complete!');
console.log('   📁 Route structure created:');
console.log('      build/index.html (home)');
console.log('      build/projects/index.html');
console.log('      build/about/index.html');
console.log('      build/experience/index.html');
console.log('      ... (all 8 routes)\n');
console.log('   🔍 Each route now serves the full index.html with meta tags');
console.log('   🤖 React Router handles rendering on the client');
console.log('   📄 Crawlers see the meta tags for SEO & social sharing\n');
