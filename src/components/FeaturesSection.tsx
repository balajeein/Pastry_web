import React from 'react';

interface FeatureItem {
  tag: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isFeatured?: boolean;
}

export const FeaturesSection: React.FC = () => {
  const features: FeatureItem[] = [
    {
      tag: 'CORE HISTORY',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          <line x1="9" y1="12" x2="15" y2="12" />
          <line x1="9" y1="16" x2="13" y2="16" />
        </svg>
      ),
      title: 'CLIPBOARD HISTORY',
      description: "Keep track of text, links, code snippets, and items you've copied across all your Mac apps.",
      isFeatured: true,
    },
    {
      tag: 'BUILT-IN MATH',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="8" y1="6" x2="16" y2="6" />
          <line x1="16" y1="14" x2="16" y2="18" />
          <path d="M16 10h.01" />
          <path d="M12 10h.01" />
          <path d="M8 10h.01" />
          <path d="M12 14h.01" />
          <path d="M8 14h.01" />
          <path d="M12 18h.01" />
          <path d="M8 18h.01" />
        </svg>
      ),
      title: 'SMART CALCULATOR',
      description: 'Perform instant math calculations directly inside your clipboard without opening another app.',
      isFeatured: true,
    },
    {
      tag: 'VISUAL MEDIA',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      ),
      title: 'AUTOMATIC SCREENSHOTS',
      description: 'Capture and manage clipboard screenshots with instant visual thumbnail previews.',
    },
    {
      tag: 'GLOBAL SHORTCUT',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      title: 'INSTANT ACCESS',
      description: 'Summon your clipboard history instantly from anywhere using a global keyboard shortcut.',
    },
    {
      tag: 'LIGHTWEIGHT',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: 'NATIVE macOS EXPERIENCE',
      description: 'Built specifically for macOS to live quietly in your menu bar with minimal RAM footprint.',
    },
    {
      tag: '100% LOCAL',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      title: 'PRIVATE BY DESIGN',
      description: 'Your clipboard data stays strictly on your Mac. No cloud servers, no analytics, no tracking.',
    },
  ];

  return (
    <section id="features" style={styles.section} aria-label="Features">
      <div className="container">
        
        {/* Section Header */}
        <div style={styles.headerGroup}>
          <span style={styles.sectionLabel}>FEATURES</span>
          <h2 style={styles.heading}>Built for speed and privacy.</h2>
          <p style={styles.subheading}>
            Everything you need to manage your clipboard history seamlessly on macOS without bloat.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div style={styles.grid}>
          {features.map((item) => (
            <div 
              key={item.title} 
              style={{
                ...styles.featureCard,
                ...(item.isFeatured ? styles.featuredCard : {}),
              }}
            >
              <div style={styles.cardTopRow}>
                <div style={styles.iconWrapper}>{item.icon}</div>
                <span style={styles.featureTag}>{item.tag}</span>
              </div>

              <div>
                <h3 style={styles.featureTitle}>{item.title}</h3>
                <p style={styles.featureDesc}>{item.description}</p>
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
    marginBottom: '56px',
    maxWidth: '640px',
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
    marginBottom: '12px',
  },
  subheading: {
    fontSize: '16px',
    color: '#6E6E73',
    lineHeight: 1.5,
    fontWeight: 450,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '24px',
  },
  featureCard: {
    backgroundColor: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '20px',
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '20px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.02)',
  },
  featuredCard: {
    border: '1px solid rgba(0, 102, 255, 0.2)',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 4px 20px rgba(0, 102, 255, 0.04)',
  },
  cardTopRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconWrapper: {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    backgroundColor: 'rgba(0, 102, 255, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureTag: {
    fontSize: '10px',
    fontWeight: 800,
    letterSpacing: '0.08em',
    color: '#0066FF',
    backgroundColor: 'rgba(0, 102, 255, 0.08)',
    padding: '4px 10px',
    borderRadius: '6px',
    fontFamily: 'monospace',
  },
  featureTitle: {
    fontSize: '15px',
    fontWeight: 800,
    letterSpacing: '0.03em',
    color: '#111111',
    marginBottom: '8px',
  },
  featureDesc: {
    fontSize: '14px',
    lineHeight: 1.55,
    color: '#6E6E73',
    fontWeight: 450,
  },
};
