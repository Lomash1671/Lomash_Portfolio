import React from 'react';
import profilePic from '../assets/lomash.jpg'; // Update with your actual image filename
import '../styles/AboutMe.css';

const AboutMe = () => {
  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React.js', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js', 'Python', 'MongoDB', 'PostgreSQL'],
    tools: ['Git', 'GitHub', 'VS Code', 'Docker', 'Figma', 'Postman', 'Supabase', 'FastAPI']
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src={profilePic}
              alt="Lomash Gupta" 
              className="profile-image"
            />
          </div>

          <div className="about-text">
            <h3>Hi, I'm <span className="highlight">Lomash Gupta</span></h3>
            <p className="bio">
              I'm a passionate Software Developer and AI/ML Enthusiast with a knack for solving real-world problems through code.
              My expertise lies in crafting elegant, responsive, and scalable full-stack web applications.
              Currently exploring machine learning, I enjoy integrating intelligent features into modern web solutions.
              I thrive in collaborative environments and am constantly learning new technologies to stay ahead in the tech curve.
            </p>

            <div className="skills-section">
              <h3>Technical Skills</h3>
              <div className="skills-container">
                <div className="skill-category">
                  <h4>Frontend</h4>
                  <ul>
                    {skills.frontend.map((skill, index) => (
                      <li key={index} className="skill-item">{skill}</li>
                    ))}
                  </ul>
                </div>

                <div className="skill-category">
                  <h4>Backend</h4>
                  <ul>
                    {skills.backend.map((skill, index) => (
                      <li key={index} className="skill-item">{skill}</li>
                    ))}
                  </ul>
                </div>

                <div className="skill-category">
                  <h4>Tools & Technologies</h4>
                  <ul>
                    {skills.tools.map((skill, index) => (
                      <li key={index} className="skill-item">{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="education-section">
              <h3>Education</h3>
              <div className="education-item">
                <h4>Bachelor of Engineering in Computer Science and Engineering</h4>
                <p>Model Institute of Engineering and Technology, Jammu</p>
                <p>2022 - Present</p>
              </div>
              
              <div className="education-item">
                <h4>Senior Secondary (XII), Science</h4>
                <p>Little Flower Higher Secondary School, Jammu</p>
                <p>Completed June 2022</p>
              </div>
            </div>

            <div className="cta-buttons">
              <a 
                href="https://drive.google.com/drive/u/0/folders/1IBU0Rhvpwqm1XxEkLKgtmnkK2F-8wfYQ" 
                className="resume-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
              <a href="#contact" className="contact-button">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
