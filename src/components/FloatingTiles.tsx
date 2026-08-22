import React from 'react';

export const FloatingTiles: React.FC = () => {
  return (
    <div style={styles.tilesContainer} aria-hidden="true">
      {/* 1. Text Tile (Top Left) */}
      <div style={{ ...styles.tile, top: '4%', left: '16%' }} className="float-1">
        <span style={{ fontSize: '24px', fontWeight: 800, color: '#111111', fontFamily: 'serif' }}>Aa</span>
      </div>

      {/* 2. Image / Photo Tile (Top Middle-Left) */}
      <div style={{ ...styles.tile, top: '2%', left: '44%' }} className="float-2">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#34C759" fillOpacity="0.15" />
          <path d="M18 15L14 10L9 16L6 12L2 18H22L18 15Z" fill="#34C759" />
          <circle cx="7" cy="7" r="2" fill="#FFCC00" />
        </svg>
      </div>

      {/* 3. Terminal CLI Tile (Top Right) */}
      <div style={{ ...styles.tile, top: '5%', right: '20%', backgroundColor: '#1E1E1E' }} className="float-3">
        <span style={{ fontSize: '18px', fontWeight: 800, color: '#34C759', fontFamily: 'monospace' }}>&gt;_</span>
      </div>

      {/* 4. Video Clapperboard Tile (Top Far Right) */}
      <div style={{ ...styles.tile, top: '16%', right: '8%' }} className="float-4">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5856D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="3" />
          <path d="M2 8h20" />
          <path d="M6 4l3 4" />
          <path d="M11 4l3 4" />
          <path d="M16 4l3 4" />
          <polygon points="10 11 16 14 10 17 10 11" fill="#5856D6" />
        </svg>
      </div>

      {/* 5. macOS Blue Folder Tile (Upper Mid Left) */}
      <div style={{ ...styles.tile, top: '22%', left: '6%' }} className="float-3">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path d="M3 6a2 2 0 012-2h4.172a2 2 0 011.414.586l1.828 1.828A2 2 0 0013.828 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" fill="#0A84FF" />
          <path d="M3 9a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" fill="#0066FF" fillOpacity="0.9" />
        </svg>
      </div>

      {/* 6. Document TXT Tile (Mid Left) */}
      <div style={{ ...styles.tile, top: '44%', left: '2%' }} className="float-1">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8E8E93" strokeWidth="2">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          <span style={{ fontSize: '9px', fontWeight: 800, color: '#0066FF', marginTop: '2px' }}>TXT</span>
        </div>
      </div>

      {/* 7. Code Block Tile (Lower Mid Left) */}
      <div style={{ ...styles.tile, top: '64%', left: '6%', backgroundColor: '#111111' }} className="float-2">
        <span style={{ fontSize: '16px', fontWeight: 800, color: '#30D158', fontFamily: 'monospace' }}>&lt;/&gt;</span>
      </div>

      {/* 8. I-Beam Text Selection Cursor Tile (Bottom Left) */}
      <div style={{ ...styles.tile, bottom: '12%', left: '12%' }} className="float-4">
        <span style={{ fontSize: '26px', fontWeight: 300, color: '#111111', fontFamily: 'serif' }}>I</span>
      </div>

      {/* 9. Video Editing Timeline Tile (Bottom Center - Replaced pastry history icon) */}
      <div style={{ ...styles.tile, bottom: '12%', left: '46%' }} className="float-1">
        <svg width="34" height="34" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Top Purple Track */}
          <rect x="4" y="8" width="26" height="5" rx="2.5" fill="#7D52F4" />
          {/* Middle Green Track */}
          <rect x="10" y="16" width="20" height="5" rx="2.5" fill="#34C759" />
          {/* Bottom Yellow Track */}
          <rect x="6" y="24" width="12" height="5" rx="2.5" fill="#FF9500" />

          {/* Playhead Needle Line */}
          <line x1="21" y1="6" x2="21" y2="30" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
          {/* Playhead Needle Knob */}
          <circle cx="21" cy="5" r="3" fill="#7D52F4" stroke="#FFFFFF" strokeWidth="1" />
        </svg>
      </div>

      {/* 10. List / Tasks Tile (Mid Right) */}
      <div style={{ ...styles.tile, top: '48%', right: '3%' }} className="float-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF9500" strokeWidth="2.2">
          <line x1="9" y1="6" x2="20" y2="6" />
          <line x1="9" y1="12" x2="20" y2="12" />
          <line x1="9" y1="18" x2="20" y2="18" />
          <circle cx="4" cy="6" r="1.5" fill="#FF9500" />
          <circle cx="4" cy="12" r="1.5" fill="#34C759" />
          <circle cx="4" cy="18" r="1.5" fill="#0066FF" />
        </svg>
      </div>

      {/* 11. PDF Document Tile (Lower Right) */}
      <div style={{ ...styles.tile, bottom: '18%', right: '14%' }} className="float-3">
        <div style={{ display: 'flex', flexDirection: 'column', opacity: 0.95, alignItems: 'center' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF3B30" strokeWidth="2">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          <span style={{ fontSize: '9px', fontWeight: 900, color: '#FF3B30', marginTop: '2px' }}>PDF</span>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  tilesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    overflow: 'visible',
    zIndex: 1,
  },
  tile: {
    position: 'absolute',
    width: '62px',
    height: '62px',
    borderRadius: '16px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)',
    border: '1px solid rgba(0, 0, 0, 0.06)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'auto',
    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), boxShadow 0.3s ease',
    cursor: 'pointer',
  },
};
