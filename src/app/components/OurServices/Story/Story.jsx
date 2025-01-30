'use client'
import React from 'react'
import Image from 'next/image'
import Img1 from '../../../../../public/OurServices/StyleByAnanda/StyleByAnandaStory/image1.png'
import Img2 from '../../../../../public/OurServices/StyleByAnanda/StyleByAnandaStory/image3.png'
import Img3 from '../../../../../public/OurServices/StyleByAnanda/StyleByAnandaStory/image2.png'
import Img4 from '../../../../../public/OurServices/StyleByAnanda/StyleByAnandaStory/image4.png'

const Story = ({ id }) => {

    const MainHeading = [
        {
            id: 1,
            title: 'FEATURED WEDDING STORY'
        },
        {
            id: 2,
            title: 'FEATURED STYLE STORY'
        },
        {
            id: 3,
            title: 'FEATURED JEWELRY STORY'
        },
    ]

    const LeftSideStoryData1 = [
        {
            id: 1,
            LeftSideStoryData2: [
                {
                    id: 1,
                    img: Img1,
                    name: 'Ali & Robert',
                    date: 'Chaina - 14 Sep 2019'
                },
                {
                    id: 2,
                    img: Img2,
                    name: 'Rihanna & William',
                    date: 'Austria - 28 Oct 2020'
                }
            ]
        },
        {
            id: 2,
            LeftSideStoryData2: [
                {
                    id: 1,
                    img: Img1,
                    name: 'Ali & Robert',
                    date: 'Chaina - 14 Sep 2019'
                },
                {
                    id: 2,
                    img: Img2,
                    name: 'Rihanna & William',
                    date: 'Austria - 28 Oct 2020'
                }
            ]
        },
        {
            id: 3,
            LeftSideStoryData2: [
                {
                    id: 1,
                    img: Img1,
                    name: 'Ali & Robert',
                    date: 'Chaina - 14 Sep 2019'
                },
                {
                    id: 2,
                    img: Img2,
                    name: 'Rihanna & William',
                    date: 'Austria - 28 Oct 2020'
                }
            ]
        }

    ]

    const RightSideStoryData1 = [
        {
            id: 1,
            RightSideStoryData2: [
                {
                    id: 1,
                    img: Img3,
                    name: 'Sarah & Daniel',
                    date: 'Singapore - 16 May 2022'
                },
                {
                    id: 2,
                    img: Img4,
                    name: 'Kate & Johnthan',
                    date: 'London - 22 June 2022'
                }
            ]
        },
        {
            id: 2,
            RightSideStoryData2: [
                {
                    id: 1,
                    img: Img3,
                    name: 'Sarah & Daniel',
                    date: 'Singapore - 16 May 2022'
                },
                {
                    id: 2,
                    img: Img4,
                    name: 'Kate & Johnthan',
                    date: 'London - 22 June 2022'
                }
            ]
        },
        {
            id: 3,
            RightSideStoryData2: [
                {
                    id: 1,
                    img: Img3,
                    name: 'Sarah & Daniel',
                    date: 'Singapore - 16 May 2022'
                },
                {
                    id: 2,
                    img: Img4,
                    name: 'Kate & Johnthan',
                    date: 'London - 22 June 2022'
                }
            ]
        }
    ]

    const selectedMainHeading = MainHeading.find((item) => item.id === Number(id));
    const selectedLeftSideStory = LeftSideStoryData1.find((item) => item.id === Number(id));
    const selectedRightSideStory = RightSideStoryData1.find((item) => item.id === Number(id))

    return (
        <section className='bg-WarmWhite pt-28 max-sm:pt-16'>
            <div className='container' data-aos="fade-up"
                data-aos-duration="1000">
                <div className='space-y-4 pb-5'>
                    <h1 className='Vujahday leading-fifty text-center text-DustyGreen text-thirtyfive max-sm:text-4xl'>Amazing Work</h1>
                    {
                        selectedMainHeading && (
                            <h2 className='Jost text-forty text-SlateBlack leading-fiftyeight max-sm:text-2xl text-center'>{selectedMainHeading.title}</h2>
                        )
                    }
                </div>
                <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-10 py-10 max-sm:text-center'>
                    {selectedLeftSideStory && (
                        <div className='flex flex-col gap-10' data-aos="fade-up" data-aos-duration="1000">
                            {selectedLeftSideStory.LeftSideStoryData2.map((data) => (
                                <div key={data.id} className='space-y-4 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
                                    <Image src={data.img} alt={data.name} className='max-w-sixthirtythree w-full' />
                                    <h1 className='text-thirtyfive text-SlateBlack leading-fifty max-sm:text-2xl'>{data.name}</h1>
                                    <p className='Jost text-DustyGreen text-lg max-sm:text-sm leading-twentyseven'>{data.date}</p>
                                </div>
                            ))}
                        </div>
                    )}
                    {selectedRightSideStory && (
                        <div className='flex flex-col gap-10' data-aos="fade-up" data-aos-duration="1000">
                            {selectedRightSideStory.RightSideStoryData2.map((data) => (
                                <div key={data.id} className='space-y-4 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
                                    <Image src={data.img} alt={data.name} className='max-w-sixthirtythree w-full' />
                                    <h1 className='text-thirtyfive text-SlateBlack leading-fifty max-sm:text-2xl'>{data.name}</h1>
                                    <p className='Jost text-DustyGreen text-lg max-sm:text-sm leading-twentyseven'>{data.date}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Story
