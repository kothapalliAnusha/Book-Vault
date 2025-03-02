import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

//react icons
import { FaStar } from 'react-icons/fa6';
import { Avatar } from "flowbite-react";
import proPic from "../assets/profile.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

function Review() {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug '>Our customer</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg:white py-10 px-5 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* Text */}
                <div className='mt-7'>
                    <p className='mb-5'>Fans of the Stormlight Archive series have praised Sanderson's ability to weave together multiple storylines, delivering an epic and satisfying continuation of the series. The book's rich detail and emotional 
                        depth have left readers eagerly anticipating the next installment.</p>
                        <Avatar img={proPic} className='w-10 mb-4' />
                        <h5 className='text-lg font-medium'>Mark Ping</h5>
                        <p className='text-base'>CEO ,abc company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg:white py-10 px-5 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* Text */}
                <div className='mt-7'>
                    <p className='mb-5'>Fans of the Stormlight Archive series have praised Sanderson's ability to weave together multiple storylines, delivering an epic and satisfying continuation of the series. The book's rich detail and emotional 
                        depth have left readers eagerly anticipating the next installment.</p>
                        <Avatar img={proPic} className='w-10 mb-4' />
                        <h5 className='text-lg font-medium'>Mark Ping</h5>
                        <p className='text-base'>CEO ,abc company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg:white py-10 px-5 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* Text */}
                <div className='mt-7'>
                    <p className='mb-5'>Fans of the Stormlight Archive series have praised Sanderson's ability to weave together multiple storylines, delivering an epic and satisfying continuation of the series. The book's rich detail and emotional 
                        depth have left readers eagerly anticipating the next installment.</p>
                        <Avatar img={proPic} className='w-10 mb-4' />
                        <h5 className='text-lg font-medium'>Mark Ping</h5>
                        <p className='text-base'>CEO ,abc company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg:white py-10 px-5 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                {/* Text */}
                <div className='mt-7'>
                    <p className='mb-5'>Fans of the Stormlight Archive series have praised Sanderson's ability to weave together multiple storylines, delivering an epic and satisfying continuation of the series. The book's rich detail and emotional 
                        depth have left readers eagerly anticipating the next installment.</p>
                        <Avatar img={proPic} className='w-10 mb-4' />
                        <h5 className='text-lg font-medium'>Mark Ping</h5>
                        <p className='text-base'>CEO ,abc company</p>
                </div>
            </div>
        </SwiperSlide>
       
      </Swiper>
        </div>
    </div>
  )
}

export default Review