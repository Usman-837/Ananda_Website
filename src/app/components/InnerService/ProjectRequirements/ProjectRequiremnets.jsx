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
        <div className='py-28'>
            <div className='container'>
                <div>
                    <Image src={serviceimage} alt='serviceimage' />
                </div>
                <div className='flex flex-col gap-y-10 pt-24'>
                    <h1 className='text-3xl max-sm:text-2xl max-sm:text-center font-medium'>Project Requirement</h1>
                    <div className='text-base text-[#848892] space-y-6 leading-7 max-sm:text-center'>
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
                <div className='pt-14'>
                    <h1 className='text-3xl max-sm:text-2xl font-medium max-sm:text-center'>Our Work Process</h1>
                    <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 pt-10'>
                        <div className='border border-[#EBEBEB] p-6 space-y-4 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
                            <Image src={researchimg} alt='Research and Analytics' />
                            <h2 className='text-xl font-medium'>Research and analytics</h2>
                            <p className='text-[15px] text-[#848892]'>If you are going to use a passage
                                of Lorem Ipsum, you need to be
                                sure there isn't.</p>
                        </div>
                        <div className='border border-[#EBEBEB] p-6 space-y-4 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
                            <Image src={ideaimg} alt='Research and Analytics' />
                            <h2 className='text-xl font-medium'>Design and Idea</h2>
                            <p className='text-[15px] text-[#848892]'>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.</p>
                        </div>
                        <div className='border border-[#EBEBEB] p-6 space-y-4 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
                            <Image src={eventimg} alt='Research and Analytics' />
                            <h2 className='text-xl font-medium'>Research and analytics</h2>
                            <p className='text-[15px] text-[#848892]'>If you are going to use a passage
                                of Lorem Ipsum, you need to be
                                sure there isn't.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectRequiremnets
