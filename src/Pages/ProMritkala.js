import React from 'react'
import './ProMritkala.css';
import mrit from "../img/MritkalaLogo.png"
import aboutImg from "../img/ShallowFloatingBowl.a0c18316.png"
import projectImg from "../img/product.png"
import commnity1 from "../img/c1.jpg"
import commnity2 from "../img/c2.jpg"
import commnity3 from "../img/c3.jpg"
import headImg from "../img/aditya.f4955f3c.jpeg"


export default function ProMritkala() {
    return (
        <>
            <div className="proMritkala">
                <div className="mritkalaLogo ">
                    <img src={mrit} alt="" />
                </div>
                <div className="aboutMritkala">
                    <div className="imgAbout floatingM">
                        <img src={aboutImg} alt="" />
                    </div>
                    <div>
                    </div>
                    <h1>Project Mritkala</h1>
                    <p>Project Mritkala, is an enterprise under Enactus ADGITM, that intends to acquaint the society with the revamped trend of pottery. Our aim is to succour the artisans who possess the artistry of moulding clay into alluring handcrafted resilient pieces of craftsmanship.</p>
                </div>
            </div>
            <div className="imgSectionMritkala">
                <h1>Mritkala</h1>
            </div>
            <div className="productSectionMritkala">
                <h1>FEATURED PRODUCT</h1>
                <div className="ProductImgMritkala">
                    <img src={projectImg} alt="" />
                </div>
                <p>A mug that is stylish and elegant at the same time. This exotic piece will bring a touch of elegance to your existing crockery collection and a delight to your tea time. It is dishwater friendly and comes in vibrant colours.</p>
                <div className="linkMritkala">CHECK OUT OTHER PRODUCTS &#10132;</div>
            </div>
            <div className="communityMritkala">
                <h1>COMMUNITY</h1>
                <div className="communitySection">
                    <div className="commnityImg">
                        <img src={commnity1} alt="" />
                        <img src={commnity2} alt="" />
                        <img src={commnity3} alt="" />
                    </div>
                    <div className="communityContent">
                    <p>The backbone of pottery industry are numerous competent craftsmen who have achieved mastery and finesse in this artform over a period of several years. The potter community situated in Prajapat Colony, Uttam Nagar have faced diverse hardships, but their zeal and passion towards their craft always subdued them. By joining hands with our Project, these potters have taken a step towards a more stable income, increased customer satisfaction and expansion of their line of products.</p>
                    </div>
                </div>
            </div>
            <div className="OUR-INVOLVEMENT">
                <h1>OUR INVOLVEMENT</h1>
                <p>Project Mritkala, provides these potters with a platform to deal with clients virtually. We have created a website to exhibit the product catalogues of different vendors. With no stress of haggling, these handcrafted products are sold at reasonable prices and are ordered by a click of a button. With our stimulation and continual orders, these potter communities will be urged to utilise their tacit knowledge for the upliftment of the community.</p>
            </div>
            <div className="ProjectHeadMritkala">
                <div className="ProhjectHeadImg">
                    <img src={headImg} alt="" />
                    <div className="positionHead">
                        <h1>PROJECT HEAD</h1>
                    </div>
                </div>
                <div className="aboutHead">
                    <h1>ADITYA AGGARWAL</h1>
                    <p>The backbone of pottery industry are numerous competent craftsmen who have achieved mastery and finesse in this artform over a period of several years.</p>
                </div>
            </div>
        </>
    )
}
