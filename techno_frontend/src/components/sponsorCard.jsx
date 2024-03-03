// import React from "react";
// import LegacyCards from "./LegacyCards";

// const SponsorCardContainer = () => {
// 	return <div id="cardContainer" className=""></div>;
// };

// export default SponsorCardContainer;

'use client';
import React, { useState, useRef, useEffect } from 'react';
import { LayoutGrid } from '@/components/ui/layout-grid';

export default function SponsorCardContainer() {
  return (
    <div className="h-[70%] pt-[25vh] w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Code for It</p>
      <p className="font-normal text-base text-white"></p>
      {/* <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p> */}
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonFour />,
    className: 'col-span-1',
    thumbnail:'/sponsorsPic/codeforit.png',
  },
  // {
  //   id: 2,
  //   content: <SkeletonFour />,
  //   className: 'col-span-1',
  //   thumbnail:'/gallery/darshanRaval2.jpg',
  // },
  // {
  //   id: 3,
  //   content: <SkeletonOne />,
  //   className: 'col-span-1',
  //   thumbnail: '/gallery/djPerisha1.jpg',
  // },
  // {
  //   id: 4,
  //   content: <SkeletonTwo />,
  //   className: 'col-span-2',
  //   thumbnail: '/gallery/codigo1.jpg',
  // },
];