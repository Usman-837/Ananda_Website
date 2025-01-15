import React from 'react'
import Navbar from '../components/About/Navbar/Navbar'
import Banner from '../components/About/Banner/Banner'
import AboutUs from '../components/About/AboutUs/AboutUs'
import Rating from '../components/About/Rating/Rating'
import Welcome from '../components/About/Welcome/Welcome'

const About = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutUs/>
      <Rating/>
      <Welcome/>
    </div>
  )
}

export default About
