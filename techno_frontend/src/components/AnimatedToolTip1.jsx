"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animatedToolTip";
const people = [
  {
    id: 1,
    name: "Tanuja Nair",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/tanujaNair.webp",
  },
  {
    id: 2,
    name: "Anoushka R Sharma",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/anoushkaRSharma.png",
  },
  {
    id: 3,
    name: "Tejeshwar Verma",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/tejeshwarVerma.png",
  },
  {
    id: 4,
    name: "Kusum Pandey",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/kusumPandey.png",
  },
  {
    id: 5,
    name: "Anusuya",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/anusuya.png",
  },
  {
    id: 6,
    name: "Puja Kumari",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/pujaKumari.png",
  },
  // {
  //   id: 7,
  //   name: "Shourya Singh",
  //   designation: "example@opju.ac.in",
  //   image:
  //     "/contacts/studentConveners/shouryaSingh.png",
  // },
  // {
  //   id: 8,
  //   name: "Vikrant",
  //   designation: "example@opju.ac.in",
  //   image:
  //     "/contacts/studentConveners/vikrantE.png",
  // },
];

export default function AnimatedTooltipPreview1() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-[90%]">
      <AnimatedTooltip items={people} />
    </div>
  );
}
