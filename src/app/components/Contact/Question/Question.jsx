import React from 'react'

const Question = () => {
  return (
    <div className='pb-28'>
      <div className='container space-y-10'>
        <div>
          <h1 className='text-[35px] max-sm:text-3xl text-center pb-5'>Have Any Question?</h1>
          <p className='text-lg text-[#848892] text-center'>It is a long established fact that a reader will be distracted
            content of a page when looking.</p>
        </div>
        <div className="max-w-4xl mx-auto py-10 px-6 bg-white shadow-lg rounded-md">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#D4B0A5]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#D4B0A5]"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your phone"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#D4B0A5]"
              />
              <select
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#D4B0A5]"
              >
                <option>Photography</option>
                <option>Wedding Planning</option>
                <option>Event Decoration</option>
              </select>
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-[#D4B0A5]"
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
  )
}

export default Question
