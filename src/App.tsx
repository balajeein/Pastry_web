import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClipboardHistorySection } from './components/ClipboardHistorySection';
import { SmartCalculatorSection } from './components/SmartCalculatorSection';
import { ScrollScreenshotSection } from './components/ScrollScreenshotSection';
import { ShortcutsSection } from './components/ShortcutsSection';
import { PrivacySection } from './components/PrivacySection';
import { FeatureOverviewSection } from './components/FeatureOverviewSection';
import { InstallSection } from './components/InstallSection';
import { AboutSection } from './components/AboutSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { incrementDownloadCount } from './services/counterService';

export function App() {
  const handleDownloadClick = async () => {
    await incrementDownloadCount();
  };

  return (
    <div className="pastry-app-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Minimal Floating Navigation */}
      <Header onDownloadClick={handleDownloadClick} />

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

        {/* 9. Feature Capabilities Overview */}
        <FeatureOverviewSection />

        {/* 10. How to Install (60-second macOS Guide) */}
        <InstallSection />

        {/* 11. About Pastry (Pre-Footer Placement) */}
        <AboutSection />

        {/* 12. Final Download CTA */}
        <FinalCTASection onDownloadClick={handleDownloadClick} />
      </main>

      {/* 12. Minimal Footer */}
      <Footer />
    </div>
  );
}

export default App;
