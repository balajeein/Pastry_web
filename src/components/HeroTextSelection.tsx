import { useState, useEffect, useRef } from 'react';

// macOS native cursor SVG
const MacCursor: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div
    style={{
      position: 'absolute',
      pointerEvents: 'none',
      zIndex: 50,
      transition: 'left 0.05s linear, top 0.05s linear',
      willChange: 'transform, left, top',
      filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.25))',
      ...style,
    }}
  >
    <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export const HeroTextSelection: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [progress1, setProgress1] = useState<number>(0); // 0 to 1 for line 1 selection
  const [progress2, setProgress2] = useState<number>(0); // 0 to 1 for line 2 selection
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number; opacity: number }>({ x: 95, y: 10, opacity: 0 });
  const [showToast, setShowToast] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const line1SelectRef = useRef<HTMLSpanElement>(null);
  const line2SelectRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let animFrame: number;

    const runAnimation = () => {
      // Step 0: Rest
      setStep(0);
      setProgress1(0);
      setProgress2(0);
      setShowToast(false);
      setCursorPos({ x: 92, y: 15, opacity: 0 });

      timer = setTimeout(() => {
        // Step 1: Cursor appears & moves to Line 1 start
        setStep(1);
        setCursorPos({ x: 42, y: 22, opacity: 1 });

        timer = setTimeout(() => {
          // Step 2: Drag across Line 1 ("YOU COPY.")
          setStep(2);
          const start = Date.now();
          const duration = 1200;

          const animateLine1 = () => {
            const elapsed = Date.now() - start;
            const p = Math.min(1, elapsed / duration);
            const eased = 1 - (1 - p) * (1 - p);
            setProgress1(eased);
            setCursorPos({ x: 42 + eased * 54, y: 22, opacity: 1 });

            if (p < 1) {
              animFrame = requestAnimationFrame(animateLine1);
            } else {
              // Step 3: Pause on Line 1
              setStep(3);
              timer = setTimeout(() => {
                // Step 4: Move cursor to Line 2 start ("SHORTCUT AWAY.")
                setStep(4);
                setCursorPos({ x: 26, y: 72, opacity: 1 });

                timer = setTimeout(() => {
                  // Step 5: Drag select Line 2 ("SHORTCUT AWAY.")
                  setStep(5);
                  const start2 = Date.now();
                  const duration2 = 1300;

                  const animateLine2 = () => {
                    const elapsed2 = Date.now() - start2;
                    const p2 = Math.min(1, elapsed2 / duration2);
                    const eased2 = 1 - (1 - p2) * (1 - p2);
                    setProgress2(eased2);
                    setCursorPos({ x: 26 + eased2 * 72, y: 72, opacity: 1 });

                    if (p2 < 1) {
                      animFrame = requestAnimationFrame(animateLine2);
                    } else {
                      // Step 6: Copy action pulse
                      setStep(6);
                      setShowToast(true);

                      timer = setTimeout(() => {
                        setShowToast(false);
                        // Step 7: Fade cursor out and reset
                        setStep(7);
                        setCursorPos(prev => ({ ...prev, opacity: 0 }));

                        const fadeStart = Date.now();
                        const fadeDur = 600;
                        const fadeOut = () => {
                          const el = Date.now() - fadeStart;
                          const fp = Math.max(0, 1 - el / fadeDur);
                          setProgress1(fp);
                          setProgress2(fp);
                          if (el < fadeDur) {
                            animFrame = requestAnimationFrame(fadeOut);
                          } else {
                            timer = setTimeout(runAnimation, 600);
                          }
                        };
                        animFrame = requestAnimationFrame(fadeOut);
                      }, 1400);
                    }
                  };
                  animFrame = requestAnimationFrame(animateLine2);
                }, 400);
              }, 400);
            }
          };
          animFrame = requestAnimationFrame(animateLine1);
        }, 600);
      }, 700);
    };

    runAnimation();

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        display: 'inline-block',
        textAlign: 'left',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    >
      {/* Animated macOS Cursor */}
      <MacCursor
        style={{
          left: `${cursorPos.x}%`,
          top: `${cursorPos.y}%`,
          opacity: cursorPos.opacity,
          transition: step === 1 || step === 4 ? 'left 0.5s cubic-bezier(0.25, 1, 0.5, 1), top 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease' : 'opacity 0.3s ease',
        }}
      />

      {/* ⌘C Toast Pill */}
      <div
        style={{
          position: 'absolute',
          top: '-36px',
          right: '5%',
          backgroundColor: '#111111',
          color: '#FFFFFF',
          padding: '6px 14px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.04em',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          opacity: showToast ? 1 : 0,
          transform: showToast ? 'translateY(0) scale(1)' : 'translateY(6px) scale(0.95)',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
          pointerEvents: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          zIndex: 60,
        }}
      >
        <span style={{ color: '#0066FF', fontWeight: 800 }}>⌘C</span> Copied to Pastry
      </div>

      {/* Main Headline Text Block */}
      <h1 className="hero-headline" style={styles.headline}>
        {/* LINE 1 */}
        <div style={{ display: 'block', whiteSpace: 'nowrap' }}>
          <span>EVERYTHING </span>
          <span
            ref={line1SelectRef}
            style={{
              position: 'relative',
              display: 'inline-block',
              padding: '0 4px',
              margin: '0 -4px',
              borderRadius: '2px',
            }}
          >
            {/* Background selection highlight */}
            <span
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                bottom: '0',
                width: `${progress1 * 100}%`,
                backgroundColor: '#0066FF',
                borderRadius: '3px',
                zIndex: 1,
                transition: 'none',
              }}
            />
            {/* Unselected Black Text Layer */}
            <span style={{ color: '#111111', position: 'relative', zIndex: 0 }}>
              YOU COPY.
            </span>
            {/* Selected White Text Layer (clipped by selection width) */}
            <span
              style={{
                color: '#FFFFFF',
                position: 'absolute',
                top: 0,
                left: 0,
                padding: '0 4px',
                zIndex: 2,
                clipPath: `polygon(0 0, ${progress1 * 100}% 0, ${progress1 * 100}% 100%, 0 100%)`,
                WebkitClipPath: `polygon(0 0, ${progress1 * 100}% 0, ${progress1 * 100}% 100%, 0 100%)`,
                whiteSpace: 'nowrap',
              }}
            >
              YOU COPY.
            </span>
          </span>
        </div>

        {/* LINE 2 */}
        <div style={{ display: 'block', whiteSpace: 'nowrap', marginTop: '6px' }}>
          <span>ONE </span>
          <span
            ref={line2SelectRef}
            style={{
              position: 'relative',
              display: 'inline-block',
              padding: '0 4px',
              margin: '0 -4px',
              borderRadius: '2px',
            }}
          >
            {/* Background selection highlight */}
            <span
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                bottom: '0',
                width: `${progress2 * 100}%`,
                backgroundColor: '#0066FF',
                borderRadius: '3px',
                zIndex: 1,
                transition: 'none',
              }}
            />
            {/* Unselected Black Text Layer */}
            <span style={{ color: '#111111', position: 'relative', zIndex: 0 }}>
              SHORTCUT AWAY.
            </span>
            {/* Selected White Text Layer (clipped by selection width) */}
            <span
              style={{
                color: '#FFFFFF',
                position: 'absolute',
                top: 0,
                left: 0,
                padding: '0 4px',
                zIndex: 2,
                clipPath: `polygon(0 0, ${progress2 * 100}% 0, ${progress2 * 100}% 100%, 0 100%)`,
                WebkitClipPath: `polygon(0 0, ${progress2 * 100}% 0, ${progress2 * 100}% 100%, 0 100%)`,
                whiteSpace: 'nowrap',
              }}
            >
              SHORTCUT AWAY.
            </span>
          </span>
        </div>
      </h1>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  headline: {
    fontSize: 'clamp(36px, 7vw, 76px)',
    fontWeight: 900,
    lineHeight: 1.05,
    letterSpacing: '-0.035em',
    color: '#111111',
    fontFamily: 'Inter, -apple-system, sans-serif',
    margin: 0,
  },
};
