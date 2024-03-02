'use client';
import React from 'react';
import Header from '@/components/Header';
import localFont from 'next/dist/compiled/@next/font/dist/local';

const page = () => {
  //   const rog = localFont({ src: '../fonts/rog.ttf' });

  return (
    <div className="w-full p-10 flex flex-wrap justify-evenly gap-6">
      <Header />
      <p
        className={`mb-4 md:mb-10 text-center text-2xl md:text-6xl text-white mt-20 underline  `} // ${rog.className}
      >
        About Campus Ambassador Program:
      </p>
      {/* <p className="text-white bg-red-600">StudentAmbassador</p> */}
      <CampusAmbassadorProgram />
    </div>
  );
};

export default page;

const CampusAmbassadorProgram = () => {
  return (
    <div className="bg-white bg-opacity-20 opacity-90 text-white p-4 md:p-10 text-lg md:text-2xl md:-m-4 rounded-lg shadow-md">
      {/* <h2 className="text-2xl font-bold mb-4">TECHNOROLLIX-2024</h2> */}
      {/* <p className="mb-4">About Campus Ambassador Program:</p> */}
      <p>
        Technorollix, OP Jindal university is central India’s largest
        Techno-cultural fest, where we are committed to transcending borders and
        inspiring college students all around India to delve into the realms of
        science and technology. The Campus ambassador program serves as the
        backbone of our vision, creating a vibrant network of Students from all
        over India. CAs manage social media, portray our fest in their college,
        and most importantly they foster connections. They do all this while
        honing their skills and spreading the spark of technology. As we
        collaborate, their vital role promises to elevate this Technorollix to
        new heights.
      </p>
      <div className="flex flex-col md:flex-row w-full ">
        <div className="md:w-1/2">
          <p className="font-bold mt-4 md:mt-8 md:ml-10 text-xl xsm:text-2xl md:text-4xl ">
            Why Campus Ambassador?
          </p>
          <ul className="list-disc  pl-8 md:pl-20">
            <li className="md:my-2 md:ml-6">Networking</li>
            <li className="md:my-2 md:ml-6">Strategize</li>
            <li className="md:my-2 md:ml-6">Adaptability</li>
            <li className="md:my-2 md:ml-6">Marketing</li>
            <li className="md:my-2 md:ml-6">Communication</li>
            <li className="md:my-2 md:ml-6">Leadership</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <p className="font-bold mt-4 md:mt-8 md:ml-10 text-xl xsm:text-2xl md:text-4xl">
            Incentives:
          </p>
          <ul className="list-disc pl-8 md:pl-20">
            <li className="md:my-2 md:ml-6">
              Managerial certificate from OP Jindal University.
            </li>
            <li className="md:my-2 md:ml-6">
              Exciting Goodies And Merchandise.
            </li>
            <li className="md:my-2 md:ml-6">
              Letter of recommendation to outstanding performers.
            </li>
            <li className="md:my-2 md:ml-6">
              Internship Opportunities to outperformers.
            </li>
          </ul>
        </div>
      </div>
      <div className="my-4">
        <p className="font-bold mt-4 md:mt-8 md:ml-10 text-xl xsm:text-2xl md:text-4xl ">
          Visual Representation:
        </p>
        <p>Represent technorollix ------&gt; Promote Technorollix</p>
        <p>Innovate and Strategize ------&gt; Collaborate and Ideate</p>
      </div>
      <p className="font-bold w-full text-center text-xl xsm:text-2xl md:text-4xl m-10">
        Join Us And Make Technorollix A Great Success!
      </p>
      <div className="my-4">
        <p className="font-bold mt-4 md:mt-8 md:ml-10 text-xl xsm:text-2xl md:text-4xl ">
          Contact us
        </p>
        <p>Want to know more about the campus ambassador program?</p>
        <p>You can reach out through the links given below:</p>
        <div className="flex space-x-4">
          <a href="https://wa.link/o9ehab" className="text-blue-500 underline">
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/_vis_hal_._/"
            className="text-blue-500 underline"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-singh-58b365223/"
            className="text-blue-500 underline"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-2">Email: vishalsingh12999@gmail.com</p>
      </div>
    </div>
  );
};
