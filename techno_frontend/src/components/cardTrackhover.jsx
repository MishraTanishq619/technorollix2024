import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function CardHoverEffectDemo() {
  return (
    <div className="w-full px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    image:"/contacts/facultyMentors/mahesh.png",
    title: "Dr. Mahesh K Bhiwapurkar",
    // phoneNumber: "9890792342",
    email: "mahesh.bhiwapurkar@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
  {
    image:"/contacts/facultyMentors/unknown.png",
    title: "Dr. Sanjay Kumar Singh",
    // phoneNumber: "9890792342",
    email: "sanjay.singh@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
  {
    image:"/contacts/facultyConveners/swatiVerma.png",
    title: "Dr. Swati Verma",
    phoneNumber: "9109909274",
    email: "swati.verma@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
  {
    image:"/contacts/facultyConveners/trinathTalepaneni.png",
    title: "Dr. Trinath Talapaneni",
    phoneNumber: "8763333171",
    email: "trinath.talapaneni@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
  {
    image:"/contacts/facultyConveners/vikash.png",
    title: "Dr. Vikash Kumar",
    phoneNumber: "9039642356",
    email: "vikash.kumar@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
  {
    image:"/contacts/facultyCoConveners/drDiptiShukla.png",
    title: "Dr. Dipti Shukla",
    // phoneNumber: "9890792342",
    email: "dipti.shukla@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
  {
    image:"/contacts/facultyCoConveners/puspanjali.png",
    title: "Mrs. Pushpanjali Shadangi",
    // phoneNumber: "9890792342",
    email: "pushpanjali.shadangi@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
  {
    image:"/contacts/facultyCoConveners/saini.png",
    title: "Dr. Dharmender Singh Saini",
    // phoneNumber: "9890792342",
    email: "dharmender.saini@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
  {
    image:"/contacts/facultyCoConveners/sujata.png",
    title: "Ms. Sujata Panda",
    // phoneNumber: "9890792342",
    email: "sujata.panda@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
  {
    image:"/contacts/facultyCoConveners/tulikaGupta.png",
    title: "Mrs. Tulika Gupta",
    // phoneNumber: "9890792342",
    email: "tulika.gupta@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
  {
    image:"/contacts/facultyCoConveners/umashankarPandey.png",
    title: "Mr Uma Shankar Pandey",
    // phoneNumber: "9890792342",
    email: "umashankar.pandey@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
  {
    image:"/contacts/facultyCoConveners/vatsala.png",
    title: "Dr. Vatsala Chaturvedi",
    // phoneNumber: "9890792342",
    email: "vatsala.chaturvedi@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
];
