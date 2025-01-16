'use client'
import React from 'react'
import Image from 'next/image'
import serviceimage from '../../../../../public/InnerService/ProjectRequirements/image1.png'
import projectimage from '../../../../../public/InnerService/ProjectRequirements/image2.png'

const ProjectRequiremnets = () => {
    return (
        <div className='py-28'>
            <div className='container'>
                <div>
                    <Image src={serviceimage} alt='serviceimage' />
                </div>
                <div className='flex flex-col gap-y-10 pt-24'>
                    <h1 className='text-3xl'>Project Requirement</h1>
                    <div className='text-base text-[#848892] space-y-6 leading-7'>
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
            </div>
        </div>
    )
}

export default ProjectRequiremnets
