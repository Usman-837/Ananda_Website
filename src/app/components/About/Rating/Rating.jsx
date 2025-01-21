'use client'
import React from 'react'
import Image from 'next/image'
import Ratingimg1 from '../../../../../public/About/Rating/image1.png'
import Ratingimg2 from '../../../../../public/About/Rating/image2.png'
import Ratingimg3 from '../../../../../public/About/Rating/image3.png'

const Rating = () => {

    return (
        <div className='bg-WarmWhite pt-28 max-sm:pt-16'>
            <div className='container'>
                <div className='grid grid-cols-4 max-xl:grid-cols-3 max-laptop:grid-cols-2 max-md::items-center max-md:justify-center gap-12' data-aos="fade-up"
                    data-aos-duration="1000">
                    <div className='flex max-md:flex-col-reverse max-md:gap-y-5 max-md:text-center gap-x-12 max-md:items-center max-md:justify-center'>
                        <div className='space-y-6 max-sm:space-y-2'>
                            <p className='text-6xl text-SlateBlack max-sm:text-3xl'>1,360+</p>
                            <p className='text-DustyGreen text-twentyfive max-sm:text-lg'>Happy Couples</p>
                        </div>
                        <div>
                            <Image src={Ratingimg1} alt='ratingimage' />
                        </div>
                    </div>
                    <div className='flex max-md:flex-col-reverse max-md:gap-y-5 max-md:text-center gap-x-12 max-md:items-center max-md:justify-center'>
                        <div className='space-y-6 max-sm:space-y-2'>
                            <p className='text-6xl text-SlateBlack max-sm:text-3xl'>503+</p>
                            <p className='text-DustyGreen text-twentyfive max-sm:text-lg'>Wedding</p>
                        </div>
                        <div>
                            <Image src={Ratingimg2} alt='ratingimage' />
                        </div>
                    </div>
                    <div className='flex max-md:flex-col-reverse max-md:gap-y-5 max-md:text-center gap-x-12 max-md:items-center max-md:justify-center'>
                        <div className='space-y-6 max-sm:space-y-2'>
                            <p className='text-6xl text-SlateBlack max-sm:text-3xl'>1530+</p>
                            <p className='text-DustyGreen text-twentyfive max-sm:text-lg'>Happy Couples</p>
                        </div>
                        <div>
                            <Image src={Ratingimg3} alt='ratingimage' />
                        </div>
                    </div>
                    <div className='flex gap-x-12 max-md:items-center max-md:justify-center'>
                        <div className='space-y-6 max-sm:space-y-2 max-md:text-center'>
                            <p className='text-6xl text-SlateBlack max-sm:text-3xl'>306+</p>
                            <p className='text-DustyGreen text-twentyfive max-sm:text-lg'>Location</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rating
