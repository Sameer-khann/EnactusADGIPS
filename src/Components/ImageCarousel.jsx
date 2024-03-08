import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './imageCarousel.css';
// import { EffectCoverflow, Pagination } from 'swiper';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function ImageCarousel({ heading, link1, link2, link3, link4, link5 }) {
  return (
    <>
      <h1 className='heading'>{heading}</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 400,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        id="mySwiper"
        // style={{ height: '400px', width: '100%' }} // Apply inline style to set height and width
        initialSlide={2}
      >
        <SwiperSlide id='landingpageSlider'>
          <img src={link1} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide id='landingpageSlider'>
          <img src={link2} alt="slide2" />
        </SwiperSlide>
        <SwiperSlide id='landingpageSlider'>
          <img src={link3} alt="slide3" />
        </SwiperSlide>
        <SwiperSlide id='landingpageSlider'>
          <img src={link4} alt="slide4" />
        </SwiperSlide>
        <SwiperSlide id='landingpageSlider'>
          <img src={link5} alt="slide5" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
