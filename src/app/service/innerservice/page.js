import React from 'react'
import Navbar from '@/app/components/About/Navbar/Navbar'
import Banner from '@/app/components/Service/Banner/Banner'
import ProjectRequiremnets from '@/app/components/InnerService/ProjectRequirements/ProjectRequiremnets'

const InnerService = () => {
  return (
    <div className='bg-[#FAF6F2]'>
      <Navbar/>
      <Banner/>
      <ProjectRequiremnets/>
    </div>
  )
}

export default InnerService
