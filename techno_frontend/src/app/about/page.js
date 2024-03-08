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
            paragraph={`OP Jindal University (OPJU), Raigarh has organized the 13 th edition of its National Level
			Annual Techno-Cultural Fest “TECHNOROLLIX 2024” along with the program “Junoon”-
			Celebrity Night from March 20 st to 22 rd , 2024.
			
			The prime objective of Tech-Fest is to bring together dynamic, innovative, and enterprising
			students from various Engineering, Management, and Science institutions across the
			country on a common platform to showcase their talent and exchange of ideas. 
			
			The Tech-Fest will be comprised of more than twenty different competitive events ranging
			from Innovative Technical Models, Hackathon, Technical Papers, Quiz, Tech-talks, Yuva
			Sabha, Startup Business Plan, Aaghaaz- The Ethnic Fashion Show, Aero Drone, etc. In
			addition to our students, it is also expected that a good number of students from
			Engineering, Management and Science institutions from different parts of the country will be
			participating in this festival.`}
            arrangement={1}
          />
          <AboutCard
            imageLink="opju-bg.jpg"
            heading="About O.P. Jindal University"
            paragraph="Founded by the Jindal education and Welfare Society, OP Jindal University (OPJU) was set up to 
					bring high quality education to its students based on a world class curriculum, the latest teaching methodology 
					and committed faculty members. The multidisciplinary university aims to develop young professionals and future 
					leaders who will not only power growth and development in the state, but also make a mark globally.At the core 
					of the university's philosophy and approach lies the belief that students learn best when exposed to real world
					 situations and when nurtured through enriching interactions with practitioners and professors. We at OPJU believe that every student has innate potential that can be unlocked through quality teaching and mentorship."
            arrangement={1}
          />
          <AboutCard
            imageLink="mainbg.jpg"
            heading="Meet the team"
            paragraph="
					Elevating Startups, Empowering Dreams: Bridging the gap between vision and 
					technology, we are your strategic ally in the digital realm. Our mission is to propel startups and 
					small businesses into the digital forefront, crafting seamless websites and apps at minimal 
					costs. Beyond technical expertise, we offer comprehensive support – from business plans to 
					consultancy – fostering growth and success. Collaborate with us, transform your ideas into 
					thriving ventures. "
            arrangement={1}
          />
        </div>
      </TracingBeam>
    </>
  );
};

export default page;
