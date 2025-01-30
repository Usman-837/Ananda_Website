'use client'
import React from 'react'
import Image from 'next/image'
import videoimg1 from '../../../../../public/OurServices/Video/Video.png'

const Video = ({ id }) => {
    const VideoData = [
        { id: 1, video: videoimg1 },
        { id: 2, video: videoimg1 },
        { id: 3, video: videoimg1 },
        { id: 4, video: videoimg1 },
        { id: 5, video: videoimg1 },
        { id: 6, video: videoimg1 },
        { id: 7, video: videoimg1 },
        { id: 8, video: videoimg1 },
        { id: 9, video: videoimg1 },
        { id: 10, video: videoimg1 },
    ]

    // Find the video matching the given ID
    const Selectedvideo = VideoData.find((item) => item.id === Number(id))

    return (
        <section className='pt-28 max-sm:pt-16' data-aos="fade-up" data-aos-duration="1000">
            {Selectedvideo ? (
                <div>
                    <Image src={Selectedvideo.video} alt={`Video ${id}`} />
                </div>
            ) : (
                <p className="text-center text-lg text-gray-500">No video found</p>
            )}
        </section>
    )
}

export default Video
