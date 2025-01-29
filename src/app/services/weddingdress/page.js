import React from 'react'
import Navbar from '@/app/components/About/Navbar/Navbar'
import Banner from '@/app/components/OurServices/Weddingdress/Banner/Banner'
import ProjectRequiremnets from '@/app/components/OurServices/Weddingdress/ProjectRequirements/ProjectRequiremnets'
import Sidebar from '@/app/components/OurServices/Weddingdress/Sidebar/Sidebar'
import Testimonials from '@/app/components/About/Testimonials/Testimonials'
import Video from '@/app/components/Services/Video/Video'
import WeddingStory from '@/app/components/Home/WeddingStory/WeddingStory'
import Footer from '@/app/components/Home/Footer/Footer'

const Weddingdress = () => {
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

export default Weddingdress
