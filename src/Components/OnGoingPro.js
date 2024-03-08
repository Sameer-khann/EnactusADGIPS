import React from 'react'
import './OnGoingPro.css';
import p1 from "../img/p1.png"
import p2 from "../img/pic.png"
import p3 from "../img/p3.png"
import proimg from "../img/p3.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// import required modules
import { EffectCards } from 'swiper/modules';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import ImagSlider from './ImagSlider';

export default function OnGoingPro() {
    return (
        <>
            <div className="OngoingProject">
                <h1>On Going Projects</h1>



                <Swiper
                    className='swiperBOxOngoing'
                    spaceBetween={40}
                    slidesPerView={3}
                    centeredSlides
                    loop={true}
                >
                    <SwiperSlide className='swiperDiv'>
                        <div className="ProjectBoxOngoing">
                            <img src={p1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperDiv'>
                        <div className="ProjectBoxOngoing">
                            <img src={p2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperDiv'>
                        <div className="ProjectBoxOngoing">
                            <img src={p3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperDiv'>
                        <div className="ProjectBoxOngoing">
                            <img src={p1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperDiv'>
                        <div className="ProjectBoxOngoing">
                            <img src={p2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperDiv'>
                        <div className="ProjectBoxOngoing">
                            <img src={p3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiperDiv'>
                        <div className="ProjectBoxOngoing">
                            <img src={p2} alt="" />
                        </div>
                    </SwiperSlide>


                </Swiper>

                <h1>Past Projects</h1>

                <ImagSlider />

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

                <br />
                <br />
                <br />


                <div className="showCaseSection">
                    <div className="showCase">
                        <div className="imgSection">
                            <img src={proimg} alt="" />
                        </div>
                        <div className="discription">
                            <h1>Technology Stack</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis molestiae eos labore? Nisi ab accusamus quidem molestiae cupiditate, ullam illo ut consequuntur a alias quasi, tenetur voluptas, temporibus blanditiis ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, nemo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus beatae omnis quos itaque dicta aperiam nobis, harum nihil voluptas totam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto cupiditate sint unde dolore facilis, saepe nobis totam vel. Cum, autem!</p>
                            <div className="button">
                                <button class="button-17">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="showCaseSection">
                    <div className="showCase">
                        <div className="imgSection">
                            <img src={proimg} alt="" />
                        </div>
                        <div className="discription">
                            <h1>Technology Stack</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis molestiae eos labore? Nisi ab accusamus quidem molestiae cupiditate, ullam illo ut consequuntur a alias quasi, tenetur voluptas, temporibus blanditiis ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, nemo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus beatae omnis quos itaque dicta aperiam nobis, harum nihil voluptas totam? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto cupiditate sint unde dolore facilis, saepe nobis totam vel. Cum, autem!</p>
                            <div className="button">
                                <button class="button-17">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}
