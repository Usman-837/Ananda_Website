import React from 'react'
import Navbar from '@/app/components/About/Navbar/Navbar'
import Banner from '@/app/components/Service/Banner/Banner'
import ProjectRequiremnets from '@/app/components/InnerService/ProjectRequirements/ProjectRequiremnets'
import Sidebar from '@/app/components/InnerService/Sidebar/Sidebar'

const InnerService = () => {
  return (
    <div className='bg-[#FAF6F2]'>
      <Navbar />
      <Banner />
      <div className='container'>
        <div className='flex gap-10 max-laptop:flex-col'>
          <ProjectRequiremnets />
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default InnerService
