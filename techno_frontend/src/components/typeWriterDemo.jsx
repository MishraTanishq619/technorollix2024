"use client";
import { TypewriterEffectSmooth } from "./ui/typeWriter";

import localFont from 'next/font/local'
const subwayFont = localFont({src: '../app/fonts/rog.ttf'})
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "20",
      className: `text-blue text-blue-500 ${subwayFont.className}`,
    },
    {
      text: "March",
      className: `text-blue text-blue-500 ${subwayFont.className}`,
    },
    {
      text: "to",
      className: `text-blue text-blue-500 ${subwayFont.className}`,
    },
    {
      text: "22",
      className: `text-blue text-blue-500 ${subwayFont.className}`,
    },
    {
      text: "March",
      className: `text-blue text-blue-500 ${subwayFont.className}`,
    },
    {
      text: "2024",
      className: `text-blue text-blue-500 ${subwayFont.className}`,
    },
  ];
  return (
      <TypewriterEffectSmooth words={words} />
  );
}
