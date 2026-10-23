import React from 'react';
import { PastryLogo } from './PastryLogo';
import { CONFIG, LATEST_DOWNLOAD_URL } from '../config';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterProps {
  onAboutClick?: () => void;
  onInstallGuideClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onInstallGuideClick }) => {
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
        padding: '72px 0 48px',
        backgroundColor: 'var(--pastry-paper)',
        borderTop: '1px solid var(--pastry-hairline)',
      }}
      aria-label="Footer"
    >
      <div className="container">
        {/* Maya-inspired Editorial Tagline Quote */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p
            className="pastry-serif-italic"
            style={{
              fontSize: 'clamp(28px, 4vw, 44px)',
              color: 'var(--pastry-ink)',
              lineHeight: 1.2,
              margin: '0 auto 12px',
              maxWidth: '680px',
            }}
          >
            Your clipboard, finally has a memory.
          </p>
          <span style={{ fontSize: '13px', color: 'var(--pastry-ink-muted)', fontFamily: 'var(--pastry-font-sans)', fontWeight: 500 }}>
            Pastry for macOS • Native • Local-First
          </span>
        </div>

        <div className="pastry-section-divider" style={{ marginBottom: '36px' }} />

        <div
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
            <span style={{ color: 'var(--pastry-ink-muted)', fontSize: '13px', fontWeight: 500, fontFamily: 'var(--pastry-font-sans)' }}>
              Made for macOS.
            </span>
          </div>

          {/* Center/Right Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              fontSize: '13.5px',
              fontWeight: 600,
              fontFamily: 'var(--pastry-font-sans)',
              color: 'var(--pastry-ink-secondary)',
              flexWrap: 'wrap',
            }}
          >
            <a
              href={CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pastry-footer-link"
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
              className="pastry-footer-link"
              style={styles.link}
            >
              Download
            </a>
            <a
              href="#install"
              onClick={(e) => {
                if (onInstallGuideClick) {
                  e.preventDefault();
                  onInstallGuideClick();
                } else {
                  scrollTo(e, 'install');
                }
              }}
              className="pastry-footer-link"
              style={styles.link}
            >
              Install Guide
            </a>
            <a
              href="#privacy"
              onClick={(e) => scrollTo(e, 'privacy')}
              className="pastry-footer-link"
              style={styles.link}
            >
              Privacy
            </a>
            <span
              style={{
                color: 'var(--pastry-ink-muted)',
                fontSize: '12px',
                fontFamily: 'var(--pastry-font-mono)',
                fontWeight: 500,
              }}
            >
              v{CONFIG.version}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .pastry-footer-link {
          color: var(--pastry-ink-secondary) !important;
          transition: color 0.18s ease !important;
        }
        .pastry-footer-link:hover {
          color: var(--pastry-ink) !important;
        }
      `}</style>
    </footer>
  );
};

const styles: Record<string, React.CSSProperties> = {
  link: {
    textDecoration: 'none',
    color: 'var(--pastry-ink-secondary)',
    transition: 'color 0.18s ease',
  },
};
