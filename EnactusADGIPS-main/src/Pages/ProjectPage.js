import React from 'react'
import './ProjectPage.css';
import OnGoingPro from '../Components/OnGoingPro';
import ProAstitav from './ProAstitav';

export default function ProjectPage() {
  return (
    <div>
      <div className="hero-section">
        <div>
        <h1>Welcome to Our Website</h1>
        <p>This is a hero section. You can add a brief description or call-to-action here.</p>
        </div>
        <div>
        <span className='buttom-hero'>Learn More</span>
        </div>
      </div>
      <OnGoingPro/>
      <ProAstitav/>
    </div>
  )
}
