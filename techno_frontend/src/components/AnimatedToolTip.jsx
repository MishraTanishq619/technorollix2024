"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animatedToolTip";
const people = [
  {
    id: 1,
    name: "",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/.png",
  },
  {
    id: 2,
    name: "",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/.png",
  },
  {
    id: 3,
    name: "",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/.png",
  },
  {
    id: 4,
    name: "",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/.png",
  },
  {
    id: 5,
    name: "",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/.png",
  },
  {
    id: 6,
    name: "",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/.png",
  },
  {
    id: 7,
    name: "",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentConveners/.png",
  },
  {
    id: 8,
    name: "",
    designation: "example@opju.ac.in",
    image:
      "/contacts/studentCoConveners/.png",
  },
];

export default function AnimatedTooltipPreview3() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-[90%]">
      <AnimatedTooltip items={people} />
    </div>
  );
}
