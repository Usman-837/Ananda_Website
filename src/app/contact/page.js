import React from 'react'
import Navbar from '../components/About/Navbar/Navbar'
import Banner from '../components/Contact/Banner/Banner'
import Address from '../components/Contact/Address/Address'
import Question from '../components/Contact/Question/Question'

const Contact = () => {
  return (
    <div className='bg-[#FAF6F2]'>
      <Navbar/>
      <Banner/>
      <Address/>
      <Question/>
    </div>
  )
}

export default Contact