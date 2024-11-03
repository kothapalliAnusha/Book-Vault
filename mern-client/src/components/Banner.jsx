import React from 'react'
import BannerCard from '../home/BannerCard'

function Banner() {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between item-center gap-12 py-40'>
            {/* left side */}
            <div className=' md:w-1/2 space-y-7 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-green-700'>
                     for the best prices</span></h2>
                <p className='md:w-4/5'>Beyond fleeting screens, books offer a universe. Each one a portal to knowledge, a whisper of history's tales, a symphony of human experience.
                 Reading isn't just words, it's empathy, a journey into unseen worlds. It's a mental gym, sharpening focus and sparking thought. It's a passport to travel without leaving your chair. 
                 Books ignite revolutions, inspire creation, and mend hearts. They're silent companions, wise mentors, and friends who whisper stories in the night. In a world of chaos, books offer solace, inspiration, and the reminder of our boundless potential.
                  Open a book, unlock a world.  <span className='text-black font-bold'>---Book Vault😉</span></p>
                <div>
                    <input type="text" name="search" id="search" placeholder='Search a book' className='py-2 px-2 roundeds-sm outline-none'/>
                    <button className='bg-green-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duartion-200'>Search</button>
                </div>
            </div>

            {/* right side */}
            <div>
                <BannerCard/>
            </div>
        </div>
    </div>
  )
}

export default Banner