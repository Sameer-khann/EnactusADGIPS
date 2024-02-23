import React from 'react'
import './OnGoingPro.css';
import p1 from "../img/p1.png"
import p2 from "../img/pic.png"
import p3 from "../img/p3.png"

import { Swiper, SwiperSlide ,controller} from 'swiper/react';
import 'swiper/css';


export default function OnGoingPro() {
    return (
        <>
            <div className="OngoingProject">
                <h1>On Going Projects</h1>

                <Swiper
                    className='swiperBOx'
                    spaceBetween={40}
                    slidesPerView={3}
                    centeredSlides
                    loop={true}
                >
                    <SwiperSlide className='swiperDiv'>
                        <div className="ProjectBox">
                            <img src={p1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperDiv'>
                        <div className="ProjectBox">
                            <img src={p2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperDiv'>
                        <div className="ProjectBox">
                            <img src={p3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperDiv'>
                        <div className="ProjectBox">
                            <img src={p1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperDiv'>
                        <div className="ProjectBox">
                            <img src={p2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperDiv'>
                        <div className="ProjectBox">
                            <img src={p3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperDiv'>
                        <div className="ProjectBox">
                            <img src={p2} alt="" />
                        </div>
                    </SwiperSlide>


                </Swiper>

                <div class="container">
                    <div class="box">
                        <div class="imgBx">
                            <img src={p1} alt='' />
                        </div>
                        <div class="content">
                            <div>
                                <h2>Image Title</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="imgBx">
                            <img src={p1} alt='' />
                        </div>
                        <div class="content">
                            <div>
                                <h2>Image Title</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="box">
                        <div class="imgBx">
                            <img src={p1} alt='' />
                        </div>
                        <div class="content">
                            <div>
                                <h2>Image Title</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
