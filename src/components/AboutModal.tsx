import React, { useState, useEffect } from 'react';
import { CONFIG, LATEST_DOWNLOAD_URL } from '../config';
import { PastryLogo } from './PastryLogo';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadClick?: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onDownloadClick,
}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [trafficHovered, setTrafficHovered] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsMaximized(false);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    if (onDownloadClick) onDownloadClick();
    if (LATEST_DOWNLOAD_URL) window.location.href = LATEST_DOWNLOAD_URL;
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.42)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        padding: isMaximized ? '12px' : '20px',
        animation: 'aboutBackdropFadeIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-pastry-title"
    >
      {/* Floating macOS Window - Exactly matches provided layout and website aesthetic */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: isMaximized ? '98vw' : 'min(940px, 94vw)',
          height: isMaximized ? '96vh' : 'min(700px, 90vh)',
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid rgba(0, 0, 0, 0.12)',
          boxShadow: isMaximized
            ? '0 36px 90px rgba(0, 0, 0, 0.38), 0 0 0 1px rgba(0, 0, 0, 0.1)'
            : '0 32px 80px -12px rgba(0, 0, 0, 0.25), 0 16px 32px -8px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          transition: 'width 0.28s cubic-bezier(0.16, 1, 0.3, 1), height 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
          animation: 'aboutWindowScaleUp 0.26s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        }}
      >
        {/* macOS Title Bar Header */}
        <div
          style={{
            height: '46px',
            minHeight: '46px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 18px',
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
            userSelect: 'none',
          }}
        >
          {/* Left: Traffic Lights + Window Title */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            {/* Traffic Light Controls Container */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onMouseEnter={() => setTrafficHovered(true)}
              onMouseLeave={() => setTrafficHovered(false)}
            >
              {/* Close Button (Red) */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close window"
                title="Close (Esc)"
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#FF5F56',
                  border: '0.5px solid rgba(0, 0, 0, 0.16)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 0,
                  cursor: 'pointer',
                  color: '#4D0002',
                  fontSize: '8px',
                  fontWeight: 900,
                  lineHeight: 1,
                  transition: 'background-color 0.12s ease',
                }}
              >
                {trafficHovered && '✕'}
              </button>

              {/* Minimize Button (Yellow) - DISABLED per requirement */}
              <button
                type="button"
                disabled
                aria-disabled="true"
                aria-label="Minimize disabled"
                title="Minimize (Disabled)"
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#FFBD2E',
                  border: '0.5px solid rgba(0, 0, 0, 0.14)',
                  opacity: 0.35,
                  cursor: 'not-allowed',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 0,
                  pointerEvents: 'none',
                }}
              />

              {/* Maximize Button (Green) - Interactive */}
              <button
                type="button"
                onClick={() => setIsMaximized((prev) => !prev)}
                aria-label={isMaximized ? 'Restore window size' : 'Maximize window'}
                title={isMaximized ? 'Restore window' : 'Maximize'}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: '#27C93F',
                  border: '0.5px solid rgba(0, 0, 0, 0.16)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 0,
                  cursor: 'pointer',
                  color: '#0A4A11',
                  fontSize: '8px',
                  fontWeight: 900,
                  lineHeight: 1,
                  transition: 'background-color 0.12s ease',
                }}
              >
                {trafficHovered && (isMaximized ? '↙' : '↗')}
              </button>
            </div>

            {/* Window Title matching provided screenshot */}
            <span
              id="about-pastry-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '0.08em',
                color: '#111111',
                textTransform: 'uppercase',
              }}
            >
              ABOUT PASTRY
            </span>
          </div>

          {/* Right Header: Version Tag and ESC Shortcut Hint */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 600,
                color: '#0066FF',
                backgroundColor: 'rgba(0, 102, 255, 0.08)',
                padding: '3px 9px',
                borderRadius: '6px',
                letterSpacing: '0.02em',
              }}
            >
              v{CONFIG.version}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10.5px',
                fontWeight: 600,
                color: '#8E8E93',
                backgroundColor: '#F5F5F7',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                padding: '2px 7px',
                borderRadius: '5px',
              }}
            >
              ESC
            </span>
          </div>
        </div>

        {/* Scrollable Window Content - Pure HTML/CSS with No Background Image */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '36px 42px',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          {/* Top Section: App Identity & Hero Headline */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '24px',
              paddingBottom: '28px',
              borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
            }}
          >
            <div style={{ flex: '1 1 480px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: '#0066FF',
                  }}
                />
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    color: '#0066FF',
                    textTransform: 'uppercase',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  NATIVE MACOS UTILITY
                </span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(28px, 3.6vw, 40px)',
                  fontWeight: 800,
                  lineHeight: 1.12,
                  letterSpacing: '-0.035em',
                  color: '#111111',
                  margin: '0 0 14px 0',
                }}
              >
                Everything you need.
                <br />
                Nothing you don't.
              </h2>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '15px',
                  lineHeight: 1.6,
                  color: '#515154',
                  margin: 0,
                  maxWidth: '560px',
                }}
              >
                Pastry is a lightweight, ultra-fast macOS clipboard manager and productivity companion.
                Engineered with pure Swift, AppKit, and Carbon, it runs quietly in your menu bar to keep
                every piece of text, code snippet, image, calculation, and shortcut immediately accessible.
              </p>
            </div>

            {/* Apple-styled Glassmorphic App Badge Card */}
            <div
              style={{
                background: 'linear-gradient(180deg, #FAF9F6 0%, #F5F5F7 100%)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '16px',
                padding: '20px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                flexShrink: 0,
                minWidth: '180px',
              }}
            >
              <PastryLogo size={46} showText={false} />
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '14px',
                    color: '#111111',
                  }}
                >
                  Pastry for Mac
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: '#8E8E93',
                    fontFamily: 'var(--font-mono)',
                    marginTop: '2px',
                  }}
                >
                  Universal Binary
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  padding: '3px 9px',
                  borderRadius: '999px',
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#34C759',
                  marginTop: '2px',
                }}
              >
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#34C759' }} />
                <span>Active in Menu Bar</span>
              </div>
            </div>
          </div>

          {/* Three Architecture Feature Cards - No Emojis, Pure SVG Icons */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
              gap: '18px',
            }}
          >
            {/* Card 1: Pure Native Architecture */}
            <div
              style={{
                backgroundColor: '#FAF9F6',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                borderRadius: '14px',
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(0, 102, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0066FF',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10.5px',
                    fontWeight: 700,
                    color: '#0066FF',
                    backgroundColor: 'rgba(0, 102, 255, 0.06)',
                    padding: '2px 8px',
                    borderRadius: '6px',
                  }}
                >
                  PURE APP_KIT
                </span>
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#111111',
                    marginBottom: '6px',
                  }}
                >
                  Native Swift Architecture
                </h3>
                <p style={{ fontSize: '13px', lineHeight: 1.5, color: '#636366', margin: 0 }}>
                  Zero web runtime or Electron bloat. Starts up in milliseconds and uses virtually zero idle RAM and CPU.
                </p>
              </div>
            </div>

            {/* Card 2: 100% Private & Local-First */}
            <div
              style={{
                backgroundColor: '#FAF9F6',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                borderRadius: '14px',
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(52, 199, 89, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#34C759',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10.5px',
                    fontWeight: 700,
                    color: '#34C759',
                    backgroundColor: 'rgba(52, 199, 89, 0.08)',
                    padding: '2px 8px',
                    borderRadius: '6px',
                  }}
                >
                  OFFLINE_FIRST
                </span>
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#111111',
                    marginBottom: '6px',
                  }}
                >
                  Local-First Security
                </h3>
                <p style={{ fontSize: '13px', lineHeight: 1.5, color: '#636366', margin: 0 }}>
                  All clipboard data, shortcuts, and captures stay entirely on your Mac. No cloud syncing, telemetry, or third-party servers.
                </p>
              </div>
            </div>

            {/* Card 3: Unified Productivity Tools */}
            <div
              style={{
                backgroundColor: '#FAF9F6',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                borderRadius: '14px',
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 149, 0, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FF9500',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10.5px',
                    fontWeight: 700,
                    color: '#FF9500',
                    backgroundColor: 'rgba(255, 149, 0, 0.08)',
                    padding: '2px 8px',
                    borderRadius: '6px',
                  }}
                >
                  UTILITY_SUITE
                </span>
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#111111',
                    marginBottom: '6px',
                  }}
                >
                  Integrated Power Suite
                </h3>
                <p style={{ fontSize: '13px', lineHeight: 1.5, color: '#636366', margin: 0 }}>
                  Inline math solver, full-page scrolling screenshots, and instantaneous keyword expansions right where your cursor rests.
                </p>
              </div>
            </div>
          </div>

          {/* Shortcut Quick Reference Bar */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              borderRadius: '12px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '12.5px', fontWeight: 700, color: '#111111', fontFamily: 'var(--font-display)' }}>
                Essential Hotkeys:
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="mac-keycap" style={{ height: '26px', minWidth: '26px', fontSize: '12px', padding: '0 8px' }}>
                  ⌘ + Shift + V
                </span>
                <span style={{ fontSize: '12px', color: '#636366' }}>Clipboard History</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="mac-keycap" style={{ height: '26px', minWidth: '26px', fontSize: '12px', padding: '0 8px' }}>
                  ⌥ + Space
                </span>
                <span style={{ fontSize: '12px', color: '#636366' }}>Expand Shortcut</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="mac-keycap" style={{ height: '26px', minWidth: '26px', fontSize: '12px', padding: '0 8px' }}>
                  Esc
                </span>
                <span style={{ fontSize: '12px', color: '#636366' }}>Dismiss</span>
              </div>
            </div>
          </div>

          {/* Philosophy Statement Banner */}
          <div
            style={{
              padding: '18px 22px',
              borderLeft: '3px solid #0066FF',
              backgroundColor: '#FAF9F6',
              borderRadius: '0 12px 12px 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '16px',
                fontWeight: 700,
                color: '#111111',
                lineHeight: 1.4,
              }}
            >
              Copy something. Create something.
              <br />
              Get it done without breaking your flow.
            </div>
            <span style={{ fontSize: '12.5px', color: '#8E8E93' }}>
              Crafted independently by Balajee for Mac power users everywhere.
            </span>
          </div>

          {/* Action Buttons Row matching website UI buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              paddingTop: '6px',
            }}
          >
            <button
              onClick={handleDownload}
              style={{
                backgroundColor: '#111111',
                color: '#FFFFFF',
                fontFamily: 'var(--font-display)',
                fontSize: '13.5px',
                fontWeight: 700,
                padding: '10px 22px',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.15s ease',
              }}
              className="about-modal-primary-btn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download Pastry (v{CONFIG.version})</span>
            </button>

            <a
              href={CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 18px',
                borderRadius: '999px',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                backgroundColor: '#FFFFFF',
                color: '#111111',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.15s ease',
              }}
              className="about-modal-secondary-btn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub Repository</span>
            </a>

            <a
              href={CONFIG.whatsappCommunityUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 18px',
                borderRadius: '999px',
                border: '1px solid rgba(7, 94, 84, 0.18)',
                backgroundColor: 'rgba(7, 94, 84, 0.04)',
                color: '#075E54',
                fontSize: '13px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.15s ease',
              }}
              className="about-modal-whatsapp-btn"
            >
              <span>WhatsApp Community</span>
            </a>
          </div>
        </div>

        {/* macOS Bottom Status Bar Divider - Exactly like provided image */}
        <div
          style={{
            height: '36px',
            minHeight: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 20px',
            backgroundColor: '#FAFAFC',
            borderTop: '1px solid rgba(0, 0, 0, 0.07)',
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            color: '#8E8E93',
            userSelect: 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#34C759' }} />
            <span>macOS 11.0 Big Sur or later • Apple Silicon &amp; Intel 64-bit</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span>Free &amp; Open Source (GPLv3)</span>
            <span>Crafted with Swift</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes aboutBackdropFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes aboutWindowScaleUp {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(12px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .about-modal-primary-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2) !important;
        }
        .about-modal-secondary-btn:hover {
          background-color: #F7F7F9 !important;
          border-color: rgba(0, 0, 0, 0.2) !important;
        }
        .about-modal-whatsapp-btn:hover {
          background-color: rgba(7, 94, 84, 0.08) !important;
        }
      `}</style>
    </div>
  );
};
