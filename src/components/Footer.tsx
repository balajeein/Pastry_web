import React from 'react';
import { PastryLogo } from './PastryLogo';
import { CONFIG, LATEST_DOWNLOAD_URL } from '../config';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterProps {
  onAboutClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onAboutClick }) => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        padding: '48px 0 40px',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid rgba(0, 0, 0, 0.07)',
      }}
      aria-label="Footer"
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
        }}
      >
        {/* Left: Pastry Logo + Made for macOS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <PastryLogo size={24} showText={true} />
          <span style={{ color: '#8E8E93', fontSize: '13px', fontWeight: 500 }}>
            Made for macOS.
          </span>
        </div>

        {/* Center/Right Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            fontSize: '13px',
            fontWeight: 600,
            fontFamily: 'var(--font-display)',
            color: '#3A3A3C',
            flexWrap: 'wrap',
          }}
        >
          <a
            href={CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            GitHub
          </a>
          <a
            href={CONFIG.whatsappCommunityUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              ...styles.link,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#075E54',
            }}
          >
            <WhatsAppIcon size={16} />
            <span>WhatsApp Community</span>
          </a>
          <a
            href={LATEST_DOWNLOAD_URL}
            style={styles.link}
          >
            Download
          </a>
          <a
            href="#install"
            onClick={(e) => scrollTo(e, 'install')}
            style={styles.link}
          >
            Install Guide
          </a>
          <button
            type="button"
            onClick={onAboutClick}
            style={{
              ...styles.link,
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          >
            About
          </button>
          <a
            href="#privacy"
            onClick={(e) => scrollTo(e, 'privacy')}
            style={styles.link}
          >
            Privacy
          </a>
          <span
            style={{
              color: '#8E8E93',
              fontSize: '12px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 500,
            }}
          >
            v{CONFIG.version}
          </span>
        </div>
      </div>
    </footer>
  );
};

const styles: Record<string, React.CSSProperties> = {
  link: {
    textDecoration: 'none',
    color: '#3A3A3C',
    transition: 'color 0.15s ease',
  },
};
