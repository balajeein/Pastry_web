import React, { useState } from 'react';
import { PastryWindowMockup, type PastryItem } from './PastryWindowMockup';

export const ClipboardHistorySection: React.FC = () => {
  const [filterTag, setFilterTag] = useState<'all' | 'text' | 'image' | 'file' | 'folder' | 'app'>('all');

  const historyItems: PastryItem[] = [
    {
      id: 'hist-1',
      type: 'text',
      title: 'postgresql://postgres:secret@localhost:5432/pastry_db',
      subtitle: 'Just now • Database connection string',
    },
    {
      id: 'hist-2',
      type: 'image',
      title: 'Content-Calendar.png',
      subtitle: '2m ago • Image (1024 × 572)',
      imageSrc: '/demo-screenshot.jpg',
    },
    {
      id: 'hist-3',
      type: 'folder',
      title: 'Figma-Components-Export',
      subtitle: '5m ago • Folder (18 assets)',
    },
    {
      id: 'hist-4',
      type: 'text',
      title: 'contract_nda_executed_balajee.pdf',
      subtitle: '8m ago • Document File (1.8 MB)',
    },
    {
      id: 'hist-5',
      type: 'app',
      title: 'Terminal.app',
      subtitle: '14m ago • Application',
    },
    {
      id: 'hist-6',
      type: 'multiple',
      title: 'Site-Icons.zip + 6 SVG items',
      subtitle: '22m ago • Grouped items',
    },
  ];

  const displayItems =
    filterTag === 'all'
      ? historyItems
      : historyItems.filter((item) => {
        if (filterTag === 'file') return item.title.includes('.pdf') || item.type === 'multiple';
        return item.type === filterTag;
      });

  return (
    <section
      id="features"
      style={{
        padding: '120px 0',
        backgroundColor: 'var(--pastry-paper)',
        borderTop: '1px solid var(--pastry-hairline)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Clipboard History"
    >
      {/* Ambient Refractive Blooms */}
      <div
        className="pastry-bloom pastry-bloom-meadow"
        style={{ width: '440px', height: '440px', top: '15%', right: '-5%' }}
      />
      <div
        className="pastry-bloom pastry-bloom-aurora"
        style={{ width: '480px', height: '480px', bottom: '10%', left: '-6%' }}
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
          {/* Left Column: Editorial Storytelling */}
          <div>
            <span className="pastry-eyebrow">01 — CLIPBOARD HISTORY</span>
            <h2
              className="pastry-editorial-heading"
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                marginBottom: '20px',
              }}
            >
              Copy once.
              <br />
              <span className="pastry-serif-italic">Keep it forever.</span>
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
              macOS remembers only your latest copy.
            </p>
            <p
              style={{
                fontFamily: 'var(--pastry-font-sans)',
                fontSize: '17px',
                lineHeight: 1.6,
                color: 'var(--pastry-ink-secondary)',
                marginBottom: '36px',
              }}
            >
              Pastry keeps your text, high-res images, files, folders, and apps ready to restore anytime. Just press{' '}
              <strong style={{ color: 'var(--pastry-ink)' }}>⌘ + Shift + V </strong>to bring back anything you need, right where you need it.
            </p>

            {/* Quick Filter Pills */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {(
                [
                  { id: 'all', label: 'All Items' },
                  { id: 'text', label: 'Text' },
                  { id: 'image', label: 'Images' },
                  { id: 'folder', label: 'Folders' },
                  { id: 'app', label: 'Apps' },
                ] as const
              ).map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => setFilterTag(tag.id)}
                  className={`pastry-filter-pill ${filterTag === tag.id ? 'is-active' : ''}`}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Large Visual Demonstration (Much larger than text) */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Liquid Glass Showcase Panel */}
            <div
              className="pastry-glass-panel"
              style={{
                width: '100%',
                maxWidth: '520px',
                borderRadius: '32px',
                padding: '40px 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <PastryWindowMockup
                items={displayItems}
                activeItemId={displayItems[0]?.id}
                showFloatingButtons={true}
                actionLabel="Pasted"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
