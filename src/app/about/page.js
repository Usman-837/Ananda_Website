import React from 'react'
import Navbar from '../components/About/Navbar/Navbar'
import Banner from '../components/About/Banner/Banner'
import AboutUs from '../components/About/AboutUs/AboutUs'
import Rating from '../components/About/Rating/Rating'
import Welcome from '../components/About/Welcome/Welcome'
import Teammembers from '../components/About/TeamMembers/Teammembers'
import WeddingStory from '../components/Home/WeddingStory/WeddingStory'
import Partners from '../components/Home/Partners/Partners'
import Contact from '../components/About/Contact/Contact'
import Footer from '../components/Home/Footer/Footer'
import Testimonials from '../components/About/Testimonials/Testimonials'

const About = () => {
  return (
    <div className='bg-[#FAF6F2]'>
      <Navbar />
      <Banner />
      <AboutUs/>
      <Rating/>
      <Testimonials/>
      <Welcome/>
      <Teammembers/>
      <WeddingStory/>
      <Partners/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default About
