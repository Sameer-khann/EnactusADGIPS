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
