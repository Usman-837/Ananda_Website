'use client'
import React from 'react'
import Image from 'next/image'
import stylebyananda from '../../../../../public/OurServices/ProjectRequirements/stylebyananda.png'
import jewelrybyananda from '../../../../../public/OurServices/ProjectRequirements/jewelrybyananda.png'
import weddingdress from '../../../../../public/OurServices/ProjectRequirements/weddingdress.png'
import eventplanning from '../../../../../public/OurServices/ProjectRequirements/eventplanning.png'
import photography from '../../../../../public/OurServices/ProjectRequirements/photography.png'
import cakedesign from '../../../../../public/OurServices/ProjectRequirements/cakedesign.png'
import venueselection from '../../../../../public/OurServices/ProjectRequirements/venueselection.png'
import decoration from '../../../../../public/OurServices/ProjectRequirements/decoration.png'
import catering from '../../../../../public/OurServices/ProjectRequirements/catering.png'
import entertainment from '../../../../../public/OurServices/ProjectRequirements/entertainment.png'
import projectimage from '../../../../../public/OurServices/ProjectRequirements/image2.png'
import researchimg from '../../../../../public/OurServices/ProjectRequirements/research.png'
import ideaimg from '../../../../../public/OurServices/ProjectRequirements/idea.png'
import eventimg from '../../../../../public/OurServices/ProjectRequirements/eventmanager.png'

const ProjectRequiremnets = ({ id }) => {

    const RequirementsData = [
        {
            id: 1,
            des1: 'The wedding dress event will feature a curated collection of bridal gowns, showcasing a variety of styles from traditional to modern. Held in an elegant venue with perfect lighting, the event will offer live dress trials with professional models and personalized fittings for guests.',
            des2: 'Guests can explore accessories from partnered vendors, including jewelers and florists, to complete their bridal look. A runway show can highlight the finest designs, creating an immersive experience.',
            serviceimage: stylebyananda,
            projectimage: projectimage,
        },
        {
            id: 2,
            des1: 'A luxury car showcase event featuring the latest automobile innovations, exclusive test drives, and high-end networking opportunities.',
            des2: 'Visitors can experience cutting-edge technology, interact with industry experts, and enjoy a premium exhibition of world-class cars.',
            serviceimage: jewelrybyananda,
            projectimage: projectimage,
        },
        {
            id: 3,
            des1: 'The wedding dress event will feature a curated collection of bridal gowns, showcasing a variety of styles from traditional to modern. Held in an elegant venue with perfect lighting, the event will offer live dress trials with professional models and personalized fittings for guests.',
            des2: 'Guests can explore accessories from partnered vendors, including jewelers and florists, to complete their bridal look. A runway show can highlight the finest designs, creating an immersive experience.',
            serviceimage: weddingdress,
            projectimage: projectimage,
        },
        {
            id: 4,
            des1: 'The wedding dress event will feature a curated collection of bridal gowns, showcasing a variety of styles from traditional to modern. Held in an elegant venue with perfect lighting, the event will offer live dress trials with professional models and personalized fittings for guests.',
            des2: 'Guests can explore accessories from partnered vendors, including jewelers and florists, to complete their bridal look. A runway show can highlight the finest designs, creating an immersive experience.',
            serviceimage: eventplanning,
            projectimage: projectimage,
        },
        {
            id: 5,
            des1: 'The wedding dress event will feature a curated collection of bridal gowns, showcasing a variety of styles from traditional to modern. Held in an elegant venue with perfect lighting, the event will offer live dress trials with professional models and personalized fittings for guests.',
            des2: 'Guests can explore accessories from partnered vendors, including jewelers and florists, to complete their bridal look. A runway show can highlight the finest designs, creating an immersive experience.',
            serviceimage: photography,
            projectimage: projectimage,
        },
        {
            id: 6,
            des1: 'The wedding dress event will feature a curated collection of bridal gowns, showcasing a variety of styles from traditional to modern. Held in an elegant venue with perfect lighting, the event will offer live dress trials with professional models and personalized fittings for guests.',
            des2: 'Guests can explore accessories from partnered vendors, including jewelers and florists, to complete their bridal look. A runway show can highlight the finest designs, creating an immersive experience.',
            serviceimage: cakedesign,
            projectimage: projectimage,
        },
        {
            id: 7,
            des1: 'The wedding dress event will feature a curated collection of bridal gowns, showcasing a variety of styles from traditional to modern. Held in an elegant venue with perfect lighting, the event will offer live dress trials with professional models and personalized fittings for guests.',
            des2: 'Guests can explore accessories from partnered vendors, including jewelers and florists, to complete their bridal look. A runway show can highlight the finest designs, creating an immersive experience.',
            serviceimage: venueselection,
            projectimage: projectimage,
        },
        {
            id: 8,
            des1: 'The wedding dress event will feature a curated collection of bridal gowns, showcasing a variety of styles from traditional to modern. Held in an elegant venue with perfect lighting, the event will offer live dress trials with professional models and personalized fittings for guests.',
            des2: 'Guests can explore accessories from partnered vendors, including jewelers and florists, to complete their bridal look. A runway show can highlight the finest designs, creating an immersive experience.',
            serviceimage: decoration,
            projectimage: projectimage,
        },
        {
            id: 9,
            des1: 'The wedding dress event will feature a curated collection of bridal gowns, showcasing a variety of styles from traditional to modern. Held in an elegant venue with perfect lighting, the event will offer live dress trials with professional models and personalized fittings for guests.',
            des2: 'Guests can explore accessories from partnered vendors, including jewelers and florists, to complete their bridal look. A runway show can highlight the finest designs, creating an immersive experience.',
            serviceimage: catering,
            projectimage: projectimage,
        },
        {
            id: 10,
            des1: 'The wedding dress event will feature a curated collection of bridal gowns, showcasing a variety of styles from traditional to modern. Held in an elegant venue with perfect lighting, the event will offer live dress trials with professional models and personalized fittings for guests.',
            des2: 'Guests can explore accessories from partnered vendors, including jewelers and florists, to complete their bridal look. A runway show can highlight the finest designs, creating an immersive experience.',
            serviceimage: entertainment,
            projectimage: projectimage,
        },
    ];

    const WorkprocessData1 = [
        {
            id: 1,
            WorkprocessData2: [
                {
                    id: 1,
                    icon: researchimg,
                    title: 'Research and analytics',
                    des: 'We analyze trends and fabrics to curate a stunning wedding dress collection.'
                },
                {
                    id: 2,
                    icon: ideaimg,
                    title: 'Creative Idea',
                    des: 'We develop unique themes and concepts to enhance the event experience.'
                },
                {
                    id: 3,
                    icon: eventimg,
                    title: 'All Event Manage',
                    des: 'We handle all details to ensure a seamless and memorable bridal showcase.'
                },
            ]
        },
        {
            id: 2,
            WorkprocessData2: [
                {
                    id: 1,
                    icon: researchimg,
                    title: 'Research and analytics',
                    des: 'We analyze trends and fabrics to curate a stunning wedding dress collection.'
                },
                {
                    id: 2,
                    icon: ideaimg,
                    title: 'Creative Idea',
                    des: 'We develop unique themes and concepts to enhance the event experience.'
                },
                {
                    id: 3,
                    icon: eventimg,
                    title: 'All Event Manage',
                    des: 'We handle all details to ensure a seamless and memorable bridal showcase.'
                },
            ]
        },
        {
            id: 3,
            WorkprocessData2: [
                {
                    id: 1,
                    icon: researchimg,
                    title: 'Research and analytics',
                    des: 'We analyze trends and fabrics to curate a stunning wedding dress collection.'
                },
                {
                    id: 2,
                    icon: ideaimg,
                    title: 'Creative Idea',
                    des: 'We develop unique themes and concepts to enhance the event experience.'
                },
                {
                    id: 3,
                    icon: eventimg,
                    title: 'All Event Manage',
                    des: 'We handle all details to ensure a seamless and memorable bridal showcase.'
                },
            ]
        },
        {
            id: 4,
            WorkprocessData2: [
                {
                    id: 1,
                    icon: researchimg,
                    title: 'Research and analytics',
                    des: 'We analyze trends and fabrics to curate a stunning wedding dress collection.'
                },
                {
                    id: 2,
                    icon: ideaimg,
                    title: 'Creative Idea',
                    des: 'We develop unique themes and concepts to enhance the event experience.'
                },
                {
                    id: 3,
                    icon: eventimg,
                    title: 'All Event Manage',
                    des: 'We handle all details to ensure a seamless and memorable bridal showcase.'
                },
            ]
        },
        {
            id: 5,
            WorkprocessData2: [
                {
                    id: 1,
                    icon: researchimg,
                    title: 'Research and analytics',
                    des: 'We analyze trends and fabrics to curate a stunning wedding dress collection.'
                },
                {
                    id: 2,
                    icon: ideaimg,
                    title: 'Creative Idea',
                    des: 'We develop unique themes and concepts to enhance the event experience.'
                },
                {
                    id: 3,
                    icon: eventimg,
                    title: 'All Event Manage',
                    des: 'We handle all details to ensure a seamless and memorable bridal showcase.'
                },
            ]
        },
        {
            id: 6,
            WorkprocessData2: [
                {
                    id: 1,
                    icon: researchimg,
                    title: 'Research and analytics',
                    des: 'We analyze trends and fabrics to curate a stunning wedding dress collection.'
                },
                {
                    id: 2,
                    icon: ideaimg,
                    title: 'Creative Idea',
                    des: 'We develop unique themes and concepts to enhance the event experience.'
                },
                {
                    id: 3,
                    icon: eventimg,
                    title: 'All Event Manage',
                    des: 'We handle all details to ensure a seamless and memorable bridal showcase.'
                },
            ]
        },
        {
            id: 7,
            WorkprocessData2: [
                {
                    id: 1,
                    icon: researchimg,
                    title: 'Research and analytics',
                    des: 'We analyze trends and fabrics to curate a stunning wedding dress collection.'
                },
                {
                    id: 2,
                    icon: ideaimg,
                    title: 'Creative Idea',
                    des: 'We develop unique themes and concepts to enhance the event experience.'
                },
                {
                    id: 3,
                    icon: eventimg,
                    title: 'All Event Manage',
                    des: 'We handle all details to ensure a seamless and memorable bridal showcase.'
                },
            ]
        },
        {
            id: 8,
            WorkprocessData2: [
                {
                    id: 1,
                    icon: researchimg,
                    title: 'Research and analytics',
                    des: 'We analyze trends and fabrics to curate a stunning wedding dress collection.'
                },
                {
                    id: 2,
                    icon: ideaimg,
                    title: 'Creative Idea',
                    des: 'We develop unique themes and concepts to enhance the event experience.'
                },
                {
                    id: 3,
                    icon: eventimg,
                    title: 'All Event Manage',
                    des: 'We handle all details to ensure a seamless and memorable bridal showcase.'
                },
            ]
        },
        {
            id: 9,
            WorkprocessData2: [
                {
                    id: 1,
                    icon: researchimg,
                    title: 'Research and analytics',
                    des: 'We analyze trends and fabrics to curate a stunning wedding dress collection.'
                },
                {
                    id: 2,
                    icon: ideaimg,
                    title: 'Creative Idea',
                    des: 'We develop unique themes and concepts to enhance the event experience.'
                },
                {
                    id: 3,
                    icon: eventimg,
                    title: 'All Event Manage',
                    des: 'We handle all details to ensure a seamless and memorable bridal showcase.'
                },
            ]
        },
        {
            id: 10,
            WorkprocessData2: [
                {
                    id: 1,
                    icon: researchimg,
                    title: 'Research and analytics',
                    des: 'We analyze trends and fabrics to curate a stunning wedding dress collection.'
                },
                {
                    id: 2,
                    icon: ideaimg,
                    title: 'Creative Idea',
                    des: 'We develop unique themes and concepts to enhance the event experience.'
                },
                {
                    id: 3,
                    icon: eventimg,
                    title: 'All Event Manage',
                    des: 'We handle all details to ensure a seamless and memorable bridal showcase.'
                },
            ]
        },
    ];

    const ServiceSolution1 = [
        {
            id: 1,
            ServiceSolution2: [
                { id: 1, des: 'Expert consultants help brides find their perfect dress.' },
                { id: 2, des: 'Tailor-made gowns crafted to individual preferences.' },
                { id: 3, des: 'Capture memorable moments with professional coverage.' },
                { id: 4, des: 'Affordable and premium wedding dress solutions.' }
            ]
        },
        {
            id: 2,
            ServiceSolution2: [
                { id: 1, des: 'Expert consultants help brides find their perfect dress.' },
                { id: 2, des: 'Tailor-made gowns crafted to individual preferences.' },
                { id: 3, des: 'Capture memorable moments with professional coverage.' },
                { id: 4, des: 'Affordable and premium wedding dress solutions.' }
            ]
        },
        {
            id: 3,
            ServiceSolution2: [
                { id: 1, des: 'Expert consultants help brides find their perfect dress.' },
                { id: 2, des: 'Tailor-made gowns crafted to individual preferences.' },
                { id: 3, des: 'Capture memorable moments with professional coverage.' },
                { id: 4, des: 'Affordable and premium wedding dress solutions.' }
            ]
        },
        {
            id: 4,
            ServiceSolution2: [
                { id: 1, des: 'Expert consultants help brides find their perfect dress.' },
                { id: 2, des: 'Tailor-made gowns crafted to individual preferences.' },
                { id: 3, des: 'Capture memorable moments with professional coverage.' },
                { id: 4, des: 'Affordable and premium wedding dress solutions.' }
            ]
        },
        {
            id: 5,
            ServiceSolution2: [
                { id: 1, des: 'Expert consultants help brides find their perfect dress.' },
                { id: 2, des: 'Tailor-made gowns crafted to individual preferences.' },
                { id: 3, des: 'Capture memorable moments with professional coverage.' },
                { id: 4, des: 'Affordable and premium wedding dress solutions.' }
            ]
        },
        {
            id: 6,
            ServiceSolution2: [
                { id: 1, des: 'Expert consultants help brides find their perfect dress.' },
                { id: 2, des: 'Tailor-made gowns crafted to individual preferences.' },
                { id: 3, des: 'Capture memorable moments with professional coverage.' },
                { id: 4, des: 'Affordable and premium wedding dress solutions.' }
            ]
        },
        {
            id: 7,
            ServiceSolution2: [
                { id: 1, des: 'Expert consultants help brides find their perfect dress.' },
                { id: 2, des: 'Tailor-made gowns crafted to individual preferences.' },
                { id: 3, des: 'Capture memorable moments with professional coverage.' },
                { id: 4, des: 'Affordable and premium wedding dress solutions.' }
            ]
        },
        {
            id: 8,
            ServiceSolution2: [
                { id: 1, des: 'Expert consultants help brides find their perfect dress.' },
                { id: 2, des: 'Tailor-made gowns crafted to individual preferences.' },
                { id: 3, des: 'Capture memorable moments with professional coverage.' },
                { id: 4, des: 'Affordable and premium wedding dress solutions.' }
            ]
        },
        {
            id: 9,
            ServiceSolution2: [
                { id: 1, des: 'Expert consultants help brides find their perfect dress.' },
                { id: 2, des: 'Tailor-made gowns crafted to individual preferences.' },
                { id: 3, des: 'Capture memorable moments with professional coverage.' },
                { id: 4, des: 'Affordable and premium wedding dress solutions.' }
            ]
        },
        {
            id: 10,
            ServiceSolution2: [
                { id: 1, des: 'Expert consultants help brides find their perfect dress.' },
                { id: 2, des: 'Tailor-made gowns crafted to individual preferences.' },
                { id: 3, des: 'Capture memorable moments with professional coverage.' },
                { id: 4, des: 'Affordable and premium wedding dress solutions.' }
            ]
        },
    ];

    const selectedData = RequirementsData.find((item) => item.id === Number(id));
    const selectedWorkProcess = WorkprocessData1.find((item) => item.id === Number(id))
    const selectedServiceSolution = ServiceSolution1.find((item) => item.id === Number(id))

    return (
        <div className='pt-28 max-sm:pt-16'>
            {selectedData && (
                <div>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Image src={selectedData.serviceimage} alt='serviceimage' />
                    </div>
                    <div className='flex flex-col gap-y-10 pt-24 max-sm:pt-12' data-aos="fade-up" data-aos-duration="1000">
                        <h1 className='Jost text-SlateBlack leading-thirtysix text-3xl max-sm:text-2xl max-sm:text-center font-medium'>Project Requirement</h1>
                        <div className='Jost text-base text-DustyGrayBlue space-y-5 leading-7 max-sm:text-center'>
                            <p>{selectedData.des1}</p>
                            <p>{selectedData.des2}</p>
                        </div>
                        <div>
                            <Image src={selectedData.projectimage} alt='projectimage' />
                        </div>
                    </div>
                </div>
            )}
            {selectedWorkProcess && (
                <div className='pt-14' data-aos="fade-up" data-aos-duration="1000">
                    <h1 className='Jost text-SlateBlack leading-thirtysix text-3xl max-sm:text-2xl font-medium max-sm:text-center'>Our Work Process</h1>
                    <div className='grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-4 pt-10'>
                        {selectedWorkProcess.WorkprocessData2.map((data) => (
                            <div key={data.id} className='border border-[#EBEBEB] p-6 space-y-4 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center'>
                                <Image src={data.icon} alt={data.title} />
                                <h2 className='Jost text-SlateBlack leading-twentyfour text-xl font-semibold'>{data.title}</h2>
                                <p className='Jost text-fifteen text-DustyGrayBlue leading-twentyseven'> {data.des}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {selectedServiceSolution && (
                <div className='pt-12 max-sm:pt-6' data-aos="fade-up" data-aos-duration="1000">
                    <h1 className='Jost text-SlateBlack leading-thirtysix text-3xl max-sm:text-2xl font-medium max-sm:text-center py-6'>Service Solution</h1>
                    {selectedServiceSolution.ServiceSolution2.map((data) => (
                        <div key={data.id} className='flex flex-col gap-y-5 text-DustyGrayBlue text-fifteen my-5'>
                            <div className='bg-[#FFFFFF] py-5 px-3'>{data.des}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProjectRequiremnets;
