import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/lomash.jpg';
import '../styles/AboutMe.css';

const AboutMe = () => {
  const coreCompetencies = [
    { title: "System Architecture", desc: "Designing scalable, decoupled full-stack ecosystems using modern Node.js and React patterns." },
    { title: "AI Integration", desc: "Fusing computer vision models (YOLO, MediaPipe) with web interfaces for real-time intelligence." },
    { title: "UX Engineering", desc: "Crafting fluid, motion-driven interfaces that prioritize performance and user accessibility." }
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-label">ENGINEERING A STORY</div>
      
      <div className="about-grid">
        <motion.div 
          className="about-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src={profilePic} alt="Lomash" className="personal-img" />
          <div className="img-status">
            <span className="dot"></span>
            STAYING CURIOUS
          </div>
        </motion.div>

        <div className="about-content-wrapper">
          <motion.div 
            className="about-intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="about-heading">
              I ARCHITECT <span className="italic-accent">experiences</span> <br />
              THAT DEFINE <span className="accent-text">MODERN WEBS.</span>
            </h3>
            
            <div className="about-bio">
              <p>
                Based in Jammu, I'm currently shaping my expertise in Computer Science at MIET. 
                My philosophy is simple: **Technical complexity should feel invisible to the user.**
              </p>
              <p>
                I specialize in bridging the gap between raw data/intelligence and beautiful, 
                human-centric products. From healthcare platforms to AI sports analytics, 
                I build for impact.
              </p>
            </div>
          </motion.div>

          <div className="capabilities-stack">
            {coreCompetencies.map((item, i) => (
              <motion.div 
                key={item.title}
                className="competency-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
              >
                <div className="comp-header">
                  <span className="comp-number">0{i+1}</span>
                  <h4>{item.title}</h4>
                </div>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="tech-ticker"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span>REACT</span> / <span>NODE.JS</span> / <span>PYTHON</span> / <span>SUPABASE</span> / <span>FRAMER MOTION</span> / <span>OPENCV</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
