import React from 'react';
import { CONFIG } from '../config';

export const CompatibilitySection: React.FC = () => {
  return (
    <section id="compatibility" style={styles.section} aria-label="Compatibility">
      <div className="container">
        <div style={styles.card}>
          <div style={styles.leftCol}>
            <span style={styles.sectionLabel}>COMPATIBILITY</span>
            <h2 style={styles.heading}>MADE FOR MAC</h2>
            <p style={styles.description}>
              Designed for macOS. Built to live quietly in your menu bar and react instantly when called.
            </p>
          </div>

          <div style={styles.rightCol}>
            <div style={styles.badgeRow}>
              <div style={styles.badge}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                <span>{CONFIG.minMacOsVersion}</span>
              </div>

              {CONFIG.architectures.map((arch) => (
                <div key={arch} style={styles.badge}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" fill="none" />
                    <rect x="9" y="9" width="6" height="6" fill="currentColor" />
                    <line x1="9" y1="1" x2="9" y2="4" />
                    <line x1="15" y1="1" x2="15" y2="4" />
                    <line x1="9" y1="20" x2="9" y2="23" />
                    <line x1="15" y1="20" x2="15" y2="23" />
                    <line x1="20" y1="9" x2="23" y2="9" />
                    <line x1="20" y1="15" x2="23" y2="15" />
                    <line x1="1" y1="9" x2="4" y2="9" />
                    <line x1="1" y1="15" x2="4" y2="15" />
                  </svg>
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles: Record<string, React.CSSProperties> = {
  section: {
    padding: '80px 0',
    borderTop: '1px solid rgba(0, 0, 0, 0.06)',
  },
  card: {
    backgroundColor: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '16px',
    padding: '48px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '32px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
  },
  leftCol: {
    maxWidth: '480px',
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
    fontSize: 'clamp(24px, 3.5vw, 34px)',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    color: '#111111',
    marginBottom: '12px',
  },
  description: {
    fontSize: '16px',
    lineHeight: 1.55,
    color: '#6E6E73',
  },
  rightCol: {
    display: 'flex',
    alignItems: 'center',
  },
  badgeRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#FAF9F6',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    padding: '10px 16px',
    borderRadius: '30px',
    fontSize: '13px',
    fontWeight: 700,
    color: '#111111',
    letterSpacing: '0.02em',
  },
};
