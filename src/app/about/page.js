import React from 'react'
import Navbar from '../components/About/Navbar/Navbar'
import Banner from '../components/About/Banner/Banner'
import AboutUs from '../components/About/AboutUs/AboutUs'
import Rating from '../components/About/Rating/Rating'

const About = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutUs/>
      <Rating/>
    </div>
  )
}

export default About
