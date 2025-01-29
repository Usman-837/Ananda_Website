import React from 'react'
import Navbar from '../components/About/Navbar/Navbar'
import Banner from '../components/Services/Banner/Banner'
import OurServices from '../components/Services/OurServices/OurServices'
import Rating from '../components/About/Rating/Rating'
import Testimonials from '../components/About/Testimonials/Testimonials'
import Video from '../components/Services/Video/Video'
import Partners from '../components/Home/Partners/Partners'
import Contact from '../components/About/Contact/Contact'
import Footer from '../components/Home/Footer/Footer'

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
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Service
