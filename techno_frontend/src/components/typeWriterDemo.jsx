"use client";
import { TypewriterEffectSmooth } from "./ui/typeWriter";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "20",
    },
    {
      text: "March",
    },
    {
      text: "to",
    },
    {
      text: "22",
    },
    {
      text: "March",
    },
    {
      text: "2024",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
      <TypewriterEffectSmooth words={words} />
  );
}
