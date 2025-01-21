import React from 'react'
import banner from '../../../../../public/Service/Banner/Banner.png'

const Banner = () => {
  return (
    <div
      className="w-full h-[320px] max-sm:h-[200px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${banner.src})`, 
      }}
    >
        <p className='Calligraffitti text-eighty text-SlateBlack max-sm:text-5xl'>Service</p>
    </div>
  )
}

export default Banner
