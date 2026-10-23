import React from 'react';

export const PrivacySection: React.FC = () => {
  return (
    <section
      id="privacy"
      style={{
        padding: '120px 0',
        backgroundColor: 'var(--pastry-paper)',
        borderTop: '1px solid var(--pastry-hairline)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Privacy"
    >
      {/* Ambient Refractive Blooms */}
      <div
        className="pastry-bloom pastry-bloom-meadow"
        style={{ width: '400px', height: '400px', top: '15%', left: '-5%' }}
      />
      <div
        className="pastry-bloom pastry-bloom-aurora"
        style={{ width: '440px', height: '440px', bottom: '10%', right: '-5%' }}
      />

      <div className="container-narrow" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <span className="pastry-eyebrow">07 — PRIVACY BY DESIGN</span>
        <h2 className="pastry-editorial-heading" style={{ marginBottom: '24px' }}>
          Your clipboard stays <span className="pastry-serif-italic">yours.</span>
        </h2>
        <p
          className="pastry-editorial-subheading"
          style={{
            margin: '0 auto 48px',
            maxWidth: '620px',
          }}
        >
          Pastry keeps your clipboard history and shortcuts local to your Mac. No cloud clipboard. No uploading your
          copied content somewhere else.
        </p>

        {/* Minimal Local Architecture Card (No fake locks, no shields) */}
        <div
          className="pastry-card"
          style={{
            padding: '40px 36px',
            textAlign: 'left',
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
