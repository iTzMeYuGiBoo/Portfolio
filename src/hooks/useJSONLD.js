import { Helmet } from 'react-helmet-async';

/**
 * JSON-LD Structured Data Hook
 * Adds schema.org structured data for better SEO and rich results
 */
export const useJSONLD = () => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yugandhar Reddy Bana',
    title: 'Front-End Engineer & Data Analyst',
    description: 'Data-savvy front-end engineer who turns numbers into pixel-perfect products.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop',
    url: 'https://iTzMeYuGiBoo.github.io/Portfolio',
    email: 'yugandharreddybana@outlook.com',
    telephone: '+353894851413',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dublin',
      addressCountry: 'IE',
    },
    jobTitle: 'Front-End Engineer',
    sameAs: [
      'https://linkedin.com/in/bana-yugandhar-reddy',
      'https://github.com/BanaYugandharReddy08',
    ],
    knowsAbout: [
      'React',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'Web Performance',
      'Data Visualization',
      'REST APIs',
      'Machine Learning',
      'Python',
      'SQL',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Self-Employed',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Master of Science - Data Analytics',
        educationalLevel: 'Master Degree',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Bachelor of Science - Computer Science',
        educationalLevel: 'Bachelor Degree',
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
    </Helmet>
  );
};

export default useJSONLD;
