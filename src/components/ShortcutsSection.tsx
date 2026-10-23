import React, { useState } from 'react';

interface ShortcutDemo {
  id: string;
  trigger: string;
  type: 'text' | 'image';
  label: string;
  expandedText?: string;
  expandedImage?: string;
}

const SHORTCUTS: ShortcutDemo[] = [
  {
    id: 'sign',
    trigger: 'mysign',
    type: 'text',
    label: 'Email Signature',
    expandedText: 'Best regards,\nAlex Turner\nStaff Product Engineer • San Francisco, CA',
  },
  {
    id: 'addr',
    trigger: 'addr',
    type: 'text',
    label: 'Physical Address',
    expandedText: '742 Evergreen Terrace, Suite 400\nSpringfield, CA 94107',
  },
  {
    id: 'brand',
    trigger: 'brandlogo',
    type: 'image',
    label: 'Vector Brand Logo',
    expandedImage: '/pastry-logo.png',
  },
];

export const ShortcutsSection: React.FC = () => {
  const [activeShortcut, setActiveShortcut] = useState<ShortcutDemo>(SHORTCUTS[0]);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isKeyActive, setIsKeyActive] = useState(false);

  const handleSimulate = (shortcut: ShortcutDemo) => {
    setActiveShortcut(shortcut);
    setIsExpanded(false);
    setIsKeyActive(false);

    // Timeline: 1. Show keyword -> 2. Depress keys -> 3. Expand content
    setTimeout(() => {
      setIsKeyActive(true);
      setTimeout(() => {
        setIsKeyActive(false);
        setIsExpanded(true);
      }, 400);
    }, 600);
  };

  return (
    <section
      id="shortcuts"
      style={{
        padding: '120px 0',
        backgroundColor: 'var(--pastry-paper)',
        borderTop: '1px solid var(--pastry-hairline)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Text and Image Shortcuts"
    >
      {/* Ambient Refractive Blooms */}
      <div
        className="pastry-bloom pastry-bloom-meadow"
        style={{ width: '420px', height: '420px', top: '20%', left: '-5%' }}
      />
      <div
        className="pastry-bloom pastry-bloom-aurora"
        style={{ width: '460px', height: '460px', bottom: '15%', right: '-5%' }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Editorial Layout: Left Narrative + Right Large Visual Demo */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(380px, 100%), 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Editorial Storytelling */}
          <div>
            <span className="pastry-eyebrow">04 &amp; 05 — TEXT &amp; IMAGE SHORTCUTS</span>
            <h2
              className="pastry-editorial-heading"
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                marginBottom: '20px',
              }}
            >
              Type less.
              <br />
              <span className="pastry-serif-italic">Do more.</span>
            </h2>
            <p
              style={{
                fontFamily: 'var(--pastry-font-sans)',
                fontSize: '17px',
                lineHeight: 1.6,
                color: 'var(--pastry-ink-secondary)',
                marginBottom: '28px',
              }}
            >
              Turn phrases, signatures, addresses, and images into instant shortcuts.
              <br />
              Type your keyword and press <strong style={{ color: 'var(--pastry-ink)' }}>⌥ + Space</strong> to expand anywhere on macOS.
            </p>

            {/* Preset Buttons */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
              }}
            >
              {SHORTCUTS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleSimulate(s)}
                  className={`pastry-filter-pill ${activeShortcut.id === s.id ? 'is-active' : ''}`}
                  style={{
                    padding: '9px 18px',
                  }}
                >
                  <span>{s.label}</span>
                  <span style={{ opacity: 0.65, marginLeft: '6px', fontFamily: 'var(--pastry-font-mono)', fontSize: '12px' }}>({s.trigger})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Demonstration */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              position: 'relative',
              width: '100%',
            }}
          >
            {/* Tactile Keyboard Keypress Demonstration */}
            <div
              className="pastry-card"
              style={{
                width: '100%',
                maxWidth: '560px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                padding: '12px 24px',
              }}
            >
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--pastry-ink-secondary)' }}>Expansion Hotkey:</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  className={`pastry-keycap ${isKeyActive ? 'is-pressed' : ''}`}
                  style={{
                    minWidth: '42px',
                    height: '34px',
                    fontSize: '14px',
                    borderRadius: '8px',
                  }}
                >
                  ⌥
                </span>
                <span style={{ color: 'var(--pastry-ink-muted)', fontWeight: 600 }}>+</span>
                <span
                  className={`pastry-keycap ${isKeyActive ? 'is-pressed' : ''}`}
                  style={{
                    minWidth: '96px',
                    height: '34px',
                    fontSize: '11.5px',
                    borderRadius: '8px',
                    letterSpacing: '0.04em',
                  }}
                >
                  SPACE
                </span>
              </div>
            </div>

            {/* Liquid Glass Showcase Panel */}
            <div
              className="pastry-glass-panel"
              style={{
                width: '100%',
                maxWidth: '560px',
                borderRadius: '32px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
            >
              {/* Realistic Native macOS Messages / Editor Window */}
              <div
                style={{
                  width: '100%',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  boxShadow: '0 16px 40px rgba(0, 0, 0, 0.08)',
                  background: '#FFFFFF',
                }}
              >
                {/* macOS Title Bar */}
                <div
                  style={{
                    padding: '12px 18px',
                    background: '#F8F8FA',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.07)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="traffic-light close" />
                    <span className="traffic-light minimize" />
                    <span className="traffic-light maximize" />
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#636366', marginLeft: '8px' }}>
                      Messages — Chat with Sarah
                    </span>
                  </div>
                  <span style={{ fontSize: '11px', color: '#8E8E93', fontFamily: 'var(--font-mono)' }}>⌥ + Space</span>
                </div>

                {/* Chat Messages Body */}
                <div
                  style={{
                    padding: '28px 24px',
                    minHeight: '260px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: '#FFFFFF',
                  }}
                >
                  {/* Incoming Message */}
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: '#E5E5EA',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: 700,
                        color: '#636366',
                        flexShrink: 0,
                      }}
                    >
                      ST
                    </div>
                    <div
                      style={{
                        background: '#E9E9EB',
                        color: '#000000',
                        padding: '12px 18px',
                        borderRadius: '18px 18px 18px 4px',
                        fontSize: '14px',
                        lineHeight: 1.45,
                        maxWidth: '420px',
                      }}
                    >
                      Hey! Could you send over your {activeShortcut.label.toLowerCase()} quickly?
                    </div>
                  </div>

                  {/* Outgoing Message Expansion */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 'auto' }}>
                    <div
                      style={{
                        background: '#0066FF',
                        color: '#FFFFFF',
                        padding: '14px 20px',
                        borderRadius: '18px 18px 4px 18px',
                        fontSize: '14px',
                        lineHeight: 1.5,
                        maxWidth: '460px',
                        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                        boxShadow: '0 4px 12px rgba(0, 102, 255, 0.2)',
                      }}
                    >
                      {!isExpanded ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{activeShortcut.trigger}</span>
                          <span style={{ opacity: 0.6, fontSize: '11px' }}>[press ⌥ + Space to expand]</span>
                        </div>
                      ) : activeShortcut.type === 'text' ? (
                        <div style={{ whiteSpace: 'pre-line' }}>{activeShortcut.expandedText}</div>
                      ) : (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <img
                            src={activeShortcut.expandedImage}
                            alt="Expanded Shortcut Asset"
                            style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                          />
                          <div>
                            <div style={{ fontWeight: 700 }}>Pastry Logo.png</div>
                            <div style={{ fontSize: '11px', opacity: 0.8 }}>Saved Brand Image Asset • 1024 × 1024</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
