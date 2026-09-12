import React from 'react';

export const PrivacySection: React.FC = () => {
  return (
    <section
      id="privacy"
      style={{
        padding: '120px 0',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      }}
      aria-label="Privacy"
    >
      <div className="container-narrow" style={{ textAlign: 'center' }}>
        <span className="section-eyebrow">06 — PRIVACY BY DESIGN</span>
        <h2 className="section-title" style={{ marginBottom: '24px' }}>
          Your clipboard stays yours.
        </h2>
        <p
          className="section-subtitle"
          style={{
            margin: '0 auto 48px',
            fontSize: '18px',
            lineHeight: 1.6,
            maxWidth: '620px',
          }}
        >
          Pastry keeps your clipboard history and shortcuts local to your Mac. No cloud clipboard. No uploading your
          copied content somewhere else.
        </p>

        {/* Minimal Local Architecture Card (No fake locks, no shields) */}
        <div
          style={{
            background: '#F7F7F9',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '20px',
            padding: '36px 32px',
            textAlign: 'left',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.02)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '28px',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#111111',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-display)',
                }}
              >
                Zero Cloud Transfer
              </div>
              <p style={{ fontSize: '13.5px', color: '#636366', lineHeight: 1.5 }}>
                Your copied text, passwords, and tokens are never sent to external servers or AI training pipelines.
              </p>
            </div>

            <div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#111111',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-display)',
                }}
              >
                100% Local Storage
              </div>
              <p style={{ fontSize: '13.5px', color: '#636366', lineHeight: 1.5 }}>
                Stored exclusively in your personal macOS application directory on your device’s local SSD.
              </p>
            </div>

            <div>
              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#111111',
                  marginBottom: '8px',
                  fontFamily: 'var(--font-display)',
                }}
              >
                No Background Analytics
              </div>
              <p style={{ fontSize: '13.5px', color: '#636366', lineHeight: 1.5 }}>
                Pastry does not run surveillance trackers, ad pixels, or behavioral analytics. It just works.
              </p>
            </div>
          </div>

          {/* Subtle Path Bar */}
          <div
            style={{
              marginTop: '28px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(0, 0, 0, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '12px',
              color: '#8E8E93',
              fontFamily: 'var(--font-mono)',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            <span>Local path: ~/Library/Application Support/Pastry/</span>
            <span style={{ color: '#34C759', fontWeight: 600 }}>● Encrypted by macOS APFS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
