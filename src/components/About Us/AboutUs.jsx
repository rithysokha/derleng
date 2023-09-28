import React from 'react'

export default function AboutUs() {
  return (
    <div className='bg-gradient-to-b from-[#88AA7E] to-[#56BCD6] h-[100%] text-white'>
      <div>
        <h1 className='uppercase text-white font-bold text-6xl flex justify-center pt-20'>About Us</h1>
      </div>
      <div className=' mt-10 p-[5vw] w-full pt-10 items-center md:flex md:justify-center'>

        <div className=' text-justify w-full  text-[1.2vw] p-[1vw] '>
          <p class="text-base/6"><span className='font-bold'>Cultural tourism</span> is one of the most popular types of tourism in Cambodia. The country is home to a number of ancient temples and ruins, including the world-famous Angkor Wat temple complex. Other popular cultural attractions include the Royal Palace and Silver Pagoda in Phnom Penh, the Killing Fields and Tuol Sleng Genocide Museum, and the Angkor National Museum.</p>
          <p class="text-base/6"><span className='font-bold'>Ecotourism</span> is another popular type of tourism in Cambodia. The country has a number of national parks and protected areas where visitors can see wildlife such as elephants, tigers, and leopards. Popular ecotourism destinations include the Cardamom Mountains, the Ream National Park, and the Virachey National Park.</p>
          <p class="text-base/6"><span className='font-bold'>Beach tourism</span> is also popular in Cambodia, with the country having a number of beautiful beaches along its coastline. The most popular beach destination in Cambodia is Sihanoukville, which is known for its white sand beaches, clear blue waters, and lively nightlife. Other popular beach destinations include Koh Rong and Koh Rong Samloem.</p>
        </div>
        <div className=' md:relative p-[1vw]'>
          <img src="./aboutus2.jpg" alt="" />
          <div className='md:absolute top-1/2 left-1/4'>
            <img src="./aboutus1.jpg" alt="" />

          </div>

        </div>
      </div>
      <div className=' md:flex md:m-15 sm:m-10 lg:m-20 m-5  justify-between bg-gray-500 mt-10 text-center'>
        <div className='p-5 '>
        <img className='hover:scale-125 duration-500' src="./star.svg" alt=""/>
        <h1 className='text-xl font-light'>Unknown</h1>    
        <p> is one of the most popular types of tourism in Cambodia. The country is home to a number of ancient temples and ruins, including the world-famous Angkor Wat temple complex. </p>

        </div>
        <div className='p-5'>
        <img className='hover:scale-125 duration-500' src="./star.svg" alt=""/>
        <h1 className='text-xl font-light'>Unknown</h1>   
        <p> is one of the most popular types of tourism in Cambodia. The country is home to a number of ancient temples and ruins, including the world-famous Angkor Wat temple complex. </p>

        </div>
        <div className='p-5'>
        <img className='hover:scale-125 duration-500' src="./star.svg" alt=""/>
        <h1 className='text-xl font-light'>Unknown</h1>    
        <p> is one of the most popular types of tourism in Cambodia. The country is home to a number of ancient temples and ruins, including the world-famous Angkor Wat temple complex. </p>

        </div>
      </div>
      <h3 className='text-center'>Copyright @ 2023 Traveling Cambodia</h3>
   
    </div>
  )
}
