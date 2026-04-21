import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '// Index', href: '#home' },
    { name: '// Story', href: '#about' },
    { name: '// Works', href: '#projects' },
    { name: '// Message', href: '#contact' },
  ];

  return (
    <nav className={`nav-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-island">
        <a href="#home" className="brand-logo">
          L<span>.</span>G
        </a>

        <div className="nav-desktop-links">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="nav-link-pill"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="nav-actions">
          <motion.a
            href="https://drive.google.com/file/d/1rYzhwTmjM0vVGoM1KmGnuPh8VC4xZJxh/view?usp=drive_link"
            className="resume-pill"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
          >
            GET CV
          </motion.a>

          <button
            className={`burger-menu ${isMenuOpen ? 'is-open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="mobile-links">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
