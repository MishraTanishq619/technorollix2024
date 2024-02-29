'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function ThreeDCardDemo({
  prize = 999,
  title = 'title',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  members = 4,
  entryFee = 400,
  onClick,
  additionalDetailsValue,
  onAdditionalDetailsChange,
}) {
  useEffect(() => {
    Aos.init({
      offset: 500,
      delay: 100,
      duration: 800,
      once: false,
      mirror: true,
      // anchorPlacement: "top",
      throttleDelay: 200,
      debounceDelay: 200,
    });
  }, []);

  return (
    <div data-aos="flip-right" onClick={onClick} role="button" tabIndex="0">
      <CardContainer className="inter-var w-96 m-3">
        <CardBody className="relative group/card hover:shadow-2xl hover:shadow-red-500 transition duration-100 hover:scale-110 shadow-2xl bg-[#0f09095d] border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-full rounded-xl p-6 border">
          <CardItem
            translateZ="60"
            className="text-xl font-bold text-neutral-600 text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="70"
            className="text-neutral-500 text-sm max-w-sm mt-2 text-neutral-300"
          >
            {description}
          </CardItem>

          <CardItem translateZ="100" className="w-1/2 mt-4 text-white">
            Prize: {prize}
            <Image
              // src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              src={image}
              height="1000"
              width="1000"
              className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="Event Thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-5">
            <CardItem
              translateZ={40}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal text-white"
            >
              {/* Entry fee: {entryFee} () */}
            </CardItem>
            <a href="/">
              <CardItem
                translateZ={40}
                as="button"
                className="px-4 py-2 rounded-xl bg-[#742a2aaf]  text-white text-xs font-bold transition-colors hover:bg-gray-800"
              >
                Register
              </CardItem>
            </a>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
