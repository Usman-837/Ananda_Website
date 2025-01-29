'use client'
import React from 'react'
import Image from 'next/image'
import Img1 from '../../../../../../public/OurServices/StyleByAnanda/StyleByAnandaStory/image1.png'
import Img2 from '../../../../../../public/OurServices/StyleByAnanda/StyleByAnandaStory/image3.png'
import Img3 from '../../../../../../public/OurServices/StyleByAnanda/StyleByAnandaStory/image2.png'
import Img4 from '../../../../../../public/OurServices/StyleByAnanda/StyleByAnandaStory/image4.png'

const StyleByAnandaStory = () => {
    return (
        <section className='bg-WarmWhite pt-28 max-sm:pt-16'>
            <div className='container' data-aos="fade-up"
                data-aos-duration="1000">
                <div className='space-y-4 pb-5'>
                    <h1 className='Vujahday leading-fifty text-center text-DustyGreen text-thirtyfive max-sm:text-4xl'>Amazing Work</h1>
                    <h2 className='Jost text-forty text-SlateBlack leading-fiftyeight max-sm:text-2xl text-center'>FEATURED WEDDING STORY</h2>
                </div>
                <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-10 py-10 max-sm:text-center'>
                    <div className='flex flex-col gap-10'>
                        <div className='space-y-4'>
                            <Image src={Img1} alt='Ali & Robert Image' className='max-w-sixthirtythree w-full' />
                            <h1 className='text-thirtyfive text-SlateBlack leading-fifty max-sm:text-2xl'>Ali & Robert</h1>
                            <p className='Jost text-DustyGreen text-lg max-sm:text-sm leading-twentyseven'>Chaina - 14 Sep 2019</p>
                        </div>
                        <div className='space-y-4'>
                            <Image src={Img2} alt='Rihanna & William Image' className='max-w-sixthirtythree w-full' />
                            <h1 className='text-thirtyfive text-SlateBlack leading-fifty max-sm:text-2xl'>Rihanna & William</h1>
                            <p className='Jost text-DustyGreen text-lg max-sm:text-sm leading-twentyseven'>Austria - 28 Oct 2020</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div className='space-y-4'>
                            <Image src={Img3} alt='Sarah & Daniel Image' className='max-w-sixthirtythree w-full' />
                            <h1 className='text-thirtyfive text-SlateBlack leading-fifty max-sm:text-2xl'>Sarah & Daniel</h1>
                            <p className='Jost text-DustyGreen text-lg max-sm:text-sm leading-twentyseven'>Singapore - 16 May 2022</p>
                        </div>
                        <div className='space-y-4'>
                            <Image src={Img4} alt='Kate & Johnthan' className='max-w-sixthirtythree w-full' />
                            <h1 className='text-thirtyfive text-SlateBlack leading-fifty max-sm:text-2xl'>Kate & Johnthan</h1>
                            <p className='Jost text-DustyGreen text-lg max-sm:text-sm leading-twentyseven'>London - 22 June 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StyleByAnandaStory
