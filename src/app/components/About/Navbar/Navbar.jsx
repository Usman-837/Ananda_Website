'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../../../public/Home/Logo/logo.png'
import { FaBars } from 'react-icons/fa'
import { CiSearch } from "react-icons/ci";

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle((prev) => !prev);
    }

    return (
        <div className='sticky top-0 z-50 bg-white'>
            <div className="container">
                <div className="flex justify-between items-center py-1 z-50">
                    <div>
                        <Link href="/">
                            <Image src={logo} alt="logo" className="w-onetwenty" />
                        </Link>
                    </div>
                    <ul className="flex justify-center items-center gap-x-fortynine max-lg:gap-x-10 max-laptop:hidden text-base font-medium text-navmenucolor leading-twentythree">
                        <li className='hover:text-SoftBeigePink'>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='hover:text-SoftBeigePink'>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li className='hover:text-SoftBeigePink'>
                            <Link href="/service">Service</Link>
                        </li>
                        <li className='hover:text-SoftBeigePink'>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div class="flex items-center p-1 rounded-lg shadow-md max-w-md max-sm:hidden focus-within:outline focus-within:outline-2 focus-within:outline-SoftBeigePink">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex-grow p-2 text-gray-700 border-none outline-none"
                        />
                        <button className="p-2 text-xl text-gray-500">
                            <CiSearch />
                        </button>
                    </div>
                    {/* Toggle Button */}
                    <div
                        className="laptop:hidden right-8 top-4 text-2xl flex text-SoftBeigePink cursor-pointer"
                        onClick={handleToggle}
                    >
                        <FaBars />
                    </div>
                </div>

                {/* Mobile Menu */}
                {toggle && (
                    <ul className="flex flex-col items-center gap-y-fortynine bg-white md:hidden z-50 h-svh py-5 text-base font-medium text-navmenucolor leading-twentythree">
                        <li className='hover:text-SoftBeigePink' onClick={handleToggle}>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='hover:text-SoftBeigePink' onClick={handleToggle}>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li className='hover:text-SoftBeigePink' onClick={handleToggle}>
                            <Link href="/service">Service</Link>
                        </li>
                        <li className='hover:text-SoftBeigePink' onClick={handleToggle}>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Navbar
