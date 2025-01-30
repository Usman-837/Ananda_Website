'use client'
import Navbar from '@/app/components/About/Navbar/Navbar'
import Footer from '@/app/components/Home/Footer/Footer'
import Banner from '@/app/components/OurServices/Banner/Banner'
import ProjectRequiremnets from '@/app/components/OurServices/ProjectRequirements/ProjectRequiremnets'
import Sidebar from '@/app/components/OurServices/Sidebar/Sidebar'
import Story from '@/app/components/OurServices/Story/Story'
import Testimonials from '@/app/components/OurServices/Testimonials/Testimonials'
import Video from '@/app/components/OurServices/Video/Video'
import React from 'react'

const page = ({ params }) => {

  const { id } = params;

  return (
    <div className='bg-WarmWhite'>
      <Navbar />
      <Banner id={id} />
      <div className='container'>
        <div className='flex gap-10 max-laptop:flex-col'>
          <ProjectRequiremnets id={id} />
          <Sidebar />
        </div>
      </div>
      <Testimonials id={id} />
      <Video id={id} />
      <Story id={id} />
      <Footer />
    </div>
  )
}

export default page
