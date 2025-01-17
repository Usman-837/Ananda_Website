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
        <div className="flex justify-center max-md:justify-between items-center py-1">
          <ul className="Jost flex justify-center items-center gap-x-fortynine max-lg:gap-x-10 max-md:hidden text-base font-medium text-navmenucolor leading-twentythree">
            <li className='hover:text-SoftBeigePink'>
              <Link href="/">Home</Link>
            </li>
            <li className='hover:text-SoftBeigePink'>
              <Link href="/about">About Us</Link>
            </li>
            <li className='hover:text-SoftBeigePink'>
              <Link href="/">
                <Image src={logo} alt="logo" className="w-onethirtyfour" />
              </Link>
            </li>
            <li className='hover:text-SoftBeigePink'>
              <Link href="/service">Service</Link>
            </li>
            <li className='hover:text-SoftBeigePink'>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          {/* Toggle Button */}
          <div className='md:hidden flex'>
            <Link href="/">
              <Image src={logo} alt="logo" className="w-hundred" />
            </Link>
          </div>
          <div
            className="md:hidden right-8 top-4 text-2xl flex text-SoftBeigePink cursor-pointer"
            onClick={handleToggle}
          >
            <FaBars />
          </div>
        </div>

        {/* Mobile Menu */}
        {toggle && (
          <ul className="Jost flex flex-col items-center gap-y-fortynine bg-white md:hidden z-50 h-svh py-5 text-base font-medium text-navmenucolor leading-twentythree">
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
