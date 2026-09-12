import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        padding: '120px 0',
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      }}
      aria-label="About Pastry"
    >
      <div className="container-narrow">
        <div style={{ marginBottom: '32px' }}>
          <span className="section-eyebrow">ABOUT PASTRY</span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(38px, 5.5vw, 64px)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.035em',
              color: '#111111',
            }}
          >
            Everything you need.
            <br />
            Nothing you don't.
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '19px',
              lineHeight: 1.6,
              color: '#444446',
              fontWeight: 450,
            }}
          >
            Pastry is a lightweight macOS utility built to keep the things you use every day within reach. Save and
            revisit your clipboard history, calculate instantly, capture scrolling screenshots, and expand text or
            images with customizable shortcuts — all from a simple native Mac experience.
          </p>

          <div
            style={{
              paddingLeft: '24px',
              borderLeft: '2.5px solid var(--accent-blue)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(19px, 2.5vw, 24px)',
                fontWeight: 700,
                color: '#111111',
                lineHeight: 1.35,
                letterSpacing: '-0.02em',
              }}
            >
              Copy something.
              <br />
              Create something.
              <br />
              Get it done without breaking your flow.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
