import { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const mouseXSpring = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseYSpring = useSpring(0, { stiffness: 500, damping: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      mouseXSpring.set(e.clientX - 20);
      mouseYSpring.set(e.clientY - 20);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="App">
      <div className="custom-cursor" style={{ left: cursorPos.x, top: cursorPos.y }}></div>
      <motion.div 
        className="cursor-follower" 
        style={{ x: mouseXSpring, y: mouseYSpring }}
      ></motion.div>

      <div className="noise-overlay"></div>
      <div className="gradient-blob blob-1"></div>
      <div className="gradient-blob blob-2"></div>
      
      <Navbar />
      <DarkModeToggle />
      
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
      </motion.main>
      
      <footer style={{ padding: '6rem 2rem 2rem', textAlign: 'center', opacity: 0.3, fontSize: '0.7rem', letterSpacing: '0.2em' }}>
        &copy; {new Date().getFullYear()} LOMASH GUPTA &mdash; ENGINEERED FOR IMPACT.
      </footer>
    </div>
  );
}

export default App;

