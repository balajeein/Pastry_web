import React from 'react';
import { VERSIONS } from '../config';

interface VersionsSectionProps {
  onDownloadClick?: () => void;
}

export const VersionsSection: React.FC<VersionsSectionProps> = ({ onDownloadClick }) => {
  const handleDownload = (downloadUrl: string) => {
    if (onDownloadClick) {
      onDownloadClick();
    }
    if (downloadUrl) {
      window.location.href = downloadUrl;
    }
  };

  return (
    <section id="versions" style={styles.section} aria-label="Versions">
      <div className="container">
        <div style={styles.headerGroup}>
          <span style={styles.sectionLabel}>RELEASE HISTORY</span>
          <h2 style={styles.heading}>VERSIONS</h2>
        </div>

        <div style={styles.versionsList}>
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
    marginBottom: '40px',
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
  versionsList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    maxWidth: '720px',
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

