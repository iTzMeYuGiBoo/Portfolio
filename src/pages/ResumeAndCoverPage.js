import { useEffect, useState } from 'react';
import useSEOMetaTags from '../hooks/useSEOMetaTags';
import './styles/ResumeAndCoverPage.css';

/* files live in PUBLIC_URL so they work in dev & production builds */
const DOCS = {
  resume:      { label: 'CV',           file: 'resume.pdf' },
  coverLetter: { label: 'Cover Letter', file: 'coverletter.pdf' },
};

const ResumeAndCoverPage = () => {
  const [activeTab, setActiveTab] = useState('resume');
  const [canEmbed,  setCanEmbed]  = useState(true);
  const [animate,   setAnimate]   = useState(false);

  // Set SEO meta tags for CV & Cover Letter page
  useSEOMetaTags({
    title: 'CV & Cover Letter | Yugandhar Reddy Bana',
    description: 'Download my professional CV/Resume and cover letter. View detailed information about my experience, skills, and qualifications as a Frontend Engineer.',
    url: 'https://iTzMeYuGiBoo.github.io/Portfolio/resume-and-cover/',
    image: 'https://images.unsplash.com/photo-1586281380349-f70d1b8a850d?w=1200&h=630&fit=crop',
  });

  /* 1️⃣ kick-off entrance animation once */
  useEffect(() => {
    requestAnimationFrame(() => setAnimate(true));
  }, []);

  /* 2️⃣ check once if the browser can embed PDFs */
  useEffect(() => {
    setCanEmbed(Boolean(navigator.mimeTypes?.['application/pdf']));
  }, []);

  /* 3️⃣ handy references */
  const { label, file } = DOCS[activeTab];
  const fileURL = `${process.env.PUBLIC_URL}/${file}`;
  // console.log("The File URL is:", fileURL);

  return (
    <div className="resume-page">
      <div className="container">
        {/* ───────── header + tabs ───────── */}
        <div className={`resume-header fade-in-up ${animate ? 'run' : ''}`}>
          <h1>CV &amp; Cover Letter</h1>
          <p className="resume-intro">
            View or download my application documents below.
          </p>

          <div className="tabs">
            {Object.entries(DOCS).map(([key, { label }]) => (
              <button
                key={key}
                className={`tab ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* ───────── preview / fallback ───────── */}
        {canEmbed ? (
          <div className="pdf-frame fade-in-up run">
            <iframe
              title={label}
              src={`${fileURL}#toolbar=0&view=FitH`}
              loading="lazy"
              style={{ width: '100%', height: '80vh', border: 'none' }}
            />
          </div>
        ) : (
          <p className="no-preview fade-in-up run">
            Your browser can’t display PDFs inline.  
            Use the button below to download the file.
          </p>
        )}

        {/* ───────── download ───────── */}
        <a
          href={fileURL}
          download
          className="button download-btn fade-in-up run"
        >
          ⬇️ Download {label}
        </a>
      </div>
    </div>
  );
};

export default ResumeAndCoverPage;
