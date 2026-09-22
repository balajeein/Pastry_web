import React, { useState } from 'react';

export interface PastryItem {
  id: string;
  type: 'equation' | 'text' | 'image' | 'folder' | 'app' | 'multiple';
  title: string;
  subtitle: string;
  result?: string;
  badge?: string;
  imageSrc?: string;
  isNew?: boolean;
}

export interface PastryWindowMockupProps {
  items?: PastryItem[];
  activeItemId?: string;
  onItemClick?: (item: PastryItem) => void;
  showFloatingButtons?: boolean;
  className?: string;
  actionLabel?: string;
  activeCopiedId?: string | null;
}

export const PastryWindowMockup: React.FC<PastryWindowMockupProps> = ({
  items = defaultPastryItems,
  activeItemId = 'item-1',
  onItemClick,
  showFloatingButtons = true,
  className = '',
  actionLabel = 'Pasted',
  activeCopiedId,
}) => {
  const [internalCopiedId, setInternalCopiedId] = useState<string | null>(null);
  const copiedId = activeCopiedId !== undefined ? activeCopiedId : internalCopiedId;
  const [searchQuery, setSearchQuery] = useState('');

  const handleCopy = (id: string, text: string) => {
    setInternalCopiedId(id);
    navigator.clipboard?.writeText?.(text);
    setTimeout(() => setInternalCopiedId(null), 1600);
  };

  const filteredItems = items.filter((item) =>
    searchQuery === ''
      ? true
      : item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.result && item.result.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div
      className={`pastry-mockup-container ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'flex-start',
        gap: '12px',
        position: 'relative',
      }}
    >
      {/* Main Floating Glass Panel (360px x 460px native spec) */}
      <div
        style={{
          width: '360px',
          maxWidth: '100%',
          height: '470px',
          background: 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(36px)',
          WebkitBackdropFilter: 'blur(36px)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          boxShadow:
            '0 32px 72px -16px rgba(0, 0, 0, 0.16), 0 16px 32px -8px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          textAlign: 'left',
          position: 'relative',
        }}
      >
        {/* Search Header */}
        <div
          style={{
            padding: '12px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.07)',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8E8E93"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ flexShrink: 0 }}
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search clipboard..."
            style={{
              border: 'none',
              background: 'transparent',
              outline: 'none',
              fontSize: '13px',
              fontFamily: 'var(--font-body)',
              color: '#121214',
              width: '100%',
            }}
          />
          {searchQuery ? (
            <button
              onClick={() => setSearchQuery('')}
              style={{
                background: '#8E8E93',
                color: '#fff',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '9px',
                lineHeight: 1,
              }}
            >
              ✕
            </button>
          ) : (
            <span
              style={{
                fontSize: '10px',
                fontWeight: 700,
                color: '#8E8E93',
                background: 'rgba(0, 0, 0, 0.05)',
                padding: '2px 5px',
                borderRadius: '4px',
                fontFamily: 'var(--font-mono)',
              }}
            >
              ⌘⇧V
            </span>
          )}
        </div>

        {/* Scrollable Items List */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '6px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
          className="no-scrollbar"
        >
          {filteredItems.map((item) => {
            const isSelected = activeItemId === item.id;
            const isCopied = copiedId === item.id;

            if (item.type === 'equation') {
              return (
                <div
                  key={item.id}
                  onClick={() => onItemClick?.(item)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: '8px',
                    backgroundColor: isSelected ? 'rgba(0, 102, 255, 0.06)' : 'rgba(0, 0, 0, 0.02)',
                    border: isSelected ? '1px solid rgba(0, 102, 255, 0.25)' : '1px solid transparent',
                    padding: '2px',
                    transition: 'all 0.15s ease',
                    cursor: 'pointer',
                  }}
                  className="pastry-row-hover"
                >
                  {/* Left: Equation */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      onItemClick?.({ ...item, title: item.title });
                      handleCopy(item.id + '-expr', item.title);
                    }}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '7px 8px',
                      borderRadius: '6px',
                    }}
                    className="sub-tile-hover"
                  >
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#636366',
                        fontSize: '13px',
                        fontWeight: 700,
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      =
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                      <span
                        style={{
                          fontSize: '13px',
                          fontWeight: 600,
                          color: '#121214',
                          fontFamily: 'var(--font-mono)',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {item.title}
                      </span>
                      <span style={{ fontSize: '10px', color: '#8E8E93' }}>
                        {copiedId === item.id + '-expr'
                          ? `✓ ${actionLabel}`
                          : actionLabel === 'Pasted'
                            ? 'Paste text'
                            : 'Copy text'}
                      </span>
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div
                    style={{
                      width: '1px',
                      height: '24px',
                      backgroundColor: 'rgba(0, 0, 0, 0.08)',
                      margin: '0 2px',
                    }}
                  />

                  {/* Right: Answer */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      onItemClick?.({ ...item, title: item.result || item.title });
                      handleCopy(item.id + '-res', item.result || '');
                    }}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '7px 8px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(52, 199, 89, 0.08)',
                    }}
                    className="sub-tile-hover"
                  >
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: '#34C759',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        fontSize: '11px',
                        fontWeight: 700,
                      }}
                    >
                      →
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                      <span
                        style={{
                          fontSize: '13px',
                          fontWeight: 700,
                          color: '#121214',
                          fontFamily: 'var(--font-mono)',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {item.result}
                      </span>
                      <span style={{ fontSize: '10px', color: '#34C759', fontWeight: 600 }}>
                        {copiedId === item.id + '-res'
                          ? `✓ ${actionLabel}`
                          : actionLabel === 'Pasted'
                            ? 'Paste result'
                            : 'Copy result'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            }

            // Regular items (image, text, folder, app, multiple)
            return (
              <div
                key={item.id}
                onClick={() => {
                  onItemClick?.(item);
                  handleCopy(item.id, item.title);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '7px 10px',
                  borderRadius: '8px',
                  backgroundColor: isSelected ? 'rgba(0, 102, 255, 0.07)' : 'transparent',
                  border: isSelected ? '1px solid rgba(0, 102, 255, 0.22)' : '1px solid transparent',
                  cursor: 'pointer',
                  transition: 'background-color 0.12s ease',
                  position: 'relative',
                }}
                className="pastry-row-hover"
              >
                {/* Visual Icon / Thumbnail */}
                {item.type === 'image' ? (
                  <div
                    style={{
                      width: '46px',
                      height: '32px',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      flexShrink: 0,
                      backgroundColor: '#E5E5EA',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <img
                      src={item.imageSrc || '/demo-screenshot.jpg'}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </div>
                ) : item.type === 'folder' ? (
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '7px',
                      backgroundColor: 'rgba(10, 132, 255, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#0066FF">
                      <path d="M3 6a2 2 0 012-2h4.172a2 2 0 011.414.586l1.828 1.828A2 2 0 0013.828 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" />
                    </svg>
                  </div>
                ) : item.type === 'app' ? (
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '7px',
                      background: 'linear-gradient(180deg, #1C7ED6 0%, #1864AB 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontSize: '12px',
                      fontWeight: 800,
                      flexShrink: 0,
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </div>
                ) : item.type === 'multiple' ? (
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '7px',
                      backgroundColor: 'rgba(88, 86, 214, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#5856D6',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  </div>
                ) : (
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '7px',
                      backgroundColor: 'rgba(0, 0, 0, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#636366',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  </div>
                )}

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#121214',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontSize: '11px',
                      color: '#8E8E93',
                      marginTop: '1px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {item.subtitle}
                  </div>
                </div>

                {/* Copied / Pasted Feedback Badge */}
                {isCopied && (
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      color: '#34C759',
                      backgroundColor: 'rgba(52, 199, 89, 0.12)',
                      padding: '2px 6px',
                      borderRadius: '4px',
                    }}
                  >
                    ✓ {actionLabel}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Adjacent Native Floating Action Buttons (Screenshot & Shortcuts) */}
      {showFloatingButtons && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            marginTop: '8px',
          }}
        >
          {/* Scroll Screenshot Button */}
          <button
            title="Scroll Screenshot (⌘⇧G)"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#121214',
              cursor: 'pointer',
              transition: 'transform 0.15s ease, background 0.15s ease',
            }}
            className="side-action-btn"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </button>

          {/* Text Shortcuts Button */}
          <button
            title="Text Shortcuts (⌥ + Space)"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#121214',
              cursor: 'pointer',
              transition: 'transform 0.15s ease, background 0.15s ease',
            }}
            className="side-action-btn"
          >
            <span style={{ fontSize: '13px', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>⌥</span>
          </button>
        </div>
      )}

      <style>{`
        .pastry-row-hover:hover {
          background-color: rgba(0, 0, 0, 0.04) !important;
        }
        .sub-tile-hover:hover {
          background-color: rgba(0, 0, 0, 0.05) !important;
        }
        .side-action-btn:hover {
          transform: scale(1.06);
          background: #FFFFFF !important;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12) !important;
        }
      `}</style>
    </div>
  );
};

export const defaultPastryItems: PastryItem[] = [
  {
    id: 'item-calc',
    type: 'equation',
    title: '249 × 282',
    result: '70,218',
    subtitle: 'Calculated Answer',
  },
  {
    id: 'item-img',
    type: 'image',
    title: 'Content-Calendar.png',
    subtitle: 'Just now • Image (1024 × 572)',
    imageSrc: '/demo-screenshot.jpg',
  },
  {
    id: 'item-text',
    type: 'text',
    title: 'mysign → Best regards, Alex Turner',
    subtitle: '2m ago • Text Shortcut',
  },
  {
    id: 'item-folder',
    type: 'folder',
    title: 'Client Proposals & Brand Assets',
    subtitle: '4m ago • Folder (14 items)',
  },
  {
    id: 'item-app',
    type: 'app',
    title: 'Xcode.app',
    subtitle: '9m ago • macOS Application',
  },
  {
    id: 'item-multi',
    type: 'multiple',
    title: 'Project-Archive.zip + 4 files',
    subtitle: '15m ago • Multiple items grouped',
  },
];
