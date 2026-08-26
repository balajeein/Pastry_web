import React from 'react';
import { CONFIG } from '../config';
import downloadImg from '../assets/install/install-01-download.png';
import openAppImg from '../assets/install/install-03-open-app.png';
import openAnywayImg from '../assets/install/install-04-open-anyway.png';
import accessibilityImg from '../assets/install/install-05-accessibility.png';
import menubarImg from '../assets/install/install-06-menubar.png';

interface Step {
  num: string;
  title: string;
  instructions: string;
  pathGuide?: string;
  image?: string;
  isProminent?: boolean;
  badge?: string;
}

export const InstallSection: React.FC = () => {
  const steps: Step[] = [
    {
      num: '01',
      title: 'Download Pastry',
      instructions: 'Click the Download Pastry button to download the latest Pastry.dmg file directly from the official website.',
      image: downloadImg,
    },
    {
      num: '02',
      title: 'Open Pastry',
      instructions: 'Open Finder → Applications and double-click Pastry. Because Pastry is distributed independently outside the Mac App Store, macOS may show a warning.',
      pathGuide: '"Pastry" cannot be opened because the developer cannot be verified.',
      image: openAppImg,
    },
    {
      num: '03',
      title: 'Allow Pastry in Privacy & Security',
      instructions: 'If macOS blocks Pastry, open System Settings → Privacy & Security → Security. Look for the message that Pastry was blocked and click Open Anyway.',
      pathGuide: 'System Settings → Privacy & Security → Security → Open Anyway',
      image: openAnywayImg,
      isProminent: true,
      badge: 'ACTION REQUIRED',
    },
    {
      num: '04',
      title: 'Confirm Open',
      instructions: 'macOS will show one final confirmation dialog asking if you want to open Pastry. Click Open. You only need to do this the first time you launch Pastry.',
    },
    {
      num: '05',
      title: 'Pastry is ready in your Menu Bar',
      instructions: `Once opened, Pastry runs quietly in your Mac's top menu bar. Look for the Pastry icon in the top-right area and press ${CONFIG.shortcutKey} to open your floating clipboard.`,
      image: menubarImg,
    },
    {
      num: '06',
      title: 'Allow Accessibility access',
      instructions: 'Pastry needs Accessibility permission to paste clipboard items directly into your current app.',
      pathGuide: 'System Settings → Privacy & Security → Accessibility → Enable Pastry',
      image: accessibilityImg,
    },
    {
      num: '07',
      title: "You're ready",
      instructions: `Copy anything and press ${CONFIG.shortcutKey} to bring up your clipboard history. Enjoy smart calculator, automatic screenshots, and instant quick paste!`,
    },
  ];

  return (
    <section id="install" style={styles.section} aria-label="Installation Guide">
      <div className="container">
        
        {/* Section Header */}
        <div style={styles.headerGroup}>
          <span style={styles.sectionLabel}>SETUP & INSTALLATION</span>
          <h2 style={styles.heading}>FIRST TIME INSTALLING PASTRY?</h2>
          <p style={styles.subheading}>
            macOS may show a security warning because Pastry is distributed independently outside the Mac App Store. Follow these simple steps to get started in under 60 seconds.
          </p>
        </div>

        {/* Installation Steps */}
        <div style={styles.stepsContainer}>
          {steps.map((step) => (
            <div 
              key={step.num} 
              style={{
                ...styles.stepCard,
                ...(step.isProminent ? styles.prominentCard : {}),
              }}
            >
              <div style={styles.stepHeader}>
                <div style={styles.numBadge}>{step.num}</div>
                <div>
                  <div style={styles.titleRow}>
                    <h3 style={styles.stepTitle}>{step.title}</h3>
                    {step.badge && <span style={styles.actionBadge}>{step.badge}</span>}
                  </div>
                  <p style={styles.stepInstructions}>{step.instructions}</p>
                  {step.pathGuide && (
                    <div style={styles.pathBox}>
                      <span style={styles.pathText}>{step.pathGuide}</span>
                    </div>
                  )}
                </div>
              </div>

              {step.image && (
                <div style={styles.imageWrapper}>
                  <img 
                    src={step.image} 
                    alt={`Illustration for step ${step.num}: ${step.title}`}
                    style={styles.stepImage}
                    loading="lazy"
                  />
                </div>
              )}
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
    marginBottom: '50px',
    maxWidth: '680px',
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
    marginBottom: '14px',
  },
  subheading: {
    fontSize: '16px',
    color: '#6E6E73',
    lineHeight: 1.5,
    fontWeight: 450,
  },
  stepsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    maxWidth: '860px',
  },
  stepCard: {
    backgroundColor: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    borderRadius: '16px',
    padding: '28px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    transition: 'border-color 0.2s ease',
  },
  prominentCard: {
    border: '2px solid #0066FF',
    boxShadow: '0 8px 24px rgba(0, 102, 255, 0.12)',
    backgroundColor: '#FFFFFF',
  },
  stepHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
  },
  numBadge: {
    fontSize: '14px',
    fontWeight: 900,
    color: '#0066FF',
    backgroundColor: 'rgba(0, 102, 255, 0.08)',
    padding: '8px 12px',
    borderRadius: '10px',
    fontFamily: 'monospace',
    flexShrink: 0,
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flexWrap: 'wrap',
    marginBottom: '6px',
  },
  stepTitle: {
    fontSize: '19px',
    fontWeight: 800,
    color: '#111111',
    letterSpacing: '-0.01em',
  },
  actionBadge: {
    fontSize: '10px',
    fontWeight: 800,
    letterSpacing: '0.08em',
    color: '#FFFFFF',
    backgroundColor: '#0066FF',
    padding: '4px 10px',
    borderRadius: '12px',
  },
  stepInstructions: {
    fontSize: '15px',
    color: '#515154',
    lineHeight: 1.55,
    fontWeight: 450,
  },
  pathBox: {
    marginTop: '10px',
    backgroundColor: 'rgba(0, 102, 255, 0.05)',
    borderLeft: '3px solid #0066FF',
    padding: '8px 14px',
    borderRadius: '0 6px 6px 0',
  },
  pathText: {
    fontSize: '13px',
    fontWeight: 700,
    color: '#0066FF',
    fontFamily: 'monospace',
  },
  imageWrapper: {
    width: '100%',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    backgroundColor: '#FAF9F6',
  },
  stepImage: {
    width: '100%',
    height: 'auto',
    maxHeight: '480px',
    objectFit: 'contain',
    display: 'block',
  },
};
