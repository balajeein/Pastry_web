import React, { useState, useEffect, useRef } from 'react';

// macOS native cursor SVG matching HeroTextSelection
const MacCursor: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div
    style={{
      position: 'absolute',
      pointerEvents: 'none',
      zIndex: 50,
      filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.25))',
      transition: 'left 0.08s linear, top 0.08s linear',
      willChange: 'left, top',
      ...style,
    }}
  >
    <svg width="20" height="24" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.5 1.5V22.5L7.88281 16.5H14.5L2.5 1.5Z"
        fill="#000000"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

type AnimationPhase = 'idle' | 'selecting' | 'shortcut' | 'opening' | 'searching' | 'pause' | 'reset';

export const BrowserSearchSection: React.FC = () => {
  const [phase, setPhase] = useState<AnimationPhase>('idle');
  const [selectProgress, setSelectProgress] = useState<number>(0);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number; opacity: number }>({ x: 0, y: 0, opacity: 0 });
  const [isKeyPressed, setIsKeyPressed] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showResults, setShowResults] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const selectTargetRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let animFrame: number;
    let isMounted = true;

    const runLoop = () => {
      if (!isMounted) return;

      // STEP 0: IDLE
      setPhase('idle');
      setSelectProgress(0);
      setIsKeyPressed(false);
      setSearchQuery('');
      setShowResults(false);
      setCursorPos({ x: 12, y: 56, opacity: 0 });

      timer = setTimeout(() => {
        if (!isMounted) return;

        // STEP 1: SELECT TEXT ("How does quantum computing work?")
        setPhase('selecting');
        setCursorPos({ x: 8, y: 55, opacity: 1 });

        const selectDuration = 1400;
        const startSelect = Date.now();

        const animateSelection = () => {
          if (!isMounted) return;
          const elapsed = Date.now() - startSelect;
          const p = Math.min(1, elapsed / selectDuration);
          const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;

          setSelectProgress(eased);
          setCursorPos({ x: 8 + eased * 84, y: 55, opacity: 1 });

          if (p < 1) {
            animFrame = requestAnimationFrame(animateSelection);
          } else {
            // STEP 2: KEYBOARD SHORTCUT (⌘ ⇧ B)
            timer = setTimeout(() => {
              if (!isMounted) return;
              setPhase('shortcut');
              setCursorPos((prev) => ({ ...prev, opacity: 0 }));

              // Animate key depression
              timer = setTimeout(() => {
                if (!isMounted) return;
                setIsKeyPressed(true);

                // STEP 3: BROWSER OPENS
                timer = setTimeout(() => {
                  if (!isMounted) return;
                  setIsKeyPressed(false);
                  setPhase('opening');

                  // Type / transfer text into browser address/search field
                  timer = setTimeout(() => {
                    if (!isMounted) return;
                    setSearchQuery('How does quantum computing work?');

                    // STEP 4: SEARCH HAPPENS AUTOMATICALLY
                    timer = setTimeout(() => {
                      if (!isMounted) return;
                      setPhase('searching');
                      setShowResults(true);

                      // STEP 5: SHORT PAUSE
                      timer = setTimeout(() => {
                        if (!isMounted) return;
                        setPhase('pause');

                        // STEP 6: SMOOTH RESET & LOOP
                        timer = setTimeout(() => {
                          if (!isMounted) return;
                          setPhase('reset');

                          timer = setTimeout(() => {
                            if (!isMounted) return;
                            runLoop();
                          }, 500);
                        }, 2200);
                      }, 1800);
                    }, 650);
                  }, 450);
                }, 400);
              }, 450);
            }, 500);
          }
        };

        animFrame = requestAnimationFrame(animateSelection);
      }, 700);
    };

    runLoop();

    return () => {
      isMounted = false;
      clearTimeout(timer);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  // Determine active stage for workflow indicator (1, 2, or 3)
  const activeStepNum =
    phase === 'idle' || phase === 'selecting'
      ? 1
      : phase === 'shortcut'
      ? 2
      : 3;

  return (
    <section
      id="browser-search"
      style={{
        padding: '120px 0',
        backgroundColor: 'var(--pastry-paper)',
        borderTop: '1px solid var(--pastry-hairline)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Browser Search"
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

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="pastry-eyebrow">06 — BROWSER SEARCH</span>
          <h2 className="pastry-editorial-heading" style={{ marginBottom: '16px' }}>
            Select anything.
            <br />
            <span className="pastry-serif-italic">Search in one keystroke.</span>
          </h2>
          <p className="pastry-editorial-subheading" style={{ margin: '0 auto 16px', maxWidth: '640px' }}>
            Highlight any text or link and press ⌘ + ⇧ + B to open it instantly in your default browser.
          </p>

          {/* Natural Shortcut Display */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--pastry-ink-muted)', marginRight: '4px' }}>Shortcut:</span>
            <span className="pastry-keycap" style={{ height: '24px', minWidth: '24px', fontSize: '11px', padding: '0 6px' }}>⌘</span>
            <span className="pastry-keycap" style={{ height: '24px', minWidth: '24px', fontSize: '11px', padding: '0 6px' }}>⇧</span>
            <span className="pastry-keycap" style={{ height: '24px', minWidth: '24px', fontSize: '11px', padding: '0 6px' }}>B</span>
          </div>
        </div>

        {/* 3-Step Story Banner: SELECT TEXT → ⌘ ⇧ B → DEFAULT BROWSER SEARCH */}
        <div
          className="pastry-card"
          style={{
            maxWidth: '820px',
            margin: '0 auto 40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 28px',
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
                background: activeStepNum === 1 ? 'var(--pastry-ink)' : 'var(--pastry-paper-muted)',
                color: activeStepNum === 1 ? '#FFFFFF' : 'var(--pastry-ink-muted)',
                fontSize: '11px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
            >
              1
            </span>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--pastry-ink-muted)', textTransform: 'uppercase' }}>
                Step 1
              </div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--pastry-ink)' }}>Select Text</div>
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
                background: activeStepNum === 2 ? 'var(--pastry-brand)' : 'var(--pastry-paper-muted)',
                color: activeStepNum === 2 ? '#FFFFFF' : 'var(--pastry-ink-muted)',
                fontSize: '11px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
            >
              2
            </span>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--pastry-ink-muted)', textTransform: 'uppercase' }}>
                Step 2
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span className={`pastry-keycap ${isKeyPressed ? 'is-pressed' : ''}`} style={{ height: '22px', minWidth: '22px', fontSize: '10px', padding: '0 5px' }}>⌘</span>
                <span className={`pastry-keycap ${isKeyPressed ? 'is-pressed' : ''}`} style={{ height: '22px', minWidth: '22px', fontSize: '10px', padding: '0 5px' }}>⇧</span>
                <span className={`pastry-keycap ${isKeyPressed ? 'is-pressed' : ''}`} style={{ height: '22px', minWidth: '22px', fontSize: '10px', padding: '0 5px' }}>B</span>
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
                background: activeStepNum === 3 ? 'var(--pastry-brand)' : 'var(--pastry-paper-muted)',
                color: activeStepNum === 3 ? '#FFFFFF' : 'var(--pastry-ink-muted)',
                fontSize: '11px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
            >
              3
            </span>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--pastry-ink-muted)', textTransform: 'uppercase' }}>
                Step 3
              </div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--pastry-ink)' }}>Default Browser Searches</div>
            </div>
          </div>
        </div>

        {/* Large Visual Showcase Canvas */}
        <div
          className="pastry-card"
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            padding: '36px 24px 44px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top Status & Hotkey Demonstration Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              maxWidth: '740px',
              marginBottom: '24px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: phase === 'shortcut' || isKeyPressed ? '#0066FF' : activeStepNum === 3 ? '#34C759' : '#8E8E93',
                  boxShadow: phase === 'shortcut' || isKeyPressed ? '0 0 10px #0066FF' : 'none',
                  transition: 'all 0.2s ease',
                }}
              />
              <span
                style={{
                  fontSize: '12.5px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)',
                  color: '#111111',
                  letterSpacing: '0.02em',
                }}
              >
                {phase === 'idle' && 'READY • SELECT ANY TEXT'}
                {phase === 'selecting' && 'SELECTING TEXT ON MACOS...'}
                {phase === 'shortcut' && 'HOTKEY TRIGGERED • ⌘ ⇧ B'}
                {phase === 'opening' && 'LAUNCHING DEFAULT BROWSER...'}
                {(phase === 'searching' || phase === 'pause') && 'BROWSER SEARCH COMPLETE'}
                {phase === 'reset' && 'PREPARING NEXT DEMO...'}
              </span>
            </div>

            {/* Tactile Keycaps Interactive Indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.8)',
                padding: '4px 12px',
                borderRadius: '12px',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                boxShadow: isKeyPressed ? '0 0 14px rgba(0, 102, 255, 0.25)' : 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <span
                className={`mac-keycap ${isKeyPressed ? 'pressed' : ''}`}
                style={{
                  height: '26px',
                  minWidth: '26px',
                  fontSize: '11px',
                  padding: '0 6px',
                  borderColor: isKeyPressed ? '#0066FF' : undefined,
                }}
              >
                ⌘
              </span>
              <span style={{ fontSize: '11px', color: '#8E8E93', fontWeight: 600 }}>+</span>
              <span
                className={`mac-keycap ${isKeyPressed ? 'pressed' : ''}`}
                style={{
                  height: '26px',
                  minWidth: '26px',
                  fontSize: '11px',
                  padding: '0 6px',
                  borderColor: isKeyPressed ? '#0066FF' : undefined,
                }}
              >
                ⇧
              </span>
              <span style={{ fontSize: '11px', color: '#8E8E93', fontWeight: 600 }}>+</span>
              <span
                className={`mac-keycap ${isKeyPressed ? 'pressed' : ''}`}
                style={{
                  height: '26px',
                  minWidth: '26px',
                  fontSize: '11px',
                  padding: '0 6px',
                  borderColor: isKeyPressed ? '#0066FF' : undefined,
                }}
              >
                B
              </span>
            </div>
          </div>

          {/* Main Visual Window Stage: Document View → Browser View */}
          <div
            style={{
              width: '100%',
              maxWidth: '740px',
              minHeight: '390px',
              background: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 20px 48px rgba(0, 0, 0, 0.12)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              opacity: phase === 'reset' ? 0.7 : 1,
            }}
          >
            {/* macOS Chrome Title Bar */}
            <div
              style={{
                height: '42px',
                background: '#F6F6F8',
                borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 16px',
                flexShrink: 0,
                userSelect: 'none',
              }}
            >
              {/* Traffic Lights */}
              <div style={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
                <span className="traffic-light close" style={{ width: '11px', height: '11px' }} />
                <span className="traffic-light minimize" style={{ width: '11px', height: '11px' }} />
                <span className="traffic-light maximize" style={{ width: '11px', height: '11px' }} />
              </div>

              {/* Title / Tab Indicator */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#FFFFFF',
                  padding: '4px 14px',
                  borderRadius: '6px',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.02)',
                  maxWidth: '380px',
                }}
              >
                {activeStepNum < 3 ? (
                  <>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#636366" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <span
                      style={{
                        fontSize: '11.5px',
                        color: '#1C1C1E',
                        fontWeight: 600,
                        fontFamily: 'var(--font-display)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      Article Reader • Quantum Physics
                    </span>
                  </>
                ) : (
                  <>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2.2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <span
                      style={{
                        fontSize: '11.5px',
                        color: '#0066FF',
                        fontWeight: 600,
                        fontFamily: 'var(--font-display)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      Default Browser • Search Results
                    </span>
                  </>
                )}
              </div>

              {/* Native App Tag */}
              <span
                style={{
                  fontSize: '10.5px',
                  fontWeight: 700,
                  color: activeStepNum < 3 ? '#636366' : '#34C759',
                  backgroundColor: activeStepNum < 3 ? 'rgba(0, 0, 0, 0.05)' : 'rgba(52, 199, 89, 0.1)',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {activeStepNum < 3 ? 'MACOS TEXT' : 'DEFAULT BROWSER'}
              </span>
            </div>

            {/* STAGE CONTENT AREA */}
            <div style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column' }}>
              {/* VIEW 1: TEXT SELECTION STAGE (Steps 1 & 2) */}
              {activeStepNum < 3 && (
                <div
                  ref={containerRef}
                  style={{
                    padding: '36px 38px',
                    position: 'relative',
                    userSelect: 'none',
                    animation: 'fadeIn 0.25s ease',
                  }}
                >
                  {/* Subtle Category Pill */}
                  <div style={{ marginBottom: '14px' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#0066FF',
                        backgroundColor: 'rgba(0, 102, 255, 0.08)',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      SELECT ANY CONTENT
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(18px, 2.5vw, 22px)',
                      fontWeight: 700,
                      color: '#111111',
                      marginBottom: '16px',
                      lineHeight: 1.3,
                    }}
                  >
                    Principles of Modern Computation
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'clamp(14px, 1.8vw, 16px)',
                      lineHeight: 1.7,
                      color: '#636366',
                      margin: 0,
                    }}
                  >
                    Next-generation processors utilize subatomic phenomena to solve complex cryptography algorithms in
                    milliseconds.{' '}
                    {/* The Target Sentence with animated macOS text selection */}
                    <span
                      ref={selectTargetRef}
                      style={{
                        position: 'relative',
                        display: 'inline-block',
                        padding: '1px 2px',
                        borderRadius: '2px',
                        fontWeight: 600,
                      }}
                    >
                      {/* Selection Background Fill */}
                      <span
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          width: `${selectProgress * 100}%`,
                          backgroundColor: '#0066FF',
                          borderRadius: '3px',
                          zIndex: 1,
                        }}
                      />
                      {/* Base text */}
                      <span style={{ color: '#111111', position: 'relative', zIndex: 0 }}>
                        How does quantum computing work?
                      </span>
                      {/* Selected White Text (clipped to match progress) */}
                      <span
                        style={{
                          position: 'absolute',
                          top: '1px',
                          left: '2px',
                          color: '#FFFFFF',
                          zIndex: 2,
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          width: `${selectProgress * 100}%`,
                          pointerEvents: 'none',
                        }}
                        aria-hidden="true"
                      >
                        How does quantum computing work?
                      </span>
                    </span>{' '}
                    Unlike classical bits which are strictly binary, quantum states unlock exponential parallelism.
                  </p>

                  {/* Animated macOS Cursor */}
                  <MacCursor
                    style={{
                      left: `${cursorPos.x}%`,
                      top: `${cursorPos.y}%`,
                      opacity: cursorPos.opacity,
                    }}
                  />

                  {/* Step 2 Trigger Feedback Toast */}
                  {phase === 'shortcut' && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '16px',
                        right: '24px',
                        backgroundColor: '#111111',
                        color: '#FFFFFF',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
                        animation: 'fadeIn 0.2s ease',
                      }}
                    >
                      <span style={{ color: '#0066FF', fontWeight: 800 }}>⌘ ⇧ B</span> Passing to Default Browser →
                    </div>
                  )}
                </div>
              )}

              {/* VIEW 2: BROWSER OPENS & SEARCHES (Steps 3 & 4) */}
              {activeStepNum === 3 && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    animation: 'fadeIn 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {/* Browser Address & Search Bar */}
                  <div
                    style={{
                      padding: '12px 18px',
                      background: '#FAFAFC',
                      borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    {/* Browser Nav Arrows */}
                    <div style={{ display: 'flex', gap: '6px', color: '#AEAEB2' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>

                    {/* Omnibox / Search Field */}
                    <div
                      style={{
                        flex: 1,
                        background: '#FFFFFF',
                        border: '1px solid rgba(0, 102, 255, 0.3)',
                        borderRadius: '8px',
                        padding: '6px 12px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 2px 8px rgba(0, 102, 255, 0.08)',
                      }}
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0066FF" strokeWidth="2.5">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                      <span
                        style={{
                          fontSize: '13px',
                          color: '#111111',
                          fontWeight: 600,
                          fontFamily: 'var(--font-display)',
                          flex: 1,
                        }}
                      >
                        {searchQuery || 'Opening search query...'}
                      </span>
                      <span
                        style={{
                          fontSize: '10px',
                          color: '#34C759',
                          fontWeight: 700,
                          fontFamily: 'var(--font-mono)',
                          backgroundColor: 'rgba(52, 199, 89, 0.1)',
                          padding: '2px 6px',
                          borderRadius: '4px',
                        }}
                      >
                        SEARCH
                      </span>
                    </div>
                  </div>

                  {/* Browser Search Engine Results Content */}
                  <div
                    style={{
                      padding: '22px 28px',
                      flex: 1,
                      backgroundColor: '#FFFFFF',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                      opacity: showResults ? 1 : 0.4,
                      transition: 'opacity 0.25s ease',
                    }}
                  >
                    {/* Featured Answer Card */}
                    <div
                      style={{
                        background: 'linear-gradient(180deg, #F9F9FB 0%, #F5F5F8 100%)',
                        border: '1px solid rgba(0, 102, 255, 0.16)',
                        borderRadius: '12px',
                        padding: '16px 18px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.02)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                        <span style={{ fontSize: '11px', color: '#636366', fontFamily: 'var(--font-mono)' }}>
                          science.org › quantum-physics › overview
                        </span>
                      </div>
                      <h4
                        style={{
                          fontSize: '15px',
                          fontWeight: 700,
                          color: '#0066FF',
                          fontFamily: 'var(--font-display)',
                          margin: '0 0 6px 0',
                        }}
                      >
                        How Quantum Computing Works — Explained
                      </h4>
                      <p style={{ fontSize: '13px', lineHeight: 1.55, color: '#48484A', margin: 0 }}>
                        Quantum computers leverage principles of quantum mechanics—namely superposition and
                        entanglement—to evaluate complex multidimensional computations exponentially faster than binary
                        chips.
                      </p>
                    </div>

                    {/* Secondary Result Item */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                      <span style={{ fontSize: '11px', color: '#636366', fontFamily: 'var(--font-mono)' }}>
                        technologyreview.com › computing
                      </span>
                      <span
                        style={{
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#0066FF',
                          fontFamily: 'var(--font-display)',
                        }}
                      >
                        Understanding Qubits and Quantum Algorithms
                      </span>
                      <span style={{ fontSize: '12.5px', color: '#636366', lineHeight: 1.4 }}>
                        A complete guide to how qubits process information simultaneously across states.
                      </span>
                    </div>

                    {/* Default Browser Integration Note */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 'auto',
                        paddingTop: '8px',
                        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                        flexWrap: 'wrap',
                        gap: '8px',
                      }}
                    >
                      <span style={{ fontSize: '11.5px', color: '#8E8E93', fontWeight: 500 }}>
                        Handled automatically by your default browser (Safari, Chrome, Arc, etc.)
                      </span>
                      <span
                        style={{
                          fontSize: '11px',
                          color: '#34C759',
                          fontWeight: 700,
                          fontFamily: 'var(--font-mono)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Zero Pastry Search Engine Needed
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
