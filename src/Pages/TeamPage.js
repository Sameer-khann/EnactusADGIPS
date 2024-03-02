import './TeamPage.css';
import img1 from '../img/Wallpaper.png'
import img2 from '../img/wallpaperflare.com_wallpaper.jpg'
import React, { useState, useRef } from 'react';

export default function TeamPage(slides) {

  const [slideIndex, setSlideIndex] = useState(0);
  const slideRef = useRef(null);
  const slideWidth = slideRef.current ? slideRef.current.offsetWidth : 0;

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : slides.length - 1
    );
  };

  const nextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex < slides.length - 1 ? prevIndex + 1 : 0
    );
  };

  const slideStyle = {
    transform: `translateX(-${slideIndex * slideWidth}px)`,
    transition: 'transform 0.5s ease-in-out',
  };

  return (
    <>
      
      <div>
      <div className="team">
        <h1>We Are Enactus</h1>
        <div className="main_photo">
          <img src={img1}/>
          <img src={img2}/>
          <img src={img1}/>
          <img src={img2}/>

        </div>
        <div className="leads grid">
          <span>
            <img src={img2} height="250px" width="250px" className="main" />
            <h2>president</h2>
            <h3>Vibhor jain</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
          <span>
            <img src={img2} height="250px" width="250px" className="main" />
            <h2>vice president</h2>
            <h3>Tanishka</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
          <span>
            <img src={img2} height="250px" width="250px" className="main" />
            <h2>general secretary</h2>
            <h3>divyansh</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
        </div>
      </div>
      <hr></hr>
      <div>
        <h1>The council</h1>
      </div>
      <div className="council grid">
        <span>
          <img src={img2} height="250px" width="250px" className="main" />
          <h2>president</h2>
          <h3>Vibhor jain</h3>
          <div className='info'>this to inform you that you can type any kind of text here</div>
        </span>
        <span>
          <img src={img2} height="250px" width="250px" className="main" />
          <h2>president</h2>
          <h3>Vibhor jain</h3>
          <div className='info'>this to inform you that you can type any kind of text here</div>
        </span>
        <span>
          <img src={img2} height="250px" width="250px" className="main" />
          <h2>president</h2>
          <h3>Vibhor jain</h3>
          <div className='info'>this to inform you that you can type any kind of text here</div>
        </span>
      </div>
      <hr></hr>
      <div>
        <h1>Here are our diligent department heads</h1>
      </div>
      <div className="slider-container">
        <div className="slides">
          <div className="slide">
            <span>
              <img src={img2} height="200px" width="200px" className="main" /> 
              <h2>president</h2>
              <h3>Vibhor jain</h3>
              <h5>lorem ipsum</h5>
            </span>
          </div>
          <div className="slide">
            <span>
              <img src={img2} height="200px" width="200px" className="main" /> 
              <h2>president</h2>
              <h3>Vibhor jain</h3>
              <h5>lorem ipsum</h5>
            </span>
          </div>
          <div className="slide">
            <span>
              <img src={img2} height="200px" width="200px" className="main" /> 
              <h2>president</h2>
              <h3>Vibhor jain</h3>
              <h5>lorem ipsum</h5>
            </span>
          </div>
          <div className="slide">
            <span>
              <img src={img2} height="200px" width="200px" className="main" /> 
              <h2>president</h2>
              <h3>Vibhor jain</h3>
              <h5>lorem ipsum</h5>
            </span>
          </div>
          <div className="slide">
            <span>
              <img src={img2} height="200px" width="200px" className="main" /> 
              <h2>president</h2>
              <h3>Vibhor jain</h3>
              <h5>lorem ipsum</h5>
            </span>
          </div>
          <div className="slide">
            <span>
              <img src={img2} height="200px" width="200px" className="main" /> 
              <h2>president</h2>
              <h3>Vibhor jain</h3>
              <h5>lorem ipsum</h5>
            </span>
          </div>
          <div className="slide">
            <span>
              <img src={img2} height="200px" width="200px" className="main" /> 
              <h2>president</h2>
              <h3>Vibhor jain</h3>
              <h5>lorem ipsum</h5>
            </span>
          </div>
          <div className="slide">
            <span>
              <img src={img2} height="200px" width="200px" className="main" /> 
              <h2>president</h2>
              <h3>Vibhor jain</h3>
              <h5>lorem ipsum</h5>
            </span>
          </div>
        </div>
        <div className="prev" onClick={prevSlide}>&#10094;</div>
        <div className="next" onClick={nextSlide}>&#10095;</div>
      </div>
      <hr></hr>
      <div>
        <h1>Here are the previous council members</h1>
      </div>
      <div className="previous">
      <h1>enactus 7.0</h1>
        <div className="seven grid"> 
          <span>
            <img src={img2} height="250px" width="250px" className="main"/> 
            <h2>president</h2>
            <h3>Vibhor jain</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
          <span>
            <img src={img2} height="250px" width="250px" className="main"/>
            <h2>vice president</h2>
            <h3>Tanishka</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
          <span>
            <img src={img2} height="250px" width="250px" className="main"/>
            <h2>general secretory</h2>
            <h3>divyansh</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
        </div>
      </div>
      <hr></hr>
      <div>
        <h1>enactus 6.0</h1>
        <div className="six grid"> 
        <span>
            <img src={img2} height="250px" width="250px" className="main"/> 
            <h2>president</h2>
            <h3>Vibhor jain</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
          <span>
            <img src={img2} height="250px" width="250px" className="main"/>
            <h2>vice president</h2>
            <h3>Tanishka</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
          <span>
            <img src={img2} height="250px" width="250px" className="main"/>
            <h2>general secretory</h2>
            <h3>divyansh</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
        </div>
      </div>
      <hr></hr>
      <div>
        <h1>enactus 5.0</h1>
        <div className="five grid"> 
        <span>
            <img src={img2} height="250px" width="250px" className="main"/> 
            <h2>president</h2>
            <h3>Vibhor jain</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
          <span>
            <img src={img2} height="250px" width="250px" className="main"/>
            <h2>vice president</h2>
            <h3>Tanishka</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
          <span>
            <img src={img2} height="250px" width="250px" className="main"/>
            <h2>general secretory</h2>
            <h3>divyansh</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
        </div>
      </div>
      <hr></hr>
      <div>
        <h1>enactus 4.0</h1>
        <div className="four grid"> 
        <span>
            <img src={img2} height="250px" width="250px" className="main"/> 
            <h2>president</h2>
            <h3>Vibhor jain</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
          <span>
            <img src={img2} height="250px" width="250px" className="main"/>
            <h2>vice president</h2>
            <h3>Tanishka</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
          <span>
            <img src={img2} height="250px" width="250px" className="main"/>
            <h2>general secretory</h2>
            <h3>divyansh</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
        </div>
      </div>
      <hr></hr>
      <div>
        <h1>enactus 3.0</h1>
        <div className="three grid"> 
        <span>
            <img src={img2} height="250px" width="250px" className="main"/> 
            <h2>president</h2>
            <h3>Vibhor jain</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
          <span>
            <img src={img2} height="250px" width="250px" className="main"/>
            <h2>vice president</h2>
            <h3>Tanishka</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
          <span>
            <img src={img2} height="250px" width="250px" className="main"/>
            <h2>general secretory</h2>
            <h3>divyansh</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
        </div>
      </div>
      <hr></hr>
      <div>
        <h1>enactus 2.0</h1>
        <div className="two grid"> 
        <span>
            <img src={img2} height="250px" width="250px" className="main"/> 
            <h2>president</h2>
            <h3>Vibhor jain</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
          <span>
            <img src={img2} height="250px" width="250px" className="main"/>
            <h2>vice president</h2>
            <h3>Tanishka</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
          <span>
            <img src={img2} height="250px" width="250px" className="main"/>
            <h2>general secretory</h2>
            <h3>divyansh</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
        </div>
      </div>
      <hr></hr>
      <div>
        <h1>enactus 1.0</h1>
        <div className="one grid"> 
        <span>
            <img src={img2} height="250px" width="250px" className="main"/> 
            <h2>president</h2>
            <h3>Vibhor jain</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
          <span>
            <img src={img2} height="250px" width="250px" className="main"/>
            <h2>vice president</h2>
            <h3>Tanishka</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
          <span>
            <img src={img2} height="250px" width="250px" className="main"/>
            <h2>general secretory</h2>
            <h3>divyansh</h3>
            <div className='info'>this to inform you that you can type any kind of text here</div>
          </span>
        </div>
      </div>
    </div>
    </>
  )
}
