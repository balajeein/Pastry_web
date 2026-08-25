import React from 'react';
import { LATEST_DOWNLOAD_URL } from '../config';

interface DownloadCTAProps {
  onDownloadClick?: () => void;
}

export const DownloadCTA: React.FC<DownloadCTAProps> = ({ onDownloadClick }) => {
  const handleDownload = () => {
    if (onDownloadClick) {
      onDownloadClick();
    }
    if (LATEST_DOWNLOAD_URL) {
      window.location.href = LATEST_DOWNLOAD_URL;
    }
  };

  return (
    <section style={styles.section} aria-label="Download CTA">
      <div className="container" style={styles.container}>
        <div style={styles.contentBox}>
          <h2 style={styles.heading}>YOUR CLIPBOARD IS WAITING.</h2>
          <p style={styles.subtext}>
            Download Pastry and keep your clipboard history one shortcut away.
          </p>
          <button
            onClick={handleDownload}
            style={styles.downloadButton}
            aria-label="Download Pastry for macOS"
            className="download-btn-hover"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>DOWNLOAD PASTRY</span>
          </button>
        </div>
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: '120px 0',
    borderTop: '1px solid rgba(0, 0, 0, 0.06)',
    backgroundColor: '#FAF9F6',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  contentBox: {
    textAlign: 'center',
    maxWidth: '640px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontSize: 'clamp(28px, 4.5vw, 48px)',
    fontWeight: 900,
    letterSpacing: '-0.03em',
    color: '#111111',
    lineHeight: 1.1,
    marginBottom: '16px',
  },
  subtext: {
    fontSize: '17px',
    color: '#6E6E73',
    fontWeight: 500,
    marginBottom: '36px',
    lineHeight: 1.5,
  },
  downloadButton: {
    backgroundColor: '#0066FF',
    color: '#FFFFFF',
    padding: '16px 36px',
    borderRadius: '40px',
    fontSize: '15px',
    fontWeight: 700,
    letterSpacing: '0.04em',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    boxShadow: '0 8px 24px rgba(0, 102, 255, 0.25)',
    transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.15s ease, box-shadow 0.2s ease',
  },
};
