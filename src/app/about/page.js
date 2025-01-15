import React from 'react'
import Navbar from '../components/About/Navbar/Navbar'
import Banner from '../components/About/Banner/Banner'
import AboutUs from '../components/About/AboutUs/AboutUs'
import Rating from '../components/About/Rating/Rating'
import Welcome from '../components/About/Welcome/Welcome'
import Teammembers from '../components/About/TeamMembers/Teammembers'
import WeddingStory from '../components/Home/WeddingStory/WeddingStory'
import Partners from '../components/Home/Partners/Partners'
import Contact from '../components/Home/Contact/Contact'

const About = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutUs/>
      <Rating/>
      <Welcome/>
      <Teammembers/>
      <WeddingStory/>
      <Partners/>
      <Contact/>
    </div>
  )
}

export default About
