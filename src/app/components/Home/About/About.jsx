'use client'
import React from 'react'
import Image from 'next/image'
import Aboutimg from '../../../../../public/Home/About/aboutimg.png'

const About = () => {
    return (
        <div className='bg-WarmWhite pt-28 max-sm:pt-16'>
            <div className='container'>
                <div className='relative flex max-laptop:flex-col max-laptop:gap-y-10' data-aos="fade-up"
                    data-aos-duration="1000">
                    <div className='space-y-5 absolute max-md:static max-w-sixhundred w-full max-md:text-center'>
                        <h1 className='Vujahday text-DustyGreen text-fifty max-sm:text-4xl leading-seventytwo'>About US</h1>
                        <p className='text-thirtyfive max-md:text-2xl fiftyone text-SlateBlack'>We Are The Best Wedding<br />
                            Planner & Decor.</p>
                        <p className='Jost leading-thirtytwo text-DustyGreen text-lg'>Integer ut tortor vitae nunc tempor pharetra. Curabitur lobortis ligula at lectus convallis, vel sagittis magna volutpat. Morbi volutpat elit sit amet lorem volutpat, eu lacinia libero facilisis. Ut hendrerit mi sed lorem fermentum, id auctor neque pretium. Nam fringilla dolor in ante malesuada, eget tincidunt nulla suscipit.</p>
                        <button className='bg-SoftBeigePink hover:bg-SlateBlack text-white px-fortyfive py-fifteen text-lg leading-twentyseven'>Appointment</button>
                    </div>
                    <div className='pl-72 max-md:pl-0 pt-5'>
                        <Image src={Aboutimg} alt='aboutimg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
