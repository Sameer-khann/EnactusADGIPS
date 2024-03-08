import React from "react"
import "./Footer.css"

export default function Footer() {
    return (
        <div>
            <div class="footer">
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
                <div class="second">
                    <div class="main-logo1"></div>
                    <div class="main-logo2"></div>
                </div>
            </div>
            <div class="copyright">
                <div class="l1">Enactus ADGITM © 2020</div>
                <div class="l2">All Rights Reserved</div>
            </div>
        </div>
    )
}

