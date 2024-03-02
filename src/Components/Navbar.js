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
