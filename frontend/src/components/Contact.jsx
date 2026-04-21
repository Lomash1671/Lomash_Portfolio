import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  
  // Magnetic Card Effect
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-label">GET IN TOUCH</div>
      
      <div className="contact-grid">
        <div className="contact-info-block">
          <motion.h3 className="contact-cta">
            HAVE A VISION? <br />
            <span className="accent-text italic-accent">let's talk</span>
          </motion.h3>
          
          <div className="contact-methods">
            <div className="contact-method-item">
              <label>EMAIL</label>
              <a href="mailto:lomash1671@gmail.com" className="minimal-link">lomash1671@gmail.com</a>
            </div>
            <div className="contact-method-item">
              <label>SOCIAL</label>
              <div className="social-pills-row">
                <a href="https://github.com/Lomash1671" target="_blank" rel="noreferrer">GH</a>
                <a href="https://linkedin.com/in/lomash-gupta-060668260/" target="_blank" rel="noreferrer">LI</a>
                <a href="https://instagram.com/lomash_.71/" target="_blank" rel="noreferrer">IG</a>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="contact-card-premium"
        >
          <div className="card-glare"></div>
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                className="success-view"
                initial={{ opacity: 0, z: 20 }}
                animate={{ opacity: 1, z: 50 }}
                exit={{ opacity: 0 }}
              >
                <div className="success-lottie">✓</div>
                <h3>SENT.</h3>
                <p>Decoding your message now.</p>
              </motion.div>
            ) : (
              <form className="premium-form" onSubmit={handleSubmit} style={{ transform: "translateZ(40px)" }}>
                <div className="input-row">
                  <div className="input-field">
                    <label>01 // NAME</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="input-field">
                    <label>02 // EMAIL</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="hello@world.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="input-field">
                  <label>03 // MESSAGE</label>
                  <textarea 
                    required 
                    rows="4"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button type="submit" className="submit-puck" disabled={status === 'sending'}>
                  {status === 'sending' ? 'WORKING...' : 'SEND INQUIRY'}
                  <div className="puck-bg"></div>
                </button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
