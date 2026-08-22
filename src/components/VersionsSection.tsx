import React from 'react';
import { CONFIG } from '../config';

interface VersionItem {
  version: string;
  title: string;
  notes: string;
  date: string;
  isLatest?: boolean;
}

export const VersionsSection: React.FC = () => {
  // Only existing releases are defined here
  const versionsList: VersionItem[] = [
    {
      version: `v${CONFIG.version}`,
      title: `Pastry v${CONFIG.version}`,
      notes: 'Initial public release.',
      date: '2026',
      isLatest: true,
    },
  ];

  return (
    <section id="versions" style={styles.section} aria-label="Versions">
      <div className="container">
        <div style={styles.headerGroup}>
          <span style={styles.sectionLabel}>RELEASE HISTORY</span>
          <h2 style={styles.heading}>VERSIONS</h2>
        </div>

        <div style={styles.versionsList}>
          {versionsList.map((v) => (
            <div key={v.version} style={styles.versionCard}>
              <div style={styles.versionHeader}>
                <div style={styles.versionTagGroup}>
                  <span style={styles.versionBadge}>{v.version}</span>
                  {v.isLatest && <span style={styles.latestBadge}>LATEST RELEASE</span>}
                </div>
                <span style={styles.dateText}>{v.date}</span>
              </div>

              <h3 style={styles.versionTitle}>{v.title}</h3>
              <p style={styles.versionNotes}>{v.notes}</p>
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
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '640px',
  },
  versionCard: {
    backgroundColor: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '12px',
    padding: '24px 28px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
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
    gap: '10px',
  },
  versionBadge: {
    fontSize: '14px',
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
  dateText: {
    fontSize: '13px',
    color: '#8E8E93',
    fontWeight: 500,
  },
  versionTitle: {
    fontSize: '18px',
    fontWeight: 700,
    color: '#111111',
    marginBottom: '6px',
  },
  versionNotes: {
    fontSize: '14px',
    color: '#6E6E73',
    lineHeight: 1.5,
  },
};
