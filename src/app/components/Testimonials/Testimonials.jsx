'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TfiQuoteRight } from "react-icons/tfi";
import Image from 'next/image';
import videoImg from '../../../../public/Home/Testimonial/Section.png';

const Testimonials = () => {

    const testimonialData = [
        {
            id: 1,
            name: 'Marlin & Williamson',
            date: '23.05.2022',
            des: 'Varius aenean fringilla consectetur adipiscing felis, lectus. Id eros, porta quam quis proin non vulputate lacinia imperdiet. Mus utamet tortor iEros, sed at semper sed in tempor ultrices sed. Id semnulla quisque vel duiscoue necrd.',
        },
        {
            id: 2,
            name: 'James Harris',
            date: '23.05.2022',
            des: 'Varius aenean fringilla consectetur adipiscing felis, lectus. Id eros,porta quam quis proin non vulputate lacinia imperdiet. Mus utamet tortor iEros, sed at semper sed in tempor ultrices sed. Id semnulla quisque vel duiscoue necrd.',
        },
        {
            id: 3,
            name: 'Olivia King',
            date: '23.05.2022',
            des: 'Varius aenean fringilla consectetur adipiscing felis, lectus. Id eros, porta quam quis proin non vulputate lacinia imperdiet. Mus utamet tortor iEros, sed at semper sed in tempor ultrices sed. Id semnulla quisque vel duiscoue necrd.',
        },
        {
            id: 4,
            name: 'Robert Clark',
            des: 'Varius aenean fringilla consectetur adipiscing felis, lectus. Id eros, porta quam quis proin non vulputate lacinia imperdiet. Mus utamet tortor iEros, sed at semper sed in tempor ultrices sed. Id semnulla quisque vel duiscoue necrd.',
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
        <section className='bg-[#FAF6F2] py-28'>
            <div className='container'>
                <div className="flex-1">
                    <Slider {...settings}>
                        {testimonialData.map((data) => (
                            <div className="px-5 mb-8">
                                <div className='bg-white p-4'>
                                    <div key={data.id} className="space-y-4 px-10 py-16 max-sm:py-10 text-center flex flex-col items-center outline outline-2 outline-[#FAF6F2]">
                                        <div className='flex text-4xl bg-transparent text-[#D7B5AB] font-semibold'>
                                            <TfiQuoteRight />
                                        </div>
                                        <div>
                                            <p>{data.des}</p>
                                        </div>
                                        <div className="flex gap-y-3 flex-col items-center text-[#939580]">
                                            <p className="text-[25px]">{data.name}</p>
                                            <p className='text-base'>Wedding. {data.date} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <Image src={videoImg} className='py-20' />
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
