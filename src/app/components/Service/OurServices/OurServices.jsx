'use client'
import React from 'react'
import weddingdress from '../../../../../public/Service/OurServices/weddingdress.png'
import eventplanning from '../../../../../public/Service/OurServices/eventplanning.png'
import photography from '../../../../../public/Service/OurServices/photography.png'
import cakedesign from '../../../../../public/Service/OurServices/cakedesign.png'
import venuselection from '../../../../../public/Service/OurServices/venuselection.png'
import decoration from '../../../../../public/Service/OurServices/decoration.png'
import catering from '../../../../../public/Service/OurServices/catering.png'
import entertainment from '../../../../../public/Service/OurServices/entertainment.png'
import Image from 'next/image'

const OurServices = () => {

  const ServicesData = [
    {
      id: 1,
      name: 'Wedding Dress',
      image: weddingdress,
    },
    {
      id: 2,
      name: 'Event Planning',
      image: eventplanning,
    },
    {
      id: 3,
      name: 'Photography',
      image: photography,
    },
    {
      id: 4,
      name: 'Cake Design',
      image: cakedesign,
    },
    {
      id: 5,
      name: 'Venu Selection',
      image: venuselection,
    },
    {
      id: 6,
      name: 'Decoration',
      image: decoration,
    },
    {
      id: 7,
      name: 'Cetering',
      image: catering,
    },
    {
      id: 8,
      name: 'Entertainment',
      image: entertainment,
    },

  ]



  return (
    <div className='py-28'>
      <div className='container'>
        <div>
          <h1 className='text-center text-[35px] text-[#939580]'>Our Services</h1>
          <p className='text-[40px] text-center pt-3 uppercase'>WHAT WE OFFER FOR YOU</p>
        </div>
        <div className='grid grid-cols-4 gap-y-4 pt-14'>
          {
            ServicesData.map((data) => (
              <div key={data.id} className='px-3'>
                <div className='relative flex justify-center max-w-[421px] w-full p-[15px] bg-white rounded-md shadow-[#0000001A] shadow-lg mb-10'>
                  <Image src={data.image} alt='cardimage1' />
                  <div className='absolute bottom-[-22px] max-w-[200px] w-full bg-white py-4 text-center'>{data.name}</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default OurServices
