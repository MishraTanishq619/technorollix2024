"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animatedToolTip";
const people = [
  {
    id: 1,
    name: "Shikhar Pandey",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/shikharPandey.png",
  },
  {
    id: 2,
    name: "Vishal Singh",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/vishalSingh.png",
  },
  {
    id: 3,
    name: "Navneet Tripathi",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/navneetTripathi.png",
  },
  {
    id: 4,
    name: "Bhavam Gavel",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/bhavamGavel.png",
  },
  {
    id: 5,
    name: "Priti Sahu",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/pritiSahu.png",
  },
  {
    id: 6,
    name: "Shivam Patel",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/shivamPatel.png",
  },
  {
    id: 7,
    name: "Udit Shukla",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/uditShukla.png",
  },
  {
    id: 8,
    name: "Jayant",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/jayant.png",
  },
];

export default function AnimatedTooltipPreview6() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-[90%]">
      <AnimatedTooltip items={people} />
    </div>
  );
}
