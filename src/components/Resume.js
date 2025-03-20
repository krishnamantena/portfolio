import React from 'react';
import './Style.css'; // Import the CSS file
import about from './About';

function Resume() {
  return (
    <div className="resume-page">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Resume Content */}
      <div className="resume-container">
        {/* Header Section */}
        <header className="resume-header">
          <h1>Resume</h1>
          <a href="/resume.pdf" className="download-cv" download="Resume.pdf">Download Resume</a>
        </header>

        {/* About Section */}
       

        {/* Education Section */}
        <section className="education-section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Bharatiya Vidya Bhavans – 10<sup>th</sup> Class</h3>
            <p className="duration">2018 – 2019</p>
            <p>
              Secured outstanding academic performance in Class X, attaining a remarkable 420/500 marks Bharatiya Vidya Bhavans School, recognized by the Central Borad Of Secondary Education (CBSE). Demonstrated dedication and excellence in full-time education, specializing in the 10th program.
            </p>
          </div>

          <div className="education-item">
            <h3>Narayana Junior College – 12<sup>th</sup> Class</h3>
            <p className="duration">2020 – 2021</p>
            <p>
              Attained remarkable academic excellence in Class XII with an impressive 82%, from Narayana Junior College, accredited by the Andhra Pradesh Board of Intermediate Education (BIEAP). Dedicated to full-time education, specializing in the 12th program.
            </p>
          </div>

          <div className="education-item">
            <h3>KL University – B.Tech</h3>
            <p className="duration">2021 – 2025</p>
            <p>
              Excelled in B.Tech from KL University with a stellar 9.49 CGPA, specializing in Computer Science and Engineering. Committed to full-time education, showcasing dedication and proficiency throughout the program.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <h2>My Skills</h2>
          <div className="skill">
            <p>Prgramming Languages: C, Java, Python </p>
            <p>Backend & API Development: REST API, MySQL, PostgreSQL </p>
            <p>Web Development: HTML, CSS, Javascript, Bootstrap, React.js, Django, Spring Boot </p>
            <p>AI/ML & Automation: Deep Learning, AI-powered Systems, RPA (Automation Anywhere) </p>
            <p>Security & Performance: Authentication Systems, Database Optimization, API Security </p>
            <div className="skill-bar">
              
            </div>
          </div>
          {/* Add more skills here */}
        </section>

        {/* Profile Section */}
        <section className="profile-section">
          <h2>Profile</h2>
          <div className="profile-content">
            {/* Add your profile details here */}
            <p>
              I am a passionate **Full Stack Developer** with expertise in **C, Java, C++, and Python**, specializing in **Django and Spring Boot**. With hands-on experience in developing and deploying multiple projects, I have honed my skills in **real-time analysis, secure transaction systems, and AI-powered solutions**.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;