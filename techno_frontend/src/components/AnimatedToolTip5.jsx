"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animatedToolTip";
const people = [
  {
    id: 1,
    name: "Mohit Sharma",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/mohitSharma.png",
  },
  {
    id: 2,
    name: "Prutha Chipde",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/pruthaChipde.png",
  },
  {
    id: 3,
    name: "Shruti Kumari",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/shrutiKumari.png",
  },
  {
    id: 4,
    name: "Saurav Kumar",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/sauravKumar.png",
  },
  {
    id: 5,
    name: "Monisha Mukherjee",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/monishaMukherjee.png",
  },
  {
    id: 6,
    name: "Pranjal Acharya",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/pranjalAcharya.png",
  },
  {
    id: 7,
    name: "Manas Rathore",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/manasRathore.png",
  },
  {
    id: 8,
    name: "",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/.png",
  },
];

export default function AnimatedTooltipPreview5() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-[90%]">
      <AnimatedTooltip items={people} />
    </div>
  );
}
