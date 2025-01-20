'use client';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Question = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Replace with your Email.js service ID
        'YOUR_TEMPLATE_ID', // Replace with your Email.js template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your Email.js public key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          console.log(result.text);
        },
        (error) => {
          alert('Failed to send the message. Please try again.');
          console.log(error.text);
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <div className="pb-28">
      <div className="container space-y-10">
        <div>
          <h1 className="text-[35px] max-sm:text-3xl text-center pb-5">
            Have Any Question?
          </h1>
          <p className="text-lg text-[#848892] text-center">
            It is a long established fact that a reader will be distracted
            content of a page when looking.
          </p>
        </div>
        <div className="max-w-4xl mx-auto py-10 px-6 bg-white shadow-lg rounded-md">
          <form ref={formRef} onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#D4B0A5]"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#D4B0A5]"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="user_phone"
                placeholder="Your phone"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#D4B0A5]"
              />
              <select
                name="service"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#D4B0A5]"
              >
                <option>Photography</option>
                <option>Wedding Planning</option>
                <option>Event Decoration</option>
              </select>
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#D4B0A5]"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 text-base py-2 bg-[#D4B0A5] text-white font-medium rounded-md focus:outline-none focus:ring focus:ring-[#D4B0A5]"
              >
                SUBMIT NOW
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Question;
