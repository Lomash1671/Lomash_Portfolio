import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className="preloader-overlay"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#050505',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontFamily: "'Space Grotesk', sans-serif"
      }}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center' }}
      >
        <h1 style={{ letterSpacing: '0.8em', fontWeight: 900, fontSize: '0.7rem', margin: 0 }}>LOMASH GUPTA</h1>
        <div style={{ marginTop: '0.5rem', fontSize: '8px', opacity: 0.3, letterSpacing: '0.4em' }}>ARCHITECTURE // INGENUITY</div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
