import './TeamPage.css';
import img1 from '../img/Wallpaper.png'
import img2 from '../img/wallpaperflare.com_wallpaper.jpg'
import React, { useState, useRef } from 'react';

export default function TeamPage() {

  var right = 0;
  var maxMargin;
  var jumpMargin = 150;
  
  function setWidth(){
    var boxwidth = document.querySelector(".item-box").offsetWidth;
    var displaywidth = document.querySelector(".slider-container").offsetWidth;
    var displayheight = document.querySelector(".slider-container").offsetHeight;
    var children = document.querySelectorAll(".slides > .item-box").length;
    var outerboxwidth = children * boxwidth + (children*10);
    document.querySelector(".slides").style.width = outerboxwidth+"px";
    document.querySelectorAll("button")[0].style.height = displayheight+"px";
    document.querySelectorAll("button")[1].style.height = displayheight+"px";
    maxMargin = outerboxwidth - displaywidth;
  }
  
  function slideLeft(event){
    var rowcont = document.querySelector(".slides");
    if(right <= -maxMargin){
      event.preventDefault();
    }
    else{
      right -= jumpMargin;
    }
     rowcont.style.marginLeft = right+"px";
  }
  
  function slideRight(event){
    var rowcont = document.querySelector(".slides");
    if(right==0){
      event.preventDefault();
    }
    else if(right >= maxMargin){
      event.preventDefault();
    }
    else{
       right += jumpMargin;
    }
    rowcont.style.marginLeft = right+"px";
  }
  
  window.onload=setWidth;

  return (
    <>
      
      <div>
      <div className="team">
        <h1>We Are Enactus</h1>
        <div className='main_pic_frame'>
          <div className="main_photo">
          <img src={img1}/>
          <img src={img2}/>
          <img src={img1}/>
          <img src={img2}/>
          </div>
        </div>
        <div className="leads grid">
          <span>
            <img src={img2}  className="main" />
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
        <h1>The Council</h1>
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
        <button type="button"  onClick={slideRight}>❮</button>
        <div className="slides">
          <div className="item-box">
            <span>
              <img src={img2} height="200px" width="200px" className="main" /> 
              <h2>president</h2>
              <h3>Vibhor jain</h3>
              <h5>lorem ipsum</h5>
            </span>
          </div>
          <div className="item-box">
            <span>
              <img src={img2} height="200px" width="200px" className="main" /> 
              <h2>president</h2>
              <h3>Vibhor jain</h3>
              <h5>lorem ipsum</h5>
            </span>
          </div>
          <div className="item-box">
            <span>
              <img src={img2} height="200px" width="200px" className="main" /> 
              <h2>president</h2>
              <h3>Vibhor jain</h3>
              <h5>lorem ipsum</h5>
            </span>
          </div>
          <div className="item-box">
            <span>
              <img src={img2} height="200px" width="200px" className="main" /> 
              <h2>president</h2>
              <h3>Vibhor jain</h3>
              <h5>lorem ipsum</h5>
            </span>
          </div>
          <div className="item-box">
            <span>
              <img src={img2} height="200px" width="200px" className="main" /> 
              <h2>president</h2>
              <h3>Vibhor jain</h3>
              <h5>lorem ipsum</h5>
            </span>
          </div>
          <div className="item-box">
            <span>
              <img src={img2} height="200px" width="200px" className="main" /> 
              <h2>president</h2>
              <h3>Vibhor jain</h3>
              <h5>lorem ipsum</h5>
            </span>
          </div>
          <div className="item-box">
            <span>
              <img src={img2} height="200px" width="200px" className="main" /> 
              <h2>president</h2>
              <h3>Vibhor jain</h3>
              <h5>lorem ipsum</h5>
            </span>
          </div>
          <div className="item-box">
            <span>
              <img src={img2} height="200px" width="200px" className="main" /> 
              <h2>president</h2>
              <h3>Vibhor jain</h3>
              <h5>lorem ipsum</h5>
            </span>
          </div>
        </div>
        <button type="button" onClick={slideLeft}>❯</button>
      </div>
      <hr></hr>
      <div>
        <h1>Here are the previous council members</h1>
      </div>
      <div className="previous">
      <h1>Enactus 7.0</h1>
        <div className="seven grid"> 
          <span>
            <img src={img2} height="250px" width="250px" className="main"/> 
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
        <h1>Enactus 6.0</h1>
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
          <span>
          <img src={img2} height="250px" width="250px" className="main" />
          <h2>president</h2>
          <h3>Vibhor jain</h3>
          <div className='info'>this to inform you that you can type any kind of text here</div>
        </span>
        </div>
      </div>
      <hr></hr>
      <div>
        <h1>Enactus 5.0</h1>
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
          <span>
          <img src={img2} height="250px" width="250px" className="main" />
          <h2>president</h2>
          <h3>Vibhor jain</h3>
          <div className='info'>this to inform you that you can type any kind of text here</div>
        </span>
        </div>
      </div>
      <hr></hr>
      <div>
        <h1>Enactus 4.0</h1>
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
          <span>
          <img src={img2} height="250px" width="250px" className="main" />
          <h2>president</h2>
          <h3>Vibhor jain</h3>
          <div className='info'>this to inform you that you can type any kind of text here</div>
        </span>
        </div>
      </div>
      <hr></hr>
      <div>
        <h1>Enactus 3.0</h1>
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
          <span>
          <img src={img2} height="250px" width="250px" className="main" />
          <h2>president</h2>
          <h3>Vibhor jain</h3>
          <div className='info'>this to inform you that you can type any kind of text here</div>
        </span>
        </div>
      </div>
      <hr></hr>
      <div>
        <h1>Enactus 2.0</h1>
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
          <span>
          <img src={img2} height="250px" width="250px" className="main" />
          <h2>president</h2>
          <h3>Vibhor jain</h3>
          <div className='info'>this to inform you that you can type any kind of text here</div>
        </span>
        </div>
      </div>
      <hr></hr>
      <div>
        <h1>Enactus 1.0</h1>
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
          <span>
          <img src={img2} height="250px" width="250px" className="main" />
          <h2>president</h2>
          <h3>Vibhor jain</h3>
          <div className='info'>this to inform you that you can type any kind of text here</div>
        </span>
        </div>
      </div>
    </div>
    </>
  )
}