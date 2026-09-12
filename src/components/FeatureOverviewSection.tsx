import React from 'react';

interface FeatureSummary {
  num: string;
  title: string;
  desc: string;
  visual: React.ReactNode;
}

export const FeatureOverviewSection: React.FC = () => {
  const features: FeatureSummary[] = [
    {
      num: '01',
      title: 'Clipboard History',
      desc: 'Stores text, images, files, folders, and apps. Access everything with a single global keystroke.',
      visual: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
          <div
            style={{
              padding: '6px 10px',
              borderRadius: '6px',
              background: '#FFFFFF',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              fontSize: '11px',
              color: '#121214',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)' }}>copypastry.com</span>
            <span style={{ color: '#8E8E93' }}>1m</span>
          </div>
          <div
            style={{
              padding: '6px 10px',
              borderRadius: '6px',
              background: 'rgba(0, 102, 255, 0.06)',
              border: '1px solid rgba(0, 102, 255, 0.2)',
              fontSize: '11px',
              color: '#0066FF',
              fontWeight: 600,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>Design Specs (Folder)</span>
            <span style={{ color: '#0066FF' }}>Just now</span>
          </div>
        </div>
      ),
    },
    {
      num: '02',
      title: 'Smart Calculator',
      desc: 'Solves arithmetic and complex scientific equations inline as soon as you copy them.',
      visual: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '8px',
            padding: '8px 12px',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            width: '100%',
          }}
        >
          <span style={{ color: '#636366' }}>249 × 282</span>
          <span style={{ color: '#8E8E93' }}>→</span>
          <span style={{ color: '#34C759', fontWeight: 700 }}>70,218</span>
        </div>
      ),
    },
    {
      num: '03',
      title: 'Scroll Screenshot',
      desc: 'Seamlessly capture long articles, spreadsheets, and source code beyond your screen.',
      visual: (
        <div
          style={{
            height: '48px',
            background: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            width: '100%',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2.2">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#111' }}>Auto-Stitched 1280 × 3480px</span>
        </div>
      ),
    },
    {
      num: '04',
      title: 'Text Shortcuts',
      desc: 'Custom abbreviations that expand into signatures, addresses, or lengthy snippets.',
      visual: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '8px',
            padding: '8px 12px',
            fontSize: '12px',
            width: '100%',
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>mysign</span>
          <span style={{ color: '#8E8E93' }}>+</span>
          <span className="mac-keycap" style={{ height: '20px', minWidth: '20px', fontSize: '10px', padding: '0 4px' }}>⌥</span>
          <span style={{ color: '#0066FF', fontWeight: 600 }}>→ Signature</span>
        </div>
      ),
    },
    {
      num: '05',
      title: 'Image Shortcuts',
      desc: 'Assign keywords to logos, headshots, or graphics for immediate insertion.',
      visual: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '8px',
            padding: '6px 12px',
            width: '100%',
          }}
        >
          <img src="/pastry-logo.png" alt="Logo" style={{ width: '24px', height: '24px' }} />
          <div style={{ fontSize: '11.5px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700 }}>brandlogo</span>
            <span style={{ color: '#8E8E93', marginLeft: '6px' }}>• PNG</span>
          </div>
        </div>
      ),
    },
    {
      num: '06',
      title: 'Private by Design',
      desc: 'Local-first architecture. Zero telemetry, zero cloud uploading, and zero ads.',
      visual: (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '8px',
            padding: '8px 12px',
            fontSize: '11.5px',
            fontFamily: 'var(--font-mono)',
            color: '#34C759',
            fontWeight: 600,
            width: '100%',
          }}
        >
          <span>●</span>
          <span>100% Local on Mac</span>
        </div>
      ),
    },
  ];

  return (
    <section
      style={{
        padding: '120px 0',
        backgroundColor: '#F7F7F9',
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
      }}
      aria-label="Feature Capabilities Overview"
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-eyebrow">CAPABILITIES AT A GLANCE</span>
          <h2 className="section-title">Six essential utilities in one lightweight app.</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Designed specifically for macOS to streamline everyday computer work without adding clutter.
          </p>
        </div>

        {/* Editorial Grid (Non-identical card feel) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
            gap: '24px',
          }}
        >
          {features.map((f) => (
            <div
              key={f.num}
              style={{
                background: '#FFFFFF',
                borderRadius: '18px',
                border: '1px solid rgba(0, 0, 0, 0.07)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '20px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.02)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              className="editorial-feature-card"
            >
              <div>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    color: '#8E8E93',
                    fontFamily: 'var(--font-mono)',
                    display: 'block',
                    marginBottom: '10px',
                  }}
                >
                  {f.num}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#111111',
                    marginBottom: '8px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14.5px',
                    lineHeight: 1.5,
                    color: '#636366',
                  }}
                >
                  {f.desc}
                </p>
              </div>

              {/* Individual Micro Visual */}
              <div
                style={{
                  background: '#F7F7F9',
                  borderRadius: '10px',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {f.visual}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .editorial-feature-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06) !important;
        }
      `}</style>
    </section>
  );
};
