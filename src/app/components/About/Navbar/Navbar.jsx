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
                <div className="flex justify-between items-center py-2 z-50">
                    <div>
                        <Link href="/">
                            <Image src={logo} alt="logo" className="w-[134px]" />
                        </Link>
                    </div>
                    <ul className="flex justify-center items-center gap-x-12 max-lg:gap-x-10 max-laptop:hidden">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li>
                            <Link href="/services">Services</Link>
                        </li>
                        <li>
                            <Link href="/vendors">Vendors</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div class="flex items-center p-2 rounded-lg shadow-md max-w-md max-sm:hidden">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex-grow p-2 text-gray-700 border-none outline-none"
                        />
                        <button className="p-2 text-xl text-gray-500 hover:text-gray-700">
                            <CiSearch />
                        </button>
                    </div>
                    {/* Toggle Button */}
                    <div
                        className="laptop:hidden right-8 top-4 text-2xl flex text-[#D7B5AB] cursor-pointer"
                        onClick={handleToggle}
                    >
                        <FaBars />
                    </div>
                </div>

                {/* Mobile Menu */}
                {toggle && (
                    <ul className="flex flex-col items-center gap-y-4 bg-white md:hidden z-50 h-svh py-5">
                        <li onClick={handleToggle}>
                            <Link href="/">Home</Link>
                        </li>
                        <li onClick={handleToggle}>
                            <Link href="/aboutus">About Us</Link>
                        </li>
                        <li onClick={handleToggle}>
                            <Link href="/services">Services</Link>
                        </li>
                        <li onClick={handleToggle}>
                            <Link href="/vendors">Vendors</Link>
                        </li>
                        <li onClick={handleToggle}>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li onClick={handleToggle}>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Navbar
