import React, { useState } from 'react';

export const ScrollScreenshotSection: React.FC = () => {
  const [isCapturing, setIsCapturing] = useState(false);

  const handleTriggerCapture = () => {
    setIsCapturing(true);
    setTimeout(() => {
      setIsCapturing(false);
    }, 2800);
  };

  return (
    <section
      id="scroll-screenshot"
      style={{
        padding: '120px 0',
        backgroundColor: 'var(--pastry-paper)',
        borderTop: '1px solid var(--pastry-hairline)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Scroll Screenshot"
    >
      {/* Ambient Refractive Blooms */}
      <div
        className="pastry-bloom pastry-bloom-meadow"
        style={{ width: '450px', height: '450px', top: '15%', right: '-5%' }}
      />
      <div
        className="pastry-bloom pastry-bloom-aurora"
        style={{ width: '480px', height: '480px', bottom: '15%', left: '-5%' }}
      />

      <div className="container-wide" style={{ position: 'relative', zIndex: 1, maxWidth: '1160px' }}>
        {/* Editorial Layout: Left Narrative + Right Large Visual Demo */}
        <div
          className="scroll-screenshot-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(360px, 100%), 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Editorial Storytelling */}
          <div>
            <span className="pastry-eyebrow">03 — SCROLL SCREENSHOT</span>
            <h2
              className="pastry-editorial-heading"
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                marginBottom: '20px',
              }}
            >
              One long file.
              <br />
              <span className="pastry-serif-italic">One screenshot.</span>
            </h2>
            <p
              style={{
                fontFamily: 'var(--pastry-font-sans)',
                fontSize: '17px',
                lineHeight: 1.6,
                color: 'var(--pastry-ink-secondary)',
                marginBottom: '24px',
              }}
            >
              Capture long source files and functions in one seamless, automatically stitched screenshot.
            </p>

            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '32px' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--pastry-ink-muted)', marginRight: '4px' }}>Shortcut:</span>
              <span className="pastry-keycap" style={{ height: '24px', minWidth: '24px', fontSize: '11px', padding: '0 6px' }}>⌘</span>
              <span className="pastry-keycap" style={{ height: '24px', minWidth: '24px', fontSize: '11px', padding: '0 6px' }}>⇧</span>
              <span className="pastry-keycap" style={{ height: '24px', minWidth: '24px', fontSize: '11px', padding: '0 6px' }}>G</span>
            </div>

            {/* Action Trigger Button */}
            <div>
              <button
                onClick={handleTriggerCapture}
                disabled={isCapturing}
                style={{
                  backgroundColor: isCapturing ? 'var(--pastry-brand)' : 'var(--pastry-ink)',
                  color: '#FFFFFF',
                  fontSize: '13.5px',
                  fontFamily: 'var(--pastry-font-sans)',
                  fontWeight: 700,
                  padding: '11px 26px',
                  borderRadius: '999px',
                  cursor: isCapturing ? 'default' : 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isCapturing ? '0 4px 14px var(--pastry-brand-glow)' : '0 4px 14px rgba(20, 24, 15, 0.15)',
                  border: 'none',
                }}
              >
                {isCapturing ? 'Stitching in progress...' : 'Simulate Scroll Capture'}
              </button>
            </div>
          </div>

          {/* Right Column: Large Visual Demonstration Canvas */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
              width: '100%',
            }}
          >
            <div
              className="pastry-glass-panel"
              style={{
                width: '100%',
                maxWidth: '860px',
                borderRadius: '32px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              {/* Stitched Continuous Code Editor Canvas Preview */}
              <div
                style={{
                  width: '100%',
                  height: '460px',
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  boxShadow: '0 24px 54px rgba(0, 0, 0, 0.14)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                {/* Window Header */}
                <div
                  style={{
                    height: '40px',
                    background: '#F9F9FA',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.07)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 16px',
                    flexShrink: 0,
                  }}
                >
                  <div style={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
                    <span className="traffic-light close" style={{ width: '11px', height: '11px' }} />
                    <span className="traffic-light minimize" style={{ width: '11px', height: '11px' }} />
                    <span className="traffic-light maximize" style={{ width: '11px', height: '11px' }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F05138" strokeWidth="2.4">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <span style={{ fontSize: '12.5px', color: '#1C1C1E', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                      ImageStitcher.swift
                    </span>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        color: '#636366',
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                        padding: '2px 6px',
                        borderRadius: '4px',
                      }}
                    >
                      Swift
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#0066FF',
                      backgroundColor: 'rgba(0, 102, 255, 0.08)',
                      padding: '3px 9px',
                      borderRadius: '6px',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    1440 × 4820 px
                  </span>
                </div>

                {/* Scrollable Preview Area */}
                <div
                  style={{
                    flex: 1,
                    overflowY: 'hidden',
                    position: 'relative',
                    backgroundColor: '#FAFAFC',
                  }}
                >
                  {/* Dynamic Scrolling Container with line numbers and bigger code */}
                  <div
                    style={{
                      transform: isCapturing ? 'translateY(-360px)' : 'translateY(0px)',
                      transition: isCapturing ? 'transform 2.4s cubic-bezier(0.25, 1, 0.5, 1)' : 'transform 0.4s ease',
                      padding: '24px 28px',
                      display: 'flex',
                      gap: '24px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '14px',
                      lineHeight: 1.8,
                    }}
                  >
                    {/* Line Numbers Column */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        color: '#C7C7CC',
                        userSelect: 'none',
                        textAlign: 'right',
                        paddingRight: '12px',
                        borderRight: '1px solid rgba(0, 0, 0, 0.08)',
                        minWidth: '28px',
                      }}
                    >
                      {Array.from({ length: 28 }, (_, i) => (
                        <span key={i + 1}>{i + 1}</span>
                      ))}
                    </div>

                    {/* Source Code Content */}
                    <div style={{ flex: 1, color: '#24292E', minWidth: 0 }}>
                      <div><span style={{ color: '#D73A49', fontWeight: 600 }}>import</span> <span style={{ color: '#6F42C1' }}>AppKit</span></div>
                      <div><span style={{ color: '#D73A49', fontWeight: 600 }}>import</span> <span style={{ color: '#6F42C1' }}>CoreGraphics</span></div>
                      <div><span style={{ color: '#D73A49', fontWeight: 600 }}>import</span> <span style={{ color: '#6F42C1' }}>Vision</span></div>
                      <div style={{ color: '#6A737D', fontStyle: 'italic' }}>// Pastry Universal Continuous Stitching Engine</div>
                      <div><span style={{ color: '#D73A49', fontWeight: 600 }}>public final class</span> <span style={{ color: '#005CC5', fontWeight: 600 }}>ImageStitcher</span> &#123;</div>
                      <div style={{ paddingLeft: '20px' }}><span style={{ color: '#D73A49', fontWeight: 600 }}>private var</span> capturedSlices: [CGImage] = []</div>
                      <div style={{ paddingLeft: '20px' }}><span style={{ color: '#D73A49', fontWeight: 600 }}>private let</span> overlapDetector = FeatureMatcher()</div>
                      <br />
                      <div style={{ paddingLeft: '20px' }}><span style={{ color: '#D73A49', fontWeight: 600 }}>public func</span> <span style={{ color: '#6F42C1', fontWeight: 600 }}>stitchConsecutiveFrames</span>() -&gt; CGImage? &#123;</div>
                      <div style={{ paddingLeft: '40px' }}><span style={{ color: '#D73A49', fontWeight: 600 }}>guard !</span>capturedSlices.isEmpty <span style={{ color: '#D73A49', fontWeight: 600 }}>else</span> &#123; <span style={{ color: '#D73A49', fontWeight: 600 }}>return nil</span> &#125;</div>
                      <div style={{ paddingLeft: '40px' }}><span style={{ color: '#D73A49', fontWeight: 600 }}>let</span> totalHeight = capturedSlices.reduce(0) &#123; $0 + $1.height &#125;</div>
                      <div style={{ paddingLeft: '40px' }}><span style={{ color: '#D73A49', fontWeight: 600 }}>let</span> context = CGContext(width: capturedSlices[0].width, height: totalHeight)</div>
                      <div style={{ paddingLeft: '40px' }}>drawContinuousSlices(into: context, alignment: .vertical)</div>
                      <div style={{ paddingLeft: '40px' }}><span style={{ color: '#D73A49', fontWeight: 600 }}>return</span> context.makeImage()</div>
                      <div style={{ paddingLeft: '20px' }}>&#125;</div>
                      <br />
                      <div style={{ color: '#6A737D', fontStyle: 'italic', paddingLeft: '20px' }}>// Auto-scrolling viewport pixel alignment & stitching</div>
                      <div style={{ paddingLeft: '20px' }}><span style={{ color: '#D73A49', fontWeight: 600 }}>private func</span> <span style={{ color: '#6F42C1', fontWeight: 600 }}>drawContinuousSlices</span>(into ctx: CGContext, alignment: Axis) &#123;</div>
                      <div style={{ paddingLeft: '40px' }}><span style={{ color: '#D73A49', fontWeight: 600 }}>var</span> currentYOffset: CGFloat = 0</div>
                      <div style={{ paddingLeft: '40px' }}><span style={{ color: '#D73A49', fontWeight: 600 }}>for</span> slice <span style={{ color: '#D73A49', fontWeight: 600 }}>in</span> capturedSlices &#123;</div>
                      <div style={{ paddingLeft: '60px' }}>ctx.draw(slice, in: CGRect(x: 0, y: currentYOffset, width: slice.width, height: slice.height))</div>
                      <div style={{ paddingLeft: '60px' }}>currentYOffset += CGFloat(slice.height)</div>
                      <div style={{ paddingLeft: '40px' }}>&#125;</div>
                      <div style={{ paddingLeft: '20px' }}>&#125;</div>
                      <div>&#125;</div>
                      <br />
                      <div style={{ color: '#6A737D', fontStyle: 'italic' }}>// Global Keyboard Shortcut Listener (⌘ + Shift + G)</div>
                      <div><span style={{ color: '#D73A49', fontWeight: 600 }}>extension</span> <span style={{ color: '#005CC5', fontWeight: 600 }}>ScrollCaptureWindow</span> &#123;</div>
                      <div style={{ paddingLeft: '20px' }}><span style={{ color: '#D73A49', fontWeight: 600 }}>func</span> <span style={{ color: '#6F42C1', fontWeight: 600 }}>handleGlobalHotkeyTrigger</span>() &#123;</div>
                      <div style={{ paddingLeft: '40px' }}>startSmoothAutoScrollCapture(target: .activeWindow)</div>
                      <div style={{ paddingLeft: '20px' }}>&#125;</div>
                      <div>&#125;</div>
                    </div>
                  </div>

                  {/* Animated Stitching Scanline */}
                  {isCapturing && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '42%',
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: '#0066FF',
                        boxShadow: '0 0 16px #0066FF, 0 0 6px rgba(0, 102, 255, 0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 20,
                      }}
                    >
                      <span
                        style={{
                          background: '#0066FF',
                          color: '#fff',
                          fontSize: '11px',
                          fontWeight: 800,
                          padding: '3px 10px',
                          borderRadius: '4px',
                          boxShadow: '0 2px 8px rgba(0, 102, 255, 0.4)',
                        }}
                      >
                        Stitching Slice
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .scroll-screenshot-grid {
            grid-template-columns: 380px 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
