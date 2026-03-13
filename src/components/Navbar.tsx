import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GooeyNav from './GooeyNav';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const navItems = [
    { label: 'Home', href: '#', id: 'hero' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Pricing', href: '#pricing', id: 'pricing' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Detect when middle of section crosses middle of viewport
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
    
    // Explicitly observe all sections
    navItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    // Handle scroll to top for "Home" if no section is active or at top
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

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="navbar navbar-expand-lg fixed-top"
      style={{
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(139, 92, 246, 0.15)',
        padding: '0.6rem 0'
      }}
    >
      <div className="container d-flex justify-content-center">
        <div className="d-flex align-items-center">
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
      </div>
    </motion.nav>
  );
};

export default Navbar;
