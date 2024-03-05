import React from "react"
import "./Navbar.css"

export default function Navbar() {
    return (
        <>
            <div class="navbar">
                <div class="nav-logoborder">
                    <div class="logo1"></div>
                    <div class="logo2"></div>
                </div>
                <div class="content">
                    <div class="home">
                        <a href="https://enactusadgitm.in/">Home</a>
                    </div>
                    <div class="about">
                        <a href="">About</a>
                    </div>
                    <div class="store">
                        <a href="https://darpan.enactusadgitm.in/">Store</a>
                    </div>
                    <div class="projects">
                        <a href="https://enactusadgitm.in/projects">Projects</a>
                    </div>
                    <div class="Team">
                        <a href="">Team</a>
                    </div>
                    <div class="events">
                        <a href="">Events</a>
                    </div>
                </div>
            </div>
        </>
    )
}
import React from 'react'
import './Navbar.css';

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#events">Events</a></li>
                    <li><a href="#projects">Projects</a></li>
                </ul>
            </nav>
        </>
    )
}
