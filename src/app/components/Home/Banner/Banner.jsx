import React from 'react'
import banner from '../../../../../public/Home/Banner/Banner.jpg'

const Banner = () => {
  return (
    <div
      className="w-full h-svh bg-cover bg-center mt-[-118px] max-sm:mt-[-265px]"
      style={{
        backgroundImage: `url(${banner.src})`, 
      }}
    >

    </div>
  )
}

export default Banner
