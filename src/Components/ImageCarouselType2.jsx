import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './imageCarouselType2.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper className="swiper2"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // className="mySwiper2"
      >
        <SwiperSlide className="siperSlide2" > <img src="https://images.unsplash.com/photo-1707327956851-30a531b70cda?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> </SwiperSlide>
        <SwiperSlide className="siperSlide2"  > <img src="https://images.unsplash.com/photo-1708721205323-98eaaa0482ac?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> </SwiperSlide>
        <SwiperSlide className="siperSlide2"  ><img src="https://images.unsplash.com/photo-1708649290066-5f617003b93f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></SwiperSlide>
        <SwiperSlide className="siperSlide2"  >Slide 4</SwiperSlide>
        <SwiperSlide className="siperSlide2" >Slide 5</SwiperSlide>
 
      </Swiper>
    </>
  );
}


