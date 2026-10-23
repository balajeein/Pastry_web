import React, { useState } from 'react';

const EQUATIONS = [
  {
    id: 'eq-1',
    expr: '249 × 282',
    result: '70,218',
    description: 'Arithmetic & multi-digit multiplication',
  },
  {
    id: 'eq-2',
    expr: 'sin(30°)',
    result: '0.5',
    description: 'Scientific trigonometric angles in degrees',
  },
  {
    id: 'eq-3',
    expr: 'cos(170°)',
    result: '-0.9848',
    description: 'Negative trigonometric calculation',
  },
];

export const SmartCalculatorSection: React.FC = () => {
  const [activeEqIndex, setActiveEqIndex] = useState(0);
  const [copiedState, setCopiedState] = useState<string | null>(null);

  const currentEq = EQUATIONS[activeEqIndex];

  const handleCopyFeedback = (label: string) => {
    setCopiedState(label);
    setTimeout(() => setCopiedState(null), 1500);
  };

  return (
    <section
      id="smart-calculator"
      style={{
        padding: '120px 0',
        backgroundColor: 'var(--pastry-paper)',
        borderTop: '1px solid var(--pastry-hairline)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Smart Calculator"
    >
      {/* Ambient Refractive Blooms */}
      <div
        className="pastry-bloom pastry-bloom-meadow"
        style={{ width: '450px', height: '450px', top: '20%', left: '-5%' }}
      />
      <div
        className="pastry-bloom pastry-bloom-aurora"
        style={{ width: '500px', height: '500px', bottom: '15%', right: '-5%' }}
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
          {/* Left Column: Editorial Storytelling & Controls */}
          <div>
            <span className="pastry-eyebrow">02 — SMART CALCULATOR</span>
            <h2
              className="pastry-editorial-heading"
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                marginBottom: '20px',
              }}
            >
              Copy an equation.
              <br />
              <span className="pastry-serif-italic">Get the answer.</span>
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
              No opening calculator apps or switching contexts. Pastry evaluates scientific and arithmetic expressions
              inline the moment you copy them.
            </p>

            {/* Equation Switcher Tabs */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
              }}
            >
              {EQUATIONS.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveEqIndex(index)}
                  className={`pastry-filter-pill ${activeEqIndex === index ? 'is-active' : ''}`}
                  style={{
                    fontFamily: 'var(--pastry-font-mono)',
                    fontSize: '13.5px',
                    padding: '9px 22px',
                  }}
                >
                  {item.expr}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Large Visual Demonstration */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              position: 'relative',
            }}
          >
            {/* The 3-Step Story Banner: COPY → OPEN PASTRY → ANSWER */}
            <div
              className="pastry-card"
              style={{
                width: '100%',
                maxWidth: '560px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 20px',
                gap: '10px',
                flexWrap: 'wrap',
              }}
            >
              {/* Step 1 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'var(--pastry-ink)',
                    color: '#fff',
                    fontSize: '11px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  1
                </span>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--pastry-ink-muted)', textTransform: 'uppercase' }}>
                    Step 1
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--pastry-ink)' }}>Copy Equation</div>
                </div>
              </div>

              <span style={{ color: 'var(--pastry-ink-muted)', fontSize: '18px' }}>→</span>

              {/* Step 2 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'var(--pastry-brand)',
                    color: '#fff',
                    fontSize: '11px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  2
                </span>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--pastry-ink-muted)', textTransform: 'uppercase' }}>
                    Step 2
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span className="pastry-keycap" style={{ height: '22px', minWidth: '22px', fontSize: '10px', padding: '0 5px' }}>⌘</span>
                    <span className="pastry-keycap" style={{ height: '22px', minWidth: '22px', fontSize: '10px', padding: '0 5px' }}>⇧</span>
                    <span className="pastry-keycap" style={{ height: '22px', minWidth: '22px', fontSize: '10px', padding: '0 5px' }}>V</span>
                  </div>
                </div>
              </div>

              <span style={{ color: 'var(--pastry-ink-muted)', fontSize: '18px' }}>→</span>

              {/* Step 3 */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'var(--pastry-brand)',
                    color: '#fff',
                    fontSize: '11px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  3
                </span>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--pastry-ink-muted)', textTransform: 'uppercase' }}>
                    Step 3
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--pastry-brand)' }}>Instant Answer</div>
                </div>
              </div>
            </div>

            {/* Liquid Glass Showcase Panel */}
            <div
              className="pastry-glass-panel"
              style={{
                width: '100%',
                maxWidth: '560px',
                borderRadius: '32px',
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#8E8E93',
                  marginBottom: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '6px',
                }}
              >
                <span>PASTRY SPLIT CALCULATION TILE</span>
                <span>{currentEq.description}</span>
              </div>

              {/* Split Row Card */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'stretch',
                  background: '#F9F9FB',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '12px',
                  padding: '6px',
                  position: 'relative',
                  gap: '4px',
                }}
              >
                {/* Left Side: Original Equation */}
                <div
                  onClick={() => handleCopyFeedback('Equation')}
                  style={{
                    flex: 1,
                    padding: '16px 20px',
                    borderRadius: '8px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                  className="calc-half-hover"
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(0, 0, 0, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '16px',
                      fontWeight: 800,
                      color: '#636366',
                      fontFamily: 'var(--font-mono)',
                      flexShrink: 0,
                    }}
                  >
                    =
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '19px',
                        fontWeight: 700,
                        color: '#121214',
                      }}
                    >
                      {currentEq.expr}
                    </div>
                    <div style={{ fontSize: '11px', color: '#8E8E93', marginTop: '2px', fontWeight: 500 }}>
                      {copiedState === 'Equation' ? '✓ Pasted' : 'Click to paste as text'}
                    </div>
                  </div>
                </div>

                {/* Vertical Split Indicator */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 4px',
                  }}
                >
                  <span style={{ fontSize: '18px', color: '#8E8E93', fontWeight: 600 }}>→</span>
                </div>

                {/* Right Side: Calculated Answer */}
                <div
                  onClick={() => handleCopyFeedback('Result')}
                  style={{
                    flex: 1,
                    padding: '16px 20px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(52, 199, 89, 0.08)',
                    border: '1px solid rgba(52, 199, 89, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                  className="calc-half-hover"
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: '#34C759',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      fontWeight: 800,
                      color: '#FFFFFF',
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '19px',
                        fontWeight: 800,
                        color: '#121214',
                      }}
                    >
                      {currentEq.result}
                    </div>
                    <div style={{ fontSize: '11px', color: '#34C759', marginTop: '2px', fontWeight: 600 }}>
                      {copiedState === 'Result' ? '✓ Pasted' : 'Click to paste result'}
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '12px',
                  color: '#636366',
                  flexWrap: 'wrap',
                  gap: '6px',
                }}
              >
                <span>Supports +, −, ×, ÷, exponents, parentheses, sin, cos, tan, and constants.</span>
                <span style={{ fontWeight: 600, color: 'var(--accent-blue)' }}>Local evaluation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .calc-half-hover:hover {
          transform: scale(1.01);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
        }
      `}</style>
    </section>
  );
};
