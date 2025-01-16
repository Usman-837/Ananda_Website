import React from 'react'
import Navbar from '../components/About/Navbar/Navbar'
import Banner from '../components/Contact/Banner/Banner'
import Address from '../components/Contact/Address/Address'

const Contact = () => {
  return (
    <div className='bg-[#FAF6F2]'>
      <Navbar/>
      <Banner/>
      <Address/>
    </div>
  )
}

export default Contact