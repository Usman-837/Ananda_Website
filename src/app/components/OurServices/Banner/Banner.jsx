'use client'
import React from 'react'
import banner from '../../../../../public/OurServices/Banner/Banner.png'
import { TypeAnimation } from 'react-type-animation'

const Banner = ({ id }) => {
  const BannerData = [
    { id: 1, title: 'Style By Ananda' },
    { id: 2, title: 'Jewelry By Ananda' },
    { id: 3, title: 'Wedding Dress' },
    { id: 4, title: 'Event Planning' },
    { id: 5, title: 'Photography' },
    { id: 6, title: 'Cake Design' },
    { id: 7, title: 'Venu Selection' },
    { id: 8, title: 'Decoration' },
    { id: 9, title: 'Cetering' },
    { id: 10, title: 'Entertainment' },
  ]

  // Find the banner title matching the given ID
  const bannerItem = BannerData.find((item) => item.id === Number(id));

  return (
    <div
      className="w-full h-[320px] max-sm:h-[200px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      {bannerItem ? (
        <TypeAnimation
          className='Calligraffitti text-eighty max-sm:text-3xl text-SlateBlack'
          sequence={[
            `${bannerItem.title}`,
            20000
          ]}
          cursor={false}
          speed={250}
        />
      ) : (
        <p className="text-eighty max-sm:text-3xl text-SlateBlack">No Title Found</p>
      )}
    </div>
  )
}

export default Banner;
