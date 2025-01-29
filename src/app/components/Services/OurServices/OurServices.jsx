'use client'
import React from 'react'
import weddingdress from '../../../../../public/Services/OurServices/weddingdress.png'
import eventplanning from '../../../../../public/Services/OurServices/eventplanning.png'
import photography from '../../../../../public/Services/OurServices/photography.png'
import cakedesign from '../../../../../public/Services/OurServices/cakedesign.png'
import venuselection from '../../../../../public/Services/OurServices/venuselection.png'
import decoration from '../../../../../public/Services/OurServices/decoration.png'
import catering from '../../../../../public/Services/OurServices/catering.png'
import entertainment from '../../../../../public/Services/OurServices/entertainment.png'
import style from '../../../../../public/Services/OurServices/style.png'
import jewelry from '../../../../../public/Services/OurServices/jewelry.png'
import Image from 'next/image'
import Link from 'next/link'

const OurServices = () => {

  const ServicesData = [
    {
      id: 1,
      name: 'Style by Ananda',
      image: style,
      path: 'services/tylebyananda'
    },
    {
      id: 2,
      name: 'Jewelry by Ananda',
      image: jewelry,
      path: 'services/jewelrybyananda'
    },
    {
      id: 3,
      name: 'Wedding Dress',
      image: weddingdress,
      path: 'services/weddingdress'
    },
    {
      id: 4,
      name: 'Event Planning',
      image: eventplanning,
      path: 'services/eventplanning'
    },
    {
      id: 5,
      name: 'Photography',
      image: photography,
      path: 'services/photography'
    },
    {
      id: 6,
      name: 'Cake Design',
      image: cakedesign,
      path: 'services/cakedesign'
    },
    {
      id: 7,
      name: 'Venu Selection',
      image: venuselection,
      path: 'services/venuselection'
    },
    {
      id: 8,
      name: 'Decoration',
      image: decoration,
      path: 'services/decoration'
    },
    {
      id: 9,
      name: 'Cetering',
      image: catering,
      path: 'services/cetering'
    },
    {
      id: 10,
      name: 'Entertainment',
      image: entertainment,
      path: 'services/entertainment'
    },
  ]

  return (
    <div className='pt-28 max-sm:pt-16'>
      <div className='container'>
        <div data-aos="fade-up"
          data-aos-duration="1000">
          <h1 className='text-center text-thirtyfive max-sm:text-3xl text-DustyGreen leading-fifty'>Our Services</h1>
          <p className='Jost text-forty text-SlateBlack leading-fiftyeight text-center pt-3 uppercase max-sm:text-2xl'>WHAT WE OFFER FOR YOU</p>
        </div>
        <div className='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-y-4 pt-14' data-aos="fade-up"
          data-aos-duration="1000">
          {
            ServicesData.map((data) => (
              <div key={data.id} className='px-3 hover:scale-110 transition-all duration-700'>
                <Link href={data.path}>
                  <div className='relative flex justify-center max-w-fourtwentyone w-full p-fifteen bg-white rounded-md shadow-[#0000001A] shadow-lg mb-10'>
                    <Image src={data.image} alt='cardimage1' />
                    <div className='absolute Jost text-twentytwo text-SlateBlack hover:text-white bottom-[-22px] leading-sixty max-w-twohundred w-full bg-white hover:bg-SlateBlack text-center'>{data.name}</div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default OurServices
