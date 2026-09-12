import React from 'react';
import { CONFIG, LATEST_DOWNLOAD_URL } from '../config';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FinalCTASectionProps {
  onDownloadClick?: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onDownloadClick }) => {
  const handleDownload = () => {
    if (onDownloadClick) onDownloadClick();
    if (LATEST_DOWNLOAD_URL) window.location.href = LATEST_DOWNLOAD_URL;
  };

  return (
    <section
      id="download"
      style={{
        padding: '140px 0 120px',
        backgroundColor: '#FAF9F6',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
      aria-label="Download Pastry"
    >
      {/* Background Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(0, 102, 255, 0.08) 0%, rgba(250, 249, 246, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-narrow" style={{ position: 'relative', zIndex: 1 }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(42px, 6.8vw, 76px)',
            fontWeight: 800,
            lineHeight: 1.04,
            letterSpacing: '-0.04em',
            color: '#111111',
            marginBottom: '20px',
          }}
        >
          Your clipboard,
          <br />
          finally has a memory.
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(17px, 2.2vw, 20px)',
            lineHeight: 1.5,
            color: '#636366',
            maxWidth: '560px',
            margin: '0 auto 36px',
          }}
        >
          Pastry is built for Mac. Download it and make copying a little less annoying.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '14px',
            flexWrap: 'wrap',
            marginBottom: '28px',
          }}
        >
          <button
            onClick={handleDownload}
            className="btn-primary"
            style={{
              padding: '16px 36px',
              fontSize: '16px',
              fontWeight: 700,
              borderRadius: '999px',
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download Pastry</span>
          </button>

          <a
            href={CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{
              padding: '16px 30px',
              fontSize: '16px',
              fontWeight: 600,
              borderRadius: '999px',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>View on GitHub</span>
          </a>
        </div>

        {/* Version Details & WhatsApp Community */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            fontSize: '13px',
            color: '#8E8E93',
            flexWrap: 'wrap',
          }}
        >
          <span>v{CONFIG.version} (Universal 2 for Apple Silicon &amp; Intel)</span>
          <span style={{ opacity: 0.4 }}>•</span>
          <a
            href={CONFIG.whatsappCommunityUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'rgba(37, 211, 102, 0.12)',
              color: '#075E54',
              padding: '4px 12px',
              borderRadius: '999px',
              fontSize: '12px',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.15s ease',
              border: '1px solid rgba(37, 211, 102, 0.28)',
            }}
          >
            <WhatsAppIcon size={16} />
            <span>WhatsApp Community</span>
          </a>
        </div>
      </div>
    </section>
  );
};
