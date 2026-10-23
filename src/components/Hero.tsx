import React, { useState, useEffect } from 'react';
import { PastryWindowMockup, type PastryItem } from './PastryWindowMockup';
import { CONFIG, LATEST_DOWNLOAD_URL } from '../config';

interface HeroProps {
  onDownloadClick?: () => void;
  onInstallGuideClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadClick, onInstallGuideClick }) => {
  const [animStep, setAnimStep] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Live macOS menu bar day and time (e.g., "Sat 11:19 AM")
  const [liveMenuTime, setLiveMenuTime] = useState<string>(() => {
    const now = new Date();
    return (
      now.toLocaleDateString('en-US', { weekday: 'short' }) +
      ' ' +
      now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
    );
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLiveMenuTime(
        now.toLocaleDateString('en-US', { weekday: 'short' }) +
        ' ' +
        now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 15000);
    return () => clearInterval(timer);
  }, []);

  const handleDownload = () => {
    if (onDownloadClick) onDownloadClick();
    if (LATEST_DOWNLOAD_URL) window.location.href = LATEST_DOWNLOAD_URL;
  };

  // Automated loop animation:
  // Step 0: Idle with incoming message (1400ms)
  // Step 1: Cursor gliding to Script item in Pastry (1100ms)
  // Step 2: Auto-click on Script item -> Pastry item lights up ✓ Pasted (700ms)
  // Step 3: Cursor glides back to Chat input -> Text appears in input with send button (900ms)
  // Step 4: Auto-click send button -> Script message sent into chat thread (900ms)
  // Step 5: Cursor glides to IMG item in Pastry (1200ms)
  // Step 6: Auto-click on IMG item -> Pastry item lights up ✓ Pasted (700ms)
  // Step 7: Cursor glides back to Chat input -> Image preview appears in input with send button (1000ms)
  // Step 8: Auto-click send button -> Image sent into chat thread (1000ms)
  // Step 9: Viewing complete conversation (3600ms)
  useEffect(() => {
    if (isPaused) return;

    const stepDurations = [1400, 1100, 700, 900, 900, 1200, 700, 1000, 1000, 3600];

    const timer = setTimeout(() => {
      setAnimStep((prev) => (prev >= 9 ? 0 : prev + 1));
    }, stepDurations[animStep] || 1000);

    return () => clearTimeout(timer);
  }, [animStep, isPaused]);

  // Derived animation states
  const hasScriptSent = animStep >= 4;
  const hasImageSent = animStep >= 8;
  const isClicking = animStep === 2 || animStep === 4 || animStep === 6 || animStep === 8;

  const activeCopiedId =
    animStep === 2 || animStep === 3
      ? 'item-script'
      : animStep === 6 || animStep === 7
        ? 'item-img'
        : null;

  const getCursorCoords = () => {
    switch (animStep) {
      case 0:
        return { x: '22.5%', y: '90.5%' };
      case 1:
      case 2:
        return { x: '71%', y: '25.5%' }; // Right over Video-Script-Final.md (2nd item in Pastry)
      case 3:
        return { x: '22.5%', y: '90.5%' }; // Over Chat input bar with MD attachment chip
      case 4:
        return { x: '39%', y: '90.5%' }; // Over blue send arrow button
      case 5:
      case 6:
        return { x: '71%', y: '47.2%' }; // Right over Screenshot image (4th item in Pastry)
      case 7:
        return { x: '22.5%', y: '90.5%' }; // Over Chat input bar with image preview
      case 8:
        return { x: '39%', y: '90.5%' }; // Over blue send arrow button
      default:
        return { x: '22.5%', y: '90.5%' };
    }
  };

  const cursorCoords = getCursorCoords();

  const handleManualItemClick = (item: PastryItem) => {
    if (item.id === 'item-script') {
      setAnimStep(2);
    } else if (item.id === 'item-img') {
      setAnimStep(6);
    }
  };

  const clipboardItems: PastryItem[] = [
    {
      id: 'item-folder',
      type: 'folder',
      title: 'Client Proposals & Brand Assets',
      subtitle: '4m ago • Folder (14 items)',
    },
    {
      id: 'item-script',
      type: 'text',
      title: 'Video-Script-Final.md',
      subtitle: 'Just now • Text snippet',
    },
    {
      id: 'item-text',
      type: 'text',
      title: 'mysign → Best regards, Alex Turner',
      subtitle: '2m ago • Text Shortcut',
    },
    {
      id: 'item-img',
      type: 'image',
      title: 'Content-Calendar.png',
      subtitle: '1m ago • Image (1024 × 572)',
      imageSrc: '/demo-screenshot.jpg',
    },
    {
      id: 'item-calc',
      type: 'equation',
      title: '249 × 282',
      result: '70,218',
      subtitle: 'Calculated Answer',
    },
    {
      id: 'item-app',
      type: 'app',
      title: 'Xcode.app',
      subtitle: '9m ago • macOS Application',
    },
  ];

  return (
    <>
      {/* 1. Hero Text & CTAs Section (Maya Valley Landscape Fold) */}
      <section className="pastry-hero-maya-bg" aria-label="Pastry Hero">
        {/* Panoramic Ghibli-style Landscape Artwork */}
        <picture className="pastry-hero-landscape-wrap">
          <source
            type="image/webp"
            srcSet="/hero/landscape-1280.webp 1280w, /hero/landscape-1920.webp 1920w"
            sizes="100vw"
          />
          <img
            src="/hero/landscape-1920.webp"
            alt="Pastry Landscape Background"
            width="1920"
            height="1120"
            fetchPriority="high"
            decoding="async"
            className="pastry-hero-landscape"
          />
        </picture>

        {/* Hero Content Container Over the Sky */}
        <div className="pastry-hero-content">
          {/* Eyebrow Seed Badge */}
          <div style={{ marginBottom: '14px' }}>
            <span className="pastry-seed-badge-hero">
              <span className="pastry-seed-tag">v{CONFIG.version}</span>
              <span>PASTRY FOR macOS</span>
            </span>
          </div>

          {/* Oversized Editorial Headline */}
          <h1 className="pastry-hero-title">
            Everything{' '}
            <span className="pastry-serif-italic">within reach.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="pastry-hero-subtitle">
            Make your Mac experience effortless.
          </p>

          {/* Dual CTAs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              marginBottom: '30px',
            }}
          >
            <button
              onClick={handleDownload}
              className="pastry-btn-hero-primary"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download Pastry</span>
            </button>

            <a
              href={CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pastry-btn-hero-secondary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>View on GitHub</span>
            </a>
          </div>

          {/* Global Shortcut Hint */}
          <div className="pastry-hero-shortcut-hint">
            <span>Global shortcut: ⌘ + ⇧ + V</span>
            <span style={{ margin: '0 8px', opacity: 0.5 }}>•</span>
            <a
              href="#install"
              onClick={(e) => {
                e.preventDefault();
                if (onInstallGuideClick) {
                  onInstallGuideClick();
                } else {
                  const el = document.getElementById('install');
                  if (el) {
                    const offset = 80;
                    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }
              }}
              style={{
                color: '#ffffff',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Installation Guide →
            </a>
          </div>
        </div>
      </section>

      {/* 2. Clipboard Window Section (Interactive Copy → Paste Demonstration) */}
      <section
        style={{
          padding: '0 0 110px 0',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          marginTop: '-250px',
          zIndex: 10,
        }}
        aria-label="Pastry Clipboard Interface Preview"
      >
        {/* Ambient Refractive Blooms behind the glass panel */}
        <div
          className="pastry-bloom pastry-bloom-meadow"
          style={{ width: '460px', height: '460px', top: '12%', left: '-5%' }}
        />
        <div
          className="pastry-bloom pastry-bloom-aurora"
          style={{ width: '500px', height: '500px', bottom: '8%', right: '-6%' }}
        />

        <div className="container" style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
          {/* Liquid Glass Showcase Card with Maya-Style Specular Border and Blur */}
          <div
            className="pastry-glass-panel"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '920px',
              padding: '36px 20px 48px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* macOS Menu bar snippet */}
            <div
              style={{
                width: '100%',
                maxWidth: '820px',
                height: '32px',
                background: 'rgba(251, 250, 247, 0.85)',
                backdropFilter: 'blur(20px)',
                borderRadius: '999px',
                border: '1px solid var(--pastry-hairline)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 14px',
                marginBottom: '28px',
                fontSize: '11.5px',
                color: 'var(--pastry-ink-secondary)',
                fontWeight: 600,
                fontFamily: 'var(--pastry-font-sans)',
                boxShadow: 'var(--pastry-shadow-sm)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{ fontSize: '13px' }}></span>
                <span>Finder</span>
                <span style={{ opacity: 0.7 }}>File</span>
                <span style={{ opacity: 0.7 }}>Edit</span>
                <span style={{ opacity: 0.7 }}>View</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    backgroundColor: 'rgba(47, 141, 18, 0.1)',
                    padding: '2.5px 8px',
                    borderRadius: '999px',
                    color: 'var(--pastry-brand)',
                  }}
                >
                  <img src="/pastry-logo.png" alt="Pastry Icon" style={{ width: '13px', height: '13px' }} />
                  <span style={{ fontSize: '11px', fontWeight: 700 }}>Pastry Active</span>
                </div>
                <span>{liveMenuTime}</span>
              </div>
            </div>

            {/* Side-by-Side Interactive Copy → Paste Demonstration */}
            <div
              className="demo-canvas-wrapper"
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '24px',
                width: '100%',
                maxWidth: '782px',
                margin: '0 auto',
                flexWrap: 'nowrap',
              }}
            >
              {/* LEFT: Simple macOS Chat UI (Matching Screenshot) */}
              <div
                style={{
                  width: '100%',
                  maxWidth: '350px',
                  height: '470px',
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow:
                    '0 32px 72px -16px rgba(0, 0, 0, 0.14), 0 16px 32px -8px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  textAlign: 'left',
                  position: 'relative',
                }}
              >
                {/* Header (Avatar + Two Placeholder Skeleton Bars as in screenshot) */}
                <div
                  style={{
                    padding: '22px 24px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.04)',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: '#E5E5EA',
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div
                      style={{
                        width: '135px',
                        height: '11px',
                        borderRadius: '6px',
                        backgroundColor: '#E5E5EA',
                      }}
                    />
                    <div
                      style={{
                        width: '55px',
                        height: '8px',
                        borderRadius: '4px',
                        backgroundColor: '#F2F2F7',
                      }}
                    />
                  </div>
                </div>

                {/* Message Thread Body */}
                <div
                  style={{
                    flex: 1,
                    padding: '18px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    overflowY: 'hidden',
                    justifyContent: 'flex-start',
                  }}
                >
                  {/* Incoming Message from Contact */}
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', width: '100%' }}>
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        backgroundColor: '#E5E5EA',
                        flexShrink: 0,
                      }}
                    />
                    <div
                      style={{
                        backgroundColor: '#F2F2F7',
                        borderRadius: '18px',
                        padding: '11px 16px',
                        fontSize: '13px',
                        color: '#121214',
                        lineHeight: 1.35,
                        maxWidth: '78%',
                      }}
                    >
                      hey send me the script and the image
                    </div>
                  </div>

                  {/* Outgoing Message 1: .md File Attachment */}
                  {hasScriptSent && (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        width: '100%',
                        animation: 'chatBubblePop 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      }}
                    >
                      <div
                        style={{
                          borderRadius: '14px',
                          border: '1px solid rgba(0, 0, 0, 0.1)',
                          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
                          backgroundColor: '#FFFFFF',
                          padding: '10px 12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          maxWidth: '240px',
                          marginLeft: 'auto',
                          cursor: 'pointer',
                        }}
                      >
                        {/* File Icon Tile with folded corner and MD badge */}
                        <div
                          style={{
                            width: '36px',
                            height: '42px',
                            borderRadius: '6px',
                            background: 'linear-gradient(145deg, #F2F2F7 0%, #E5E5EA 100%)',
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            position: 'relative',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                          }}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#0066FF"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                          <span
                            style={{
                              fontSize: '7.5px',
                              fontWeight: 800,
                              color: '#0066FF',
                              letterSpacing: '0.04em',
                              marginTop: '2px',
                              fontFamily: 'var(--font-mono)',
                            }}
                          >
                            MD
                          </span>
                        </div>

                        {/* File Info */}
                        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
                          <span
                            style={{
                              fontSize: '12px',
                              fontWeight: 600,
                              color: '#121214',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            Video-Script-Final.md
                          </span>
                          <span
                            style={{
                              fontSize: '10px',
                              color: '#8E8E93',
                              marginTop: '2px',
                            }}
                          >
                            14 KB • Markdown
                          </span>
                        </div>

                        {/* macOS QuickLook / Download Icon */}
                        <div
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(0, 102, 255, 0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#0066FF',
                            flexShrink: 0,
                          }}
                        >
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Outgoing Message 2: Image */}
                  {hasImageSent && (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        width: '100%',
                        animation: 'chatBubblePop 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      }}
                    >
                      <div
                        style={{
                          borderRadius: '16px',
                          overflow: 'hidden',
                          border: '1px solid rgba(0, 0, 0, 0.08)',
                          boxShadow: '0 6px 18px rgba(0, 0, 0, 0.08)',
                          maxWidth: '200px',
                          backgroundColor: '#FFFFFF',
                          marginLeft: 'auto',
                        }}
                      >
                        <img
                          src="/demo-screenshot.jpg"
                          alt="Screenshot"
                          style={{
                            width: '100%',
                            height: '105px',
                            objectFit: 'cover',
                            display: 'block',
                          }}
                        />
                        <div
                          style={{
                            padding: '6px 10px',
                            fontSize: '10.5px',
                            color: '#636366',
                            fontWeight: 600,
                            backgroundColor: '#F8F8FA',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '140px' }}>
                            Content-Calendar.png
                          </span>
                          <span
                            style={{
                              color: '#0066FF',
                              fontSize: '9px',
                              fontWeight: 800,
                              backgroundColor: 'rgba(0, 102, 255, 0.08)',
                              padding: '1px 5px',
                              borderRadius: '3px',
                            }}
                          >
                            IMG
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Input Bar (Pill Shape as shown in screenshot) */}
                <div style={{ padding: '0 20px 20px 20px' }}>
                  <div
                    style={{
                      height: '48px',
                      borderRadius: '999px',
                      border:
                        animStep === 3 || animStep === 7
                          ? '1.5px solid #0066FF'
                          : '1.5px solid #C7C7CC',
                      padding: '0 10px 0 18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: '#FFFFFF',
                      boxShadow:
                        animStep === 3 || animStep === 7
                          ? '0 0 0 3px rgba(0, 102, 255, 0.12)'
                          : 'none',
                      transition: 'all 0.22s ease',
                    }}
                  >
                    {/* Input Content */}
                    {animStep === 3 ? (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          flex: 1,
                          minWidth: 0,
                          animation: 'chatBubblePop 0.18s ease-out',
                        }}
                      >
                        <div
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            backgroundColor: 'rgba(0, 102, 255, 0.08)',
                            border: '1px solid rgba(0, 102, 255, 0.18)',
                            padding: '3px 8px',
                            borderRadius: '8px',
                            maxWidth: '100%',
                          }}
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#0066FF"
                            strokeWidth="2.2"
                            style={{ flexShrink: 0 }}
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                          <span
                            style={{
                              fontSize: '12px',
                              color: '#0066FF',
                              fontWeight: 600,
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              maxWidth: '145px',
                            }}
                          >
                            Video-Script-Final.md
                          </span>
                          <span
                            style={{
                              fontSize: '9px',
                              color: '#8E8E93',
                              fontWeight: 700,
                            }}
                          >
                            14 KB
                          </span>
                        </div>
                      </div>
                    ) : animStep === 7 ? (
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          flex: 1,
                          minWidth: 0,
                          animation: 'chatBubblePop 0.18s ease-out',
                        }}
                      >
                        <div
                          style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '6px',
                            overflow: 'hidden',
                            border: '1px solid rgba(0,0,0,0.12)',
                            flexShrink: 0,
                          }}
                        >
                          <img
                            src="/demo-screenshot.jpg"
                            alt="Preview"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                          <span
                            style={{
                              fontSize: '11.5px',
                              fontWeight: 600,
                              color: '#121214',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            Content-Calendar.png
                          </span>
                          <span style={{ fontSize: '9px', color: '#8E8E93' }}>
                            Image Preview (1024 × 572)
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <span style={{ color: '#C7C7CC', fontSize: '13px', userSelect: 'none' }}>
                          iMessage
                        </span>
                        {animStep === 0 && (
                          <span
                            className="editor-cursor"
                            style={{
                              display: 'inline-block',
                              width: '2px',
                              height: '13px',
                              backgroundColor: '#0066FF',
                            }}
                          />
                        )}
                      </div>
                    )}

                    {/* Send Button */}
                    {(animStep === 3 || animStep === 7) && (
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          backgroundColor: '#0066FF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFFFFF',
                          flexShrink: 0,
                          transform: isClicking ? 'scale(0.85)' : 'scale(1)',
                          transition: 'transform 0.15s ease',
                          boxShadow: '0 2px 6px rgba(0, 102, 255, 0.3)',
                        }}
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.8"
                        >
                          <line x1="12" y1="19" x2="12" y2="5" />
                          <polyline points="5 12 12 5 19 12" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* RIGHT: Floating Pastry Panel Centerpiece */}
              <div className="animate-float" style={{ flexShrink: 0 }}>
                <PastryWindowMockup
                  items={clipboardItems}
                  actionLabel="Pasted"
                  activeCopiedId={activeCopiedId}
                  onItemClick={handleManualItemClick}
                  showFloatingButtons={true}
                />
              </div>

              {/* Animated macOS Cursor Indicator */}
              <div
                className="demo-cursor"
                style={{
                  position: 'absolute',
                  left: cursorCoords.x,
                  top: cursorCoords.y,
                  pointerEvents: 'none',
                  zIndex: 60,
                  transform: `translate(-3px, -3px) scale(${isClicking ? 0.78 : 1})`,
                  transition:
                    'left 0.85s cubic-bezier(0.25, 1, 0.5, 1), top 0.85s cubic-bezier(0.25, 1, 0.5, 1), transform 0.15s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.38))' }}
                >
                  <path
                    d="M4 3L11.5 21L14.5 13.5L22 10.5L4 3Z"
                    fill="#121214"
                    stroke="#FFFFFF"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
                {isClicking && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '2px',
                      left: '2px',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0, 102, 255, 0.4)',
                      transform: 'translate(-50%, -50%)',
                      animation: 'cursorRipple 0.5s ease-out forwards',
                      pointerEvents: 'none',
                    }}
                  />
                )}
              </div>
            </div>

            {/* Playback Control Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginTop: '24px',
                fontSize: '11.5px',
                color: '#636366',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(0, 102, 255, 0.08)',
                  color: '#0066FF',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#0066FF',
                  }}
                />
                <span>Auto-Demo Playing</span>
              </div>
              <button
                onClick={() => setAnimStep(0)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  color: '#121214',
                  fontSize: '11px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.15s ease',
                }}
              >
                ↺ Replay from start
              </button>
              <button
                onClick={() => setIsPaused((prev) => !prev)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  color: '#121214',
                  fontSize: '11px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.15s ease',
                }}
              >
                {isPaused ? '▶ Resume' : '⏸ Pause'}
              </button>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes cursorBlink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .editor-cursor {
            animation: cursorBlink 1s infinite;
          }
          @keyframes chatBubblePop {
            0% {
              opacity: 0;
              transform: scale(0.92) translateY(6px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
          @keyframes cursorRipple {
            0% {
              transform: translate(-50%, -50%) scale(0.3);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) scale(2.4);
              opacity: 0;
            }
          }
          @media (max-width: 768px) {
            .demo-canvas-wrapper {
              flex-wrap: wrap !important;
            }
            .demo-cursor {
              display: none !important;
            }
          }
        `}</style>
      </section>
    </>
  );
};
