'use client';
import React from "react";
import EventsDetails from "../detsEvents";
import Header from "@/components/Header";
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {
	
	const eventId = 'event-Treasure Hunt-202403';
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
				imageLink="../posters/treasureHunt.png"
				prize={7000}
				heading="TREASURE HUNT – “SOMETIMES YOU WIN, SOMETIMES YOU LEARN”"
				paragraph={<><p>TREASURE HUNT – THE MIND GAME Hey You!!! &quot;Join us on a thrilling adventure
					as we follow clues, solve puzzles, and overcome challenges to find a hidden
					treasure. It&#39;s all about fun, teamwork, and the excitement of discovery!&quot;</p></>}
				subHeading="“Ready, treasure hunters? Let&#39;s go!”"
				theme={<p>Searching the treasure</p>}
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
				rulesHeading={"Rules of the event:"}
				rules={<><ul>
					<li>
					All teams have to select their team leader with their team’s name.
					</li>
					<li>
					Do not misbehave with coordinators.
					</li>
					<li>
					Participants can’t take any help from others.
					</li>
					<li>
					Teams must stay together and not split up.
					</li>
					<li>
					Participants cannot use their Electronic Devices during games.
					</li>
					<li>
					In this game every team has to solve puzzles, clues and riddles.
					</li>
					<li>
					There should be only 5 members in a team.
					</li>
					<li>
					If the number of participating teams will exceed 30, then there will a prequalification round before the final event.
					(We will notify you by your email)
					</li>
					<li>
					Teams may be disqualified if:<ul>
						<li>Interfering with another team.</li>
						<li>Damaging the university properties (otherwise you have to pay fine for it).</li>
						<li>They do not follow the given instructions.</li>
						<li>All teams must reach before time.</li></ul>
					</li>
					</ul>
				</>}
				roundsHeading={"Rounds:"}
				rounds={<>
				<h3>There will be 3 rounds</h3>
				<p>Tasks for the round will be declared on the spot.</p>
				</>}
				judgeMentalCriteria={<>
					<p>It will be based on time.</p>
				</>}
				eventVenue={<p>OP Jindal University Campus</p>}
				facultyCoordinators={<table>
					<tbody>
						<tr>
							<td>DR. DEEPAK PATEL</td>
						</tr>
						<tr>
							<td>DR. SAURABH GUPTA</td>
						</tr>
						<tr>
							<td>Prof. SHASHIKANT KAUSHALEY</td>
						</tr>
					</tbody></table>}
				eventManagers={<table>
					<tbody>
						<tr>
							<td>Satyendra Vishwakarma</td>
							<td>+91 7024332255</td>
						</tr>
						<tr>
							<td>Aditi Sharma</td>
							<td>+91 9770613233</td>
						</tr>
						<tr>
							<td>Shruti Shaw</td>
							<td>+91 9830542702</td>
						</tr>
						<tr>
							<td>Devendra Vishwakarma</td>
							<td>+91 8269674671</td>
						</tr>
					</tbody></table>}
			/>
		</main>
	);
};

export default page;
