import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClipboardHistorySection } from './components/ClipboardHistorySection';
import { SmartCalculatorSection } from './components/SmartCalculatorSection';
import { ScrollScreenshotSection } from './components/ScrollScreenshotSection';
import { ShortcutsSection } from './components/ShortcutsSection';
import { PrivacySection } from './components/PrivacySection';
import { InstallSection } from './components/InstallSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { AboutModal } from './components/AboutModal';
import { incrementDownloadCount } from './services/counterService';

export function App() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const handleDownloadClick = async () => {
    await incrementDownloadCount();
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
        <Hero onDownloadClick={handleDownloadClick} />

        {/* 3. Clipboard History */}
        <ClipboardHistorySection />

        {/* 5. Smart Calculator */}
        <SmartCalculatorSection />

        {/* 6. Scroll Screenshot */}
        <ScrollScreenshotSection />

        {/* 7. Text + Image Shortcuts */}
        <ShortcutsSection />

        {/* 8. Privacy (Local-First Architecture) */}
        <PrivacySection />

        {/* 9. How to Install (60-second macOS Guide) */}
        <InstallSection />

        {/* 10. Final Download CTA */}
        <FinalCTASection onDownloadClick={handleDownloadClick} />
      </main>

      {/* 11. Minimal Footer */}
      <Footer onAboutClick={() => setIsAboutOpen(true)} />

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
