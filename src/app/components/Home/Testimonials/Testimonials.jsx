'use client'
import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { TfiQuoteRight } from "react-icons/tfi"
import Image from 'next/image';
import videoImg from '../../../../../public/Home/Testimonial/Section.png'

const Testimonials = () => {

    const testimonialData = [
        {
            id: 1,
            name: 'Sophia R',
            date: '23.05.2020',
            des: 'Ananda’s styling expertise gave me the perfect look for my special event. The outfits, accessories, and attention to detail made me feel glamorous and confident. Truly a fashion magician who knows how to create stunning transformations!'
        },
        {
            id: 2,
            name: 'Olivia M',
            date: '23.05.2021',
            des: 'Ananda’s jewelry collection is simply breathtaking! Each piece radiates elegance and craftsmanship, making my bridal look shine. The unique designs and quality exceeded my expectations. I felt like royalty on my big day!'
        },
        {
            id: 3,
            name: 'Emily T',
            date: '23.05.2022',
            des: 'My wedding dress was everything I dreamed of and more! and wedding dress of Ananda helped me find the perfect design that fit beautifully and made me feel amazing. Every detail was flawless. I couldn’t have asked for better!'
        },
        {
            id: 4,
            name: 'Jessica W',
            date: '23.05.2023',
            des: 'Ananda took the stress out of wedding planning! Every detail was managed seamlessly, and the day turned out perfect. From timeline coordination to vendor selection, everything was smooth and stress-free. Highly recommended!'
        }
    ]

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <section className='bg-WarmWhite pt-28 max-sm:pt-16'>
            <div className='container'>
                <div className="flex-1">
                    <Slider {...settings}>
                        {testimonialData.map((data) => (
                            <div className="px-5 max-sm:px-0 mb-8">
                                <div className='bg-white p-4' data-aos="fade-up" data-aos-duration="1000">
                                    <div key={data.id} className="space-y-4 px-sixtyfive max-sm:px-2 pt-forty max-sm:pt-6 pb-fifty max-sm:pb-6 text-center flex flex-col items-center outline outline-2 outline-[#FAF6F2]">
                                        <div className='flex text-4xl max-sm:text-3xl bg-transparent text-SoftBeigePink font-semibold'>
                                            <TfiQuoteRight />
                                        </div>
                                        <div className='Jost text-lg max-sm:text-sm leading-thirtytwo text-SlateBlack '>
                                            <p>{data.des}</p>
                                        </div>
                                        <div className="flex gap-y-3 max-sm:gap-y-1 flex-col items-center">
                                            <p className="text-twentyfive max-sm:text-twentytwo leading-forty text-DustyGreen">{data.name}</p>
                                            <p className='Jost text-base max-sm:text-sm text-SteelGray leading-twentyfive'>Wedding. {data.date} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <Image src={videoImg} className='pt-20' data-aos="fade-up" data-aos-duration="2000" />
            {/* <video 
                controls
                poster="/path-to-poster-image.jpg"
                className="rounded-lg shadow-lg"
            >
                <source src="/path-to-video.mp4" type="video/mp4" />
            </video> */}

        </section>
    )
}

export default Testimonials
