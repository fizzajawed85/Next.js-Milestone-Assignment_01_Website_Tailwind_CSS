"use client";

import React from 'react';
import Link from 'next/link';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);
  return (
    <section className="hero h-screen flex items-center bg-cover bg-center" style={{ backgroundImage: "url('bg image.png')" }}>
      <div className="pl-0 md:pl-16 text-white text-center">
        <h1 className="text-6xl font-bold drop-shadow-md" data-aos="fade-up">Timeless Luxury,<br/>
        Crafted to Perfection</h1>
        <p className="text-2xl mt-4">Discover our exclusive collection of luxury watches,<br/>
        crafted for those who appreciate fine craftsmanship.</p>
        <button className="mt-6 px-6 py-3 bg-[#e46e00] hover:bg-[#8daac7] rounded-md font-bold"><Link href="/watches">Shop Now</Link></button>
      </div>
    </section>
  );
};

export default Hero;