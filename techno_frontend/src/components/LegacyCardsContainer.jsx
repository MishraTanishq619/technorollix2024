// import React from "react";
// import LegacyCards from "./LegacyCards";

// const LegacyCardsContainer = () => {
// 	return <div id="cardContainer" className=""></div>;
// };

// export default LegacyCardsContainer;

'use client';
import React, { useState, useRef, useEffect } from 'react';
import { LayoutGrid } from '@/components/ui/layout-grid';

export default function LegacyCardsContainer() {
  return (
    <div className="h-[700%] pt-[25vh] w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
    </div>
  );
};


const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: 'col-span-2',
    thumbnail:'/gallery/darshanRaval1.jpg',
  },
  {
    id: 2,
    content: <SkeletonOne />,
    className: 'col-span-1',
    thumbnail:'/gallery/darshanRaval2.jpg',
  },
  {
    id: 3,
    content: <SkeletonOne />,
    className: 'col-span-1',
    thumbnail: '/gallery/djPerisha1.jpg',
  },
  {
    id: 4,
    content: <SkeletonOne />,
    className: 'col-span-2',
    thumbnail: '/gallery/djPerisha2.jpg',
  },
  {
    id: 5,
    content: <SkeletonOne />,
    className: 'col-span-2',
    thumbnail:'/gallery/game1.jpg',
  },
  {
    id: 6,
    content: <SkeletonOne />,
    className: 'col-span-1',
    thumbnail:'/gallery/yuvaSabha1.jpg',
  },
  {
    id: 7,
    content: <SkeletonOne />,
    className: 'col-span-1',
    thumbnail: '/gallery/car1.jpg',
  },
  {
    id: 8,
    content: <SkeletonOne />,
    className: 'col-span-2',
    thumbnail: '/gallery/codigo1.jpg',
  },
  {
    id: 9,
    content: <SkeletonOne />,
    className: 'col-span-2',
    thumbnail:'/gallery/djHunt.jpg',
  },
  {
    id: 10,
    content: <SkeletonOne />,
    className: 'col-span-1',
    thumbnail:'/gallery/award1.jpg',
  },
  {
    id: 11,
    content: <SkeletonOne />,
    className: 'col-span-1',
    thumbnail: '/gallery/facultyGroup1.jpg',
  },
  {
    id: 12,
    content: <SkeletonOne />,
    className: 'col-span-2',
    thumbnail: '/gallery/facultyGroup2.jpg',
  },
  {
    id: 13,
    content: <SkeletonOne />,
    className: 'col-span-2',
    thumbnail:'/gallery/facultyGroup3.jpg',
  },
  {
    id: 14,
    content: <SkeletonOne />,
    className: 'col-span-1',
    thumbnail:'/gallery/facultyGroup4.jpg',
  },
  {
    id: 15,
    content: <SkeletonOne />,
    className: 'col-span-1',
    thumbnail: '/gallery/food1.jpg',
  },
  {
    id: 16,
    content: <SkeletonOne />,
    className: 'col-span-2',
    thumbnail: '/gallery/field1.jpg',
  },
  {
    id: 17,
    content: <SkeletonOne />,
    className: 'col-span-2',
    thumbnail:'/gallery/field2.jpg',
  },
  {
    id: 18,
    content: <SkeletonOne />,
    className: 'col-span-1',
    thumbnail:'/gallery/field3.jpg',
  },
  {
    id: 19,
    content: <SkeletonOne />,
    className: 'col-span-1',
    thumbnail: '/gallery/field4.jpg',
  },
  {
    id: 20,
    content: <SkeletonOne />,
    className: 'col-span-2',
    thumbnail: '/gallery/field5.jpg',
  },
  {
    id: 21,
    content: <SkeletonOne />,
    className: 'col-span-2',
    thumbnail:'/gallery/stage10.jpg',
  },
  {
    id: 22,
    content: <SkeletonOne />,
    className: 'col-span-1',
    thumbnail:'/gallery/art1.jpg',
  },
  {
    id: 23,
    content: <SkeletonOne />,
    className: 'col-span-1',
    thumbnail: '/gallery/robo1.jpg',
  },
  {
    id: 24,
    content: <SkeletonOne />,
    className: 'col-span-2',
    thumbnail: '/gallery/stage5.jpg',
  },
  {
    id: 25,
    content: <SkeletonOne />,
    className: 'col-span-2',
    thumbnail:'/gallery/stage1.jpg',
  },
  {
    id: 26,
    content: <SkeletonOne />,
    className: 'col-span-1',
    thumbnail:'/gallery/stage2.jpg',
  },
  {
    id: 27,
    content: <SkeletonOne />,
    className: 'col-span-1',
    thumbnail: '/gallery/stage3.jpg',
  },
  {
    id: 28,
    content: <SkeletonOne />,
    className: 'col-span-2',
    thumbnail: '/gallery/stage4.jpg',
  },
  {
    id: 29,
    content: <SkeletonOne />,
    className: 'col-span-2',
    thumbnail:'/gallery/stage6.jpg',
  },
  {
    id: 30,
    content: <SkeletonOne />,
    className: 'col-span-1',
    thumbnail:'/gallery/stage7.jpg',
  },
  {
    id: 31,
    content: <SkeletonOne />,
    className: 'col-span-1',
    thumbnail: '/gallery/stage8.jpg',
  },
  {
    id: 32,
    content: <SkeletonOne />,
    className: 'col-span-2',
    thumbnail: '/gallery/stage9.jpg',
  },
];