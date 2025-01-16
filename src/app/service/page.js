import React from 'react'
import Navbar from '../components/About/Navbar/Navbar'
import Banner from '../components/Service/Banner/Banner'
import OurServices from '../components/Service/OurServices/OurServices'
import Rating from '../components/About/Rating/Rating'
import Testimonials from '../components/About/Testimonials/Testimonials'
import Video from '../components/Service/Video/Video'
import Partners from '../components/Home/Partners/Partners'

const Service = () => {
  return (
    <div className='bg-[#FAF6F2]'>
      <Navbar/>
      <Banner/>
      <OurServices/>
      <Rating/>
      <Testimonials/>
      <Video/>
      <Partners/>
    </div>
  )
}

export default Service
