'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/Home/Logo/logo.png';

const Footer = () => {
    return (
        <div className='bg-[#F6EFEA] py-28'>
            <div className='container'>
                <div className="flex flex-col items-center justify-center">
                    <div>
                        <Link href="/">
                            <Image src={logo} alt="logo" className="w-[134px]" />
                        </Link>
                    </div>
                    <ul className="flex text-lg justify-center items-center gap-x-10 max-lg:gap-x-10 max-md:hidden text-[#525252]">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='flex items-center gap-x-2'>
                            <p className='w-2 h-2 bg-[#D4B0A5] rounded-full'></p>
                            <Link href="/aboutus">About Us</Link>
                        </li>
                        <li className='flex items-center gap-x-2'>
                            <p className='w-2 h-2 bg-[#D4B0A5] rounded-full'></p>
                            <Link href="/services">Services</Link>
                        </li>
                        <li className='flex items-center gap-x-2'>
                            <p className='w-2 h-2 bg-[#D4B0A5] rounded-full'></p>
                            <Link href="/vendors">Vendors</Link>
                        </li>
                        <li className='flex items-center gap-x-2'>
                            <p className='w-2 h-2 bg-[#D4B0A5] rounded-full'></p>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li className='flex items-center gap-x-2'>
                            <p className='w-2 h-2 bg-[#D4B0A5] rounded-full'></p>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
