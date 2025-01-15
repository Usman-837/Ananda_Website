import React from 'react'
import Navbar from '../components/About/Navbar/Navbar'
import Banner from '../components/About/Banner/Banner'
import AboutUs from '../components/About/AboutUs/AboutUs'
import Rating from '../components/About/Rating/Rating'
import Welcome from '../components/About/Welcome/Welcome'
import Teammembers from '../components/About/TeamMembers/Teammembers'

const About = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutUs/>
      <Rating/>
      <Welcome/>
      <Teammembers/>
    </div>
  )
}

export default About
