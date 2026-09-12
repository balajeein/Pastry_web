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
        backgroundColor: '#FAF9F6',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      }}
      aria-label="Text and Image Shortcuts"
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-eyebrow">04 &amp; 05 — TEXT &amp; IMAGE SHORTCUTS</span>
          <h2 className="section-title">
            Type less.
            <br />
            Do more.
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Turn frequently typed phrases, signatures, addresses, and images into instant native shortcuts. Type your
            keyword anywhere on macOS and press <strong style={{ color: '#111' }}>⌥ + Space</strong> to expand.
          </p>

          {/* Preset Buttons */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '32px',
              flexWrap: 'wrap',
            }}
          >
            {SHORTCUTS.map((s) => (
              <button
                key={s.id}
                onClick={() => handleSimulate(s)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '999px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '14px',
                  fontWeight: activeShortcut.id === s.id ? 700 : 500,
                  backgroundColor: activeShortcut.id === s.id ? '#111111' : '#FFFFFF',
                  color: activeShortcut.id === s.id ? '#FFFFFF' : '#3A3A3C',
                  border: activeShortcut.id === s.id ? '1px solid #111111' : '1px solid rgba(0, 0, 0, 0.1)',
                  boxShadow: activeShortcut.id === s.id ? '0 4px 14px rgba(0, 0, 0, 0.12)' : '0 2px 4px rgba(0, 0, 0, 0.02)',
                  transition: 'all 0.15s ease',
                  cursor: 'pointer',
                }}
              >
                <span>{s.label}</span>
                <span style={{ opacity: 0.6, marginLeft: '6px', fontFamily: 'var(--font-mono)' }}>({s.trigger})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tactile Keyboard Keypress Demonstration */}
        <div
          style={{
            maxWidth: '480px',
            margin: '0 auto 36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            background: 'rgba(255, 255, 255, 0.75)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            padding: '12px 24px',
            borderRadius: '16px',
          }}
        >
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#636366' }}>Expansion Hotkey:</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              className={`mac-keycap ${isKeyActive ? 'pressed' : ''}`}
              style={{
                minWidth: '46px',
                height: '38px',
                fontSize: '15px',
                borderRadius: '8px',
              }}
            >
              ⌥
            </span>
            <span style={{ color: '#8E8E93', fontWeight: 600 }}>+</span>
            <span
              className={`mac-keycap ${isKeyActive ? 'pressed' : ''}`}
              style={{
                minWidth: '110px',
                height: '38px',
                fontSize: '12px',
                borderRadius: '8px',
                letterSpacing: '0.04em',
              }}
            >
              SPACE
            </span>
          </div>
        </div>

        {/* Realistic Native macOS Messages / Editor Window */}
        <div
          style={{
            maxWidth: '740px',
            margin: '0 auto',
            background: '#FFFFFF',
            borderRadius: '20px',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            boxShadow: '0 24px 60px -12px rgba(0, 0, 0, 0.12)',
            overflow: 'hidden',
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
              padding: '32px 28px',
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
    </section>
  );
};
