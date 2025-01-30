'use client'
import React from 'react'
import { TfiQuoteRight } from "react-icons/tfi"
import Image from 'next/image'
import testimonialimg1 from '../../../../../public/OurServices/Testimonials/testimonialimg1.webp'
import testimonialimg2 from '../../../../../public/OurServices/Testimonials/testimonialimg2.webp'
import testimonialimg3 from '../../../../../public/OurServices/Testimonials/testimonialimg3.webp'
import testimonialimg4 from '../../../../../public/OurServices/Testimonials/testimonialimg4.webp'
import testimonialimg5 from '../../../../../public/OurServices/Testimonials/testimonialimg5.webp'
import testimonialimg6 from '../../../../../public/OurServices/Testimonials/testimonialimg6.webp'
import testimonialimg7 from '../../../../../public/OurServices/Testimonials/testimonialimg7.webp'
import testimonialimg8 from '../../../../../public/OurServices/Testimonials/testimonialimg8.webp'
import testimonialimg9 from '../../../../../public/OurServices/Testimonials/testimonialimg9.webp'
import testimonialimg10 from '../../../../../public/OurServices/Testimonials/testimonialimg10.webp'

const Testimonials = ({ id }) => {

    const TestimonialData = [
        {
            id: 1,
            img: testimonialimg1,
            des: 'Ananda’s styling expertise gave me the perfect look for my special event. The outfits, accessories, and attention to detail made me feel glamorous and confident. Truly a fashion magician who knows how to create stunning transformations!',
            name: 'Sophia R',
            date: '23.05.2022'
        },
        {
            id: 2,
            img: testimonialimg2,
            des: 'Ananda’s jewelry collection is simply breathtaking! Each piece radiates elegance and craftsmanship, making my bridal look shine. The unique designs and quality exceeded my expectations. I felt like royalty on my big day!',
            name: 'Olivia M',
            date: '23.05.2022'
        },
        {
            id: 3,
            img: testimonialimg3,
            des: 'My wedding dress was everything I dreamed of and more! Ananda helped me find the perfect design that fit beautifully and made me feel amazing. Every detail was flawless. I couldn’t have asked for better!',
            name: 'Emily T',
            date: '23.05.2022'
        },
        {
            id: 4,
            img: testimonialimg4,
            des: 'Ananda took the stress out of wedding planning! Every detail was managed seamlessly, and the day turned out perfect. From timeline coordination to vendor selection, everything was smooth and stress-free. Highly recommended!',
            name: 'Jessica W',
            date: '23.05.2022'
        },
        {
            id: 5,
            img: testimonialimg5,
            des: 'The photos Ananda captured are simply magical! Every special moment was preserved with breathtaking shots that tell our love story. The creativity, professionalism, and quality exceeded our expectations. Forever grateful for these precious memories!',
            name: 'Rachel D',
            date: '23.05.2022'
        },
        {
            id: 6,
            img: testimonialimg6,
            des: 'Ananda’s cake design was a masterpiece! Not only was it visually stunning, but the flavors were divine. Our guests were in awe of both the beauty and taste. It truly made our wedding extra special!',
            name: 'Daniel P',
            date: '23.05.2022'
        },
        {
            id: 7,
            img: testimonialimg7,
            des: 'Finding the right venue was overwhelming, but Ananda made it easy! The venue was stunning, fit our theme perfectly, and accommodated all our needs. Everything was handled smoothly, making our day truly unforgettable!',
            name: 'Laura H',
            date: '23.05.2022'
        },
        {
            id: 8,
            img: testimonialimg8,
            des: 'Ananda’s decor transformed our wedding into a fairytale! The floral arrangements, lighting, and elegant touches created a breathtaking atmosphere. Everything was picture-perfect, leaving us and our guests in complete awe!',
            name: 'Megan S',
            date: '23.05.2022'
        },
        {
            id: 9,
            img: testimonialimg9,
            des: 'The catering by Ananda was phenomenal! Every dish was beautifully presented, delicious, and met our guests’ dietary needs. Everyone raved about the food, and it made our celebration even more memorable!',
            name: 'Michael B',
            date: '23.05.2022'
        },
        {
            id: 10,
            img: testimonialimg10,
            des: 'Our wedding was full of energy and excitement, thanks to Ananda’s entertainment planning! The music, performances, and interactive experiences kept our guests engaged and entertained all night. Best decision ever!',
            name: ' Jason L',
            date: '23.05.2022'
        },
    ]


    const selectedTestimonial = TestimonialData.find((item) => item.id === Number(id));

    return (
        <section className='bg-WarmWhite pt-28 max-sm:pt-16'>
            <div className='container'>
                {
                    selectedTestimonial && (
                        <div className='xl:relative flex max-xl:flex-col max-xl:gap-y-5 max-sm:gap-y-0 max-xl:justify-center max-xl:items-center' data-aos="fade-up"
                            data-aos-duration="1000">
                            <div className='w-1/2 max-xl:w-full'>
                                <Image src={selectedTestimonial.img} alt='testimonialimage' />
                            </div>
                            <div className='bg-white p-4 w-1/2 max-xl:w-full my-4 xl:absolute right-[40px] max-xl:right-0'>
                                <div className="space-y-4 px-10 max-sm:px-2 py-16 max-sm:py-6 text-center flex flex-col items-center outline outline-2 outline-WarmWhite">
                                    <div className='flex text-4xl max-sm:text-3xl bg-transparent text-[#D7B5AB] font-semibold'>
                                        <TfiQuoteRight />
                                    </div>
                                    <div>
                                        <p className='Jost leading-thirtytwo text-SlateBlack text-lg max-sm:text-sm'>{selectedTestimonial.des}</p>
                                    </div>
                                    <div className="flex gap-y-3 max-sm:gap-y-1 flex-col items-center">
                                        <p className="text-twentyfive max-sm:text-twentytwo leading-forty text-DustyGreen">{selectedTestimonial.name}</p>
                                        <p className='Jost text-base max-sm:text-sm leading-forty text-SteelGray'>{selectedTestimonial.date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Testimonials
