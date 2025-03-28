'use client'
import React from 'react'
import Image from 'next/image'
import aboutimg1 from '../../../../../public/About/About/image1.png'
import aboutimg2 from '../../../../../public/About/About/image2.png'

const AboutUs = () => {
    return (
        <div className='bg-WarmWhite pt-28 max-sm:pt-16'>
            <div className='container'>
                <div>
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-12'>
                        <div className='flex flex-col gap-y-20 max-laptop:gap-y-14' data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className='Jost leading-twentyseven text-lg bg-white p-thirtyone'>
                                <Image src={aboutimg1} />
                            </div>
                            <div className='space-y-8 h-auto text-end max-md:text-center'>
                                <p className='text-fifty max-laptop:text-5xl max-sm:text-3xl text-DustyGreen leading-seventytwo'>Our Story</p>
                                <p className='Jost text-thirtyfive text-SlateBlack max-laptop:text-3xl max-sm:text-2xl'>Our Company Has a Great<br /> Mission & Policy</p>
                                <p className='Jost text-DustyGrayBlue leading-thirtytwo text-lg max-sm:text-sm'>Your dream wedding deserves nothing but perfection, and that's exactly what we deliver. From elegant venue selection to breathtaking décor, we bring your vision to life with creativity, passion, and precision. Whether you envision a grand celebration or an intimate gathering, our expert team meticulously plans every detail, ensuring a seamless and stress-free experience.</p>
                                <button className='bg-SoftBeigePink hover:bg-SlateBlack text-white px-fortyfive py-fifteen uppercase text-lg max-sm:text-sm'>contact us</button>
                            </div>
                        </div>
                        <div className='flex flex-col max-md:flex-col-reverse  gap-y-20 max-laptop:gap-y-14' data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className='space-y-8 h-auto max-md:text-center'>
                                <p className='text-fifty max-laptop:text-5xl max-sm:text-3xl text-DustyGreen leading-seventytwo'>About Us</p>
                                <p className='Jost text-thirtyfive text-SlateBlack leading-fiftyone max-laptop:text-3xl max-sm:text-2xl'>We Are The Best Wedding<br />
                                    Planner & Decor.</p>
                                <p className='Jost text-DustyGrayBlue leading-thirtytwo text-lg max-sm:text-sm'>Your dream wedding deserves nothing but perfection, and that's exactly what we deliver. From elegant venue selection to breathtaking décor, we bring your vision to life with creativity, passion, and precision. Whether you envision a grand celebration or an intimate gathering, our expert team meticulously plans every detail, ensuring a seamless and stress-free experience.</p>
                                <button className='bg-SoftBeigePink hover:bg-SlateBlack text-white px-fortyfive py-fifteen uppercase text-lg max-sm:text-sm'>book consultations</button>
                            </div>
                            <div className='Jost leading-twentyseven text-lg bg-white p-thirtyone'>
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
