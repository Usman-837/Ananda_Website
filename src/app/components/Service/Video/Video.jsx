'use client'
import React from 'react'
import Image from 'next/image'
import videoimg from '../../../../../public/Service/Video/Video.png'

const Video = () => {
    return (
        <section>
            <Image src={videoimg} className='py-28' />
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
