'use client';
import React, { useEffect, useState } from 'react';
import EventsDetails from "../detsEvents";
import Header from "@/components/Header";
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {
	const eventId = 'event-Mock CID-202403';
	const [Teams, setTeams] = useState({});
	const [Participants, setParticipants] = useState({});
	useEffect(() => {
	  fetch(
		`http://technorollix.opju.ac.in:4000/api/registeredTeam/count/perEvent/${eventId}`
	  )
		.then((response) => response.json())
		.then((data) => {
		  console.log('teams : ', data);
		  setTeams(data);
		  return data;
		})
		.catch((error) => {
		  console.error('Error fetching events:', error);
		  // return null;
		});
  
	  fetch(
		`http://technorollix.opju.ac.in:4000/api/participants/count/perEvent/${eventId}`
	  )
		.then((response) => response.json())
		.then((data) => {
		  console.log('participants :', data);
		  setParticipants(data);
		  return data;
		})
		.catch((error) => {
		  console.error('Error fetching events:', error);
		  // return null;
		});
	}, []);

	return (
		<main className="w-full h-screen">
			<Header />
			<EventsDetails
				imageLink="../posters/mockCID.png"
				prize={7000}
				heading="Mock CID: Unleash Your Inner Detective!"
				paragraph={<><p>Mock CID (Criminal Investigation Department) is an exciting event that challenges participants to become detective teams, solving a simulated crime and identifying the culprit. It's a thrilling test of problem-solving skills, logical thinking, and teamwork.</p></>}
				subHeading="“Ready to embark on a thrilling detective adventure? Register your team and put your skills to the test!”"
				theme={<><p>This Mock CID will be themed around Fictional world make your imagination run wild!</p>
				<h3 className="neon-text-red-lighter">Fictional world:</h3>
				<p>A fictional universe is the internally consistent fictional setting used in a narrative work or work of art, most commonly associated with works of fantasy and science fiction.</p>
				</>}
				registrationCount={
					<>
					  <h2 className="neon-text-red-lighter">Registrations</h2>
					  <table className="-mx-4">
						<thead>
						  <tr>
							<td className="text-[10px] sm:text-[1.4rem] ">Counts</td>
							<td className="hidden sm:block text-[10px] sm:text-[1.4rem] ">
							  Total
							</td>
							<td className="text-[10px] sm:text-[1.4rem] ">Insider</td>
							<td className="text-[10px] sm:text-[1.4rem] ">Outsider</td>
						  </tr>
						</thead>
						<tbody>
						  <tr>
							<td className="text-[10px] sm:text-[1.4rem] ">Teams</td>
							<td className="hidden sm:block text-[17px] sm:text-[1.4rem]  font-bold  text-center">
							  {Teams.totalCount}
							</td>
							<td className="text-[17px] sm:text-[1.4rem] font-bold  text-center">
							  {Teams.insiderCount}
							</td>
							<td className="text-[17px] sm:text-[1.4rem] font-bold  text-center">
							  {Teams.outsiderCount}
							</td>
						  </tr>
						  <tr>
							<td className="text-[10px] sm:text-[1.4rem] ">
							  Participants
							</td>
							<td className="hidden sm:block text-[17px] sm:text-[1.4rem] font-bold  text-center">
							  {Participants.totalCount}
							</td>
							<td className="text-[17px] sm:text-[1.4rem] font-bold  text-center">
							  {Participants.insiderCount}
							</td>
							<td className="text-[17px] sm:text-[1.4rem] font-bold  text-center">
							  {Participants.outsiderCount}
							</td>
						  </tr>
						</tbody>
					  </table>
					</>
				  }
				rulesHeading={"Rules and Regulations:"}
				rules={<><ul>
					<li>
					<b>Team Size:</b> 4 participants per team
					</li>
					<li>
					<b>Collaboration:</b> Teams must work together effectively. Sharing information, brainstorming solutions, and delegating tasks are crucial..
					</li>
					<li>
					<b>Fair Play:</b> Participants are expected to conduct themselves with integrity and respect for other teams. Cheating and disruptive behavior will not be tolerated.
					</li>
					<li>
					<b>Time Limits:</b> Each round will have a designated time limit. Teams must manage their time efficiently to complete the challenges within the allotted timeframe
					</li>
					</ul>
				</>}
				roundsHeading={"Rounds:"}
				rounds={<>
				<ul>
				<li>Round 1: Puzzle Challenge (30 minutes): Teams will work together to solve a series of logic puzzles and riddles related to the case.</li>
				<li>Round 2: Crime Scene Investigation (45 minutes): Teams will investigate a staged crime scene, analyze evidence (photos, objects, documents), and interview suspects.</li>
				<li>Round 3: Case Presentation (20 minutes): Each team will present their findings, identify the culprit, and explain their reasoning to the judges.</li>
				</ul>
				</>}
				judgeMentalCriteria={<>
					<p>It will be based on time.</p>
					<ul>
						<li>Accuracy (40%): Correctly identifying the culprit and presenting a logical explanation based on evidence.</li>
						<li>Teamwork (30%): Effective collaboration, communication, and task management within the team.</li>
						<li>Creativity (20%): Innovative approaches to problem-solving and unique deductions made during the investigation.</li>
						<li>Presentation (10%): Clear, concise, and well-organized presentation of the findings, including a compelling explanation of the case.</li>
					</ul>
				</>}
				eventVenue={<p> University Campus </p>}
				facultyCoordinators={<table>
					<tbody>
						<tr>
							<td>Dr Ankur Rastogi </td>
							<td>+91 9109977043</td>
						</tr>
					</tbody></table>}
				eventManagers={<table>
					<tbody>
						<tr>
							<td>Navneet Tripathi</td>
							<td>+91 7489462029</td>
						</tr>
						<tr>
							<td>Sahil Sahu</td>
							<td>+91 9668048310</td>
						</tr>
						<tr>
							<td>Ayuv Keshar Dewangan</td>
							<td>+91 7803887095</td>
						</tr>
						<tr>
							<td>Neeraj Patel</td>
							<td>+91 9171269588</td>
						</tr>
						<tr>
							<td>Priyanshu Kumar</td>
							<td>+91 6202669334</td>
						</tr>
						<tr>
							<td>Abhishek Kumar</td>
							<td>+91 6202268483</td>
						</tr>
						<tr>
							<td>Komal Chauhan</td>
							<td>+91 9178322466</td>
						</tr>
						<tr>
							<td>Mantosh Mandal</td>
							<td>+91 7351933404</td>
						</tr>
						<tr>
							<td>Anjali Kumari</td>
							<td>+91 9142120122</td>
						</tr>
					</tbody></table>}
			/>
		</main>
	);
};

export default page;
