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

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        {/* <ScrollToTop/> */}
        <Routes>
           {/* <Route path="/" element={<LandingPage/>} /> */}
          <Route path="/AboutPage" element={<AboutPage/>} />
          <Route path="/EventPage" element={<EventPage />} />
          <Route path="/TeamPage" element={<TeamPage />} /> 
          <Route path="/" element={<ProjectPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
