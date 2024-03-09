import React, { useState, useEffect } from 'react';
import './ImagSlider.css'; 
import pic1 from "../img/p1.png";
import pic2 from "../img/p3.png";
import pic3 from "../img/pic.png";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [pic1, pic2, pic3]; // Update to use the image paths directly

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change the interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider-container">
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'center' : index === (currentIndex - 1 + images.length) % images.length ? 'left' : 'right'}`}
          >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className='slider-button' onClick={handlePrev}>&lt;</button>
      <button className='slider-button' onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default ImageSlider;
