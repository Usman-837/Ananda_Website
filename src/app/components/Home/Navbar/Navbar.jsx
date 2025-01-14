'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../../../public/Home/Logo/logo.png'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle((prev) => !prev);
  }

  return (
    <div className='sticky top-0 z-50 bg-white'>
      <div className="container">
        <div className="flex justify-center max-md:justify-between items-center py-2 z-50">
          <ul className="flex justify-center items-center gap-x-16 max-lg:gap-x-10 max-md:hidden">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/aboutus">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/">
                <Image src={logo} alt="logo" className="w-[134px]" />
              </Link>
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
          {/* Toggle Button */}
          <div className='md:hidden flex'>
            <Link href="/">
              <Image src={logo} alt="logo" className="w-[100px]" />
            </Link>
          </div>
          <div
            className="md:hidden right-8 top-4 text-2xl flex text-[#D7B5AB] cursor-pointer"
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
