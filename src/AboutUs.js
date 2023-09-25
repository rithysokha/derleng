import React from 'react'

export default function AboutUs() {
  return (
    <div >
        <div>
            <h1 className='uppercase text-black font-bold text-6xl flex justify-center pt-48 '>About Us</h1>
        </div>
        <div className=' mt-10 pr-10 pl-10 '>

        <div className=' text-justify '>
            <p><span className='font-bold'>Cultural tourism</span> is one of the most popular types of tourism in Cambodia. The country is home to a number of ancient temples and ruins, including the world-famous Angkor Wat temple complex. Other popular cultural attractions include the Royal Palace and Silver Pagoda in Phnom Penh, the Killing Fields and Tuol Sleng Genocide Museum, and the Angkor National Museum.</p>
            <p><span className='font-bold'>Ecotourism</span> is another popular type of tourism in Cambodia. The country has a number of national parks and protected areas where visitors can see wildlife such as elephants, tigers, and leopards. Popular ecotourism destinations include the Cardamom Mountains, the Ream National Park, and the Virachey National Park.</p>
            <p><span className='font-bold'>Beach tourism</span> is also popular in Cambodia, with the country having a number of beautiful beaches along its coastline. The most popular beach destination in Cambodia is Sihanoukville, which is known for its white sand beaches, clear blue waters, and lively nightlife. Other popular beach destinations include Koh Rong and Koh Rong Samloem.</p>
            <p><span className='font-bold'>Adventure tourism</span> is also becoming increasingly popular in Cambodia. The country offers a variety of adventure activities, such as hiking, mountain biking, kayaking, and zip-lining. Popular adventure tourism destinations include the Cardamom Mountains, the Bokor Mountain Station, and the Ream National Park.</p>
        </div>
        <div className='p-10 relative w-1/2 '>
        <img src="./aboutus2.jpg"  alt=""   />
        <div className='absolute top-1/2 left-1/4'>
        <img src="./aboutus1.jpg" alt=""   />

        </div>

        </div>
        </div>
    </div>
  )
}
