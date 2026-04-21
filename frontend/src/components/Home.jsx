import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="home" className="home-section">
      <motion.div 
        className="home-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-top-meta">
          <motion.div className="status-badge" variants={itemVariants}>
            <span className="pulse"></span> 
            <span>Open for <span className="italic-accent">high-impact</span> roles</span>
          </motion.div>
          
          <motion.div className="location-tag" variants={itemVariants}>
            JAMMU, IN // 32.72° N, 74.85° E
          </motion.div>
        </div>

        <motion.div className="hero-headline" variants={itemVariants}>
          <h1 className="hero-name">
            LOMASH <br /> 
            <span className="hero-outline">GUPTA</span>
          </h1>
        </motion.div>

        <motion.h2 className="hero-subheading" variants={itemVariants}>
          Architecting <span className="italic-accent">Scalable</span> Systems & <br />
          Intelligent <span className="accent-text">AI Integrations</span>
        </motion.h2>

        <motion.p className="hero-description" variants={itemVariants}>
          I bridge the gap between complex backend logic and intuitive frontend 
          experiences. Specialized in Full-Stack development and Machine Learning.
        </motion.p>

        <motion.div className="hero-footer" variants={itemVariants}>
          <div className="hero-actions">
            <a href="#projects" className="magnetic-btn">
              Explore Portfolio
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
            
            <div className="hero-socials">
              <a href="https://github.com/Lomash1671" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>
          
          <div className="scroll-hint">
            <div className="line"></div>
            <span>SCROLL</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
