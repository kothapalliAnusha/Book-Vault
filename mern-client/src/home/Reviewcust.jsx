import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from 'react-icons/fa6';
import { Avatar } from "flowbite-react";
import proPic from "../assets/profile.jpg"

function Reviewcust() {
  return (
    
        <SwiperSlide>
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
        
        
    
  )
}

export default Reviewcust