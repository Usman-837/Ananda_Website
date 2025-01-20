'use client'
import React from 'react'
import Image from 'next/image'
import Ratingimg1 from '../../../../../public/About/Rating/image1.png'
import Ratingimg2 from '../../../../../public/About/Rating/image2.png'
import Ratingimg3 from '../../../../../public/About/Rating/image3.png'

const Rating = () => {

    return (
        <div className='bg-WarmWhite pt-28'>
            <div className='container'>
                <div className='grid grid-cols-4 max-xl:grid-cols-3 max-laptop:grid-cols-2 max-sm:grid-cols-1 max-sm:items-center max-sm:justify-center gap-12'>
                    <div className='flex gap-x-12 max-sm:items-center max-sm:justify-center'>
                        <div className='space-y-6 max-sm:space-y-3'>
                            <p className='text-6xl text-SlateBlack max-sm:text-4xl'>1,360+</p>
                            <p className='text-DustyGreen text-twentyfive max-sm:text-xl'>Happy Couples</p>
                        </div>
                        <div>
                            <Image src={Ratingimg1} alt='ratingimage' />
                        </div>
                    </div>
                    <div className='flex gap-x-12 max-sm:items-center max-sm:justify-center'>
                        <div className='space-y-6 max-sm:space-y-3'>
                            <p className='text-6xl text-SlateBlack max-sm:text-4xl'>503+</p>
                            <p className='text-DustyGreen text-twentyfive max-sm:text-xl'>Wedding</p>
                        </div>
                        <div>
                            <Image src={Ratingimg2} alt='ratingimage' />
                        </div>
                    </div>
                    <div className='flex gap-x-12 max-sm:items-center max-sm:justify-center'>
                        <div className='space-y-6 max-sm:space-y-3'>
                            <p className='text-6xl text-SlateBlack max-sm:text-4xl'>1530+</p>
                            <p className='text-DustyGreen text-twentyfive max-sm:text-xl'>Happy Couples</p>
                        </div>
                        <div>
                            <Image src={Ratingimg3} alt='ratingimage' />
                        </div>
                    </div>
                    <div className='flex gap-x-12 max-sm:items-center max-sm:justify-center'>
                        <div className='space-y-6 max-sm:space-y-3 max-sm:text-center'>
                            <p className='text-6xl text-SlateBlack max-sm:text-4xl'>306+</p>
                            <p className='text-DustyGreen text-twentyfive max-sm:text-xl'>Location</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rating
