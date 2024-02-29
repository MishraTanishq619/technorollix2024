"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animatedToolTip";
const people = [
  {
    id: 1,
    name: "Dushali Patel",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/dushaliPatel.png",
  },
  {
    id: 2,
    name: "Suhani Aggarwal",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/suhaniAggarwal.png",
  },
  {
    id: 3,
    name: "Yogesh Rathore",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/yogeshRathore.png",
  },
  {
    id: 4,
    name: "Suryaranjan Satapathy",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/suryaranjanSatapathy.png",
  },
  {
    id: 5,
    name: "Sahil Pannu",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/sahilPannu.png",
  },
  {
    id: 6,
    name: "Shiv Ram Mehar",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/shivRamMehar.png",
  },
  {
    id: 7,
    name: "Anand Raj Dansena",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/anandRajDansena.png",
  },
  // {
  //   id: 8,
  //   name: "Yashvi Solanki",
  //   designation: "example@opju.ac.in",
  //   image:
  //     "/contacts/studentConveners/yashviSolanki.png",
  // },
];

export default function AnimatedTooltipPreview2() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-[90%]">
      <AnimatedTooltip items={people} />
    </div>
  );
}
