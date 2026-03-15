import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import GooeyNav from './GooeyNav';
import './Navbar.css';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { label: 'Home', href: '#', id: 'hero' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Pricing', href: '#pricing', id: 'pricing' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = navItems.findIndex(item => item.id === entry.target.id);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveIndex(0);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when clicking a link
  const handleNavLinkClick = (index: number) => {
    setActiveIndex(index);
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="navbar navbar-expand-lg fixed-top"
        style={{
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          padding: '0.6rem 0',
          zIndex: 2050
        }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo/Brand for Mobile */}
          <div className="d-lg-none">
            <span className="text-white fw-bold orbitron" style={{ fontSize: '1.2rem', letterSpacing: '2px' }}>
              EXORA
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="d-none d-lg-flex justify-content-center w-100 desktop-nav">
            <GooeyNav 
              items={navItems}
              activeIndex={activeIndex}
              onActiveChange={setActiveIndex}
              particleCount={9}
              particleDistances={[90, 10]}
              particleR={200}
              animationTime={600}
              timeVariance={200}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>

          {/* Mobile Toggle */}
          <div className="d-lg-none mobile-nav-toggle">
            <button 
              className="hamburger-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mobile-menu-overlay"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className={`mobile-nav-link ${activeIndex === index ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                onClick={() => handleNavLinkClick(index)}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
