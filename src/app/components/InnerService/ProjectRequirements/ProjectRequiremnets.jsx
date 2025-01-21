'use client'
import React from 'react'
import Image from 'next/image'
import serviceimage from '../../../../../public/InnerService/ProjectRequirements/image1.png'
import projectimage from '../../../../../public/InnerService/ProjectRequirements/image2.png'
import researchimg from '../../../../../public/InnerService/ProjectRequirements/research.png'
import ideaimg from '../../../../../public/InnerService/ProjectRequirements/idea.png'
import eventimg from '../../../../../public/InnerService/ProjectRequirements/eventmanager.png'

const ProjectRequiremnets = () => {
    return (
        <div className='pt-28 max-sm:pt-16'>
            <div>
                <div data-aos="fade-up"
                    data-aos-duration="1000">
                    <Image src={serviceimage} alt='serviceimage' />
                </div>
                <div className='flex flex-col gap-y-10 pt-24 max-sm:pt-12' data-aos="fade-up"
                    data-aos-duration="1000">
                    <h1 className='Jost text-SlateBlack leading-thirtysix text-3xl max-sm:text-2xl max-sm:text-center font-medium'>Project Requirement</h1>
                    <div className='Jost text-base text-DustyGrayBlue space-y-5 leading-7 max-sm:text-center'>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
                            injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem
                            Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle.
                        </p>
                        <p>
                            The majority have suffered alteration in some form or randomised words which don't look even slightly believable. If you are
                            going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.
                        </p>
                    </div>
                    <div>
                        <Image src={projectimage} alt='projectimage' />
                    </div>
                </div>
                <div className='pt-14' data-aos="fade-up"
                    data-aos-duration="1000">
                    <h1 className='Jost text-SlateBlack leading-thirtysix text-3xl max-sm:text-2xl font-medium max-sm:text-center'>Our Work Process</h1>
                    <div className='grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-4 pt-10'>
                        <div className='border border-[#EBEBEB] p-6 space-y-4 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
                            <Image src={researchimg} alt='Research and Analytics' />
                            <h2 className='Jost text-SlateBlack leading-twentyfour text-xl font-semibold'>Research and analytics</h2>
                            <p className='Jost text-fifteen text-DustyGrayBlue leading-twentyseven'>If you are going to use a passage
                                of Lorem Ipsum, you need to be
                                sure there isn't.</p>
                        </div>
                        <div className='border border-[#EBEBEB] p-6 space-y-4 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
                            <Image src={ideaimg} alt='Research and Analytics' />
                            <h2 className='Jost text-SlateBlack leading-twentyfour text-xl font-semibold'>Design and Idea</h2>
                            <p className='Jost text-fifteen text-DustyGrayBlue leading-twentyseven'>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.</p>
                        </div>
                        <div className='border border-[#EBEBEB] p-6 space-y-4 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
                            <Image src={eventimg} alt='Research and Analytics' />
                            <h2 className='Jost text-SlateBlack leading-twentyfour text-xl font-semibold'>Research and analytics</h2>
                            <p className='Jost text-fifteen text-DustyGrayBlue leading-twentyseven'>If you are going to use a passage
                                of Lorem Ipsum, you need to be
                                sure there isn't.</p>
                        </div>
                    </div>
                </div>
                <div className='pt-12 max-sm:pt-6' data-aos="fade-up"
                    data-aos-duration="1000">
                    <h1 className='Jost text-SlateBlack leading-thirtysix text-3xl max-sm:text-2xl font-medium max-sm:text-center py-6'>Service Solution</h1>
                    <div className='flex flex-col gap-y-5 text-DustyGrayBlue text-fifteen'>
                        <div className='bg-[#FFFFFF] py-5 px-3'>We Can Save More Lifes With Your Helping Hand</div>
                        <div className='bg-[#FFFFFF] py-5 px-3'>Planning can help alleviate workplace stress and increase productivity.</div>
                        <div className='bg-[#FFFFFF] py-5 px-3'>Those who experiment the most, are able to innovate the best.</div>
                        <div className='bg-[#FFFFFF] py-5 px-3'>Understand Your Problem, You must understand the issue.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectRequiremnets
