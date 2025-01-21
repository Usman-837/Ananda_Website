'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import banner from '../../../../../public/Home/Banner/Banner.jpg';

const Banner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bannerRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power2.out' }
    );
  }, []);
  

  return (
    <div
      ref={bannerRef}
      className="w-full h-svh bg-cover bg-center mt-[-118px] max-sm:mt-[-265px]"
      style={{
        backgroundImage: `url(${banner.src})`,
      }}
    ></div>
  );
};

export default Banner;


