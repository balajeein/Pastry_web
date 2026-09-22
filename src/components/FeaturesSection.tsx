import React from 'react';

interface FeatureItem {
  tag: string;
  title: string;
  shortcut?: string;
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
      shortcut: '⌘ ⇧ V',
      description: "Keep track of text, links, code snippets, and items you've copied across your Mac apps.",
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
      tag: 'FULL WEBPAGES',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m10 0h3a2 2 0 0 0 2-2v-3" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <polyline points="9 13 12 16 15 13" />
        </svg>
      ),
      title: 'SCROLL SCREENSHOT',
      shortcut: '⌘ ⇧ G',
      description: "Capture entire webpages and long content with scrolling screenshots, not just what's visible on your screen.",
    },
    {
      tag: 'TEXT EXPANSION',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 7V4h16v3" />
          <line x1="12" y1="4" x2="12" y2="20" />
          <line x1="8" y1="20" x2="16" y2="20" />
          <path d="M17 13l3 3-3 3" />
        </svg>
      ),
      title: 'TEXT SHORTCUTS',
      description: 'Create custom text shortcuts and expand frequently used text instantly wherever you type.',
    },
    {
      tag: 'IMAGE SHORTCUTS',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      ),
      title: 'IMAGE SHORTCUTS',
      description: 'Create shortcuts for frequently used images and insert them instantly wherever you need them.',
    },
    {
      tag: 'DEFAULT BROWSER',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: 'BROWSER SEARCH',
      shortcut: '⌘ ⇧ B',
      description: 'Select anything → press ⌘ ⇧ B → send it directly to your default browser.',
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
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '6px' }}>
                  <h3 style={{ ...styles.featureTitle, marginBottom: 0 }}>{item.title}</h3>
                  {item.shortcut && (
                    <span style={styles.featureShortcut}>{item.shortcut}</span>
                  )}
                </div>
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
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
  featureShortcut: {
    fontSize: '11px',
    fontWeight: 700,
    fontFamily: 'monospace',
    color: '#111111',
    backgroundColor: '#F5F5F7',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    padding: '2px 7px',
    borderRadius: '5px',
  },
  featureDesc: {
    fontSize: '14px',
    lineHeight: 1.55,
    color: '#6E6E73',
    fontWeight: 450,
  },
};
