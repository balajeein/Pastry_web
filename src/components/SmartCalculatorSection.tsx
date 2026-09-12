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
        backgroundColor: '#FAF9F6',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
      }}
      aria-label="Smart Calculator"
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span className="section-eyebrow">02 — SMART CALCULATOR</span>
          <h2 className="section-title">
            Copy an equation.
            <br />
            Get the answer.
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            No opening calculator apps or switching contexts. Pastry evaluates scientific and arithmetic expressions
            inline the moment you copy them.
          </p>
        </div>

        {/* The 3-Step Story Banner: COPY → OPEN PASTRY → ANSWER */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '16px',
            padding: '16px 28px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          {/* Step 1 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: '#111111',
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
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#8E8E93', textTransform: 'uppercase' }}>
                Step 1
              </div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#111111' }}>Copy Equation</div>
            </div>
          </div>

          <span style={{ color: '#8E8E93', fontSize: '18px' }}>→</span>

          {/* Step 2 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'var(--accent-blue)',
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
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#8E8E93', textTransform: 'uppercase' }}>
                Step 2
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="mac-keycap" style={{ height: '22px', minWidth: '22px', fontSize: '10px', padding: '0 5px' }}>⌘</span>
                <span className="mac-keycap" style={{ height: '22px', minWidth: '22px', fontSize: '10px', padding: '0 5px' }}>⇧</span>
                <span className="mac-keycap" style={{ height: '22px', minWidth: '22px', fontSize: '10px', padding: '0 5px' }}>V</span>
              </div>
            </div>
          </div>

          <span style={{ color: '#8E8E93', fontSize: '18px' }}>→</span>

          {/* Step 3 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: '#34C759',
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
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#8E8E93', textTransform: 'uppercase' }}>
                Step 3
              </div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#34C759' }}>Instant Answer</div>
            </div>
          </div>
        </div>

        {/* Equation Switcher Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '36px',
            flexWrap: 'wrap',
          }}
        >
          {EQUATIONS.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveEqIndex(index)}
              style={{
                padding: '10px 20px',
                borderRadius: '12px',
                fontFamily: 'var(--font-mono)',
                fontSize: '14px',
                fontWeight: 700,
                backgroundColor: activeEqIndex === index ? '#111111' : '#FFFFFF',
                color: activeEqIndex === index ? '#FFFFFF' : '#3A3A3C',
                border: activeEqIndex === index ? '1px solid #111111' : '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: activeEqIndex === index ? '0 4px 12px rgba(0, 0, 0, 0.12)' : '0 2px 4px rgba(0, 0, 0, 0.02)',
                transition: 'all 0.15s ease',
                cursor: 'pointer',
              }}
            >
              {item.expr}
            </button>
          ))}
        </div>

        {/* Realistic Pastry Split Equation Row Display */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(28px)',
            borderRadius: '20px',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            padding: '24px',
            boxShadow: '0 20px 48px -12px rgba(0, 0, 0, 0.1)',
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
            }}
          >
            <span>Supports +, −, ×, ÷, exponents, parentheses, sin, cos, tan, and constants.</span>
            <span style={{ fontWeight: 600, color: 'var(--accent-blue)' }}>Local evaluation</span>
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
