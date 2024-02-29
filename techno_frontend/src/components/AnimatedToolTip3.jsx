"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animatedToolTip";
const people = [
  {
    id: 1,
    name: "Krashika Shukla",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/krashikaShukla.png",
  },
  {
    id: 2,
    name: "Sourabh Mehani",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/sourabhMehani.png",
  },
  {
    id: 3,
    name: "Shivangi Singh Gautam",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/shivangiSinghGautam.png",
  },
  // {
  //   id: 4,
  //   name: "",
  //   designation: "example@opju.ac.in",
  //   image:
  //     "/contacts/studentConveners/.png",
  // },
  // {
  //   id: 5,
  //   name: "",
  //   designation: "example@opju.ac.in",
  //   image:
  //     "/contacts/studentConveners/.png",
  // },
  // {
  //   id: 6,
  //   name: "",
  //   designation: "example@opju.ac.in",
  //   image:
  //     "/contacts/studentConveners/.png",
  // },
  // {
  //   id: 7,
  //   name: "",
  //   designation: "example@opju.ac.in",
  //   image:
  //     "/contacts/studentConveners/.png",
  // },
  // {
  //   id: 8,
  //   name: "",
  //   designation: "example@opju.ac.in",
  //   image:
  //     "/contacts/studentCoConveners/.png",
  // },
  {
    id: 4,
    name: "Shourya Singh",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/shouryaSingh.png",
  },
  {
    id: 5,
    name: "Vikrant",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/vikrantE.png",
  },
  {
    id: 6,
    name: "Yashvi Solanki",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/yashviSolanki.png",
  },
];

export default function AnimatedTooltipPreview3() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-[90%]">
      <AnimatedTooltip items={people} />
    </div>
  );
}
