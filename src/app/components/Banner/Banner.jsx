import React from 'react'
import Image from 'next/image'
import banner from '../../../../public/Home/Banner/Banner.jpg'

const Banner = () => {
  return (
    <div>
        <Image src={banner} alt='bannerimg'/>
    </div>
  )
}

export default Banner
