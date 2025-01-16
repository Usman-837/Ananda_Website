import React from 'react'
import Navbar from '@/app/components/About/Navbar/Navbar'
import Banner from '@/app/components/Service/Banner/Banner'
import ProjectRequiremnets from '@/app/components/InnerService/ProjectRequirements/ProjectRequiremnets'
import Sidebar from '@/app/components/InnerService/Sidebar/Sidebar'
import Testimonials from '@/app/components/About/Testimonials/Testimonials'
import Video from '@/app/components/Service/Video/Video'
import WeddingStory from '@/app/components/Home/WeddingStory/WeddingStory'
import Footer from '@/app/components/Home/Footer/Footer'

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
      <Testimonials/>
      <Video/>
      <WeddingStory/>
      <Footer/>
    </div>
  )
}

export default InnerService
