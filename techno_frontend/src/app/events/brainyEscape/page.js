'use client';
import React from "react";
import EventsDetails from "../detsEvents";
import Header from "@/components/Header";
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {
	const eventId = 'event-Brainy Escape-202403';
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
				imageLink="../posters/brainyEscape.png"
				prize={7000}
				heading="Brainy Escape"
				paragraph={<><p>Engrossed with fun and Quiz-mania to tackle puzzles, riddles, and memes.
					Brush up your memory in the Technology, and General knowledge, build up curiosity
					and get the way out!!</p></>}
				// subHeading="“Where Minds Clash and Ideas Illuminate”"
				theme={<p> (for quiz): Current Affairs, Technical, Entertainment, Sports, Voice
					Recognition, Riddle’s, Mental Ability & Memory Question.</p>}
				rulesHeading={"Rules & Regulations: For Quiz Round "}
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
				rules={<><ul>
					<li>
					The event will happen in 3 rounds and will be on the 21st of March 2024.
					</li>
					<li>
					The quiz will be conducted on 2 levels, Qualifiers and Finale.
					</li>
					<li>
					No electronic devices or phones are allowed.
					</li>
					<li>
					The results (for every level) will be decided based on their score.
					</li>
					<li>
					A team will consist of 3 members maximum. 1st round will be the elimination round.
					</li>
					<li>
					There will be negative markings (as per the questions).
					</li>
					<li>
					There would be (approx.) 20 questions and will be defined as per the levels.
					</li>
					<li>
					Participation Certificates for all participants.
					</li>
					<li>
					Top winners will be awarded prizes
					</li>
					<li>
					There is no elimination after 2nd round and all teams qualify for the final round.
					</li>
					</ul>
				</>}
				roundsHeading={"Rules & Regulations: For CAD-modelling & Simulation"}
				rounds={<>
				<ul>
				<li>The event will happen in 3 rounds and will be conducted on the 20th of March 2024.</li>
				<li>The system will be provided by the college only for the software Autocad, Solidworks & CREO. If the participant is interested in competing in any other software they can feel free to bring their system do bring system.</li>
				<li>The event will be performed by giving the participants a design and They will have to replicate the given design within a given time Frame.</li>
				<li>The competition will be held at CAD Modelling & Simulation Lab G-09.</li>
				<li>The event will be conducted in 3 rounds and the first two rounds will be a knock-out round.</li>
				<li>Participation Certificates for all participants.</li>
				<li>No electronic devices or phones are allowed.</li>
				<li>The top winners will be awarded prizes.</li>
				</ul>
				</>}
				judgeMentalCriteria={<>
					<p>Winners will be decided by points.</p>
				</>}
				eventVenue={<>
				<li>For CAD-modelling & Simulation: Lab G-09</li>
				<li>For Quiz will be informed soon.</li>
				</>}
				facultyCoordinators={<table>
					<tbody>
					</tbody></table>}
				eventManagers={<table>
					<tbody>
						<tr>
							<td>Kushal Kumar Barsiwal </td>
							<td>+91 7987829224</td>
							<td>kush.bt22me18@opju.ac.in</td>
						</tr>
						<tr>
							<td>Mahavratayajula Shrikanth </td>
							<td>+91 9754996459</td>
							<td>maha.bt21ee14@opju.ac.in</td>
						</tr>
						<tr>
							<td>Shubham Kumar Thakur </td>
							<td>+91 9304749918</td>
							<td>shub.bt21me50@opju.ac.in</td>
						</tr>
					</tbody></table>}
			/>
		</main>
	);
};

export default page;
