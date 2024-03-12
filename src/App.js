import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import LandingPage from '../src/Pages/LandingPage.jsx';
import AboutPage from '../src/Pages/AboutPage.js';
import EventPage from '../src/Pages/EventPage.js';
import TeamPage from '../src/Pages/TeamPage.js';
import ProjectPage from '../src/Pages/ProjectPage.js';
import Navbar from '../src/Components/Navbar.js';
import Footer from '../src/Components/Footer.js';

import './App.css';
import ProMritkala from './Pages/ProMritkala.js';
import ProAstitav from './Pages/ProAstitav.js';
import Gutargun from './Pages/Gutargun.js';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        {/* <ScrollToTop/> */}
        <Routes>
           <Route path="/" element={<LandingPage/>} />
          <Route path="/AboutPage" element={<AboutPage/>} />
          <Route path="/EventPage" element={<EventPage />} />
          <Route path="/TeamPage" element={<TeamPage />} /> 
          <Route path="/ProjectPage" element={<ProjectPage/>} />
          <Route path="/Mritkala" element={<ProMritkala/>} />
          <Route path="/astitav" element={<ProAstitav/>} />
          <Route path="/gutargun" element={<Gutargun/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
