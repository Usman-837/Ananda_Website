'use client'
import React from 'react'
import Image from 'next/image'
import serviceimage from '../../../../../../public/OurServices/StyleByAnanda/ProjectRequirements/image1.png'
import projectimage from '../../../../../../public/OurServices/StyleByAnanda/ProjectRequirements/image2.png'
import researchimg from '../../../../../../public/OurServices/StyleByAnanda/ProjectRequirements/research.png'
import ideaimg from '../../../../../../public/OurServices/StyleByAnanda/ProjectRequirements/idea.png'
import eventimg from '../../../../../../public/OurServices/StyleByAnanda/ProjectRequirements/eventmanager.png'

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
                        <p>The wedding dress event will feature a curated collection of bridal gowns, showcasing a variety of styles from traditional to modern. Held in an elegant venue with perfect lighting, the event will offer live dress trials with professional models and personalized fittings for guests. Bridal stylists will provide expert advice, while photographers capture stunning moments.</p>
                        <p>Guests can explore accessories from partnered vendors, including jewelers and florists, to complete their bridal look. A runway show can highlight the finest designs, creating an immersive experience. The event ensures a seamless, luxurious atmosphere for brides-to-be to find their dream wedding dress.</p>
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
                            <p className='Jost text-fifteen text-DustyGrayBlue leading-twentyseven'> We analyze trends and fabrics to curate a stunning wedding dress collection.</p>
                        </div>
                        <div className='border border-[#EBEBEB] p-6 space-y-4 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
                            <Image src={ideaimg} alt='Research and Analytics' />
                            <h2 className='Jost text-SlateBlack leading-twentyfour text-xl font-semibold'>Design and Idea</h2>
                            <p className='Jost text-fifteen text-DustyGrayBlue leading-twentyseven'>Our team creates unique, elegant designs blending tradition with innovation.</p>
                        </div>
                        <div className='border border-[#EBEBEB] p-6 space-y-4 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
                            <Image src={eventimg} alt='Research and Analytics' />
                            <h2 className='Jost text-SlateBlack leading-twentyfour text-xl font-semibold'>All Event Manage</h2>
                            <p className='Jost text-fifteen text-DustyGrayBlue leading-twentyseven'>We handle all details to ensure a seamless and memorable bridal showcase.</p>
                        </div>
                    </div>
                </div>
                <div className='pt-12 max-sm:pt-6' data-aos="fade-up"
                    data-aos-duration="1000">
                    <h1 className='Jost text-SlateBlack leading-thirtysix text-3xl max-sm:text-2xl font-medium max-sm:text-center py-6'>Service Solution</h1>
                    <div className='flex flex-col gap-y-5 text-DustyGrayBlue text-fifteen'>
                        <div className='bg-[#FFFFFF] py-5 px-3'>Expert consultants help brides find their perfect dress.</div>
                        <div className='bg-[#FFFFFF] py-5 px-3'>Tailor-made gowns crafted to individual preferences.</div>
                        <div className='bg-[#FFFFFF] py-5 px-3'>Capture memorable moments with professional coverage.</div>
                        <div className='bg-[#FFFFFF] py-5 px-3'>Affordable and premium wedding dress solutions.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectRequiremnets
