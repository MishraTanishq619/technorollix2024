// import ContactCard from "@/components/ContactCard";
// import CardHoverEffectDemo from "@/components/cardTrackhover";
import React from 'react';
import Header from '@/components/Header';

const page = () => {
  return (
    <div className="w-full p-10 flex flex-wrap justify-evenly gap-6">
      <Header />
      <p className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-white bg-opacity-15 text-center text-2xl xsm:text-3xl smtext-5xl: md:text-7xl p-10 neon-text-red">
        Accomodation: <p className="m-4">'To be Updated'</p>
      </p>
    </div>
  );
};

export default page;
