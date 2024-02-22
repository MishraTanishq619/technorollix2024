import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    image:"opju-bg.jpg",
    title: "Robert Downey",
    phoneNumber: "9890792342",
    email: "example@opju.ac.in",
    link: "",
    role: "Co-ordinater",
  },
  {
    image:"opju-bg.jpg",
    title: "Chris evans",
    phoneNumber: "9890792342",
    email: "example@opju.ac.in",
    link: "",
    role: "Co-ordinater",
  },
  {
    image:"opju-bg.jpg",
    title: "Ryan reynold",
    phoneNumber: "9890792342",
    email: "example@opju.ac.in",
    link: "",
    role: "Co-ordinater",
  },
  {
    image:"opju-bg.jpg",
    title: "Chris Hemsworth",
    phoneNumber: "9890792342",
    email: "example@opju.ac.in",
    link: "",
    role: "Co-ordinater",
  },
];
