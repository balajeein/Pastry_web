import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClipboardHistorySection } from './components/ClipboardHistorySection';
import { SmartCalculatorSection } from './components/SmartCalculatorSection';
import { ScrollScreenshotSection } from './components/ScrollScreenshotSection';
import { ShortcutsSection } from './components/ShortcutsSection';
import { BrowserSearchSection } from './components/BrowserSearchSection';
import { PrivacySection } from './components/PrivacySection';
import { InstallSection } from './components/InstallSection';
import { Footer } from './components/Footer';
import { AboutModal } from './components/AboutModal';
import { incrementDownloadCount } from './services/counterService';

export function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [showInstallGuide, setShowInstallGuide] = useState(false);

  const handleDownloadClick = async () => {
    await incrementDownloadCount();
  };

  const handleOpenInstallGuide = () => {
    setShowInstallGuide(true);
    setTimeout(() => {
      const el = document.getElementById('install');
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 80);
  };

  return (
    <div className="pastry-app-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Minimal Floating Navigation */}
      <Header
        onDownloadClick={handleDownloadClick}
        onAboutClick={() => setIsAboutOpen(true)}
      />

      <main style={{ flex: 1 }}>
        {/* 2. Hero Section with Real Pastry Window Centerpiece */}
        <Hero
          onDownloadClick={handleDownloadClick}
          onInstallGuideClick={handleOpenInstallGuide}
        />

        {/* 3. Clipboard History */}
        <ClipboardHistorySection />

        {/* 5. Smart Calculator */}
        <SmartCalculatorSection />

        {/* 6. Scroll Screenshot */}
        <ScrollScreenshotSection />

        {/* 7. Text + Image Shortcuts */}
        <ShortcutsSection />

        {/* 8. Browser Search (Instant Default Browser Lookup) */}
        <BrowserSearchSection />

        {/* 9. Privacy (Local-First Architecture) */}
        <PrivacySection />

        {/* 9. How to Install (60-second macOS Guide) - Appears on demand */}
        {showInstallGuide && <InstallSection />}
      </main>

      {/* 11. Minimal Footer */}
      <Footer
        onAboutClick={() => setIsAboutOpen(true)}
        onInstallGuideClick={handleOpenInstallGuide}
      />

      {/* 12. Floating macOS About Window Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onDownloadClick={handleDownloadClick}
      />
    </div>
  );
}

export default App;
