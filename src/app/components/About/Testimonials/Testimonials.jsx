'use client'
import React from 'react'
import { TfiQuoteRight } from "react-icons/tfi"
import Image from 'next/image'
import testimonialimg from '../../../../../public/About/Testimonials/image.png'

const Testimonials = () => {

    return (
        <section className='bg-WarmWhite pt-28 max-sm:pt-16'>
            <div className='container'>
                <div className='xl:relative flex max-xl:flex-col max-xl:gap-y-5 max-sm:gap-y-0 max-xl:justify-center max-xl:items-center' data-aos="fade-up"
                    data-aos-duration="1000">
                    <div className='w-1/2 max-xl:w-full'>
                        <Image src={testimonialimg} alt='testimonialimage' />
                    </div>
                    <div className='bg-white p-4 w-1/2 max-xl:w-full my-4 xl:absolute right-[40px] max-xl:right-0'>
                        <div className="space-y-4 px-10 max-sm:px-2 py-16 max-sm:py-6 text-center flex flex-col items-center outline outline-2 outline-WarmWhite">
                            <div className='flex text-4xl max-sm:text-3xl bg-transparent text-[#D7B5AB] font-semibold'>
                                <TfiQuoteRight />
                            </div>
                            <div>
                                <p className='Jost leading-thirtytwo text-SlateBlack text-lg max-sm:text-sm'>Varius aenean fringilla consectetur adipiscing felis, lectus. Id eros, porta quam quis proin non vulputate lacinia imperdiet. Mus utamet tortor iEros, sed at semper sed in tempor ultrices sed. Id semnulla quisque vel duiscoue necrd.</p>
                            </div>
                            <div className="flex gap-y-3 max-sm:gap-y-1 flex-col items-center">
                                <p className="text-twentyfive max-sm:text-twentytwo leading-forty text-DustyGreen">James Harris</p>
                                <p className='Jost text-base max-sm:text-sm leading-forty text-SteelGray'>Wedding. 23.05.2022 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
