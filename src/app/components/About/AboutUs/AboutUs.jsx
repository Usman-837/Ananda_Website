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
                        <div className='bg-white p-[31px]'>
                            <Image src={aboutimg1} />
                        </div>
                        <div>
                            <p className='text-[50px] text-[#939580]'>About Us</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
