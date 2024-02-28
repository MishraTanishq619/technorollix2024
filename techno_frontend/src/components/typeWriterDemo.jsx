"use client";
import { TypewriterEffectSmooth } from "./ui/typeWriter";

import localFont from 'next/font/local'
const brankovicFont = localFont({src: '../app/fonts/brankovic.ttf'})
const microFont = localFont({src: '../app/fonts/microFont.otf'})
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "20",
      className: `text-blue text-blue-500 ${microFont.className}`,
    },
    {
      text: "March",
      className: `text-blue text-blue-500 ${brankovicFont.className}`,
    },
    {
      text: "to",
      className: `text-blue text-blue-500 ${brankovicFont.className}`,
    },
    {
      text: "22",
      className: `text-blue text-blue-500 ${microFont.className}`,
    },
    {
      text: "March",
      className: `text-blue text-blue-500 ${brankovicFont.className}`,
    },
    {
      text: "2024",
      className: `text-blue text-blue-500 ${microFont.className}`,
    },
  ];
  return (
      <TypewriterEffectSmooth words={words} />
  );
}
