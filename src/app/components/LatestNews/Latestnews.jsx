'use client'
import React from 'react'
import Image from 'next/image';
import newsimg1 from '../../../../public/Home/LatestNews/newsimg1.png';
import newsimg2 from '../../../../public/Home/LatestNews/newsimg2.png';
import newsimg3 from '../../../../public/Home/LatestNews/newsimg3.png';
import newsimg4 from '../../../../public/Home/LatestNews/newsimg4.png';

const Latestnews = () => {

    const NewsData = [
        {
            id: 1,
            img: newsimg2,
            title: 'Best Wedding Gown For Your Dream Day',
            date: '22 Nov 2022'
        },
        {
            id: 1,
            img: newsimg3,
            title: 'Top 10 wedding fresh flower decoration idea.',
            date: '28 Nov 2022'
        },
        {
            id: 1,
            img: newsimg4,
            title: 'Best wedding gift you may like & choose.',
            date: '25 Sep 2022'
        },
    ]

    return (
        <div className='bg-[#FAF6F2] pb-28 pt-48'>
            <div className='container'>
                <div className='text-center pb-14'>
                    <h1 className='Vujahday text-[#939580] text-4xl'>Latest News</h1>
                    <p className='text-[40px] uppercase'>Read Our Wedding News</p>
                </div>
                <div className='flex gap-x-10 max-lg:flex-col  max-lg:gap-y-10'>
                    <div className='space-y-4'>
                        <Image src={newsimg1} alt='latestnews' />
                        <div className='flex gap-4'>
                            <div>
                                <ul className='flex gap-x-5 items-center'>
                                    <li className="w-2 h-2 bg-black rounded-full text-transparent font-semibold font-outline-2"></li>
                                    <li className='text-[50px] text-transparent font-semibold font-outline-2'>25</li>
                                </ul>
                                <p className='text-[#939580] text-end'>June</p>
                            </div>
                            <p className='text-4xl max-sm:text-2xl'>Photography is the important part
                                of wedding.</p>
                        </div>
                    </div>
                    <div className='space-y-7'>
                        {
                            NewsData.map((data) => (
                                <div key={data.id} className='flex gap-x-6 max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:text-center max-sm:gap-y-5'>
                                    <Image src={data.img} alt='latestnews' />
                                    <div className='space-y-4'>
                                        <p className='text-[28px] max-sm:text-xl leading-9'>{data.title}</p>
                                        <p className='text-[#939580] text-lg pl-5'>{data.date}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Latestnews
