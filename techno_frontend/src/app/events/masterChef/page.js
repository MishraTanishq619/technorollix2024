import React from "react";
import EventsDetails from "../detsEvents";
import Header from "@/components/Header";
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {
	const eventId = 'event-Master Chef-202403';
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
				imageLink="../posters/masterChef.png"
				prize={7500}
				heading="MASTERCHEF - LOVE AT FIRST BITE"
				paragraph={<><p>OPJU brings you an extraordinary platform “MASTERCHEF” to showcase your talents and
					let the world know your taste.</p></>}
				subHeading="Good food is good mood"
				theme={<p>A recipe has no soul you as the cook must bring soul to the recipe.</p>}
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
				rules={<>
					<li>
					It is a group event i.e. group wise registration only 2 members.
					</li>
					<li>
					UG and PG students (Age 18- below 30) allowed of colleges / university.
					</li>
					<li>
					Performance should be within the time limit which will be intimated later.
					</li>
					<li>
					Contents should not be offensive, politically driven, gender biased, personal comments or any sensitive topic
					</li>
					<li>
					No abusive language
					</li>
					<li>
					Costumes should be appropriate
					</li>
					<li>
					No entries without registration
					</li>
					<li>
					Decision of the jury will be final
					</li>
					<li>
					Participants should be cooperative to the team member
					</li>
					<li>
					Result will be announced on the same date
					</li>
				</>}
				roundsHeading={"Rounds of the event:"}
				rounds={<>
					<li>The number of rounds will be decided based on the entries. This will be intimated later.</li>
				</>}
				judgeMentalCriteria={<>
					<p>It will be based on the following parameters:</p>
					<li>Taste Preference</li>
					<li>Plating</li>
					<li>Confidence</li>
					<li>Performance</li>
					<p className="neon-text-red-lighter">Note <br/>
					</p>
					<li>Each parameter contains 10 marks</li>
					<li>The parameter of judgement may change which will be intimated later</li>
				</>}
				eventVenue={<p>Cafeteria ground floor</p>}
				facultyCoordinators={<table>
					<tbody>
						<tr>
							<td>Dr. Kavita Patel</td>
							<td>+91 9993993019</td>
							<td>Kavita.patel@opju.ac.in</td>
						</tr>
						<tr>
							<td>Dr. Nidhi Khobragade</td>
							<td>+91 9771864653</td>
							<td>nidhi.khorbragade@opju.ac.in</td>
						</tr>
						<tr>
							<td>Prof. Rupesh Patel</td>
							<td>+91 9109909248</td>
							<td>rupesh.patel@opju.ac.in</td>
						</tr>
					</tbody></table>}
				eventManagers={<table>
					<tbody>
						<tr>
							<td>Vaibhav Gupta</td>
							<td>+91 8827902201</td>
						</tr>
						<tr>
							<td>Pradeep Kumar Mahato</td>
							<td>+91 9113446682</td>
						</tr>
						<tr>
							<td>Nousin Khatun</td>
							<td>+91 9039947225</td>
						</tr>
					</tbody></table>}
			/>
		</main>
	);
};

export default page;
