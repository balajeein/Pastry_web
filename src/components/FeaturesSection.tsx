import React from 'react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <line x1="9" y1="12" x2="15" y2="12" />
          <line x1="9" y1="16" x2="13" y2="16" />
        </svg>
      ),
      title: 'CLIPBOARD HISTORY',
      description: "Keep track of things you've copied across apps.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      title: 'INSTANT ACCESS',
      description: 'Access your clipboard history instantly with a global keyboard shortcut.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: 'NATIVE macOS EXPERIENCE',
      description: 'Built specifically for macOS to live quietly in your menu bar.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: 'PRIVATE BY DESIGN',
      description: 'Your clipboard data stays strictly on your Mac. No cloud, no tracking.',
    },
  ];

  return (
    <section id="features" style={styles.section} aria-label="Features">
      <div className="container">
        <div style={styles.headerGroup}>
          <span style={styles.sectionLabel}>FEATURES</span>
          <h2 style={styles.heading}>Built for speed and privacy.</h2>
        </div>

        <div style={styles.grid}>
          {features.map((item) => (
            <div key={item.title} style={styles.featureCard}>
              <div style={styles.iconWrapper}>{item.icon}</div>
              <h3 style={styles.featureTitle}>{item.title}</h3>
              <p style={styles.featureDesc}>{item.description}</p>
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '32px',
  },
  featureCard: {
    backgroundColor: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '16px',
    padding: '32px 28px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.02)',
  },
  iconWrapper: {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    backgroundColor: 'rgba(0, 102, 255, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  featureTitle: {
    fontSize: '15px',
    fontWeight: 800,
    letterSpacing: '0.04em',
    color: '#111111',
    marginBottom: '10px',
  },
  featureDesc: {
    fontSize: '14px',
    lineHeight: 1.55,
    color: '#6E6E73',
    fontWeight: 450,
  },
};
