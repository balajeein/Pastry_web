import React from 'react';
import { CONFIG } from '../config';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'COPY',
      description: 'Copy text, links, code, images ,folders and many more items from any app on your Mac as you normally do.',
      badge: '⌘ + C',
      visual: (
        <div style={styles.cardVisualBox}>
          <div style={styles.keyCapGroup}>
            <span style={styles.keyCap}>⌘</span>
            <span style={styles.keyCapPlus}>+</span>
            <span style={styles.keyCap}>C</span>
          </div>
          <div style={styles.snippetStack}>
            <div style={{ ...styles.snippetItem, transform: 'rotate(-2deg)' }}>
              <span style={styles.snippetDot} />
              <span style={styles.snippetText}>copypastry.vercel.app</span>
            </div>
            <div style={{ ...styles.snippetItem, transform: 'rotate(1deg)', backgroundColor: '#FFFFFF' }}>
              <span style={{ ...styles.snippetDot, backgroundColor: '#34C759' }} />
              <span style={styles.snippetText}>⌘ + Shift + V shortcut</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: '02',
      title: 'OPEN',
      description: `Press ${CONFIG.shortcutKey} (or set your own custom shortcut) anytime to instantly open your floating clipboard history overlay.`,
      badge: CONFIG.shortcutKey,
      subBadge: 'CUSTOMIZABLE',
      visual: (
        <div style={styles.cardVisualBox}>
          <div style={styles.shortcutPill}>
            <span style={styles.shortcutKeyText}>{CONFIG.shortcutKey}</span>
          </div>
          <div style={styles.customHintRow}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            <span style={styles.customHintText}>Fully customizable shortcut</span>
          </div>
        </div>
      ),
    },
    {
      num: '03',
      title: 'PASTE',
      description: 'Select your item and paste it directly right where your cursor is working.',
      badge: 'ENTER / CLICK',
      visual: (
        <div style={styles.cardVisualBox}>
          <div style={styles.pasteActionBox}>
            <div style={styles.checkIconWrapper}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34C759" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span style={styles.pasteSuccessText}>Pasted directly!</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" style={styles.section} aria-label="How It Works">
      <div className="container">

        {/* Section Header */}
        <div style={styles.headerGroup}>
          <span style={styles.sectionLabel}>HOW IT WORKS</span>
          <h2 style={styles.heading}>Three steps. Zero friction.</h2>
          <p style={styles.subheading}>
            Pastry stays out of your way until you need it. Press your shortcut, select your item, and paste instantly.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div style={styles.stepsGrid}>
          {steps.map((step) => (
            <div key={step.num} style={styles.stepCard}>
              <div style={styles.cardHeader}>
                <span style={styles.stepNum}>{step.num}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  {step.subBadge && <span style={styles.subBadgePill}>{step.subBadge}</span>}
                  <span style={styles.badgePill}>{step.badge}</span>
                </div>
              </div>

              {/* Graphic Illustration Box */}
              {step.visual}

              <div style={styles.cardBody}>
                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.stepDesc}>{step.description}</p>
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
    backgroundColor: '#FAF9F6',
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
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '28px',
  },
  stepCard: {
    backgroundColor: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '20px',
    padding: '28px',
    boxShadow: '0 2px 14px rgba(0, 0, 0, 0.025)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '24px',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepNum: {
    fontSize: '14px',
    fontWeight: 900,
    color: '#0066FF',
    backgroundColor: 'rgba(0, 102, 255, 0.08)',
    padding: '6px 12px',
    borderRadius: '10px',
    fontFamily: 'monospace',
  },
  badgePill: {
    fontSize: '12px',
    fontWeight: 700,
    color: '#111111',
    backgroundColor: '#F4F3EF',
    padding: '5px 10px',
    borderRadius: '8px',
    border: '1px solid rgba(0, 0, 0, 0.06)',
    fontFamily: 'monospace',
  },
  subBadgePill: {
    fontSize: '10px',
    fontWeight: 800,
    letterSpacing: '0.06em',
    color: '#0066FF',
    backgroundColor: 'rgba(0, 102, 255, 0.08)',
    padding: '4px 8px',
    borderRadius: '6px',
    fontFamily: 'monospace',
  },
  customHintRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: '#FFFFFF',
    border: '1px solid rgba(0, 102, 255, 0.15)',
    borderRadius: '8px',
    padding: '6px 12px',
    boxShadow: '0 2px 8px rgba(0, 102, 255, 0.05)',
  },
  customHintText: {
    fontSize: '11px',
    fontWeight: 700,
    color: '#0066FF',
    letterSpacing: '-0.01em',
  },
  cardVisualBox: {
    height: '130px',
    backgroundColor: '#FAF9F6',
    borderRadius: '14px',
    border: '1px solid rgba(0, 0, 0, 0.04)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    position: 'relative',
    overflow: 'hidden',
  },
  keyCapGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '10px',
  },
  keyCap: {
    backgroundColor: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.06)',
    borderRadius: '6px',
    padding: '6px 10px',
    fontSize: '13px',
    fontWeight: 800,
    color: '#111111',
    fontFamily: 'monospace',
  },
  keyCapPlus: {
    fontSize: '12px',
    fontWeight: 700,
    color: '#8E8E93',
  },
  snippetStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    width: '100%',
    maxWidth: '200px',
  },
  snippetItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    border: '1px solid rgba(0, 0, 0, 0.06)',
    borderRadius: '8px',
    padding: '6px 10px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.03)',
  },
  snippetDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#0066FF',
    flexShrink: 0,
  },
  snippetText: {
    fontSize: '11px',
    fontWeight: 600,
    color: '#111111',
    fontFamily: 'monospace',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  shortcutPill: {
    backgroundColor: '#0066FF',
    borderRadius: '24px',
    padding: '8px 18px',
    boxShadow: '0 4px 14px rgba(0, 102, 255, 0.25)',
    marginBottom: '10px',
  },
  shortcutKeyText: {
    color: '#FFFFFF',
    fontSize: '13px',
    fontWeight: 800,
    letterSpacing: '0.04em',
    fontFamily: 'monospace',
  },
  floatingPreviewCard: {
    backgroundColor: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '10px',
    padding: '8px 14px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  },
  previewCardText: {
    fontSize: '12px',
    fontWeight: 700,
    color: '#111111',
  },
  pasteActionBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },
  checkIconWrapper: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'rgba(52, 199, 89, 0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pasteSuccessText: {
    fontSize: '13px',
    fontWeight: 700,
    color: '#34C759',
    letterSpacing: '-0.01em',
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  stepTitle: {
    fontSize: '18px',
    fontWeight: 800,
    letterSpacing: '0.02em',
    color: '#111111',
  },
  stepDesc: {
    fontSize: '14px',
    lineHeight: 1.55,
    color: '#6E6E73',
    fontWeight: 450,
  },
};
