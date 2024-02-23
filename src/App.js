import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import LandingPage from '../src/Pages/LandingPage.js';
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
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/AboutPage" element={<AboutPage/>} />
          <Route path="/EventPage" element={<EventPage />} />
          <Route path="/TeamPage" element={<TeamPage />} />
          <Route path="/ProjectPage" element={<ProjectPage/>} />
          <Route path="/Attendance" element={<Attendance/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
