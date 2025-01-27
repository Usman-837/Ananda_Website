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
            name: 'Harrison & Blake',
            date: '23.05.2022',
            des: 'Donec cursus justo at urna pharetra, a tincidunt ante lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tristique orci sit amet ex sollicitudin, ac malesuada ante convallis. Aliquam erat volutpat.',
        },
        {
            id: 2,
            name: 'William Grant',
            date: '23.05.2022',
            des: 'Aenean vel mi vitae felis volutpat facilisis. Morbi ac augue tristique, aliquet velit ac, tincidunt ligula. Cras convallis felis sit amet felis efficitur, a condimentum eros volutpat. Integer vulputate, elit ac ullamcorper interdum, odio felis egestas ante',
        },
        {
            id: 3,
            name: 'Sophia Carter',
            date: '23.05.2022',
            des: 'Nullam feugiat auctor ante, nec cursus nisl facilisis ut. Pellentesque sit amet velit non magna maximus elementum a ut risus. Proin at gravida orci, non lobortis ligula. Aenean malesuada felis dui, id varius ante gravida ac. Curabitur id nulla et odio sollicitudin.',
        },
        {
            id: 4,
            name: 'Edward Turner',
            date: '23.05.2022',
            des: 'Cras nec tortor vitae ipsum luctus lobortis. Integer ultricies orci vel erat dapibus, in tincidunt orci posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer fermentum odio sit amet eros dictum, ac consequat erat tristique.',
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
