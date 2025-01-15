'use client'
import React from 'react'
import { TfiQuoteRight } from "react-icons/tfi"
import Image from 'next/image'
import testimonialimg from '../../../../../public/About/Testimonials/image.png'

const Testimonials = () => {

    return (
        <section className='bg-[#FAF6F2] py-28'>
            <div className='container'>
                <div className='xl:relative flex max-xl:flex-col max-xl:gap-y-5 max-xl:justify-center max-xl:items-center'>
                    <div className='w-1/2 max-xl:w-full'>
                        <Image src={testimonialimg} alt='testimonialimage' />
                    </div>
                    <div className='bg-white p-4 w-1/2 max-xl:w-full my-10 xl:absolute right-[40px] max-xl:right-0'>
                        <div className="space-y-4 px-10 py-16 max-sm:py-10 text-center flex flex-col items-center outline outline-2 outline-[#FAF6F2]">
                            <div className='flex text-4xl bg-transparent text-[#D7B5AB] font-semibold'>
                                <TfiQuoteRight />
                            </div>
                            <div>
                                <p>Varius aenean fringilla consectetur adipiscing felis, lectus. Id eros, porta quam quis proin non vulputate lacinia imperdiet. Mus utamet tortor iEros, sed at semper sed in tempor ultrices sed. Id semnulla quisque vel duiscoue necrd.</p>
                            </div>
                            <div className="flex gap-y-3 flex-col items-center text-[#939580]">
                                <p className="text-[25px]">James Harris</p>
                                <p className='text-base'>Wedding. 23.05.2022 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
