import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorks } from './components/HowItWorks';
import { CompatibilitySection } from './components/CompatibilitySection';
import { VersionsSection } from './components/VersionsSection';
import { DownloadCTA } from './components/DownloadCTA';
import { Footer } from './components/Footer';
import { DownloadCounterBadge } from './components/DownloadCounterBadge';
import { fetchDownloadCount, incrementDownloadCount } from './services/counterService';
import { CONFIG } from './config';

export function App() {
  const [downloadCount, setDownloadCount] = useState<number>(CONFIG.initialDownloadSeed);

  useEffect(() => {
    fetchDownloadCount().then((count) => {
      setDownloadCount(count);
    });
  }, []);

  const handleDownloadClick = async () => {
    const nextCount = await incrementDownloadCount();
    setDownloadCount(nextCount);
  };

  return (
    <div className="pastry-app-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Hero onDownloadClick={handleDownloadClick} />
        <AboutSection />
        <FeaturesSection />
        <HowItWorks />
        <CompatibilitySection />
        <VersionsSection />
        <DownloadCTA onDownloadClick={handleDownloadClick} />
      </main>
      <Footer />
      <DownloadCounterBadge count={downloadCount} />
    </div>
  );
}

export default App;
