import React, { useState, useEffect } from 'react';
import { PastryLogo } from './PastryLogo';

interface HeaderProps {
  onDownloadClick?: () => void;
  onAboutClick?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 76;
      const top = element.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className={`pastry-navbar ${isScrolled ? 'is-scrolled' : 'at-top'}`}>
      <div className="pastry-navbar-inner">
        {/* Left: Pastry Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="pastry-navbar-brand"
          aria-label="Pastry Home"
        >
          <PastryLogo size={28} showText={true} textColor={isScrolled ? '#14180f' : '#ffffff'} />
        </a>

        {/* Right: Rest of the options */}
        <nav className="pastry-navbar-menu desktop-nav-group">
          <a
            href="#features"
            onClick={(e) => scrollTo(e, 'features')}
            className="pastry-nav-link"
          >
            Features
          </a>
        </nav>

        {/* Mobile Hamburger toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="mobile-nav-toggle"
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isMobileOpen && (
        <div className="pastry-mobile-drawer">
          <a
            href="#features"
            onClick={(e) => scrollTo(e, 'features')}
            className="pastry-mobile-drawer-link"
          >
            Features
          </a>
        </div>
      )}
    </header>
  );
};
