import React from 'react';
import { HeroTextSelection } from './HeroTextSelection';
import { CONFIG } from '../config';

interface HeroProps {
  onDownloadClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadClick }) => {
  const handleDownload = () => {
    if (onDownloadClick) {
      onDownloadClick();
    }
    if (CONFIG.downloadUrl) {
      window.location.href = CONFIG.downloadUrl;
    } else {
      alert(`Pastry v${CONFIG.version} DMG download will start as soon as official release DMG is published.`);
    }
  };

  return (
    <section style={styles.section} aria-label="Hero">
      <div className="container" style={styles.container}>

        {/* Main Animated Headline */}
        <div style={styles.headlineWrapper}>
          <HeroTextSelection />
        </div>

        {/* Supporting Copy */}
        <div style={styles.supportingBlock}>
          <p style={styles.supportingLine1}>
            Pastry keeps everything you copy within reach.
          </p>
          <p style={styles.supportingLine2}>
            Press. Pick. Paste. Done.
          </p>
        </div>

        {/* Hero Download CTA & Compatibility Badge */}
        <div style={styles.ctaWrapper}>
          <button
            onClick={handleDownload}
            style={styles.downloadButton}
            aria-label={`Download Pastry for macOS version ${CONFIG.version}`}
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

          <div style={styles.compatibilityLine}>
            <span>For macOS</span>
            <span style={styles.dot}>•</span>
            <span>Free</span>
            <span style={styles.dot}>•</span>
            <span>v{CONFIG.version}</span>
          </div>
        </div>

      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  section: {
    minHeight: 'calc(100vh - 64px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '40px 0 60px 0',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto 0',
    position: 'relative',
    zIndex: 10,
  },
  headlineWrapper: {
    marginBottom: '24px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  supportingBlock: {
    marginBottom: '32px',
    maxWidth: '560px',
  },
  supportingLine1: {
    fontSize: 'clamp(16px, 2.5vw, 19px)',
    color: '#6E6E73',
    fontWeight: 500,
    lineHeight: 1.5,
    letterSpacing: '-0.01em',
  },
  supportingLine2: {
    fontSize: 'clamp(15px, 2.2vw, 18px)',
    color: '#111111',
    fontWeight: 700,
    marginTop: '4px',
    letterSpacing: '-0.01em',
  },
  ctaWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '14px',
  },
  downloadButton: {
    backgroundColor: '#0066FF',
    color: '#FFFFFF',
    padding: '16px 40px',
    borderRadius: '40px',
    fontSize: '15px',
    fontWeight: 700,
    letterSpacing: '0.04em',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    boxShadow: '0 8px 24px rgba(0, 102, 255, 0.25)',
  },
  compatibilityLine: {
    fontSize: '13px',
    fontWeight: 500,
    color: '#8E8E93',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    letterSpacing: '0.02em',
  },
  dot: {
    opacity: 0.5,
  },
};
