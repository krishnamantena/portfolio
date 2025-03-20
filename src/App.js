import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Publications';
import Resume from './components/Resume';
import Certifications from './components/Certifications';
import Publications from './components/Publications';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/Certifications" element={<Certifications/>}/>
      <Route path="/Publications" element={<Publications/>}/>
      <Route path="/Resume" element={<Resume/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
