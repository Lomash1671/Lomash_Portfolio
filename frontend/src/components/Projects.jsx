import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/Projects.css';

// Import local images from assets folder
import tennisImage from '../assets/tennis.png';
import devcoreImage from '../assets/Devcore main.png.png';
import aasraImage from '../assets/Aasrasewa.png.png';

const Projects = () => {
  const projects = [
    {
      id: "// 01",
      title: "AASRASEWA",
      category: "MERN Stack / AI / IoT",
      summary: "Smart Relief & Stronger Communities. Built an AI & IoT-powered disaster management platform. Ranked Top 100 in Google Solution Challenge 2025 among 64,000+ teams.",
      technologies: ["MERN Stack", "Python", "Flask", "AWS", "REST APIs"],
      image: aasraImage, 
      links: { github: "https://github.com/Praguni-Sanotra/AasraSewa", live: "https://github.com/Praguni-Sanotra/AasraSewa" }
    },
    {
      id: "// 02",
      title: "DEVCORE",
      category: "Full Stack / Real-Time",
      summary: "Real-Time Collaboration Platform. Developed and deployed a platform with real-time communication via Socket.IO and JWT-based authentication for scalable user interfaces.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
      image: devcoreImage, 
      links: { github: "https://github.com/Lomash1671", live: "https://dev-core-iota.vercel.app" }
    },
    {
      id: "// 03",
      title: "TENNIS ANALYSIS",
      category: "AI / ML / Computer Vision",
      summary: "AI-Based Sports Performance System. Trained ML models for tennis shot classification using OpenCV and TensorFlow with high accuracy for performance visualization.",
      technologies: ["Python", "OpenCV", "TensorFlow", "Scikit-learn", "React"],
      image: tennisImage,
      links: { github: "https://github.com/Lomash1671/TennisTrackerAI", live: "https://github.com/Lomash1671/TennisTrackerAI" }
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-label">TECHNICAL CASE STUDIES</div>
      
      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div 
            key={project.id}
            className="project-tile"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="tile-image-container">
              <motion.img 
                src={project.image} 
                alt={project.title} 
                className="tile-image"
                whileHover={{ scale: 1.02 }}
              />
              <div className="tile-overlay"></div>
            </div>

            <div className="tile-details">
              <div className="tile-header">
                <span className="tile-id">{project.id}</span>
              </div>
              <h3 className="tile-title">{project.title}</h3>
              <p className="tile-category">{project.category}</p>
              <p className="tile-summary">{project.summary}</p>
              
              <div className="tile-tech-stack">
                {project.technologies.map(tech => (
                  <span key={tech} className="tile-tech">{tech}</span>
                ))}
              </div>

              <div className="tile-links">
                <motion.a 
                  href={project.links.live} 
                  className="tile-link-icon"
                  whileHover={{ x: 10 }}
                  target="_blank"
                  rel="noreferrer"
                >
                  LIVE ENVIRONMENT →
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
