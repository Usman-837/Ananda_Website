'use client'
import React from 'react'
import Image from 'next/image'
import welcomeimg from '../../../../../public/About/Welcome/image1.png'

const Welcome = () => {
  return (
    <section className='pt-28 max-sm:pt-0' data-aos="fade-up"
      data-aos-duration="1000">
      <Image src={welcomeimg} alt='welcomeimg' />
    </section>
  )
}

export default Welcome
