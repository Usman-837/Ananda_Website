'use client'
import React from 'react'
import Image from 'next/image';
import Aboutimg from '../../../../../public/Home/About/aboutimg.png';

const About = () => {
    return (
        <div className='bg-[#FAF6F2] py-28'>
            <div className='container'>
                <div className='relative max-md:static flex max-md:flex-col max-md:gap-y-10'>
                    <div className='space-y-6 absolute max-md:static max-w-[600px] w-full'>
                        <h1 className='Vujahday text-[#939580] text-[50px] max-sm:text-4xl'>About US</h1>
                        <p className='text-4xl max-md:text-2xl leading-tight'>We Are The Best Wedding<br />
                            Planner & Decor.</p>
                        <p className='text-[#93959E]'>Convallis gravida odio viverra nisi, aliquam sem netus. Sed at semper at lacus. Nam integer nunc pellentesque nunc pulvinar donec scelerisque. Malesuada massa facilisis aliquam nunc ut
                            nisl tincidunt nibh. Massa feugiat vitae habitant metus viverra. Praesent massa habitant sapien odio ac scelerisque praesent id.</p>
                        <button className='bg-[#D4B0A5] text-white px-11 py-3.5'>Appointment</button>
                    </div>
                    <div className='pl-72 max-md:pl-0'>
                        <Image src={Aboutimg} alt='aboutimg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
