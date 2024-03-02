import React from 'react'
import './ProjectPage.css';
import OnGoingPro from '../Components/OnGoingPro';

export default function ProjectPage() {
  return (
    <div>
      <div className="hero-section">
        <h1>Welcome to Our Website</h1>
        <p>This is a hero section. You can add a brief description or call-to-action here.</p>
        <button>Learn More</button>
      </div>
      <OnGoingPro/>
    </div>
  )
}
