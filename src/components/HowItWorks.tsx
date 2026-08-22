import React from 'react';
import { CONFIG } from '../config';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'COPY',
      description: 'Copy text, links, images, or other supported clipboard content.',
    },
    {
      num: '02',
      title: 'OPEN',
      description: `Use the ${CONFIG.shortcutKey} shortcut to open your clipboard history.`,
    },
    {
      num: '03',
      title: 'PASTE',
      description: 'Choose what you need and continue working.',
    },
  ];

  return (
    <section id="how-it-works" style={styles.section} aria-label="How It Works">
      <div className="container">
        <div style={styles.headerGroup}>
          <span style={styles.sectionLabel}>HOW IT WORKS</span>
          <h2 style={styles.heading}>Three steps. Zero friction.</h2>
        </div>

        <div style={styles.stepsGrid}>
          {steps.map((step) => (
            <div key={step.num} style={styles.stepColumn}>
              <span style={styles.stepNum}>{step.num}</span>
              <h3 style={styles.stepTitle}>{step.title}</h3>
              <p style={styles.stepDesc}>{step.description}</p>
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
    marginBottom: '56px',
    textAlign: 'left',
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
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '40px',
  },
  stepColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: '20px',
    borderTop: '2px solid rgba(0, 0, 0, 0.08)',
  },
  stepNum: {
    fontSize: '13px',
    fontWeight: 800,
    letterSpacing: '0.1em',
    color: '#0066FF',
    marginBottom: '12px',
  },
  stepTitle: {
    fontSize: '20px',
    fontWeight: 800,
    letterSpacing: '0.04em',
    color: '#111111',
    marginBottom: '10px',
  },
  stepDesc: {
    fontSize: '15px',
    lineHeight: 1.6,
    color: '#6E6E73',
    fontWeight: 450,
  },
};
