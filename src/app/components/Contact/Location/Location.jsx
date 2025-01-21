import React from 'react'

const Location = () => {
    return (
        <div>
            <div className="pt-28 max-sm:pt-16 w-full h-[400px] md:h-[500px] relative">
                <iframe
                    className="w-full h-full rounded-md shadow-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24128.042727655983!2d-74.00314094592599!3d40.71277604768044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18b2c8f1%3A0x6d7ab7eec2e914e7!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1614092227291!5m2!1sen!2s"
                    allowfullscreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    )
}

export default Location
