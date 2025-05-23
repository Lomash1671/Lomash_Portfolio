import React from 'react';
import '../styles/Projects.css';

// Import local images from assets folder
import vridhubImage from '../assets/vridhub.png';
import portfolioImage from '../assets/portfolio.png';
import tennisImage from '../assets/tennis.png';

const Projects = () => {
  const projects = [
    {
      title: "VRIDHUB",
      description: [
        "Developed a scalable full-stack web application using React for the frontend, delivering a responsive and accessible user interface tailored for elderly users.",
        "Built and maintained RESTful APIs with Node.js and Express to handle secure data operations, user authentication, and seamless integration with Supabase as the backend database.",
        "Implemented real-time data synchronization and efficient CRUD operations using Supabase, ensuring robust performance and scalability across features like prescription management, transport booking, and event coordination."
      ],
      technologies: ["React", "Node.js", "Express", "Supabase"],
      image: vridhubImage,
      github: "#",
      live: "#"
    },
    {
      title: "Personal Portfolio",
      description: [
        "Built a responsive and dynamic portfolio website using React.js to showcase projects, skills, and professional experience with seamless user navigation and interactive UI elements.",
        "Developed backend APIs using Node.js and Express to manage contact form submissions, user interactions, and serve project data securely."
      ],
      technologies: ["React", "Node.js", "Express"],
      image: portfolioImage,
      github: "#",
      live: "#"
    },
    {
      title: "Tennis Shot Analysis",
      description: [
        "Developed a machine learning model to analyze and classify tennis shots using video data, leveraging pose estimation techniques for accurate player movement tracking.",
        "Used YOLO for player and racket detection, and applied Convolutional Neural Networks (CNN) for classifying shot types with high accuracy.",
        "Implemented preprocessing pipelines with MediaPipe and OpenCV to extract keypoints and relevant features from tennis videos.",
        "Built a user-friendly interface to upload videos and display real-time shot classification results with visual feedback."
      ],
      technologies: ["YOLOv8", "CNN", "MediaPipe", "OpenCV", "React"],
      image: tennisImage,
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              className="project-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="project-content">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.github !== "#" && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`}>
                          <i className="fab fa-github"></i>
                        </a>
                      )}
                      {project.live !== "#" && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} Live Demo`}>
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <ul className="project-description">
                    {project.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  {project.frontendTechnologies && (
                    <div className="project-tech">
                      <strong>Frontend:</strong>{" "}
                      {project.frontendTechnologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  )}
                  {project.backendTechnologies && (
                    <div className="project-tech">
                      <strong>Backend:</strong>{" "}
                      {project.backendTechnologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  )}
                  {!project.frontendTechnologies && !project.backendTechnologies && project.technologies && (
                    <div className="project-tech">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
