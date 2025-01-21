'use client'
import React from 'react'
import banner from '../../../../../public/Contact/Banner/Banner.png'
import { TypeAnimation } from 'react-type-animation'

const Banner = () => {
  return (
    <div
      className="w-full h-[320px] max-sm:h-[200px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${banner.src})`,
      }}
    >
      {/* <p className='Calligraffitti text-eighty max-sm:text-3xl text-SlateBlack'>Contact Us</p> */}

      <TypeAnimation
        className='Calligraffitti text-eighty max-sm:text-3xl text-SlateBlack'
        sequence={[
          `Contact Us`,
          20000
        ]}
        cursor={false}
        speed={250}
      />
    </div>
  )
}

export default Banner
