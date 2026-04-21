import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/Projects.css';

// Import local images from assets folder
import vridhubImage from '../assets/vridhub.png';
import portfolioImage from '../assets/portfolio.png';
import tennisImage from '../assets/tennis.png';

const Projects = () => {
  const projects = [
    {
      id: "// 01",
      title: "VRIDHUB",
      category: "Full Stack / Social Impact",
      summary: "A healthcare ecosystem for senior citizens. Optimized for low-latency synchronization of medical records using Supabase and a custom React state management architecture.",
      technologies: ["React", "Supabase", "Express", "REST"],
      image: vridhubImage,
      links: { github: "#", live: "#" }
    },
    {
      id: "// 02",
      title: "TENNIS VISION",
      category: "AI / Edge Computing",
      summary: "High-speed athletic analysis. Implemented YOLOv8 pipelines to process 60FPS video feeds with <15ms latency for shot classification and pose correction.",
      technologies: ["Python", "YOLOv8", "OpenCV", "FastAPI"],
      image: tennisImage,
      links: { github: "#", live: "#" }
    },
    {
      id: "// 03",
      title: "ENGINEERED BRAND",
      category: "UX Research / Frontend",
      summary: "This very platform. A showcase of modern web capabilities, leveraging Framer Motion for spring-physics animations and a complex coordinate-based cursor system.",
      technologies: ["React", "Framer", "Vite", "Modern CSS"],
      image: portfolioImage,
      links: { github: "#", live: "#" }
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
                  href={project.links.github} 
                  className="tile-link-icon"
                  whileHover={{ x: 10 }}
                >
                  SYSTEMS ARCHITECTURE →
                </motion.a>
                <motion.a 
                  href={project.links.live} 
                  className="tile-link-icon"
                  whileHover={{ x: 10 }}
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
