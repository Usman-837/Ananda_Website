'use client'
import React from 'react'
import Image from 'next/image';
import cardimage1 from '../../../../public/Home/Memories/image1.jpg';
import cardimage2 from '../../../../public/Home/Memories/image2.jpg';
import cardimage3 from '../../../../public/Home/Memories/image3.jpg';
import cardimage4 from '../../../../public/Home/Memories/image4.jpg';
import cardimage5 from '../../../../public/Home/Memories/image5.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Memories = () => {

    const cardData = [
        {
            id: 1,
            name: 'Wedding Dress',
            image: cardimage1,
        },
        {
            id: 2,
            name: 'Wedding Dress',
            image: cardimage2,
        },
        {
            id: 3,
            name: 'Photography',
            image: cardimage3,
        },
        {
            id: 4,
            name: 'Wedding Dress',
            image: cardimage4,
        },
        {
            id: 5,
            name: 'Event Planning',
            image: cardimage5,
        },
    ]

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 4,
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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
        <>
            <h1 className='text-[65px] max-lg:text-5xl max-md:text-3xl max-sm:text-xl py-10 text-center Calligraffitti'>Planning Your Everlasting Memories</h1>
            <div className='bg-[#FAF6F2] py-28'>
                <div className='container flex flex-col justify-center items-center'>
                    <div className='flex justify-between max-md:gap-y-8 max-md:flex-col pb-20'>
                        <p className='w-1/2 max-md:w-full text-[42px] max-lg:text-4xl max-sm:text-xl Marcellus'>Experience Luxury <br /> experience caymanKind</p>
                        <p className='w-1/2 max-md:w-full max-sm:text-sm border-l border-gray-300 pl-12 max-sm:pl-6 text-lg Roboto text-[#666666]'>Celebrations is an award-winning, full-service wedding planner based in Grand Cayman in the Caribbean. For over 30 years, we have worked with hundreds of couples, local and across the globe, bringing their Cayman Islands wedding or elopement dreams to life.</p>
                    </div>
                    {/* Slider */}
                    <div className='w-full'>
                        <Slider {...settings} className='pb-5'>
                            {
                                cardData.map((data) => (
                                    <div key={data.id} className='px-3'>
                                        <div className='relative flex justify-center max-w-[421px] w-full p-[15px] bg-white rounded-md shadow-[#0000001A] shadow-lg mb-10'>
                                            <Image src={data.image} alt='cardimage1' />
                                            <div className='absolute bottom-[-22px] max-w-[200px] w-full bg-white py-4 text-center'>{data.name}</div>
                                        </div>
                                    </div>

                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Memories
