'use client';
import React, { useEffect } from 'react';
// import EventsRegistrationPage from "./components/eventRegistrationCard";
import EventsRegistrationPage from '../registration/next/eventRegistrationCard';
import LegacyCardsContainer from '@/components/LegacyCardsContainer';
import Header from '@/components/Header';
import { LayoutGridDemo } from '@/components/galleryContents';
import AOS from 'aos';
import 'aos/dist/aos.css';

import localFont from 'next/font/local';
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
        LEGACY
      </p>
      <LegacyCardsContainer />
      <div>{/* <LayoutGridDemo/> */}</div>
      {/* </div> */}
    </main>
  );
};

export default page;
