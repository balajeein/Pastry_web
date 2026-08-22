import React from 'react';
import { PastryLogo } from './PastryLogo';
import { CONFIG } from '../config';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" style={styles.footer} aria-label="Footer, Contact, and Contribute">
      <div className="container" style={styles.container}>
        
        {/* Contact & Community Block */}
        <div style={styles.contactGrid}>
          {/* Left Column: Community & Support */}
          <div style={styles.contactCol}>
            <span style={styles.sectionLabel}>CONTACT & COMMUNITY</span>
            <h3 style={styles.contactHeading}>Join the Pastry WhatsApp Community</h3>
            <p style={styles.contactSubtext}>
              Found a bug, have an idea, or just want to say hi? Connect directly with the developer and community.
            </p>

            <a 
              href={CONFIG.whatsappCommunityUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.whatsappButton}
              className="whatsapp-btn-hover"
              aria-label="Join Pastry WhatsApp Community"
            >
              {/* WhatsApp Icon */}
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.197 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347zM12.02 21.75H12c-1.756 0-3.479-.473-4.993-1.37l-.358-.212-3.712.973.99-3.619-.234-.372C2.753 15.602 2 13.856 2 12.036 2 6.501 6.494 2 12.02 2c2.678 0 5.195 1.043 7.087 2.938A9.957 9.957 0 0 1 22 12.037c0 5.534-4.492 10.035-9.98 10.035z" />
              </svg>
              <span>Join WhatsApp Community</span>
            </a>
          </div>

          {/* Right Column: Open Source Contribute */}
          <div style={styles.contactCol}>
            <span style={styles.sectionLabel}>OPEN SOURCE</span>
            <h3 style={styles.contactHeading}>Contribute to Pastry</h3>
            <p style={styles.contactSubtext}>
              Pastry is open source. If you'd like to improve it, fix a bug, suggest a feature, or contribute code, check out the repository.
            </p>

            <a 
              href={CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.githubButton}
              className="github-btn-hover"
              aria-label="View Pastry GitHub Repository"
            >
              {/* GitHub Icon */}
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>VIEW REPOSITORY</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={styles.divider} />

        {/* Footer Bottom Bar */}
        <div style={styles.bottomBar}>
          <div style={styles.brandGroup}>
            <PastryLogo size={24} showText={true} />
            <span style={styles.copyright}>© 2026 Pastry</span>
          </div>

          <div style={styles.linksGroup}>
            <a 
              href={CONFIG.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={styles.footerLink}
            >
              GitHub
            </a>
            <span style={styles.madeForMac}>Made for macOS.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles: Record<string, React.CSSProperties> = {
  footer: {
    padding: '80px 0 40px 0',
    backgroundColor: '#FAF9F6',
    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '48px',
    marginBottom: '60px',
  },
  contactCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  sectionLabel: {
    fontSize: '12px',
    fontWeight: 800,
    letterSpacing: '0.12em',
    color: '#0066FF',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '10px',
  },
  contactHeading: {
    fontSize: 'clamp(20px, 3vw, 26px)',
    fontWeight: 800,
    color: '#111111',
    letterSpacing: '-0.02em',
    marginBottom: '8px',
  },
  contactSubtext: {
    fontSize: '15px',
    color: '#6E6E73',
    fontWeight: 450,
    marginBottom: '24px',
    lineHeight: 1.5,
  },
  whatsappButton: {
    backgroundColor: '#25D366',
    color: '#FFFFFF',
    padding: '14px 26px',
    borderRadius: '30px',
    fontSize: '14px',
    fontWeight: 700,
    letterSpacing: '0.02em',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
    boxShadow: '0 4px 16px rgba(37, 211, 102, 0.25)',
  },
  githubButton: {
    backgroundColor: '#111111',
    color: '#FFFFFF',
    padding: '14px 26px',
    borderRadius: '30px',
    fontSize: '13px',
    fontWeight: 700,
    letterSpacing: '0.04em',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
  },
  divider: {
    height: '1px',
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    marginBottom: '32px',
  },
  bottomBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
  },
  brandGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  copyright: {
    fontSize: '13px',
    color: '#8E8E93',
    fontWeight: 500,
  },
  linksGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  footerLink: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#111111',
    textDecoration: 'none',
  },
  madeForMac: {
    fontSize: '13px',
    fontWeight: 500,
    color: '#8E8E93',
  },
};
