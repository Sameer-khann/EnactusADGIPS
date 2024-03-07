import React from 'react'
import './ProMritkala.css';
import mrit from "../img/MritkalaLogo.png"
import aboutImg from "../img/ShallowFloatingBowl.a0c18316.png"


export default function ProMritkala() {
    return (
        <>
            <div className="proMritkala">
                <div className="mritkalaLogo">
                    <img src={mrit} alt="" />
                </div>
                <div className="aboutMritkala">
                    <div className="imgAbout">
                        <img src={aboutImg} alt="" />
                    </div>
                    <div>
                    </div>
                    <h1>Project Mritkala</h1>
                    <p>Project Mritkala, is an enterprise under Enactus ADGITM, that intends to acquaint the society with the revamped trend of pottery. Our aim is to succour the artisans who possess the artistry of moulding clay into alluring handcrafted resilient pieces of craftsmanship.</p>
                </div>
            </div>
            <div className="imgSectionMritkala">
               

            </div>
        </>
    )
}
