import Navbar from '@/app/components/About/Navbar/Navbar'
import Footer from '@/app/components/Home/Footer/Footer'
import Banner from '@/app/components/OurServices/StyleByAnanda/Banner/Banner'
import ProjectRequiremnets from '@/app/components/OurServices/StyleByAnanda/ProjectRequirements/ProjectRequiremnets'
import StyleByAnandaStory from '@/app/components/OurServices/StyleByAnanda/StyleByAnandaStory/StyleByAnandaStory'
import Testimonials from '@/app/components/OurServices/StyleByAnanda/Testimonials/Testimonials'
import Video from '@/app/components/OurServices/StyleByAnanda/Video/Video'
import Sidebar from '@/app/components/OurServices/Weddingdress/Sidebar/Sidebar'
import React from 'react'

const StyleByAnanda = () => {
    return (
        <div className='bg-[#FAF6F2]'>
            <Navbar />
            <Banner />
            <div className='container'>
                <div className='flex gap-10 max-laptop:flex-col'>
                   <ProjectRequiremnets/>
                    <Sidebar/>
                </div>
            </div>
            <Testimonials/>
            <Video/>
            <StyleByAnandaStory/>
            <Footer/>
        </div>
    )
}

export default StyleByAnanda
