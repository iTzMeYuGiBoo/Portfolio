import { Helmet } from 'react-helmet-async';

/**
 * SEO Meta Tags Hook
 * Manages page title, description, and social sharing meta tags
 */
export const useSEOMetaTags = ({
  title = 'Yugandhar Reddy Bana | Front-End Engineer & Data Analyst',
  description = 'Data-savvy front-end engineer who turns numbers into pixel-perfect products. React specialist with expertise in performance optimization and data visualization.',
  image = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop',
  url = 'https://iTzMeYuGiBoo.github.io/Portfolio',
  type = 'website',
} = {}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#3b82f6" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Yugandhar Reddy Bana" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* LinkedIn */}
      <meta name="image" property="og:image" content={image} />
      <meta name="author" content="Yugandhar Reddy Bana" />
      
      {/* Additional Meta Tags */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Yugandhar Reddy Bana" />
      <meta name="keywords" content="React, Frontend Engineer, Data Analyst, Web Developer, JavaScript, Portfolio" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Mobile Web App Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Yugandhar Bana" />
    </Helmet>
  );
};

export default useSEOMetaTags;
