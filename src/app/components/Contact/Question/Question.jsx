'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Question = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false); 

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        formRef.current,
        'YOUR_PUBLIC_KEY' 
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
      )
      .finally(() => {
        setIsSubmitting(false);
        e.target.reset();
      });
  };

  return (
    <div className="pt-28 max-sm:pt-16">
      <div className="container space-y-10">
        <div>
          <h1 className="text-thirtyfive text-SlateBlack leading-fortytwo max-sm:text-3xl text-center pb-5">
            Have Any Question?
          </h1>
          <p className="Jost text-lg text-DustyGrayBlue leading-thirtytwo text-center">
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-SoftBeigePink"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-SoftBeigePink"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="user_phone"
                placeholder="Your phone"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-SoftBeigePink"
              />
              <select
                name="service"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-SoftBeigePink"
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
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-SoftBeigePink"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className={`px-6 text-base py-2 ${
                  isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-softring-SoftBeigePink text-white'
                } font-medium rounded-md focus:outline-none focus:ring focus:ring-SoftBeigePink`}
                disabled={isSubmitting} 
              >
                {isSubmitting ? 'Submitting...' : 'SUBMIT NOW'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Question;
