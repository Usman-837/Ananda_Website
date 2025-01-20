'use client'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import contactimg1 from '../../../../../public/Home/Contact/bgimage1.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        wedding_date: '',
        guests: '',
        meal: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS integration
        emailjs.send(
            'service_9c91f8f',
            'template_y92q3f9',
            {
                name: formData.name,
                email: formData.email,
                wedding_date: formData.wedding_date,
                guests: formData.guests,
                meal: formData.meal,
            },
            'GYkUsD2PjtM-aUVWJ'
        )
            .then(() => {
                alert('Your inquiry has been sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    wedding_date: '',
                    guests: '',
                    meal: ''
                });
            })
            .catch((error) => {
                console.error('Failed to send the inquiry:', error);
                alert('There was an error sending your inquiry. Please try again later.');
            });
    };

    return (
        <section className="relative w-full h-[600px] max-sm:h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${contactimg1.src})`,
            }}>
            <div className='container'>
                <div className="absolute max-sm:static top-[-100px] w-full max-w-sixhundredninety bg-SoftSand px-10 pt-hundred max-sm:pt-12 pb-onethousandfifteen max-sm:pb-12 rounded-md">
                    <div className='flex flex-col items-center justify-center'>
                        <h2 className="text-white font-medium text-lg max-sm:text-sm mb-2">Lets Meet</h2>
                        <h1 className="text-white text-2xl max-sm:text-xl font-bold mb-4 tracking-wide ">MAKE AN INQUIRY</h1>
                        <hr className="border-t border-[#EDCCC1] mb-8 w-80 max-sm:w-40" />
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-lg max-sm:text-sm text-white">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-[#EDCCC1] bg-transparent text-white focus:outline-none focus:border-gray-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg max-sm:text-sm text-white">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-[#EDCCC1] bg-transparent text-white focus:outline-none focus:border-gray-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="wedding_date" className="block text-lg max-sm:text-sm text-white">Wedding Date</label>
                            <input
                                type="date"
                                id="wedding_date"
                                name="wedding_date"
                                value={formData.wedding_date}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-[#EDCCC1] bg-transparent text-white focus:outline-none focus:border-gray-300"
                            />
                        </div>
                        <div>
                            <label htmlFor="guests" className="block text-lg max-sm:text-sm text-white">Number Of Guests</label>
                            <select
                                id="guests"
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-[#EDCCC1] bg-transparent text-white focus:outline-none focus:border-gray-300">
                                <option value="" disabled className="bg-[#D9B8B1]"></option>
                                <option value="50" className="bg-[#D9B8B1]">Up to 50</option>
                                <option value="100" className="bg-[#D9B8B1]">Up to 100</option>
                                <option value="200" className="bg-[#D9B8B1]">Up to 200</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="meal" className="block text-lg max-sm:text-sm text-white">Meal Preferences</label>
                            <select
                                id="meal"
                                name="meal"
                                value={formData.meal}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-[#EDCCC1] bg-transparent text-white focus:outline-none focus:border-gray-300">
                                <option value="" disabled className="bg-[#D9B8B1]"></option>
                                <option value="veg" className="bg-[#D9B8B1]">Vegetarian</option>
                                <option value="non-veg" className="bg-[#D9B8B1]">Non-Vegetarian</option>
                                <option value="mixed" className="bg-[#D9B8B1]">Mixed</option>
                            </select>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button type="submit" className="px-11 max-sm:px-6 py-fifteen max-sm:text-sm mt-6 bg-white hover:bg-SlateBlack text-[#D9B8B1] hover:text-white font-semibold rounded-md transition">
                                SEND AN INQUIRY
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
