'use client';
import Home from "./home/page"
import React from 'react';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css"

export default function Main() {

  React.useEffect(() => {
    AOS.init({
        offset: 100,
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
    });
    AOS.refresh();
  }, []);
  


  return (
    <div>
      <Home />
    </div>
  );
}
