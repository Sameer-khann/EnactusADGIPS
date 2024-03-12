import React from "react"
import "./Footer.css"

export default function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="second">
                    <div className="main-logo1"></div>
                    <div className="main-logo2"></div>
                </div>
                <div className="feature">
                    <h1>Features</h1>
                    <div className="content">
                        <div className="home">
                            <a href="https://enactusadgitm.in/">Home</a>
                        </div>
                        <div className="about">
                            <a href="#">About</a>
                        </div>
                        <div className="store">
                            <a href="https://darpan.enactusadgitm.in/">Store</a>
                        </div>
                        <div className="projects">
                            <a href="https://enactusadgitm.in/projects">
                                Projects
                            </a>
                        </div>
                        <div className="Team">
                            <a href="#">Team</a>
                        </div>
                        <div className="events">
                            <a href="#">Events</a>
                        </div>
                    </div>
                </div>
                <div className="first">
                    <h1>Connect With Us</h1>
                    <div className="socials">
                        <a
                            href="https://www.linkedin.com/company/enactus-adgitm"
                            className="firstlogo"
                        ></a>
                        <a
                            href="https://www.instagram.com/enactus.adgitm/"
                            className="secondlogo"
                        ></a>
                        <a
                            href="https://twitter.com/adgitmenactus"
                            className="thirdlogo"
                        ></a>
                    </div>
                    <div className="email">
                        <div className="c1">enactusadgitm@gmail.com</div>
                    </div>
                    <div className="address">
                        <div className="c2">
                            <p>  FC-26, Panduk Shila Marg, Zero Pusta Rd, Shastri
                            Park, Shahdara, New Delhi, Delhi-110053</p>
                          
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="l1">Enactus ADGITM © 2024</div>
                <div className="l2">All Rights Reserved</div>
            </div>
        </div>
    )
}

