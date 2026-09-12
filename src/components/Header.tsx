import React, { useState, useEffect } from 'react';
import { PastryLogo } from './PastryLogo';
import { CONFIG, LATEST_DOWNLOAD_URL } from '../config';

interface HeaderProps {
  onDownloadClick?: () => void;
  onAboutClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onDownloadClick, onAboutClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const top = element.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
    if (onDownloadClick) onDownloadClick();
    if (LATEST_DOWNLOAD_URL) window.location.href = LATEST_DOWNLOAD_URL;
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        width: '100%',
        padding: isScrolled ? '12px 24px' : '18px 24px',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div
        style={{
          maxWidth: '1040px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: isScrolled ? 'rgba(255, 255, 255, 0.82)' : 'rgba(255, 255, 255, 0.65)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          padding: '8px 14px 8px 18px',
          borderRadius: '999px',
          border: '1px solid rgba(0, 0, 0, 0.07)',
          boxShadow: isScrolled
            ? '0 12px 30px -8px rgba(0, 0, 0, 0.08), 0 0 1px 1px rgba(0, 0, 0, 0.04)'
            : '0 4px 20px -4px rgba(0, 0, 0, 0.04)',
          transition: 'all 0.25s ease',
        }}
      >
        {/* Left: Pastry Logo + "Pastry" */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
          aria-label="Pastry Home"
        >
          <PastryLogo size={26} showText={true} />
        </a>

        {/* Right: Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}
          className="desktop-nav-group"
        >
          <a
            href="#features"
            onClick={(e) => scrollTo(e, 'features')}
            style={styles.navLink}
          >
            Features
          </a>
          <a
            href="#install"
            onClick={(e) => scrollTo(e, 'install')}
            style={styles.navLink}
          >
            How to Install
          </a>
          <button
            type="button"
            onClick={onAboutClick}
            style={{
              ...styles.navLink,
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          >
            About
          </button>
          <a
            href={CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.navLink}
          >
            GitHub
          </a>

          {/* Primary CTA: Download */}
          <button
            onClick={handleDownload}
            style={{
              backgroundColor: '#111111',
              color: '#FFFFFF',
              fontFamily: 'var(--font-display)',
              fontSize: '13.5px',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              padding: '8px 18px',
              borderRadius: '999px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.15s ease',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
            }}
            className="header-download-btn"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download</span>
          </button>
        </nav>

        {/* Mobile Hamburger toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="mobile-nav-toggle"
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          style={{
            display: 'none',
            padding: '6px',
            borderRadius: '8px',
            color: '#111111',
          }}
        >
          {isMobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isMobileOpen && (
        <div
          style={{
            maxWidth: '1040px',
            margin: '8px auto 0',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderRadius: '20px',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            padding: '16px',
            boxShadow: '0 16px 36px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <a
            href="#features"
            onClick={(e) => scrollTo(e, 'features')}
            style={styles.mobileLink}
          >
            Features
          </a>
          <a
            href="#install"
            onClick={(e) => scrollTo(e, 'install')}
            style={styles.mobileLink}
          >
            How to Install
          </a>
          <button
            type="button"
            onClick={() => {
              setIsMobileOpen(false);
              if (onAboutClick) onAboutClick();
            }}
            style={{
              ...styles.mobileLink,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              width: '100%',
              padding: '10px 14px',
            }}
          >
            About
          </button>
          <a
            href={CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.mobileLink}
          >
            GitHub
          </a>
          <button
            onClick={handleDownload}
            style={{
              backgroundColor: '#111111',
              color: '#FFFFFF',
              fontFamily: 'var(--font-display)',
              fontSize: '14px',
              fontWeight: 700,
              padding: '12px',
              borderRadius: '12px',
              textAlign: 'center',
              marginTop: '6px',
            }}
          >
            Download Pastry
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav-group {
            display: none !important;
          }
          .mobile-nav-toggle {
            display: flex !important;
          }
        }
        .header-download-btn:hover {
          transform: translateY(-1px);
          background-color: #000000 !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2) !important;
        }
      `}</style>
    </header>
  );
};

const styles: Record<string, React.CSSProperties> = {
  navLink: {
    fontFamily: 'var(--font-display)',
    fontSize: '13.5px',
    fontWeight: 600,
    color: '#3A3A3C',
    letterSpacing: '-0.01em',
    transition: 'color 0.15s ease',
    cursor: 'pointer',
  },
  mobileLink: {
    fontFamily: 'var(--font-display)',
    fontSize: '15px',
    fontWeight: 600,
    color: '#121214',
    padding: '10px 14px',
    borderRadius: '10px',
  },
};
