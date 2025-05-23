import React, { useState, useEffect, useCallback } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  return (
    <nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="nav-container">

        {/* LG logo */}
        <a href="#home" className="nav-logo" onClick={handleLinkClick} aria-label="Homepage">
          LG
        </a>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="primary-navigation">
          <li>
            <a href="#home" className="nav-item" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-item" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="nav-item" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-item" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/drive/u/0/folders/1IBU0Rhvpwqm1XxEkLKgtmnkK2F-8wfYQ"
              className="resume-btn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          className={`menu-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
