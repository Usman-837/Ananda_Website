'use client'
import React from 'react'
import Image from 'next/image'
import aboutimg1 from '../../../../../public/About/About/image1.png'
import aboutimg2 from '../../../../../public/About/About/image2.png'

const AboutUs = () => {
    return (
        <div className='bg-[#FAF6F2] py-28'>
            <div className='container'>
                <div>
                    <div className='grid grid-cols-2 gap-12'>
                        <div className='flex flex-col gap-y-20'>
                            <div className='bg-white p-[31px]'>
                                <Image src={aboutimg1} />
                            </div>
                            <div className='space-y-8 h-auto text-end'>
                                <p className='text-[50px] text-[#939580]'>Our Story</p>
                                <p className='text-[35px]'>Our Company Has a Great<br /> Mission & Policy</p>
                                <p className='text-[#848892] text-lg'>Convallis gravida odio viverra nisi, aliquam sem netus. Sed at
                                    semper at lacus. Nam integer nunc pellentesque nunc pulvinar
                                    donec scelerisque. Malesuada massa facilisis aliquam nunc ut
                                    nisl tincidunt nibh. Massa feugiat vitae habitant metus viverra.
                                    Praesent massa habitant sapien odio ac scelerisque praesent id.</p>
                                <button className='bg-[#D4B0A5] text-white px-[45px] py-[15px] uppercase text-lg'>contact us</button>
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-20'>
                            <div className='space-y-8 h-auto'>
                                <p className='text-[50px] text-[#939580]'>About Us</p>
                                <p className='text-[35px]'>We Are The Best Wedding<br />
                                    Planner & Decor.</p>
                                <p className='text-[#848892] text-lg'>Convallis gravida odio viverra nisi, aliquam sem netus. Sed at
                                    semper at lacus. Nam integer nunc pellentesque nunc pulvinar
                                    donec scelerisque. Malesuada massa facilisis aliquam nunc ut
                                    nisl tincidunt nibh. Massa feugiat vitae habitantp metus viverra.
                                    Praesent massa habitant sapien odio ac scelerisque praesent id.</p>
                                <button className='bg-[#D4B0A5] text-white px-[45px] py-[15px] uppercase text-lg'>book consultations</button>
                            </div>
                            <div className='bg-white p-[31px]'>
                                <Image src={aboutimg2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
