import React from 'react';
import banner from '../../../../../public/Home/Banner/Banner.jpg';

const Banner = () => {
  return (
    <div
      className="w-full h-svh bg-cover bg-center"
      style={{
        backgroundImage: `url(${banner.src})`, 
      }}
    >

    </div>
  );
};

export default Banner;
