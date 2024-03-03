// import ContactCard from "@/components/ContactCard";
import CardHoverEffectDemo from '@/components/cardTrackhover';
import React from 'react';
import Header from '@/components/Header';

const page = () => {
  return (
    <div className="w-full py-10  mx-auto flex flex-wrap justify-evenly gap-2 md:gap-4 ls:gap-4">
      <Header />
      <CardHoverEffectDemo />
    </div>
  );
};

export default page;
