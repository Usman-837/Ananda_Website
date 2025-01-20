import React from 'react'
import banner from '../../../../../public/About/Banner/Banner.png'

const Banner = () => {
  return (
    <div
      className="w-full h-[320px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${banner.src})`, 
      }}
    >
        <p className='Calligraffitti text-eighty max-sm:text-5xl'>About US</p>
    </div>
  )
}

export default Banner
