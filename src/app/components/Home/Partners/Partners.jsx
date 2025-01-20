'use client'
import React from 'react'
import Image from 'next/image'
import Partner1 from '../../../../../public/Home/Partners/partner1.png'
import Partner2 from '../../../../../public/Home/Partners/partner2.png'
import Partner3 from '../../../../../public/Home/Partners/partner3.png'
import Partner4 from '../../../../../public/Home/Partners/partner4.png'
import Partner5 from '../../../../../public/Home/Partners/partner5.png'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Partners = () => {

    const Partnerslogo = [
        {
            id: 1,
            img: Partner1
        },
        {
            id: 2,
            img: Partner2
        },
        {
            id: 3,
            img: Partner3
        },
        {
            id: 4,
            img: Partner4
        },
        {
            id: 5,
            img: Partner5
        },
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
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <section className='bg-WarmWhite pt-28 max-sm:pt-8 pb-48 max-sm:pb-16'>
            <div className='container'>
                {
                    <Slider {...settings}>
                        {
                            Partnerslogo.map((data) => (
                                <div className='flex px-3 max-sm:px-1 pb-5'>
                                    <div key={data.id} className='flex items-center justify-center border border-LightGray p-12 max-sm:p-4 h-36'>
                                        <Image src={data.img} alt='partners' />
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                }
            </div>
        </section>
    )
}

export default Partners
