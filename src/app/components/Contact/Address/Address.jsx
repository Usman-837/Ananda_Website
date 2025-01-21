import React from 'react'
import { IoLocationSharp } from "react-icons/io5"
import { MdEmail } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa"

const Address = () => {

    const AddressData = [
        {
            id: 1,
            icon: <IoLocationSharp />,
            title: 'Address',
            des: (
                <>
                    7 Green Lake Street <br /> Crawfordsville, <br /> IN 47933
                </>
            )

        },
        {
            id: 2,
            icon: <MdEmail />,
            title: 'Email Us',
            des: (
                <>
                    example@gmail.com <br /> lorumipsum@gmail.com
                </>
            )
        },
        {
            id: 3,
            icon: <FaPhoneAlt />,
            title: 'Call Now',
            des: (
                <>
                    +1 800 123 456 789 <br /> +1 800 123 654 987
                </>
            )
        },
    ]

    return (
        <div className='pt-28 max-sm:pt-16'>
            <div className='container'>
                <div className='grid grid-cols-3 max-laptop:grid-cols-2 max-sm:grid-cols-1 text-center gap-5'>
                    {
                        AddressData.map((data) => (
                            <div key={data.id} className='bg-white p-10 flex flex-col gap-y-4 items-center justify-center' data-aos="fade-up" data-aos-duration="1000">
                                <p className='bg-[#F5F5F5] text-SoftBeigePink p-twentyfive max-sm:p-4 text-thirtyfive max-sm:text-3xl rounded-full'>{data.icon}</p>
                                <h2 className='Jost text-SlateBlack text-3xl max-sm:text-2xl font-medium'>{data.title}</h2>
                                <p className='text-lg max-sm:text-sm text-DustyGrayBlue leading-8'>{data.des}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Address
