import React, { useState } from 'react';
import { CONFIG } from '../config';

import downloadImg from '../assets/install/install-01-download.png';
import openAppImg from '../assets/install/install-03-open-app.png';
import openAnywayImg from '../assets/install/install-04-open-anyway.png';
import accessibilityImg from '../assets/install/install-05-accessibility.png';
import screenRecordingImg from '../assets/install/install-07-screen-recording.png';
import menubarImg from '../assets/install/install-06-menubar.png';

interface InstallStep {
  step: string;
  tabLabel: string;
  title: string;
  badge: string;
  badgeType: 'info' | 'warning' | 'required' | 'ready';
  instructions: string;
  devNote?: string;
  pathGuide: string;
  image: string;
  imageAlt: string;
}

export const InstallSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const steps: InstallStep[] = [
    {
      step: '01',
      tabLabel: 'Download & Drag',
      title: 'Download & Drag to Applications',
      badge: 'Step 1 of 6',
      badgeType: 'info',
      instructions:
        'Download the official Pastry DMG file. Double-click to mount the installer, then drag the Pastry icon directly into your Applications folder.',
      pathGuide: `Downloads → Pastry-${CONFIG.version}.dmg → Drag to Applications`,
      image: downloadImg,
      imageAlt: 'Pastry DMG installer drag to Applications window',
    },
    {
      step: '02',
      tabLabel: 'First Launch',
      title: 'Open Pastry from Applications',
      badge: 'First launch notice',
      badgeType: 'warning',
      instructions:
        'Open Finder → Applications and double-click Pastry. macOS Gatekeeper will display a standard unverified developer prompt because Pastry is crafted independently outside the Mac App Store.',
      devNote: 'Independent developer notice: macOS verifies newly downloaded software from independent developers.',
      pathGuide: 'Finder → Applications → Pastry.app',
      image: openAppImg,
      imageAlt: 'macOS Gatekeeper notice on first launch',
    },
    {
      step: '03',
      tabLabel: 'Open Anyway',
      title: 'Click "Open Anyway" in System Settings',
      badge: 'One-time authorization',
      badgeType: 'required',
      instructions:
        'Open System Settings on your Mac, navigate to Privacy & Security, scroll down to the Security section where Pastry was noticed, and click "Open Anyway". Confirm with your password or Touch ID.',
      devNote: 'You only ever have to do this once on your Mac.',
      pathGuide: 'System Settings → Privacy & Security → Security → Open Anyway',
      image: openAnywayImg,
      imageAlt: 'macOS Privacy & Security settings Open Anyway button',
    },
    {
      step: '04',
      tabLabel: 'Accessibility',
      title: 'Enable Accessibility Permission',
      badge: 'Required for paste',
      badgeType: 'required',
      instructions:
        'Pastry needs macOS Accessibility permission so it can paste your selected clipboard item directly into whichever app you are actively working in. Toggle Pastry to ON in the list.',
      devNote: 'This allows Pastry to restore focus and insert your snippet seamlessly.',
      pathGuide: 'System Settings → Privacy & Security → Accessibility → Enable Pastry',
      image: accessibilityImg,
      imageAlt: 'macOS Accessibility permission toggle for Pastry',
    },
    {
      step: '05',
      tabLabel: 'Screen Recording',
      title: 'Enable Screen Recording Permission',
      badge: 'Required for Scroll Screenshot',
      badgeType: 'required',
      instructions:
        'To capture full-length scrolling webpages and code files with the Scroll Screenshot feature, macOS requires Screen & System Audio Recording permission. All captures remain 100% local on your Mac.',
      devNote: 'Pastry never records in the background and uploads zero data to the cloud.',
      pathGuide: 'System Settings → Privacy & Security → Screen & System Audio Recording → Enable Pastry',
      image: screenRecordingImg,
      imageAlt: 'macOS Screen Recording permission toggle for Pastry',
    },
    {
      step: '06',
      tabLabel: 'Ready in Menu Bar',
      title: 'Ready in Menu Bar — Press ⌘ + Shift + V',
      badge: 'You’re all set!',
      badgeType: 'ready',
      instructions:
        `Pastry is now active and runs quietly in your top macOS menu bar. Press ${CONFIG.shortcutKey} from any application to open your floating clipboard, or press ⌥ + Space to expand text shortcuts.`,
      pathGuide: `Menu Bar Icon • Global Hotkey: ${CONFIG.shortcutKey} • Expansion: ⌥ + Space`,
      image: menubarImg,
      imageAlt: 'Pastry native Menu Bar icon and dropdown menu',
    },
  ];

  const currentStep = steps[activeStepIndex];

  return (
    <section
      id="install"
      style={{
        padding: '120px 0',
        backgroundColor: '#FAF9F6',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      }}
      aria-label="Installation Guide"
    >
      <div className="container">
        {/* Section Header with Catchy Copy */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-eyebrow">SETUP GUIDE</span>
          <h2 className="section-title">
            6 quick steps.
            <br />
            Up and running in 60 seconds.
          </h2>

          {/* Catchy Independent Developer Callout Badge */}
          <div
            style={{
              maxWidth: '680px',
              margin: '20px auto 0',
              background: 'rgba(255, 255, 255, 0.85)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              borderRadius: '16px',
              padding: '14px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textAlign: 'left',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'rgba(0, 102, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-blue)',
                flexShrink: 0,
                fontSize: '16px',
              }}
            >
              
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13.5px',
                lineHeight: 1.5,
                color: '#444446',
                margin: 0,
              }}
            >
              <strong style={{ color: '#111111' }}>Built by an independent Mac developer:</strong> Because Pastry is
              distributed independently outside the Mac App Store, macOS Gatekeeper requires a one-time approval on
              first launch. Follow this 6-step process to get started smoothly.
            </p>
          </div>

          {/* 6-Step Pill Switcher */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '36px',
              flexWrap: 'wrap',
            }}
          >
            {steps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '13px',
                    fontWeight: isActive ? 700 : 500,
                    backgroundColor: isActive ? '#111111' : '#FFFFFF',
                    color: isActive ? '#FFFFFF' : '#3A3A3C',
                    padding: '8px 16px',
                    borderRadius: '999px',
                    border: isActive ? '1px solid #111111' : '1px solid rgba(0, 0, 0, 0.08)',
                    boxShadow: isActive ? '0 4px 12px rgba(0, 0, 0, 0.12)' : '0 2px 4px rgba(0, 0, 0, 0.02)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.15s ease',
                    cursor: 'pointer',
                  }}
                  className="step-switcher-pill"
                >
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      opacity: isActive ? 0.8 : 0.4,
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {step.step}
                  </span>
                  <span>{step.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Side-by-Side Showcase Card */}
        <div
          style={{
            maxWidth: '1040px',
            margin: '0 auto',
            background: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            padding: '40px',
            boxShadow: '0 24px 60px -12px rgba(0, 0, 0, 0.08)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(380px, 100%), 1fr))',
            gap: '48px',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* Left Column: Step Details & Narrative */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 800,
                  color: 'var(--accent-blue)',
                  backgroundColor: 'rgba(0, 102, 255, 0.08)',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  letterSpacing: '0.04em',
                }}
              >
                STEP {currentStep.step} OF 06
              </span>

              <span
                style={{
                  fontSize: '11.5px',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '6px',
                  backgroundColor:
                    currentStep.badgeType === 'required'
                      ? 'rgba(255, 59, 48, 0.1)'
                      : currentStep.badgeType === 'ready'
                      ? 'rgba(52, 199, 89, 0.12)'
                      : 'rgba(255, 149, 0, 0.12)',
                  color:
                    currentStep.badgeType === 'required'
                      ? '#FF3B30'
                      : currentStep.badgeType === 'ready'
                      ? '#34C759'
                      : '#FF9500',
                }}
              >
                {currentStep.badge}
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(24px, 3.2vw, 32px)',
                fontWeight: 800,
                color: '#111111',
                lineHeight: 1.18,
                letterSpacing: '-0.03em',
                marginBottom: '14px',
              }}
            >
              {currentStep.title}
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                lineHeight: 1.6,
                color: '#636366',
                marginBottom: '18px',
              }}
            >
              {currentStep.instructions}
            </p>

            {currentStep.devNote && (
              <div
                style={{
                  fontSize: '13px',
                  color: '#8E8E93',
                  lineHeight: 1.5,
                  paddingLeft: '12px',
                  borderLeft: '2px solid rgba(0, 0, 0, 0.12)',
                  marginBottom: '20px',
                }}
              >
                {currentStep.devNote}
              </div>
            )}

            {/* Path Box */}
            <div
              style={{
                background: '#F7F7F9',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                borderRadius: '10px',
                padding: '12px 16px',
                fontSize: '12.5px',
                color: '#1D1D1F',
                fontWeight: 600,
                fontFamily: 'var(--font-mono)',
                lineHeight: 1.45,
                wordBreak: 'break-word',
                marginBottom: '28px',
              }}
            >
              <span style={{ color: '#8E8E93', marginRight: '6px' }}>Path:</span>
              {currentStep.pathGuide}
            </div>

            {/* Step Navigation Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                disabled={activeStepIndex === 0}
                style={{
                  padding: '10px 18px',
                  borderRadius: '999px',
                  border: '1px solid rgba(0, 0, 0, 0.12)',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  color: activeStepIndex === 0 ? '#C7C7CC' : '#111111',
                  cursor: activeStepIndex === 0 ? 'default' : 'pointer',
                  backgroundColor: '#FFFFFF',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.15s ease',
                }}
              >
                ← Previous
              </button>

              <button
                onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
                disabled={activeStepIndex === steps.length - 1}
                style={{
                  padding: '10px 22px',
                  borderRadius: '999px',
                  border: '1px solid #111111',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  backgroundColor: activeStepIndex === steps.length - 1 ? '#F2F2F7' : '#111111',
                  color: activeStepIndex === steps.length - 1 ? '#8E8E93' : '#FFFFFF',
                  cursor: activeStepIndex === steps.length - 1 ? 'default' : 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.15s ease',
                  boxShadow: activeStepIndex === steps.length - 1 ? 'none' : '0 4px 12px rgba(0, 0, 0, 0.15)',
                }}
              >
                {activeStepIndex === steps.length - 1 ? 'All Done! ✓' : 'Next Step →'}
              </button>

              <span style={{ fontSize: '12px', color: '#8E8E93', marginLeft: 'auto', fontFamily: 'var(--font-mono)' }}>
                {activeStepIndex + 1} / {steps.length}
              </span>
            </div>
          </div>

          {/* Right Column: Native macOS Window Framing Screenshot */}
          <div
            style={{
              background: 'linear-gradient(180deg, #F5F5F7 0%, #E9E9EE 100%)',
              borderRadius: '20px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              padding: '16px',
              boxShadow: '0 12px 32px -6px rgba(0, 0, 0, 0.06)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* macOS Window Controls Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '4px 8px 12px',
              }}
            >
              <div style={{ display: 'flex', gap: '6px' }}>
                <span className="traffic-light close" style={{ width: '9px', height: '9px' }} />
                <span className="traffic-light minimize" style={{ width: '9px', height: '9px' }} />
                <span className="traffic-light maximize" style={{ width: '9px', height: '9px' }} />
              </div>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#8E8E93',
                  fontFamily: 'var(--font-display)',
                }}
              >
                macOS Monterey, Ventura, Sonoma &amp; Sequoia
              </span>
            </div>

            {/* Screenshot Container */}
            <div
              style={{
                width: '100%',
                maxHeight: '360px',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.07)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.03)',
              }}
            >
              <img
                src={currentStep.image}
                alt={currentStep.imageAlt}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '360px',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .step-switcher-pill:hover {
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
};
