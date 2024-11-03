import React from 'react';
import FavBookSectionimg from "../assets/favoritebook.jpg";
import { Link } from 'react-router-dom';

function FavBookSection() {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2'>
        <img src={FavBookSectionimg} alt="" className='rounded md:w-10/12' />
      </div>
      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Explore Books You'll Love <span className='text-green-700'> Here!🌞</span></h2>
        <p className='mb-10 text-lg md:w-5/6'>Books are friends who never leave your side. I find this saying to be very true as books have always been there for me. I enjoy reading books. They have the power to help us travel through worlds without moving from our places. In addition, books also enhance our imagination. Growing up, my parents and teachers always encouraged me to read. They taught me the importance of reading. Subsequently, I have read several books. However, 
         It is one of the most intriguing reads of my life.</p>
      {/* stats */}
      <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
        <div>
          <h3 className='text-3xl font-bold'>800+</h3>
          <p className='text-base'>Book Listings</p>
        </div>
        <div>
          <h3 className='text-3xl font-bold'>550+</h3>
          <p className='text-base'>Registered Users</p>
        </div>
        <div>
          <h3 className='text-3xl font-bold'>1200+</h3>
          <p className='text-base'>PDF Downloads</p>
        </div>
        </div>
     
        <Link to="/shop" className='mt-12 block'><button className='bg-green-700 text-white font-semibold px-5 py-2 rounded
         hover:bg-black transition-all duration-300'>Explore More</button></Link>


      </div>
    </div>
  );
}

export default FavBookSection;
