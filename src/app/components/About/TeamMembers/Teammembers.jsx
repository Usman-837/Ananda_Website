import React from 'react'
import Image from 'next/image'
import memberimg1 from '../../../../../public/About/TeamMember/image1.png'
import memberimg2 from '../../../../../public/About/TeamMember/image2.png'
import memberimg3 from '../../../../../public/About/TeamMember/image3.png'
import memberimg4 from '../../../../../public/About/TeamMember/image4.png'

const Teammembers = () => {

    const TeamMemberData = [
        {
            id: 1,
            name: 'Margarate Bennet',
            title: 'Dress Designer',
            img: memberimg1,
        },
        {
            id: 2,
            name: 'Margarate Bennet',
            title: 'Dress Designer',
            img: memberimg2,
        },
        {
            id: 3,
            name: 'Henry D’suza',
            title: 'Assistant',
            img: memberimg3,
        },
        {
            id: 4,
            name: 'Jenefer Abram',
            title: 'Lead Assistant',
            img: memberimg4,
        },
    ]


    return (
        <div className='bg-[#FAF6F2] py-28'>
            <div className='container'>
                <div>
                    <h1 className='text-[#939580] text-[35px] max-sm:text-3xl text-center'>Our Organizers</h1>
                    <p className='uppercase text-center pt-3 text-[40px] max-sm:text-2xl'>Awesome Team Member</p>
                </div>
                <div className='pt-14 grid grid-cols-4 gap-5 max-laptop:gap-y-10 max-laptop:grid-cols-2'>
                    {
                        TeamMemberData.map((data) => (
                            <div key={data.id} className='flex flex-col items-center justify-center gap-y-3'>
                                <Image src={data.img} alt='teammember' className='rounded-full' />
                                <p className='text-[25px] max-sm:text-[16px]'>{data.name}</p>
                                <p className='text-lg max-sm:text-sm text-[#939580]'>{data.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Teammembers
