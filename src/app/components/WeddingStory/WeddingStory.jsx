'use client'
import React from 'react'
import Image from 'next/image'
import Img1 from '../../../../public/Home/WeddingStory/image1.png'
import Img2 from '../../../../public/Home/WeddingStory/image3.png'
import Img3 from '../../../../public/Home/WeddingStory/image2.png'
import Img4 from '../../../../public/Home/WeddingStory/image4.png'

const WeddingStory = () => {
    return (
        <section className='bg-[#FAF6F2] pt-28 pb-48 max-sm:pb-16'>
            <div className='container'>
                <div className='space-y-4'>
                    <h1 className='Calligraffitti text-center text-[#939580] text-3xl'>Amazing Work</h1>
                    <h2 className='text-[40px] max-sm:text-3xl text-center'>FEATURED WEDDING STORY</h2>
                </div>
                <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-10 py-10'>
                    <div className='flex flex-col gap-10'>
                        <div className='space-y-4'>
                            <Image src={Img1} alt='image1' className='max-w-[633px] w-full' />
                            <h1 className='text-[35px] max-sm:text-3xl'>Ali & Robert</h1>
                            <p className='text-[#939580]'>Chaina - 14 Sep 2019</p>
                        </div>
                        <div className='space-y-4'>
                            <Image src={Img2} alt='image1' className='max-w-[633px] w-full' />
                            <h1 className='text-[35px] max-sm:text-3xl'>Rihanna & William</h1>
                            <p className='text-[#939580]'>Austria - 28 Oct 2020</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div className='space-y-4'>
                            <Image src={Img3} alt='image1' className='max-w-[633px] w-full' />
                            <h1 className='text-[35px] max-sm:text-3xl'>Sarah & Daniel</h1>
                            <p className='text-[#939580]'>Singapore - 16 May 2022</p>
                        </div>
                        <div className='space-y-4'>
                            <Image src={Img4} alt='image1' className='max-w-[633px] w-full' />
                            <h1 className='text-[35px] max-sm:text-3xl'>Kate & Johnthan</h1>
                            <p className='text-[#939580]'>London - 22 June 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeddingStory
