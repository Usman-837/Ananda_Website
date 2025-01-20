'use client'
import React from 'react'
import Image from 'next/image'
import newsimg1 from '../../../../../public/Home/LatestNews/newsimg1.png'
import newsimg2 from '../../../../../public/Home/LatestNews/newsimg2.png'
import newsimg3 from '../../../../../public/Home/LatestNews/newsimg3.png'
import newsimg4 from '../../../../../public/Home/LatestNews/newsimg4.png'

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
        <div className='bg-WarmWhite pb-16 pt-48 max-sm:pt-16'>
            <div className='container'>
                <div className='text-center pb-14'>
                    <h1 className='Vujahday text-DustyGreen text-thirtyfive max-sm:text-4xl leading-fifty max-sm:pb-5'>Latest News</h1>
                    <p className='Jost leading-fiftyeight text-forty text-SlateBlack uppercase max-sm:text-2xl'>Read Our Wedding News</p>
                </div>
                <div className='flex gap-x-10 max-lg:flex-col  max-lg:gap-y-10'>
                    <div className='space-y-4'>
                        <Image src={newsimg1} alt='latestnews' />
                        <div className='flex gap-4'>
                            <div>
                                <ul className='flex gap-x-5 items-center'>
                                    <li className="w-2 h-2 bg-black rounded-full text-transparent font-semibold font-outline-2"></li>
                                    <li className='Jost text-fiftyfive max-sm:text-4xl text-transparent text-SlateBlack font-semibold font-outline-2 leading-seventynine'>25</li>
                                </ul>
                                <p className='Jost text-DustyGreen text-end text-twentynine'>June</p>
                            </div>
                            <p className='Jost text-thirtyfour text-SlateBlack leading-fortynine max-sm:text-xl'>Photography is the important part
                                of wedding.</p>
                        </div>
                    </div>
                    <div className='space-y-7'>
                        {
                            NewsData.map((data) => (
                                <div key={data.id} className='flex gap-x-6 max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:text-center max-sm:gap-y-5'>
                                    <Image src={data.img} alt='latestnews' />
                                    <div className='space-y-4'>
                                        <p className='text-twentyeight text-SlateBlack max-sm:text-xl leading-9'>{data.title}</p>
                                        <p className='text-DustyGreen leading-twentyseven text-lg pl-5'>{data.date}</p>
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
