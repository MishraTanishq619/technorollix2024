import React from 'react';
import EventsDetails from '../detsEvents';
import Header from '@/components/Header';
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {

	return (
		<main className="w-full h-screen">
			<Header />
			{/* <div className="w-full h-screen py-24 bg-cover  bg-center bg-[url('/mainbg.jpg')]  flex flex-wrap gap-10 items-center justify-evenly overflow-scroll"> */}
			{/* <BackgroundBeams /> */}
			<EventsDetails
				imageLink="../posters/startUp.png"
				prize={30000}
				heading="Startup Business Plan (Start-up Competition)"
				paragraph={<><p>The purpose of the event is to provide students with practical experience so they may present
					their Start-up plans in one of two categories—seed or early-stage. Based on the market opportunity and concept validity
					of the plan, judges will assess the seed category. Entrepreneurs in the early-stage category, who have more developed
					company models, will be judged.</p><br />
					<p>The best pitches will walk away with Cash Prizes and Mentoring Opportunities.</p></>}
				subHeading=""
				theme={<p>Unleash your Entrepreneurial Caliber</p>}
				rulesHeading={"Rules and Rounds of the Event:"}
				rules={<>
					<li>
						The competition is open for teams comprising graduate & postgraduate students.
					</li>
					<li>
						A maximum of four members (Founders) are permitted in a team. No change of team structure is permitted after the team is registered.
					</li>
					<li>One participant cannot be part of more than one team.</li>
					<li>
						One of the team members should be registered as the team leader.
					</li>
					<li>
						There will be a Shortlisting of Participants, at the time of registration participants are required to mention about their start-up plan, Only selected start-up plan/start-ups will be considered for Final Presentation in front of the Panel Members
					</li>
					<li>
						Maximum 15 slides of power point presentation are allowed for presentaing the Start-up Plan/Start-up (If Any)
					</li>
					<li>
						Maximum 15 minutes per team will be giben for presenting the start-up plan/start-up.
					</li>
					<li>Participants must carry their Laptop for presentation</li>
					<li>
						Selected Start-ups may be considered for Incubation under OPJU Innovation Center
					</li>
				</>}
				rounds={""}
				judgeMentalCriteria={<p>Parameters will be set by the Organizing Committee after the experts/start-up founders.</p>}
				eventVenue={<p>Live Classroom</p>}
				// facultyCoordinators={<p>Dr.Himanshu Vaishnaw  -  9713863587 himanshu.vaishnaw@opju.ac.in </p>}
				facultyCoordinators={<table>
				<tbody>
					<tr>
						<td>Dr.Himanshu Vaishnaw</td>
						<td>+91 9713863587</td>
						<td>himanshu.vaishnaw@opju.ac.in</td>
					</tr>
				</tbody></table>}
				eventManagers={<p>Not Provided</p>}
				staffCoordinators={<p></p>}
			/>
		</main>
	);
};

export default page;
