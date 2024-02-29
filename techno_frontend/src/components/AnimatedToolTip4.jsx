"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animatedToolTip";
const people = [
  {
    id: 1,
    name: "Avinash Singh",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/avinashSingh.png",
  },
  {
    id: 2,
    name: "Priyam Sharma",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/priyamSharma.png",
  },
  {
    id: 3,
    name: "Vasudha Patel",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/vasudhaPatel.png",
  },
  {
    id: 4,
    name: "Shashishekhar Prajapati",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/shashishekharPrajapati.png",
  },
  {
    id: 5,
    name: "Naresh Kumar Mourya",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/nareshKumarMourya.png",
  },
  {
    id: 6,
    name: "Saurav Kumar",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/sauravKumar2.png",
  },
  {
    id: 7,
    name: "Priti Kushwaha",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/pritiKushwaha.png",
  },
  {
    id: 8,
    name: "Pranati Paira",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/pranatiPaira.png",
  },
];

export default function AnimatedTooltipPreview4() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-[90%]">
      <AnimatedTooltip items={people} />
    </div>
  );
}
