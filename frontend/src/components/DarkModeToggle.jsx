import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/DarkModeToggle.css';

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <motion.button 
      className={`theme-toggle ${isDark ? 'is-dark' : 'is-light'}`}
      onClick={() => setIsDark(!isDark)}
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle Theme"
    >
      <div className="icon-container">
        {isDark ? (
          <motion.span initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 0 }}>🌙</motion.span>
        ) : (
          <motion.span initial={{ opacity: 0, rotate: 45 }} animate={{ opacity: 1, rotate: 0 }}>☀️</motion.span>
        )}
      </div>
    </motion.button>
  );
};

export default DarkModeToggle;