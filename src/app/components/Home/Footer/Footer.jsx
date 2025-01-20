'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../../../public/Home/Logo/logo.png'
import { CiTwitter } from "react-icons/ci"
import { CiBasketball } from "react-icons/ci"
import { FaFacebookF } from "react-icons/fa6"
import { FaLinkedinIn } from "react-icons/fa6"
import { PiSkypeLogoLight } from "react-icons/pi"

const Footer = () => {

    const Socialicons = [
        {
            id: 1,
            icon: <CiTwitter />
        },
        {
            id: 2,
            icon: <CiBasketball />
        },
        {
            id: 3,
            icon: <FaFacebookF />
        },
        {
            id: 5,
            icon: <FaLinkedinIn />
        },
        {
            id: 5,
            icon: <PiSkypeLogoLight />
        }
    ]

    return (
        <div className='bg-[#F6EFEA] py-20 max-sm:py-8'>
            <div className='container'>
                <div className="flex flex-col gap-y-6 items-center justify-center">
                    <div>
                        <Link href="/">
                            <Image src={logo} alt="logo" className="w-oneforty" />
                        </Link>
                    </div>
                    <ul className="Jost flex text-lg justify-center items-center gap-x-10 max-lg:gap-x-10 max-md:hidden text-Gray">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='flex items-center gap-x-2'>
                            <p className='w-2 h-2 bg-SoftBeigePink rounded-full'></p>
                            <Link href="/abou">About Us</Link>
                        </li>
                        <li className='flex items-center gap-x-2'>
                            <p className='w-2 h-2 bg-SoftBeigePink rounded-full'></p>
                            <Link href="/service">Services</Link>
                        </li>
                        <li className='flex items-center gap-x-2'>
                            <p className='w-2 h-2 bg-SoftBeigePink rounded-full'></p>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className='flex gap-x-4'>
                        {
                            Socialicons.map((data) => (
                                <Link href='#'>
                                    <div key={data.id} className='bg-white hover:bg-SoftBeigePink hover:text-white w-10 h-10 rounded-full flex items-center justify-center text-DustyGreen'>
                                        {data.icon}
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                    <div>
                        <p className='Jost text-[#909090] text-lg max-sm:text-base leading-ninety'>© Copyright 2025 | All right reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer