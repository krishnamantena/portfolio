import React from 'react';
//import { gsap } from 'gsap';
import './Style.css'; 
import About from './About';
import Resume from './Resume';
import Certifications from './Certifications';
import Projects from './Projects';
import Publications from './Publications';
import { Link } from 'react-router-dom';
function Home(){
  return (
    <div className="banner-area">
      <header>
        <div className="menu">
          <ul>
            
           
            <li><a href="Projects">Work</a></li>
            <li><a href="Resume">Resume</a></li>
            <li><a href="Certifications">Certifications</a></li>
            <li><a href="About">About</a></li>
          </ul>
        </div>
      </header>
      <div className="banner-text">
        <h1></h1>
        <p>
          
        </p>
        
      </div>
    </div>
  );
};



export default Home;