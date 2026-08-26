import React, { useRef } from 'react';
import { VERSIONS } from '../config';

interface VersionsSectionProps {
  onDownloadClick?: () => void;
}

export const VersionsSection: React.FC<VersionsSectionProps> = ({ onDownloadClick }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleDownload = (downloadUrl: string) => {
    if (onDownloadClick) {
      onDownloadClick();
    }
    if (downloadUrl) {
      window.location.href = downloadUrl;
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="versions" style={styles.section} aria-label="Versions">
      <div className="container">
        <div style={styles.headerGroup}>
          <div>
            <span style={styles.sectionLabel}>RELEASE HISTORY</span>
            <h2 style={styles.heading}>VERSIONS</h2>
          </div>

          <div style={styles.scrollControls}>
            <button
              onClick={() => scroll('left')}
              style={styles.scrollBtn}
              aria-label="Scroll versions left"
              className="scroll-btn-hover"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              style={styles.scrollBtn}
              aria-label="Scroll versions right"
              className="scroll-btn-hover"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        <div ref={sliderRef} style={styles.versionsSlider} className="no-scrollbar">
          {VERSIONS.map((v) => (
            <div key={v.version} style={styles.versionCard}>
              <div>
                <div style={styles.versionHeader}>
                  <div style={styles.versionTagGroup}>
                    <span style={styles.versionBadge}>v{v.version}</span>
                    {v.latest && <span style={styles.latestBadge}>LATEST</span>}
                  </div>
                  <span style={styles.buildBadge}>Build {v.build}</span>
                </div>

                <div style={styles.releaseDateRow}>
                  <span style={styles.dateLabel}>Release Date:</span>
                  <span style={styles.dateValue}>{v.releaseDate}</span>
                </div>

                <p style={styles.versionNotes}>{v.notes}</p>
              </div>

              <div style={styles.cardFooter}>
                <button
                  onClick={() => handleDownload(v.downloadUrl)}
                  style={styles.versionDownloadBtn}
                  aria-label={`Download Pastry v${v.version}`}
                  className="download-btn-hover"
                >
                  <svg
                    width="14"
                    height="14"
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
                  <span>DOWNLOAD</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: '100px 0',
    borderTop: '1px solid rgba(0, 0, 0, 0.06)',
  },
  headerGroup: {
    marginBottom: '36px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: '20px',
  },
  sectionLabel: {
    fontSize: '12px',
    fontWeight: 800,
    letterSpacing: '0.12em',
    color: '#0066FF',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '10px',
  },
  heading: {
    fontSize: 'clamp(28px, 4vw, 42px)',
    fontWeight: 800,
    letterSpacing: '-0.025em',
    color: '#111111',
    lineHeight: 1.15,
  },
  scrollControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  scrollBtn: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#111111',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
  },
  versionsSlider: {
    display: 'flex',
    gap: '24px',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    paddingBottom: '16px',
    paddingTop: '4px',
    WebkitOverflowScrolling: 'touch',
    scrollBehavior: 'smooth',
  },
  versionCard: {
    backgroundColor: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.02)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: '0 0 min(320px, 80vw)',
    scrollSnapAlign: 'start',
  },
  versionHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  versionTagGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  versionBadge: {
    fontSize: '16px',
    fontWeight: 800,
    color: '#111111',
    fontFamily: 'monospace',
  },
  latestBadge: {
    fontSize: '10px',
    fontWeight: 800,
    letterSpacing: '0.08em',
    color: '#0066FF',
    backgroundColor: 'rgba(0, 102, 255, 0.08)',
    padding: '4px 8px',
    borderRadius: '4px',
  },
  buildBadge: {
    fontSize: '13px',
    color: '#8E8E93',
    fontWeight: 600,
  },
  releaseDateRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    marginBottom: '12px',
  },
  dateLabel: {
    color: '#8E8E93',
    fontWeight: 500,
  },
  dateValue: {
    color: '#111111',
    fontWeight: 700,
  },
  versionNotes: {
    fontSize: '14px',
    color: '#6E6E73',
    lineHeight: 1.5,
    marginBottom: '24px',
  },
  cardFooter: {
    display: 'flex',
    alignItems: 'center',
  },
  versionDownloadBtn: {
    backgroundColor: '#0066FF',
    color: '#FFFFFF',
    padding: '11px 20px',
    borderRadius: '24px',
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: '0.04em',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: '100%',
    boxShadow: '0 4px 14px rgba(0, 102, 255, 0.2)',
  },
};

