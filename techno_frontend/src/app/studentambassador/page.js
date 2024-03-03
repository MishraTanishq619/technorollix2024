'use client';
import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import localFont from 'next/dist/compiled/@next/font/dist/local';
import { motion } from 'framer-motion';

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
  const [Icon4Value, setIcon4Value] = useState(2);

  return (
    <div className="bg-white bg-opacity-20 opacity-90 text-white p-4 md:p-10 text-lg md:text-2xl md:-m-4 rounded-lg shadow-md">
      {/* <h2 className="text-2xl font-bold mb-4">TECHNOROLLIX-2024</h2> */}
      {/* <p className="mb-4">About Campus Ambassador Program:</p> */}
      <div className="border-red-500 border-2 m-4 p-8 shadow-xl shadow-red-400">
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
      </div>
      <div className="flex flex-col items-center w-full my-8">
        <div className="w-[90%]">
          <p className="font-bold text-center my-8 md:mt-14 md:ml-10 text-3xl xsm:text-4xl md:text-5xl neon-text-red ">
            Why Campus Ambassador?
          </p>
          <WhyCampusAmbassador />
        </div>
        <div className="w-[90%] pt-10">
          <p className="font-bold text-center my-8 md:mt-14 md:ml-10 text-3xl xsm:text-4xl md:text-5xl neon-text-red ">
            Incentives:
          </p>
          <Incentives />
        </div>
      </div>
      <div className="my-4">
        <p className="font-bold text-center my-8 md:mt-14 md:ml-10 text-3xl xsm:text-4xl md:text-5xl neon-text-red ">
          Visual Representation:
        </p>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div>
            <div>
              <div className="flex items-center my-4">
                <button
                  className="flex flex-col items-center border-red-500 border-2 w-[8rem] md:w-[22rem] hover:scale-95 hover:shadow-2xl hover:shadow-red-500"
                  onClick={() => setIcon4Value(0)}
                >
                  <p> Represent technorollix</p>
                  <img src="4icons/1.png" alt="I" className="w-32 h-32" />
                </button>
                <p>------&gt; </p>
                <button
                  className="flex flex-col items-center border-red-500 border-2 w-[8rem] md:w-[22rem] hover:scale-95 hover:shadow-2xl hover:shadow-red-500"
                  onClick={() => setIcon4Value(1)}
                >
                  <p>Promote Technorollix</p>
                  <img
                    src="CA-Icons/ambassador/1.png"
                    alt="I"
                    className="w-32 h-32"
                  />
                </button>
              </div>
            </div>
            <div>
              <div className="flex items-center my-4">
                <button
                  className="flex flex-col items-center border-red-500 border-2 w-[8rem] md:w-[22rem] hover:scale-95 hover:shadow-2xl hover:shadow-red-500"
                  onClick={() => setIcon4Value(2)}
                >
                  <p>Innovate and Strategize</p>
                  <img
                    src="CA-Icons/ambassador/2.png"
                    alt="I"
                    className="w-32 h-32"
                  />
                </button>
                <p>------&gt; </p>
                <button
                  className="flex flex-col items-center border-red-500 border-2 w-[8rem] md:w-[22rem] hover:scale-95 hover:shadow-2xl hover:shadow-red-500"
                  onClick={() => setIcon4Value(3)}
                >
                  <p>Collaborate and Ideate</p>
                  <img
                    src="CA-Icons/ambassador/3.png"
                    alt="I"
                    className="w-32 h-32"
                  />
                </button>
              </div>
            </div>
          </div>
          <div
            className="w-[16rem] md:w-[33rem] shadow-2xl shadow-red-500 "
            // onClick={setIcon4Value(Icon4Value + 1)}
          >
            <Icon4Comp Icon4Value={Icon4Value} />
          </div>
        </div>
      </div>
      <motion.p className="font-bold w-full text-center text-xl xsm:text-xl md:text-6xl neon-text-red my-20">
        Join Us And Make Technorollix A Great Success!
      </motion.p>
      <div className="my-4 w-full flex flex-col items-center">
        <p className="font-bold my-4 md:my-8 md:ml-10 text-2xl xsm:text-4xl md:text-6xl neon-text-red">
          Contact us
        </p>
        <p className="">
          Want to know more about the campus ambassador program?
        </p>
        <p className="">You can reach out through the links given below:</p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 justify-around items-center p-10 mx-10">
          <ContactCard
            name={'Vishal Singh'}
            imageUrl={'/contacts/studentCoConveners/vishalSingh.png'}
            whatsappLink={'https://wa.link/o9ehab'}
            instagramLink={'https://www.instagram.com/_vis_hal_._/'}
            linkedinLink={'https://www.linkedin.com/in/vishal-singh-58b365223/'}
            email={'vishalsingh12999@gmail.com'}
          />
          <ContactCard
            name={'Vishal Singh'}
            imageUrl={'/contacts/studentCoConveners/vishalSingh.png'}
            whatsappLink={'https://wa.link/o9ehab'}
            instagramLink={'https://www.instagram.com/_vis_hal_._/'}
            linkedinLink={'https://www.linkedin.com/in/vishal-singh-58b365223/'}
            email={'vishalsingh12999@gmail.com'}
          />
          <ContactCard
            name={'Vishal Singh'}
            imageUrl={'/contacts/studentCoConveners/vishalSingh.png'}
            whatsappLink={'https://wa.link/o9ehab'}
            instagramLink={'https://www.instagram.com/_vis_hal_._/'}
            linkedinLink={'https://www.linkedin.com/in/vishal-singh-58b365223/'}
            email={'vishalsingh12999@gmail.com'}
          />
        </div>
      </div>
    </div>
  );
};

const Icon4Data = [
  {
    heading: 'Represent technorollix',
    paragraph:
      'Be the official voice of Tryst at your college, answer student questions, and generate excitement about the event.',
  },
  {
    heading: 'Promote Technorollix',
    paragraph:
      'Utilize various channels (social media, posters, events) to promote Tryst activities and competitions, ensuring maximum student participation.',
  },
  {
    heading: 'Innovate and Strategize',
    paragraph:
      'Brainstorm fresh marketing strategies, experiment with new ideas, and contribute to driving student engagement.',
  },
  {
    heading: 'Collaborate and Ideate',
    paragraph:
      'Work closely with fellow CAs and Tryst organizers and conduct workshops and events in your campus.',
  },
];

const Icon4Comp = ({ Icon4Value }) => {
  return (
    <div className="flex flex-col gap-4 border-2 border-red-400 p-10">
      <h2 className="text-3xl text-center w-full font-bold">
        {Icon4Data[Icon4Value].heading}
      </h2>
      <div className="text-xl">{Icon4Data[Icon4Value].paragraph}</div>
    </div>
  );
};

const WhyCampusAmbassador = () => {
  // const next = useRef();
  // let next = document.getElementById('nextBtn');
  let defaultTransform = 0;
  function goNext() {
    defaultTransform = defaultTransform - 398;
    var slider = document.getElementById('slider');
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7)
      defaultTransform = 0;
    slider.style.transform = 'translateX(' + defaultTransform + 'px)';
  }

  // next.addEventListener('click', goNext);
  function goPrev() {
    var slider = document.getElementById('slider');
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 398;
    slider.style.transform = 'translateX(' + defaultTransform + 'px)';
  }
  // prev.addEventListener('click', goPrev);

  return (
    <div className="flex flex-wrap items-center justify-center   h-full gap-10">
      {CardCorouselData.map((i, k) => {
        return <CardCorousel key={k} heading={i.heading} src={i.src} />;
      })}
    </div>
  );
};

const CardCorouselData = [
  { heading: 'Networking', src: 'CA-Icons/11.png' },
  { heading: 'Strategize', src: 'CA-Icons/2.png' },
  { heading: 'Adaptability', src: 'CA-Icons/3.png' },
  { heading: 'Marketing', src: 'CA-Icons/4.png' },
  { heading: 'Communication', src: 'CA-Icons/5.png' },
  { heading: 'Leadership', src: 'CA-Icons/6.png' },
];

const CardCorousel = ({ heading, src }) => {
  return (
    <motion.div
      className="flex w-[12rem] flex-col hover:scale-105"
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', duration: 0.1 }}
    >
      <img
        src={src}
        alt="Image"
        className="object-cover object-center w-full hover:scale-105 hover:shadow-xl hover:shadow-red-500"
      />
      <div className=" w-full h-full my-3 text-center text-2xl">{heading}</div>
    </motion.div>
  );
};

const Incentives = () => {
  return (
    <div className="flex items-center justify-center flex-wrap m-auto h-full my-8 gap-10">
      {IncentivesCardData.map((i, k) => {
        return <IncentiveCards key={k} heading={i.heading} src={i.src} />;
      })}
    </div>
  );
};

const IncentivesCardData = [
  {
    heading: 'Managerial certificate from OP Jindal University.',
    src: 'CA-Icons/ambassador/4.png',
  },
  {
    heading: 'Exciting Goodies And Merchandise.',
    src: 'CA-Icons/ambassador/5.png',
  },
  {
    heading: 'Letter of recommendation to outstanding performers.',
    src: 'CA-Icons/ambassador/7.png',
  },
  {
    heading: 'Internship Opportunities to outperformers.',
    src: 'CA-Icons/ambassador/8.png',
  },
];

const IncentiveCards = ({ heading, src }) => {
  return (
    <motion.div
      className="flex w-[13rem] md:w-[23rem] flex-col bg-transparent   hover:bg-opacity-15 hover:shadow-red-500 hover:scale-105"
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', duration: 0.1 }}
    >
      <img
        src={src}
        alt="Image"
        className="object-cover object-center w-full hover:scale-105 hover:shadow-xl hover:shadow-red-500"
      />
      <div className=" w-full h-full my-3 text-center text-2xl">{heading}</div>
    </motion.div>
  );
};

const ContactCard = ({
  name,
  imageUrl,
  whatsappLink,
  instagramLink,
  linkedinLink,
  email,
}) => {
  return (
    <div className="flex flex-col items-center rounded-lg shadow-md p-6 border-2 w-[20rem] hover:scale-105 hover:shadow-2xl hover:shadow-red-500">
      <img src={imageUrl} alt="Image" className="rounded-lg" />
      <p className="mt-3 font-semibold text-2xl">{name}</p>
      <div className="flex  gap-3 flex-wrap justify-center ">
        <a href={whatsappLink} className="text-blue-500 underline">
          WhatsApp<i className="fab fa-whatsapp fa-lg"></i>
        </a>
        <a href={instagramLink} className="text-blue-500 underline">
          Instagram<i className="fab fa-instagram fa-lg"></i>
        </a>
        <a href={linkedinLink} className="text-blue-500 underline">
          LinkedIn<i className="fab fa-linkedin fa-lg"></i>
        </a>
      </div>

      <p className="mt-2 text-wrap md:text-xl">
        {email} <i className="far fa-envelope fa-lg"></i>
      </p>
    </div>
  );
};
