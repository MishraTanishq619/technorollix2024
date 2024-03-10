import AboutCard from '@/app/about/AboutCard';
import { TracingBeam } from '@/components/ui/tracingBeam';
import React from 'react';
import Header from '@/components/Header';

const page = () => {
  return (
    <>
      <Header />
      <TracingBeam>
        <div className="pt-10 w-full flex flex-col items-center gap-10">
          <AboutCard
            imageLink={`techno-poster2.png`}
            heading="About TechnoRollix -"
            heading2=" 2k24"
            paragraph={`The 13th edition of Technorollix, OP Jindal University's National Level Annual Techno-Cultural Fest, is all set to kick off from 20-22 March, 2024. Alongside, they're also hosting "Junoon" - Celebrity Night, adding an extra splash of excitement to the event.

            The primary aim of Technorollix is to provide a platform for students across various disciplines such as Engineering, Management, and Science to come together and showcase their talents while fostering an exchange of innovative ideas.
            
            This year's fest promises a diverse range of activities, with more than twenty competitive events planned. From showcasing innovative technical models and engaging in hackathons to presenting technical papers and participating in quizzes and tech-talks, there's something for everyone. Additionally, the lineup includes Yuva Sabha, Startup Business Plan, Aaghaaz - The Ethnic Fashion Show, Aero Drone, and more.
            
            With participants expected from institutions across the country, Technorollix 2024 is shaping up to be an exhilarating celebration of talent, creativity, and innovation.`}
            arrangement={1}
          />
          <AboutCard
            imageLink="opju-bg.jpg"
            heading="About O.P. Jindal University"
            paragraph="OP Jindal University (OPJU), established by the Jindal Education and Welfare Society, is dedicated to providing high-quality education to its students. Rooted in a commitment to excellence, OPJU offers a world-class curriculum, employing the latest teaching methodologies and a team of dedicated faculty members.

            This multidisciplinary university aims to cultivate young professionals and future leaders who will drive growth and development not only within the state but also on a global scale. Central to its philosophy is the belief that students thrive when exposed to real-world scenarios and engaged in meaningful interactions with both practitioners and professors.
            
            At OPJU, there's a firm conviction that every student possesses inherent potential waiting to be unlocked. Through quality teaching and mentorship, the university endeavors to nurture and unleash this potential, empowering students to excel in their chosen fields and contribute positively to society."
            arrangement={2}
          />
          <AboutCard
            imageLink="mainbg.jpg"
            heading="Meet the team"
            paragraph="
            With a mission to propel startups and small businesses into the digital forefront, we specialize in bridging the gap between vision and technology. At our core, we are your strategic ally in the digital realm, offering comprehensive support to transform your ideas into thriving ventures.

            Our expertise lies in crafting seamless websites and apps at minimal costs, ensuring that your digital presence aligns perfectly with your business goals. Beyond technical prowess, we provide holistic support, from developing business plans to offering consultancy services, all aimed at fostering growth and success for your enterprise.
            
            Collaborate with us, and let's embark on a journey to elevate your startup, empower your dreams, and pave the way for lasting success in the digital landscape.
            "
            arrangement={1}
          />
        </div>
      </TracingBeam>
    </>
  );
};

export default page;
