import { HoverEffect } from "@/components/ui/card-hover-effect";

import localFont from 'next/font/local';
const rog = localFont({ src: '../app/fonts/rog.ttf' });

export default function CardHoverEffectDemo() {
  return (
    <div className="w-full mx-12 my-10 max-[100px]:px-4 justify-center items-center">
      <div className={`neon-text-red-light ml justify-center mx-auto text-2xl md:text-4xl ${rog.className}`}>Mentors</div>
      <HoverEffect items={Mentors} />
      <div className={`neon-text-red-light ml justify-center mx-auto text-2xl md:text-4xl ${rog.className}`}>Convenors</div>
      <HoverEffect items={Convenor} />
      <div className={`neon-text-red-light ml justify-center mx-auto text-2xl md:text-4xl ${rog.className}`}>CoConvenors</div>
      <HoverEffect items={CoConvenor} />
      <div className={`neon-text-red-light ml justify-center mx-auto text-2xl md:text-4xl ${rog.className}`}>Web-site Team</div>
      <HoverEffect items={WebSiteTeam} className={`neon-text-red-light`} />
      <div className={`neon-text-red-light ml justify-center mx-auto text-2xl md:text-4xl ${rog.className}`}>Registration & Reception</div>
      <HoverEffect items={RegistrationReception} />
      <div className={`neon-text-red-light ml justify-center mx-auto text-2xl md:text-4xl ${rog.className}`}>Certificate and Prize</div>
      <HoverEffect items={CertificatePrize} />
      <div className={`neon-text-red-light ml justify-center mx-auto text-2xl md:text-4xl ${rog.className}`}>Transportation</div>
      <HoverEffect items={Transportation} />
      <div className={`neon-text-red-light ml justify-center mx-auto text-2xl md:text-4xl ${rog.className}`}>Accommodation</div>
      <HoverEffect items={Accommodation} />
      <div className={`neon-text-red-light ml justify-center mx-auto text-2xl md:text-4xl ${rog.className}`}>Catering</div>
      <HoverEffect items={Catering} />
      <div className={`neon-text-red-light ml justify-center mx-auto text-2xl md:text-4xl ${rog.className}`}>Hospitality</div>
      <HoverEffect items={Hospitality} />
      <div className={`neon-text-red-light ml justify-center mx-auto text-2xl md:text-4xl ${rog.className}`}>Venue Preparation</div>
      <HoverEffect items={VenuePreparation} />
      <div className={`neon-text-red-light ml justify-center mx-auto text-2xl md:text-4xl ${rog.className}`}>Information, Publicity & Invitation</div>
      <HoverEffect items={InformationPublicityInvitation} />
      <div className={`neon-text-red-light ml justify-center mx-auto text-2xl md:text-4xl ${rog.className}`}>Logistics</div>
      <HoverEffect items={Logistics} />
      <div className={`neon-text-red-light ml justify-center mx-auto text-2xl md:text-4xl ${rog.className}`}>Stage, Light, Sound and Stall</div>
      <HoverEffect items={StageLightSoundandStall} />
      <div className={`neon-text-red-light ml justify-center mx-auto text-2xl md:text-4xl ${rog.className}`}>Design, Print & Media</div>
      <HoverEffect items={DesignPrintMedia} />
      <div className={`neon-text-red-light ml justify-center mx-auto text-2xl md:text-4xl ${rog.className}`}>Discipline</div>
      <HoverEffect items={Discipline} />
      <div className={`neon-text-red-light ml justify-center mx-auto text-2xl md:text-4xl ${rog.className}`}>Health & First Aid</div>
      <HoverEffect items={HealthFirstAid} />
    </div>
  );
}
export const Mentors = [
  {
    image: "/contacts/facultyMentors/mahesh.png",
    title: "Dr. Mahesh K Bhiwapurkar",
    // phoneNumber: "9890792342",
    email: "mahesh.bhiwapurkar@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
  {
    image: "/contacts/facultyMentors/unknown.png",
    title: "Dr. Sanjay Kumar Singh",
    // phoneNumber: "9890792342",
    email: "sanjay.singh@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
];
export const Convenor = [
  {
    image: "/contacts/facultyConveners/swatiVerma.png",
    title: "Dr. Swati Verma",
    phoneNumber: "9109909274",
    email: "swati.verma@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
  {
    image: "/contacts/facultyConveners/trinathTalepaneni.png",
    title: "Dr. Trinath Talapaneni",
    phoneNumber: "8763333171",
    email: "trinath.talapaneni@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
  {
    image: "/contacts/facultyConveners/vikash.png",
    title: "Dr. Vikash Kumar",
    phoneNumber: "9039642356",
    email: "vikash.kumar@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
];
export const CoConvenor = [
  {
    image: "/contacts/facultyCoConveners/drDiptiShukla.png",
    title: "Dr. Dipti Shukla",
    // phoneNumber: "9890792342",
    email: "dipti.shukla@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
  {
    image: "/contacts/facultyCoConveners/puspanjali.png",
    title: "Mrs. Pushpanjali Shadangi",
    // phoneNumber: "9890792342",
    email: "pushpanjali.shadangi@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
  {
    image: "/contacts/facultyCoConveners/saini.png",
    title: "Dr. Dharmender Singh Saini",
    // phoneNumber: "9890792342",
    email: "dharmender.saini@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
  {
    image: "/contacts/facultyCoConveners/sujata.png",
    title: "Ms. Sujata Panda",
    // phoneNumber: "9890792342",
    email: "sujata.panda@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
  {
    image: "/contacts/facultyCoConveners/tulikaGupta.png",
    title: "Mrs. Tulika Gupta",
    // phoneNumber: "9890792342",
    email: "tulika.gupta@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
  {
    image: "/contacts/facultyCoConveners/umashankarPandey.png",
    title: "Mr Uma Shankar Pandey",
    // phoneNumber: "9890792342",
    email: "umashankar.pandey@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
  {
    image: "/contacts/facultyCoConveners/vatsala.png",
    title: "Dr. Vatsala Chaturvedi",
    // phoneNumber: "9890792342",
    email: "vatsala.chaturvedi@opju.ac.in",
    link: "",
    // role: "Co-ordinater",
  },
];
export const WebSiteTeam = [
  {
    image:"/contacts/webSite/shreyRajSingh.jpeg",
    title: "Shrey Raj Singh",
    phoneNumber: "7587845520",
    email: "support@codeforit.in",
    role: "Team Lead",
    link: "",
  },
  {
    image:"/contacts/webSite/shobhitPatra.png",
    title: "Shobhit Patra",
    phoneNumber: "9334237027",
    email: "support@codeforit.in",
    role: "Web Front-End Developer",
    link: "",
  },
  {
    image:"/contacts/webSite/tanishqMishra.png",
    title: "Tanishq Mishra",
    phoneNumber: "9399788618",
    email: "mishratanishq619@gmail.com",
    link: "",
    role: "Web Front-End Developer",
  },
  {
    image:"/contacts/webSite/ajayPatel.png",
    title: "Ajay Patel",
    phoneNumber: "8839171099",
    email: "ajaypatelarts@gmail.com",
    role: "UI/UX Designer",
    link: "",
  },
];

export const RegistrationReception = [
  {
    image: "/contacts/studentConveners/kusumPandey.png",
    title: "Kusum Panday",
    phoneNumber: "7999060826",
    role: "Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentConveners/sourabhMehani.png",
    title: "Sourabh Mehani",
    phoneNumber: "9039577242",
    role: "Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/pritiSahu.png",
    title: "Priti Sahu",
    phoneNumber: "8815464817",
    role: "Co-Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/monishaMukharjee.png",
    title: "Monisha Mukharjee ",
    phoneNumber: "8236037553",
    role: "Co-Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/sauravKumar.png",
    title: "Saurav Kumar ",
    phoneNumber: "6202125487",
    role: "Co-Convenor",
    
    link: "",
  },
];
export const CertificatePrize = [
  {
    image: "/contacts/studentConveners/tejeshwarVerma.png",
    title: "Tejeshwar Verma",
    phoneNumber: "8889193924",
    role: "Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentConveners/suhaniAggarwal.png",
    title: "Suhani Agrawal",
    phoneNumber: "9685026258",
    role: "Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/shashishekharPrajapati.png",
    title: "Shashisekhar Prajapati ",
    phoneNumber: "6268113534",
    role: "Co-Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/shivamPatel.png",
    title: "Shivam Patel",
    phoneNumber: "7974583805",
    role: "Co-Convenor",
    
    link: "",
  },
];
export const Transportation = [
  {
    image: "/contacts/studentConveners/suryaranjanSatapathy.png",
    title: "Surya Ranjan Satapathy",
    phoneNumber: "7869199650",
    role: "Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/avinashSingh.png",
    title: "Avinash Singh ",
    phoneNumber: "7691953404",
    role: "Co-Convenor",
    
    link: "",
  },
];
export const Accommodation = [
  {
    image: "/contacts/studentConveners/dushaliPatel.png",
    title: "Dushali Patel",
    phoneNumber: "9340198399",
    role: "Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/navneetTripathi.png",
    title: "Navneet Tripathy  ",
    phoneNumber: "7489462029",
    role: "Co-Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/pranjalAcharya.png",
    title: "Pranjal Acharya",
    phoneNumber: "9752299711",
    role: "Co-Convenor",
    
    link: "",
  },
];
export const Catering = [
  {
    image: "/contacts/studentConveners/anusuya.png",
    title: "Anusuya P",
    phoneNumber: "9692745473",
    role: "Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/harshDubey.png",
    title: "Harsh Dubey",
    phoneNumber: "9340427142",
    role: "Co-Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/manasRathore.png",
    title: "Manas Rathore",
    phoneNumber: "8224980921",
    role: "Co-Convenor",
    
    link: "",
  },
];
export const Hospitality = [
  {
    image: "/contacts/studentConveners/yashviSolanki.png",
    title: "Yashvi Solanki",
    phoneNumber: "9827421226",
    role: "Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/pritiKushwaha.png",
    title: "Priti Kushwaha",
    phoneNumber: "9907416853",
    role: "Co-Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/mohitSharma.png",
    title: "Mohit Sharma",
    phoneNumber: "8895257251",
    role: "Co-Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/pranatiPaira.png",
    title: "Pranati Paira",
    phoneNumber: "7848977240",
    role: "Co-Convenor",
    
    link: "",
  },
];
export const VenuePreparation = [
  {
    image: "/contacts/studentConveners/anandRajDansena.png",
    title: "Anand Raj Dansena",
    phoneNumber: "9981230698",
    role: "Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/bhavamGavel.png",
    title: "Bhavam Gavel",
    phoneNumber: "6264595565",
    role: "Co-Convenor",
    
    link: "",
  },
];
export const InformationPublicityInvitation = [
  {
    image: "/contacts/studentConveners/tanujaNair.png",
    title: "Tanuja Nair",
    phoneNumber: "6263374001",
    role: "Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentConveners/anoushkaRSharma.png",
    title: "Anoushka R Sharma",
    phoneNumber: "8349239114",
    role: "Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentConveners/manigupta.png",
    title: "Manish Gupta",
    phoneNumber: "9131391650",
    role: "Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/vishalSingh.png",
    title: "Vishal Singh ",
    phoneNumber: "7488041613",
    role: "Co-Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/shikharPandey.png",
    title: "Sikhar Pandey",
    phoneNumber: "7765996678",
    role: "Co-Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/jayant.png",
    title: "Jayant Sekhar",
    phoneNumber: "9123147552",
    role: "Co-Convenor",
    
    link: "",
  },
];
export const Logistics = [
  {
    image: "/contacts/studentCoConveners/sarangSuhasBakre.png",
    title: "Sarang Suhas Bakre",
    phoneNumber: "7389436289",
    role: "Co-Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/shrutiKumari.png",
    title: "Shruti Kumari ",
    phoneNumber: "9165245727",
    role: "Co-Convenor",
    
    link: "",
  },
  // {
  //   // Coimage:contacts/studentConveners/anusuya.png",
  //   title: "Soumya Mittal",
  //   phoneNumber: "9753721777",
  //   role: "Co-Convenor",
  //   link: "",
  // },
];
export const StageLightSoundandStall = [
  {
    image: "/contacts/studentConveners/shouryaSingh.png",
    title: "Shourya singh ",
    phoneNumber: "8349149215",
    role: "Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentConveners/shivangiSinghGautam.png",
    title: "Shivangi Singh",
    phoneNumber: "8817798363",
    role: "Convenor",
    
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/uditShukla.png",
    title: "Udit Shukla ",
    phoneNumber: "7415885039",
    role: "Co-Convenor",
    
    link: "",
  },
];
export const DesignPrintMedia = [
  {
    image: "/contacts/studentConveners/yogeshRathore.png",
    title: "Yogesh Rathore",
    phoneNumber: "7722953968",
    role: "Convenor",
    link: "",
  },
  {
    image: "/contacts/studentConveners/shivRamMehar.png",
    title: "Shivram Mehar ",
    phoneNumber: "8770729306",
    role: "Convenor",
    link: "",
  },
  {
    image: "/contacts/studentConveners/krashikaShukla.png",
    title: "Krashika Shukla ",
    phoneNumber: "8269118713",
    role: "Convenor",
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/nareshKumarMourya.png",
    title: "Naresh Kumar Mourya",
    phoneNumber: "8252919456",
    role: "Co-Convenor",
    link: "",
  },
];
export const Discipline = [
  {
    image: "/contacts/studentConveners/chirag.png",
    title: "Chirag Mishra",
    phoneNumber: "8871724185",
    role: "Convenor",
    link: "",
  },
  {
    image: "/contacts/studentConveners/sahilPannu.png",
    title: "Sahil Pannu",
    phoneNumber: "9340411553",
    role: "Convenor",
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/priyamSharma.png",
    title: "Priyam Sharma",
    phoneNumber: "9343352234",
    role: "Co-Convenor",
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/vasudhaPatel.png",
    title: "Vasudha Patel",
    phoneNumber: "9302732876",
    role: "Co-Convenor",
    link: "",
  },
];
export const HealthFirstAid = [
  {
    image: "/contacts/studentConveners/vikrantE.png",
    title: "Vikrant Singh",
    phoneNumber: "7987010137",
    role: "Convenor",
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/pruthaChipde.png",
    title: "Prutha Chipde",
    phoneNumber: "9993520770",
    role: "Co-Convenor",
    link: "",
  },
  {
    image: "/contacts/studentCoConveners/muskanPatel.png",
    title: "Muskan Patel",
    phoneNumber: "9718336001",
    role: "Co-Convenor",
    link: "",
  },
];