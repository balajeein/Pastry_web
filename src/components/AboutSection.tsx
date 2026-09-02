import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" style={styles.section} aria-label="About Pastry">
      <div className="container" style={styles.container}>
        <div style={styles.headerGroup}>
          <span style={styles.sectionLabel}>ABOUT PASTRY</span>
          <h2 style={styles.heading}>Designed to stay out of your way until you need it.</h2>
        </div>

        <div style={styles.contentBox}>
          <p style={styles.leadText}>
            Pastry is a lightweight macOS utility built to keep the things you use every day within reach. Save and revisit your clipboard history, calculate instantly, capture scrolling screenshots, and expand text or insert images with customizable shortcuts. All from a simple native Mac experience.
          </p>

          <p style={styles.privacyText}>
            Designed with a strict local-first philosophy, your clipboard data stays entirely on your Mac. Pastry does not upload your content to cloud servers or use cloud clipboard storage, keeping your personal data lightweight, private, and strictly under your control.
          </p>
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
  container: {
    maxWidth: '780px',
  },
  headerGroup: {
    marginBottom: '32px',
  },
  sectionLabel: {
    fontSize: '12px',
    fontWeight: 800,
    letterSpacing: '0.12em',
    color: '#0066FF',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '12px',
  },
  heading: {
    fontSize: 'clamp(28px, 4vw, 42px)',
    fontWeight: 800,
    letterSpacing: '-0.025em',
    color: '#111111',
    lineHeight: 1.15,
  },
  contentBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  leadText: {
    fontSize: '18px',
    lineHeight: 1.6,
    color: '#444444',
    fontWeight: 450,
  },
  privacyText: {
    fontSize: '16px',
    lineHeight: 1.6,
    color: '#6E6E73',
    fontWeight: 450,
  },
  quoteBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    fontSize: '17px',
    fontWeight: 600,
    color: '#111111',
    paddingLeft: '20px',
    borderLeft: '2px solid #0066FF',
    marginTop: '8px',
  },
};
