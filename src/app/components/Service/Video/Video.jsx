'use client'
import React from 'react'
import Image from 'next/image'
import videoimg from '../../../../../public/Service/Video/Video.png'

const Video = () => {
    return (
        <section className='pt-28 max-sm:pt-16' data-aos="fade-up"
        data-aos-duration="1000">
            <Image src={videoimg} />
            {/* <video 
                        controls
                        poster="/path-to-poster-image.jpg"
                        className="rounded-lg shadow-lg"
                    >
                        <source src="/path-to-video.mp4" type="video/mp4" />
            </video> */}
        </section>
    )
}

export default Video
