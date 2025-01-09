'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../../public/Home/Logo/logo.png'

const Navbar = () => {
  return (
    <div>
      <div className='container'>
            <div>
                <ul className='flex justify-center items-center gap-x-16 py-4'>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/aboutus'>About US</Link></li>
                    <li><Link href='/services'>Services</Link></li>
                    <li><Link href='/'><Image src={logo} alt='logo' className='w-[134px]'/></Link></li>
                    <li><Link href='/vendors'>Vendors</Link></li>
                    <li><Link href='/blog'>Blog</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                </ul>
            </div>
      </div>
    </div>
  )
}

export default Navbar
