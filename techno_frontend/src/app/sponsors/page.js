'use client';
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';

import localFont from 'next/font/local';
import SponsorCardContainer from '@/components/sponsorCard';
const rog = localFont({ src: '../fonts/rog.ttf' });

const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <main className="w-full h-screen">
      <Header />
      {/* <div className="pt-8 "> */}
      <p
        // style={{ fontFamily: "ROG LyonsType" }}
        // absolute  text-center text-8xl text-slate-100  w-full h-full my-32 ${rog.className}
        className={`absolute  text-center text-2xl xsm:text-4xl md:text-6xl text-slate-100  w-full h-full mt-32 ${rog.className}`}
        data-aos="fade-in"
      >
        Sponsors
      </p>
      < SponsorCardContainer/>
      <div>{/* <LayoutGridDemo/> */}</div>
      {/* </div> */}
    </main>
  );
};

export default page;
