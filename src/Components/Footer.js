import React from "react"
import "./Footer.css"

export default function Footer() {
    return (
        <div>
            <div class="footer">
                <div class="second">
                    <div class="main-logo1"></div>
                    <div class="main-logo2"></div>
                </div>
                <div class="feature">
                    <h3>Features</h3>
                    <div class="content">
                        <div class="home">
                            <a href="https://enactusadgitm.in/">Home</a>
                        </div>
                        <div class="about">
                            <a href="#">About</a>
                        </div>
                        <div class="store">
                            <a href="https://darpan.enactusadgitm.in/">Store</a>
                        </div>
                        <div class="projects">
                            <a href="https://enactusadgitm.in/projects">
                                Projects
                            </a>
                        </div>
                        <div class="Team">
                            <a href="#">Team</a>
                        </div>
                        <div class="events">
                            <a href="#">Events</a>
                        </div>
                    </div>
                </div>
                <div class="first">
                    <div class="heading">Connect With Us</div>
                    <div class="socials">
                        <a
                            href="https://www.linkedin.com/company/enactus-adgitm"
                            class="firstlogo"
                        ></a>
                        <a
                            href="https://www.instagram.com/enactus.adgitm/"
                            class="secondlogo"
                        ></a>
                        <a
                            href="https://twitter.com/adgitmenactus"
                            class="thirdlogo"
                        ></a>
                    </div>
                    <div class="email">
                        <div class="c1">enactusadgitm@gmail.com</div>
                    </div>
                    <div class="address">
                        <div class="c2">
                            FC-26, Panduk Shila Marg, Zero Pusta Rd, Shastri
                            Park, Shahdara, New Delhi, Delhi-110053
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <div class="l1">Enactus ADGITM © 2024</div>
                <div class="l2">All Rights Reserved</div>
            </div>
        </div>
    )
}

