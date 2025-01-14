'use client'
import React from 'react'
// import Image from 'next/image';
import contactimg1 from '../../../../../public/Home/Contact/bgimage1.png';
// import contactimg2 from '../../../../public/Home/Contact/bgimage2.png';
// import contactimg3 from '../../../../public/Home/Contact/bgimage3.png';

const Contact = () => {
    return (
        <section className="relative w-full h-[600px] max-sm:h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${contactimg1.src})`,
            }}>
            <div className='container'>
                <div className="absolute max-sm:static top-[-100px] w-full max-w-[690px] bg-[#D2ADA2] px-10 pt-[100px] max-sm:pt-12 pb-[115px] max-sm:pb-12 rounded-md">
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className="text-white font-medium text-lg max-sm:text-sm mb-2">Lets Meet</h2>
                        <h1 className="text-white text-2xl max-sm:text-xl font-bold mb-4 tracking-wide ">MAKE AN INQUIRY</h1>
                        <hr className="border-t border-[#EDCCC1] mb-8 w-80 max-sm:w-40" />
                    </div>
                    <form action="#" className="space-y-5">
                        <div>
                            <label for="name" className="block text-lg max-sm:text-sm text-white">Name</label>
                            <input type="text" id="name" name="name" className="w-full border-b border-[#EDCCC1] bg-transparent text-white focus:outline-none focus:border-gray-300" />
                        </div>
                        <div>
                            <label for="email" className="block text-lg max-sm:text-sm text-white">Email</label>
                            <input type="email" id="email" name="email" className="w-full border-b border-[#EDCCC1] bg-transparent text-white focus:outline-none focus:border-gray-300" />
                        </div>
                        <div>
                            <label for="wedding_date" className="block text-lg max-sm:text-sm text-white">Wedding Date</label>
                            <input type="date" id="wedding_date" name="wedding_date" className="w-full border-b border-[#EDCCC1] bg-transparent text-white focus:outline-none focus:border-gray-300" />
                        </div>
                        <div>
                            <label for="guests" className="block text-lg max-sm:text-sm text-white">Number Of Guests</label>
                            <select id="guests" name="guests" className="w-full border-b border-[#EDCCC1] bg-transparent text-white focus:outline-none focus:border-gray-300">
                                <option value="" disabled selected className="bg-[#D9B8B1]"></option>
                                <option value="50" className="bg-[#D9B8B1]">Up to 50</option>
                                <option value="100" className="bg-[#D9B8B1]">Up to 100</option>
                                <option value="200" className="bg-[#D9B8B1]">Up to 200</option>
                            </select>
                        </div>
                        <div>
                            <label for="meal" className="block text-lg max-sm:text-sm text-white">Meal Preferences</label>
                            <select id="meal" name="meal" className="w-full border-b border-[#EDCCC1] bg-transparent text-white focus:outline-none focus:border-gray-300">
                                <option value="" disabled selected className="bg-[#D9B8B1]"></option>
                                <option value="veg" className="bg-[#D9B8B1]">Vegetarian</option>
                                <option value="non-veg" className="bg-[#D9B8B1]">Non-Vegetarian</option>
                                <option value="mixed" className="bg-[#D9B8B1]">Mixed</option>
                            </select>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button type="submit" className="px-11 max-sm:px-6 py-[15px] max-sm:text-sm mt-6 bg-white text-[#D9B8B1]  font-semibold rounded-md hover:bg-gray-200 transition">
                                SEND AN INQUIRY
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
