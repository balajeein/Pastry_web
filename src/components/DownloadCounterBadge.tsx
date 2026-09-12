import React, { useEffect, useState } from 'react';
import { fetchDownloadCount } from '../services/counterService';

interface DownloadCounterBadgeProps {
  count?: number;
  inline?: boolean;
}

export const DownloadCounterBadge: React.FC<DownloadCounterBadgeProps> = ({ count: propCount, inline = true }) => {
  const [count, setCount] = useState<number>(propCount ?? 12847);

  useEffect(() => {
    if (propCount === undefined) {
      let isMounted = true;
      fetchDownloadCount().then((fetched) => {
        if (isMounted) {
          setCount(fetched);
        }
      });
      return () => {
        isMounted = false;
      };
    }
  }, [propCount]);

  const displayCount = propCount !== undefined ? propCount : count;

  if (inline) {
    return (
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
          padding: '4px 10px',
          borderRadius: '999px',
          fontSize: '12px',
          fontWeight: 600,
          color: '#636366',
        }}
      >
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#34C759',
            display: 'inline-block',
          }}
        />
        <span style={{ color: '#111111', fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>
          {displayCount.toLocaleString()}
        </span>
        <span>downloads</span>
      </div>
    );
  }

  return (
    <aside style={styles.badgeContainer} aria-label="Pastry total download counter">
      <div style={styles.badge}>
        <span style={styles.dot} />
        <span style={styles.number}>{displayCount.toLocaleString()}</span>
        <span style={styles.label}>downloads</span>
      </div>
    </aside>
  );
};

const styles: Record<string, React.CSSProperties> = {
  badgeContainer: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    zIndex: 90,
    pointerEvents: 'none',
  },
  badge: {
    pointerEvents: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '30px',
    padding: '8px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    userSelect: 'none',
  },
  dot: {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    backgroundColor: '#0066FF',
    display: 'inline-block',
    boxShadow: '0 0 8px rgba(0, 102, 255, 0.6)',
  },
  number: {
    fontSize: '13px',
    fontWeight: 800,
    color: '#111111',
    letterSpacing: '-0.01em',
    fontVariantNumeric: 'tabular-nums',
  },
  label: {
    fontSize: '12px',
    fontWeight: 500,
    color: '#6E6E73',
  },
};
