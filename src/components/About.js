import React from 'react';
import './Style.css'; // Import the CSS file
import Resume from './Resume';
import Projects from './Projects';


function About() {
  
  return (
    <div className="about-page">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="Resume">Resume</a></li>
          <li><a href="Projects">Work</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="about-container">
        <h1>About Me</h1>
        <p className="intro">
        A passionate Full Stack Developer with a strong foundation in C, Java, C++, and Python, specializing in Django and Spring Boot. With hands-on experience in developing and deploying multiple projects, I have honed my skills in real-time analysis, secure transaction systems, and AI-powered solutions. My expertise spans web development, backend systems, AI/ML, and cloud computing, backed by certifications in AWS Cloud and RPA.</p>
        <p className="intro">
        I thrive on solving complex problems and transforming ideas into scalable, efficient, and user-friendly applications. From building a secure online bidding platform to engineering a multimodal emotion recognition system, I am driven by innovation and a commitment to delivering high-quality solutions. My goal is to leverage technology to create impactful, secure, and seamless digital experiences.</p>

        <div className="profile-section">
          <h2>Mantena Krishna Teja</h2>
          <p className="designation">Software Developer</p>

          <div className="contact-info">
            <p><strong>EMAIL</strong><br />krishnamantena06@gmail.com</p>
            <p><strong>PHONE</strong><br />+91 9346245037</p>
            <p><strong><a href="https://www.linkedin.com/in/krishna-teja-mantena-98b61b283/">Linkedin</a></strong><br /></p>
            <p><strong><a href="https://github.com/krishnamantena">Github</a></strong><br /></p>
            <p><strong>BIRTHDAY</strong><br />October 08, 2003</p>
            <p><strong>LOCATION</strong><br />Vijayawada, Andhra Pradesh, India</p>
          </div>
        </div>

        <div className="services-section">
          <h2>What I’m Doing</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Web Design</h3>
              <p>The most modern and high-quality design made at a professional level.</p>
            </div>
            <div className="service-card">
              <h3>Web Development</h3>
              <p>High-quality development of sites at the professional level.</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;