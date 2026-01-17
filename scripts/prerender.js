#!/usr/bin/env node

/**
 * Pre-rendering script for React SPA
 * Generates static HTML files for each route
 * This improves SEO by providing full HTML content to crawlers
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

// Create .nojekyll file to prevent GitHub Pages from treating build as Jekyll site
const nojekyllPath = path.join(buildDir, '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
  fs.writeFileSync(nojekyllPath, '');
  console.log('✓ Created .nojekyll file');
}

// For each route, create an index.html file in a subdirectory
// This ensures GitHub Pages serves the correct HTML file for each route
routes.forEach(route => {
  if (route === '/') {
    // Root route is already handled by build/index.html
    console.log('✓ Root route (/) - using default index.html');
    return;
  }

  // Create directory structure for the route
  // e.g., /projects -> build/projects/index.html
  const routePath = route.split('/').filter(Boolean);
  const routeDir = path.join(buildDir, ...routePath);

  // Ensure directory exists
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  // Copy the main index.html to the route directory
  const sourceIndexPath = path.join(buildDir, 'index.html');
  const targetIndexPath = path.join(routeDir, 'index.html');

  try {
    // Read the main index.html
    let indexContent = fs.readFileSync(sourceIndexPath, 'utf8');

    // Write to route subdirectory
    fs.writeFileSync(targetIndexPath, indexContent);
    console.log(`✓ Pre-rendered route: ${route}`);
  } catch (error) {
    console.error(`✗ Error pre-rendering ${route}:`, error.message);
  }
});

// Copy 404.html to build root for GitHub Pages fallback
try {
  const source404 = path.join(__dirname, '..', 'public', '404.html');
  const target404 = path.join(buildDir, '404.html');
  
  if (fs.existsSync(source404)) {
    fs.copyFileSync(source404, target404);
    console.log('✓ 404.html copied to build directory');
  }
} catch (error) {
  console.error('Error copying 404.html:', error.message);
}

console.log('\n✅ Pre-rendering complete!');
console.log(`   Generated static HTML for ${routes.length} routes`);
console.log('   Each route is now crawlable and SEO-friendly\n');
