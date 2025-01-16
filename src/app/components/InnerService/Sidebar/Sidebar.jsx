import React from 'react'
import { CiSearch } from "react-icons/ci"
import Image from 'next/image'
import instagramim from '../../../../../public/InnerService/Sidebar/instagram.png'

const Sidebar = () => {
    return (
        <section className='py-28 max-laptop:py-0 max-laptop:pb-28'>
            <div className="bg-white w-[350px] max-laptop:w-full p-5">
                <div className="flex items-center mb-6">
                    <input
                        type="text"
                        placeholder="Search Post.."
                        className="w-full px-4 py-2 border rounded-l-md focus:outline-none focus:ring focus:ring-[#D4B0A5]"
                    />
                    <button className="px-4 py-3.5 bg-[#D4B0A5] text-white rounded-r-md">
                        <CiSearch />
                    </button>
                </div>

                <div className="mb-8">
                    <h2 className="text-[23px] font-semibold mb-4">Services</h2>
                    <div className="h-1 w-8 bg-pink-300 mb-2"></div>
                    <div className="h-1 w-24 bg-gray-300"></div>
                    <ul className="mt-4 text-base space-y-5 text-[#474F62]">
                        <li>Wedding Dress</li>
                        <li>Event Planning</li>
                        <li>Photography</li>
                        <li>Cake Design</li>
                        <li>Fine Decor</li>
                        <li>Wedding Registry</li>
                    </ul>
                </div>

                <div className='pt-4'>
                    <h2 className="text-lg font-semibold mb-4">Instagram</h2>
                    <div className="h-1 w-8 bg-pink-300 mb-2"></div>
                    <div className="h-1 w-24 bg-gray-300"></div>
                    <div className="pt-4">
                        <Image src={instagramim} alt='instagram' />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Sidebar
