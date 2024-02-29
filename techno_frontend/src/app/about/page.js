import AboutCard from "@/app/about/AboutCard";
import { TracingBeam } from "@/components/ui/tracingBeam";
import React from "react";
import Header from "@/components/Header";

const page = () => {
	return (
		<>
			<Header />
		<TracingBeam>
			<div className="pt-10 w-full flex flex-col items-center gap-10">
			<AboutCard
					imageLink="opju-bg.jpg"
					heading="About TechnoRollix -"
					heading2=" 2k24"
					paragraph="Welcome to Central India's Biggest Technical And Cultural Fest #Technorollix - 2024. This event is organized yearly
					 by our students and faculty staff. This fest hosts a galaxy of events(Tech-Lab, Ideathon, Lan-Gaming, Startup business plan, 
					Fashion show, Roadies, Robovation, Talent-Hunt and many more excited events) aimed at boosting the technical and cultural skills
					 inherent in today’s youth by giving them an opportunity to showcase it. Over the last 14 years, it has been a platform that has 
					 successfully brought students, academicians, and industrial giants under one roof. Technorollix’24, Spanning from 20 - 22 March 
					 2023, aims at giving a spine-tingling ride to inspiring minds and bringing together dynamic, innovative and enterprising students 
					 of various colleges (students of B Tech., B.Com, B.Sc., BBA) from all over India on a common platform to participate in different 
					 competitive events along with OPJU students, dedicated to experiencing the fun in technology, Management and science."
					arrangement={1}
				/>
				<AboutCard
					imageLink="mainbg.jpg"
					heading="Meet the team"
					paragraph="
					Elevating Startups, Empowering Dreams: Bridging the gap between vision and 
					technology, we are your strategic ally in the digital realm. Our mission is to propel startups and 
					small businesses into the digital forefront, crafting seamless websites and apps at minimal 
					costs. Beyond technical expertise, we oAer comprehensive support – from business plans to 
					consultancy – fostering growth and success. Collaborate with us, transform your ideas into 
					thriving ventures. "
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
			</div>

		</TracingBeam>
		</>
	);
};

export default page;
