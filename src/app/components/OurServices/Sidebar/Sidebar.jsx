import React from 'react'
import { CiSearch } from "react-icons/ci"
import Image from 'next/image'
import instagramimg from '../../../../../public/OurServices/Sidebar/instagram.png'

const Sidebar = () => {
    return (
        <section className='py-28 max-laptop:py-0'>
            <div className="bg-white w-threefifty max-laptop:w-full p-5" data-aos="fade-up"
                data-aos-duration="1000">
                <div className="flex items-center mb-6">
                    <input
                        type="text"
                        placeholder="Search Post.."
                        className="w-full px-4 py-2 border rounded-l-md focus:outline-none focus:ring focus:ring-SoftBeigePink"
                    />
                    <button className="px-4 py-3.5 bg-SoftBeigePink text-white rounded-r-md">
                        <CiSearch />
                    </button>
                </div>

                <div className="mb-8">
                    <h2 className="Jost text-SlateBlack text-twentythree font-semibold mb-4">Services</h2>
                    <div className="h-1 w-8 bg-pink-300 mb-2"></div>
                    <div className="h-1 w-24 bg-gray-300"></div>
                    <ul className="Jost leading-twentyfour mt-4 text-base space-y-4 text-darkslategray">
                        <li>Wedding Dress</li>
                        <li>Event Planning</li>
                        <li>Photography</li>
                        <li>Cake Design</li>
                        <li>Fine Decor</li>
                        <li>Wedding Registry</li>
                    </ul>
                </div>

                <div className='pt-4'>
                    <h2 className="Jost text-SlateBlack text-twentythree font-semibold mb-4">Instagram</h2>
                    <div className="h-1 w-8 bg-pink-300 mb-2"></div>
                    <div className="h-1 w-24 bg-gray-300"></div>
                    <div className="pt-4">
                        <Image src={instagramimg} alt='instagram' />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Sidebar
