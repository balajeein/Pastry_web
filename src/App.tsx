import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorks } from './components/HowItWorks';
import { CompatibilitySection } from './components/CompatibilitySection';
import { InstallSection } from './components/InstallSection';
import { VersionsSection } from './components/VersionsSection';
import { DownloadCTA } from './components/DownloadCTA';
import { Footer } from './components/Footer';
import { incrementDownloadCount } from './services/counterService';

export function App() {
  const handleDownloadClick = async () => {
    await incrementDownloadCount();
  };

  return (
    <div className="pastry-app-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Hero onDownloadClick={handleDownloadClick} />
        <FeaturesSection />
        <HowItWorks />
        <CompatibilitySection />
        <InstallSection />
        <VersionsSection onDownloadClick={handleDownloadClick} />
        <DownloadCTA onDownloadClick={handleDownloadClick} />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
