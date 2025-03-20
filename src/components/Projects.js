import React, { useState } from 'react';
import './Projects.css'; // Import the CSS file
import about from './About';
import resume from './Resume';
//import contact from './Contact';
import Certifications from './Certifications';


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Projects data
  const projects = [
    {
      title: 'Multimodal Emotion Recognition  ',
      Technologies: 'React.js, REST API, Deep Learning, TensorFlow, Computer Vision, JavaScript, UI/UX Design',
      description: 'Engineered a full-stack application integrating a React.js frontend with a deep learning model, achieving 80%+ accuracy in real-time emotion detection. ● Designed an interactive, responsive UI that enhanced user engagement, enabling seamless real-time emotion visualization. ● Executed REST API integrations to facilitate efficient and secure frontend-backend communication, reducing response latency. ● Refined model performance through data preprocessing and fine-tuning, improving inference speed. ',
    
    },

    {
      title: 'Online Bidding System',
      Technologies:' Java, Spring Boot, MySQL, REST APIs, JWT Authentication, Hibernate, Security Best Practices', 
      description: 'Architected a secure digital bidding platform  with role-based authentication. ● Structured an auction management system supporting real-time bid updates, improving bidding efficiency. ● Leveraged MySQL database with Hibernate ORM, optimizing query performance and reducing data retrieval time. ● Deployed robust security measures, including JWT authentication and data encryption, preventing unauthorized access attempts. ',
    },
    {
      title: 'Movie Search App ',
      Technologies:' Django, OMDb API, MySQL, REST APIs, Caching, Python, Web Scraping' ,
      description: 'Designed a Django-based web application that dynamically retrieves and displays movie details. ● Optimized API calls with a SQL-backed caching mechanism, reducing response time.iplemented a SQL-backend database for caching search results, reducing API calls and improving app performance. ● Enhanced UI/UX with responsive design, improving user engagement and boosting retention. ',
    },
    
    
  ];

  // Function to handle project box click
  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio-page">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="resume">Resume</a></li>
          <li><a href="certifications">certification</a></li>
          <li><a href="about">About</a></li>
          
        </ul>
      </nav>

      {/* Work Section */}
      <section id="work" className="work-section">
        <h2>Work</h2>
        <p>I’ve workin on Software Developer for:</p>
        <div className="work-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="work-item"
              onClick={() => handleProjectClick(project)}
            >
              <h3>{project.title}</h3>
              <p>{project.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{selectedProject.title}</h3>
            <p><strong>Technologies:</strong> {selectedProject.Technologies}</p>
            <p><strong>Description:</strong> {selectedProject.description}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;