'use client'
import React from 'react'
import Image from 'next/image'
import welcomeimg from '../../../../../public/About/Welcome/image1.png'

const Welcome = () => {
  return (
    <div>
      <Image src={welcomeimg} alt='welcomeimg'/>
    </div>
  )
}

export default Welcome
