import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './imageCarousel.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function ImageCarousel({heading , link1 , link2 , link3 , link4, link5}) {
  return (
    <>
   
    <h1 className='heading-land ' >{heading}
    </h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        initialSlide={2}
      >
        <SwiperSlide>
          <img src={link1} />
        </SwiperSlide>
      <SwiperSlide>
          <img src={link2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={link3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={link4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={link5} />
        </SwiperSlide>
     
       
      </Swiper>
      
    </>
  );
}
