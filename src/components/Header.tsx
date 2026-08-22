import { PastryLogo } from './PastryLogo';

export const Header: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.navContainer}>
        <a href="#" style={styles.logoLink} aria-label="Pastry Home">
          <PastryLogo size={28} showText={true} />
        </a>

        <nav style={styles.nav}>
          <a 
            href="#versions" 
            onClick={(e) => scrollToSection(e, 'versions')} 
            style={styles.navLink}
          >
            VERSIONS
          </a>
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, 'about')} 
            style={styles.navLink}
          >
            ABOUT US
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')} 
            style={styles.navLink}
          >
            CONTACT US
          </a>
        </nav>
      </div>
    </header>
  );
};

const styles: Record<string, React.CSSProperties> = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: 'rgba(250, 249, 246, 0.85)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  navContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '0 40px',
  },
  logoLink: {
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '28px',
  },
  navLink: {
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '0.08em',
    color: '#111111',
    textDecoration: 'none',
    transition: 'color 0.15s ease',
    opacity: 0.85,
    cursor: 'pointer',
  },
};
