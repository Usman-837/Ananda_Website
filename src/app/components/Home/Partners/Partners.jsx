'use client'
import React from 'react'
import Image from 'next/image'
import Partner1 from '../../../../../public/Home/Partners/partner1.png'
import Partner2 from '../../../../../public/Home/Partners/partner2.png'
import Partner3 from '../../../../../public/Home/Partners/partner3.png'
import Partner4 from '../../../../../public/Home/Partners/partner4.png'
import Partner5 from '../../../../../public/Home/Partners/partner5.png'

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

    return (
        <section className='bg-[#FAF6F2] pb-48 max-sm:pb-16'>
            <div className='container'>
                <div className='grid gap-y-5 grid-cols-5 max-lg:grid-cols-3 max-sm:grid-cols-1'>
                    {
                        Partnerslogo.map((data) => (
                            <div key={data.id} className='border border-[#D3D3D3] p-12'>
                                <Image src={data.img} alt='partners' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Partners
