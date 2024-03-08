import React from "react"
import "./Navbar.css"
import {Link} from 'react-router-dom'

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
                        <Link  to="/">Home</Link>
                    </div>
                    <div class="about">
                    <Link  to="/AboutPage">About</Link>
                    </div>
                    <div class="store">
                        <a href="https://darpan.enactusadgitm.in/">Store</a>
                    </div>
                    <div class="projects">
                        <Link to="/ProjectPage">Project</Link>
                    </div>
                    <div class="Team">
                    <Link  to="/TeamPage">Team</Link>
                    </div>
                    <div class="events">
                    <Link  to="/EventPage">Event</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

