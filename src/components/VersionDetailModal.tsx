import React, { useEffect } from 'react';
import type { VersionItem } from '../config';

interface VersionDetailModalProps {
  versionItem: VersionItem | null;
  onClose: () => void;
  onDownloadClick?: (downloadUrl: string) => void;
}

export const VersionDetailModal: React.FC<VersionDetailModalProps> = ({
  versionItem,
  onClose,
  onDownloadClick,
}) => {
  useEffect(() => {
    if (!versionItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [versionItem, onClose]);

  if (!versionItem) return null;

  const handleDownload = () => {
    if (onDownloadClick) {
      onDownloadClick(versionItem.downloadUrl);
    } else {
      window.location.href = versionItem.downloadUrl;
    }
  };

  return (
    <div
      style={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-version-title"
      className="modal-backdrop-anim"
    >
      <div
        style={styles.modalCard}
        onClick={(e) => e.stopPropagation()}
        className="modal-card-anim"
      >
        {/* Header */}
        <div style={styles.header}>
          <div>
            <div style={styles.badgeRow}>
              <span style={styles.versionBadge}>Pastry v{versionItem.version}</span>
              {versionItem.latest && <span style={styles.latestBadge}>LATEST</span>}
              {versionItem.notRecommended && (
                <span style={styles.notRecommendedBadge}>NOT RECOMMENDED</span>
              )}
            </div>
            <div style={styles.subHeaderRow}>
              <span style={styles.metaText}>Build {versionItem.build}</span>
              <span style={styles.metaDot}>•</span>
              <span style={styles.metaText}>Released {versionItem.releaseDate}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            style={styles.closeBtn}
            aria-label="Close modal"
            className="scroll-btn-hover"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Content Body */}
        <div style={styles.body} className="no-scrollbar">
          {versionItem.tagline && (
            <p style={styles.tagline}>{versionItem.tagline}</p>
          )}

          {versionItem.sections?.map((section, idx) => (
            <div key={idx} style={styles.sectionBlock}>
              <h3 style={styles.sectionTitle}>{section.title}</h3>

              {section.items && section.items.length > 0 && (
                <ul style={styles.bulletList}>
                  {section.items.map((item, i) => (
                    <li key={i} style={styles.bulletItem}>
                      <span style={styles.bulletDot} />
                      <span style={styles.bulletText}>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.subsections && section.subsections.length > 0 && (
                <div style={styles.subsectionsGroup}>
                  {section.subsections.map((sub, sIdx) => (
                    <div key={sIdx} style={styles.subsectionBlock}>
                      <h4 style={styles.subsectionTitle}>{sub.subtitle}</h4>
                      <ul style={styles.bulletList}>
                        {sub.items.map((item, i) => (
                          <li key={i} style={styles.bulletItem}>
                            <span style={styles.bulletDot} />
                            <span style={styles.bulletText}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {section.keyValuePairs && section.keyValuePairs.length > 0 && (
                <div style={styles.keyValueGrid}>
                  {section.keyValuePairs.map((kv, kIdx) => (
                    <div key={kIdx} style={styles.keyValuePair}>
                      <span style={styles.kvLabel}>{kv.label}:</span>
                      <span style={styles.kvValue}>{kv.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <button
            onClick={handleDownload}
            style={styles.downloadBtn}
            className="download-btn-hover"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>DOWNLOAD PASTRY v{versionItem.version}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  modalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2)',
    width: '100%',
    maxWidth: '560px',
    maxHeight: '85vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  header: {
    padding: '24px 28px 16px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: '16px',
  },
  badgeRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap',
    marginBottom: '6px',
  },
  versionBadge: {
    fontSize: '20px',
    fontWeight: 800,
    color: '#111111',
    letterSpacing: '-0.02em',
  },
  latestBadge: {
    fontSize: '11px',
    fontWeight: 800,
    letterSpacing: '0.08em',
    color: '#0066FF',
    backgroundColor: 'rgba(0, 102, 255, 0.08)',
    padding: '4px 10px',
    borderRadius: '6px',
  },
  notRecommendedBadge: {
    fontSize: '11px',
    fontWeight: 800,
    letterSpacing: '0.08em',
    color: '#DC2626',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    padding: '4px 10px',
    borderRadius: '6px',
  },
  subHeaderRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  metaText: {
    fontSize: '13px',
    color: '#8E8E93',
    fontWeight: 500,
  },
  metaDot: {
    fontSize: '12px',
    color: '#C7C7CC',
  },
  closeBtn: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#666666',
    cursor: 'pointer',
    flexShrink: 0,
  },
  body: {
    padding: '24px 28px',
    overflowY: 'auto',
    flex: 1,
  },
  tagline: {
    fontSize: '14.5px',
    fontWeight: 500,
    color: '#1D1D1F',
    lineHeight: 1.55,
    marginBottom: '24px',
    padding: '14px 18px',
    backgroundColor: 'rgba(0, 102, 255, 0.04)',
    borderRadius: '12px',
    border: '1px solid rgba(0, 102, 255, 0.12)',
  },
  sectionBlock: {
    marginBottom: '24px',
  },
  sectionTitle: {
    fontSize: '14px',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    color: '#111111',
    marginBottom: '12px',
  },
  subsectionsGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  subsectionBlock: {
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    padding: '14px 16px',
    borderRadius: '12px',
    border: '1px solid rgba(0, 0, 0, 0.04)',
  },
  subsectionTitle: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#111111',
    marginBottom: '8px',
  },
  bulletList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  bulletItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    fontSize: '14px',
    color: '#444444',
    lineHeight: 1.5,
  },
  bulletDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#0066FF',
    marginTop: '7px',
    flexShrink: 0,
  },
  bulletText: {
    flex: 1,
  },
  keyValueGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    padding: '14px 16px',
    borderRadius: '12px',
    border: '1px solid rgba(0, 0, 0, 0.04)',
  },
  keyValuePair: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13.5px',
  },
  kvLabel: {
    color: '#8E8E93',
    fontWeight: 500,
  },
  kvValue: {
    color: '#111111',
    fontWeight: 700,
  },
  footer: {
    padding: '16px 28px 24px',
    borderTop: '1px solid rgba(0, 0, 0, 0.06)',
    backgroundColor: '#FFFFFF',
  },
  downloadBtn: {
    backgroundColor: '#0066FF',
    color: '#FFFFFF',
    width: '100%',
    padding: '14px',
    borderRadius: '30px',
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: '0.05em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    boxShadow: '0 4px 14px rgba(0, 102, 255, 0.25)',
  },
};
