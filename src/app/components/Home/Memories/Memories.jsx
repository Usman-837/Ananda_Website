'use client'
import React from 'react'
import Image from 'next/image'
import cardimage1 from '../../../../../public/Home/Memories/image1.jpg'
import cardimage2 from '../../../../../public/Home/Memories/image2.jpg'
import cardimage3 from '../../../../../public/Home/Memories/image3.jpg'
import cardimage4 from '../../../../../public/Home/Memories/image4.jpg'
import cardimage5 from '../../../../../public/Home/Memories/image5.png'
import cardimage6 from '../../../../../public/Home/Memories/image9.png'
import cardimage7 from '../../../../../public/Home/Memories/image10.png'
import cardimage8 from '../../../../../public/Home/Memories/image11.png'
import cardimage9 from '../../../../../public/Home/Memories/image12.png'
import cardimage10 from '../../../../../public/Home/Memories/image13.png'
import Memoryimg from '../../../../../public/Home/Memories/image6.png'
import Memoryimg2 from '../../../../../public/Home/Memories/image8.png'
import logo from '../../../../../public/Home/Logo/logo.png'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Link from 'next/link'

const Memories = () => {

    const cardData = [

        {
            id: 1,
            name: 'Style by Ananda',
            image: cardimage6,
            route: 'services/1'
        },
        {
            id: 2,
            name: 'Jewelry by Ananda',
            image: cardimage7,
            route: 'services/2'
        },
        {
            id: 3,
            name: 'Wedding Dress',
            image: cardimage1,
            route: 'services/3'
        },
        {
            id: 4,
            name: 'Event Planning',
            image: cardimage2,
            route: 'services/4'
        },
        {
            id: 5,
            name: 'Photography',
            image: cardimage3,
            route: 'services/5'
        },
        {
            id: 6,
            name: 'Cake Design',
            image: cardimage4,
            route: 'services/6'
        },
        {
            id: 7,
            name: 'Venu Selection',
            image: cardimage5,
            route: 'services/7'
        },
        {
            id: 8,
            name: 'Decoration',
            image: cardimage8,
            route: 'services/8'
        },
        {
            id: 9,
            name: 'Cetering',
            image: cardimage9,
            route: 'services/9'
        },
        {
            id: 10,
            name: 'Entertainment',
            image: cardimage10,
            route: 'services/10'
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
                breakpoint: 1280,
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
            <h1 className='Calligraffitti text-sixtyfive text-NearBlack max-lg:text-5xl max-md:text-3xl max-sm:text-xl py-20 max-md:py-16 max-sm:py-12 tracking-0.5 text-center leading-fifty' data-aos="fade-up" data-aos-duration="1000" >Planning Your Everlasting Memories</h1>
            <div className='bg-WarmWhite pt-28 max-sm:pt-16'>
                <div className='container flex flex-col justify-center items-center' data-aos="fade-up" data-aos-duration="1000">
                    <div className='flex justify-between max-md:gap-y-8 max-md:flex-col pb-20'>
                        <p className='Marcellus w-1/2 max-md:w-full text-fortytwo max-lg:text-4xl max-sm:text-xl tracking-0.5 leading-fifty text-NearBlack'>Experience Luxury <br /> experience caymanKind</p>
                        <p className='Roboto w-1/2 max-md:w-full max-sm:text-sm border-l border-gray-300 pl-12 max-sm:pl-6 text-lg text-DimGray leading-twentyseven tracking-0.5'>Celebrations, based in Grand Cayman, is an award-winning wedding planner with over 30 years of expertise in crafting stunning Cayman Islands weddings and elopements. Let’s make your dream day unforgettable!</p>
                    </div>
                    <div className='flex max-lg:flex-col-reverse max-lg:gap-y-16 pb-36 max-sm:pb-24 pt-10 max-sm:pt-0'>
                        <div>
                            <Image src={Memoryimg} alt='memoryimg' />
                        </div>
                        <div className='flex flex-col justify-between max-sm:justify-center max-lg:gap-y-10'>
                            <div className='flex'>
                                <div className='flex flex-col items-center justify-center text-center'>
                                    <Image src={logo} alt='logo' className='w-onefortyfive' />
                                    <p className='Marcellus text-NearBlack text-4xl max-sm:text-xl leading-fifty tracking-0.5'>Live your magic and save your<br />
                                        precious love memories!</p>
                                </div>
                                <div>
                                    <Image src={Memoryimg2} alt='memoryimg' className='w-36' />
                                </div>
                            </div>
                            <div className='flex flex-col items-center justify-center text-center gap-y-5'>
                                <h1 className='Vujahday text-sixtyfive max-sm:text-4xl leading-sixtyeight tracking-0.5'>special moments</h1>
                                <p className='Roboto text-DimGray text-lg max-sm:text-sm leading-twentyseven tracking-0.5'>Showcase the bridal party and groomsmen with photos and<br /> brief bios. Share heartfelt stories or fun facts about their<br /> unique connection to the couple, making their role<br /> in the celebration even more meaningful!
                                </p>
                                <button className='Jost bg-SoftBeigePink hover:bg-SlateBlack text-white px-fortyfive py-fifteen textr-lg leading-27'>Appointment</button>
                            </div>
                        </div>
                    </div>
                    {/* Slider */}
                    <div className='w-full' data-aos="fade-up"
                        data-aos-duration="1000">
                        <Slider {...settings} className='pb-5'>
                            {
                                cardData.map((data) => (
                                    <Link href={data.route} key={data.id} className='px-3'>
                                        <div className='relative flex justify-center max-w-fourtwentytwo w-full p-fifteen bg-white rounded-md mb-10'>
                                            <Image src={data.image} alt='cardimage1' />
                                            <div className='absolute Jost text-SlateBlack hover:text-white text-twentytwo max-sm:text-lg max-sm:py-3 bottom-[-22px] max-w-[220px] max-sm:max-w-[180px] w-full bg-white hover:bg-SlateBlack text-center leading-sixty'>{data.name}</div>
                                        </div>
                                    </Link>
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
