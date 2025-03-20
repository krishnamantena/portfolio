import React, { useState } from 'react';
import './Style.css'; // Import the CSS file
import about from './About';
import resume from './Resume';
function Certifications() {
  const [selectedService, setSelectedService] = useState(null);

  // Services data
  const services = [
    {
      title: 'AWS Cloud Practitioner',
      description: 'Certified in AWS Cloud Practitioner, demonstrating foundational knowledge of AWS Cloud services, architecture, and best practices.',
      image: 'https://drive.google.com/file/d/1TyNEAZ-fNvIO-LKmXtI0EAW_N57jagsN/view?usp=sharing', // Add image URL
    },
    {
      title: 'AWS Solutions Architect Associate',
      description: 'Earned the AWS Solutions Architect Associate certification, showcasing expertise in designing scalable, secure, and cost-effective solutions on AWS.',
      image: 'https://example.com/path-to-aws-solutions-architect-image.jpg', // Add image URL
    },
    {
      title: 'Red Hat Certification',
      description: 'Certified in Red Hat technologies, validating skills in Linux system administration, automation, and container management.',
      image: 'https://example.com/path-to-redhat-certification-image.jpg', // Add image URL
    },
    {
      title: 'Automation Anywhere RPA Essentials',
      description: 'Completed Automation Anywhere RPA Essentials, gaining proficiency in Robotic Process Automation (RPA) tools and techniques.',
      image: 'https://example.com/path-to-automation-anywhere-image.jpg', // Add image URL
    },
  ];

  // Function to handle service box click
  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="about-page1">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="resume">Resume</a></li>
          <li><a href="about">About</a></li>
          
        </ul>
      </nav>

      {/* Main Content */}
      <div className="about-container1">
        <h1>Certifications</h1>
        <p className="intro">
          I have successfully completed several industry-recognized certifications, including the AWS Cloud Practitioner and AWS Solutions Architect Associate, which validate my expertise in designing, deploying, and managing scalable and secure cloud solutions on AWS. Additionally, I hold a Red Hat Certification, demonstrating my proficiency in Linux system administration and automation. I am also certified in Automation Anywhere RPA Essentials, equipping me with the skills to develop and implement Robotic Process Automation (RPA) solutions to streamline business processes and enhance operational efficiency. These certifications reflect my commitment to continuous learning and my ability to leverage cutting-edge technologies to drive innovation and productivity.
        </p>

        {/* Certifications Section */}
        <div className="services-section">
          <h2>My Certifications</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card"
                onClick={() => handleServiceClick(service)}
              >
                <h3>{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Certification Details */}
      {selectedService && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{selectedService.title}</h3>
            {selectedService.image && (
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="modal-image"
              />
            )}
            <p>{selectedService.description}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certifications;