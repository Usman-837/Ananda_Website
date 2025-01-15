'use client'
import React from 'react'
import Image from 'next/image'
import Ratingimg1 from '../../../../../public/About/Rating/image1.png'
import Ratingimg2 from '../../../../../public/About/Rating/image2.png'
import Ratingimg3 from '../../../../../public/About/Rating/image3.png'

const Rating = () => {

    const RatingData = [
        {
            id: 1,
            num: '1,360+',
            title: 'Happy Couples',
            img: Ratingimg1
        },
        {
            id: 2,
            num: '503+',
            title: 'Decoration',
            img: Ratingimg2
        },
        {
            id: 3,
            num: '1530+',
            title: 'Wedding',
            img: Ratingimg3
        },
        {
            id: 4,
            num: '306',
            title: 'Location'
        }
    ]


    return (
        <div className='bg-[#FAF6F2] py-28'>
            <div className='container'>
                {/* <div className='flex justify-between items-center'>
                {
                    RatingData.map((data) => (
                        <div key={data.id} className='flex justify-between'>
                            <div className='space-y-6'>
                                <p className='text-6xl'>{data.num}</p>
                                <p className='text-[#939580] text-[25px]'>{data.title}</p>
                            </div>
                            <div>
                                <Image src={data.img} alt='ratingimage' />
                            </div>
                        </div>
                    ))
                }
                </div> */}
                <div className='grid grid-cols-4 max-xl:grid-cols-3 max-laptop:grid-cols-2 max-sm:grid-cols-1 max-sm:items-center max-sm:justify-center gap-12'>
                    <div className='flex gap-x-12 max-sm:items-center max-sm:justify-center'>
                        <div className='space-y-6 max-sm:space-y-3'>
                            <p className='text-6xl max-sm:text-4xl'>1,360+</p>
                            <p className='text-[#939580] text-[25px max-sm:text-xl'>Happy Couples</p>
                        </div>
                        <div>
                            <Image src={Ratingimg1} alt='ratingimage' />
                        </div>
                    </div>
                    <div className='flex gap-x-12 max-sm:items-center max-sm:justify-center'>
                        <div className='space-y-6 max-sm:space-y-3'>
                            <p className='text-6xl max-sm:text-4xl'>503+</p>
                            <p className='text-[#939580] text-[25px] max-sm:text-xl'>Wedding</p>
                        </div>
                        <div>
                            <Image src={Ratingimg2} alt='ratingimage' />
                        </div>
                    </div>
                    <div className='flex gap-x-12 max-sm:items-center max-sm:justify-center'>
                        <div className='space-y-6 max-sm:space-y-3'>
                            <p className='text-6xl max-sm:text-4xl'>1530+</p>
                            <p className='text-[#939580] text-[25px] max-sm:text-xl'>Happy Couples</p>
                        </div>
                        <div>
                            <Image src={Ratingimg3} alt='ratingimage' />
                        </div>
                    </div>
                    <div className='flex gap-x-12 max-sm:items-center max-sm:justify-center'>
                        <div className='space-y-6 max-sm:space-y-3 max-sm:text-center'>
                            <p className='text-6xl max-sm:text-4xl'>306+</p>
                            <p className='text-[#939580] text-[25px] max-sm:text-xl'>Location</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rating
