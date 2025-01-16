import React from 'react'
import banner from '../../../../../public/Contact/Banner/Banner.png'

const Banner = () => {
  return (
    <div
      className="w-full h-[320px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${banner.src})`, 
      }}
    >
        <p className='Calligraffitti text-[80px] max-sm:text-5xl'>Contact Us</p>
    </div>
  )
}

export default Banner
