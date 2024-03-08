'use client';
import React, { useEffect, useState } from 'react';
import EventsDetails from "../detsEvents";
import Header from "@/components/Header";
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {
	const eventId = 'event-Talent Hunt-202403';
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
				imageLink="../posters/talentHunt.png"
				prize={9000}
				heading="Talent Hunt"
				paragraph={<><p>Calling all talented individuals! It's time to take the stage and dazzle us with your skills at our
					Talent Hunt event. Whether you're a poet, comedian, musician, artist, or a magician, this is your
					chance to shine. Compete against other talented individuals and let your creativity soar. Join us for
					a day filled with excitement, laughter, and unforgettable performances!</p></>}
				subHeading="“Unleash Your Campus Star Power!”"
				theme={<p>Harmony in chaos: Finding beauty in complexity</p>}
				subEventHeading={"Events"}
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
				subEvents={<><div className='max-w-screen overflow-x-scroll'>
					<table>
						<thead>
						<tr>
							<td className="neon-text-red-light">Open Mic</td>
							<td className="neon-text-red-light">Musical Showcase</td>
							<td className="neon-text-red-light">Beat Battle</td>
							<td className="neon-text-red-light">Art and Craft</td>
						</tr></thead><tbody>
							<tr>
								<td><li>Poetry</li></td>
								<td><li>Instrumental</li></td>
								<td><li>DIY Craft</li></td>
								<td><li className='text-ellipsis'>Your Unique
									Talents Like
									Magic, Toss
									Juggling,
									Shadow Act
									etc..</li></td>
							</tr>
							<tr>
								<td><li>Storytelling</li></td>
								<td><li>Beat boxing</li></td>
								<td><li>Sand art</li></td>
								<td><li>Hand craft</li></td>
							</tr>
							<tr>
								<td><li>Standup comedy</li></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td><li>Mimicry</li></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody></table></div>
				</>}
				rulesHeading={"Rules of the event:"}
				rules={<>
				<h3 className='neon-text-red-light'>Note:- For All The Sub-events Only Individual Participants are allowed!</h3>
					<br />	<p className="neon-text-red-lighter">OPEN MIC</p>
					<ol className="list-decimal">
						<li>
						Participants must perform original poetry written by themselves
						</li>
						<li>
						Participants must bring any props or notes they require for their performance
						</li>
						<li>
						Time Limit : 5min for each category.
						</li>
						<li>
						No offensive language or content allowed.
						</li>
					</ol>
					<br />	<p className="neon-text-red-lighter">MUSICAL SHOWCASE</p>
					<ol className="list-decimal">
						<li>
						Participants must perform instrumental music using any chosen instrument.
						</li>
						<li>
						Participants must bring their own instruments and any necessary accessories (e.g.,picks, drumsticks).
						</li>
						<li>
						No pre-recorded music allowed.
						</li>
					</ol>
					<br /><p className="neon-text-red-lighter">ART AND CRAFTS</p>
					<ol className="list-decimal">
						<li>
						Participants must arrive 15 mins before the event begins.
						</li>
						<li>
						Crafts must be original creations.
						</li>
						<li>
						Participants must bring any materials they require for their performance.
						</li>
						<li>
						Maximum time limit :- 15 min.
						</li>
						<li>
						Finished crafts will be evaluated based on visual appeal and craftsmanship.
						</li>
					</ol>
					<br /><p className="neon-text-red-lighter">SPECIAL TALENTS</p>
					<ol className="list-decimal">
						<li>
						Showcase your unique talent in 3-5 minutes with originality and flair
						</li>
						<li>
						Safety first! Keep your performance safe for yourself and the audience.
						</li>
						<li>
						Impress the judges with your creativity, skill, and stage presence.
						</li>
						<li>
						Props are allowed, but they must be safe and enhance your act
						</li>
						<li>
						Communicate any technical needs in advance for a smooth performance.
						</li>
						<li>
						Cheating or unfair play will result in disqualification.
						</li>
						<li>
						Make your talent shine in a short but memorable performance.
						</li>
					</ol>
				</>}
				// roundsHeading={"Rounds:"}
				// rounds={<>
				// 	<p>There will be only a single round.</p>
				// </>}
				judgeMentalCriteria={<>
					<li>Originality and uniqueness.</li>
					<li>Creativity and innovation.</li>
					<li>Performance quality and confidence.</li>
					<li>Audience engagement and connection.</li>
					<li>Overall impact and memorability.</li>
				</>}
				eventVenue={<p>OPJU playground</p>}
				facultyCoordinators={<table>
					<tbody>
						<tr>
							<td>Prof.Manoj Kumar Mishra</td>
						</tr>
						<tr>
							<td>Prof.Shrikant Chaini</td>
						</tr>
						<tr>
							<td>Prof.Akash Pandey</td>
						</tr>
					</tbody></table>}
				eventManagers={<table>
					<tbody>
						<tr>
							<td>RIYANSHA CHOUDHARY</td>
							<td>+91 8319662101</td>
						</tr>
						<tr>
							<td>SUNNY KUMAR THAKUR</td>
							<td>+91 7224906388</td>
						</tr>
					</tbody></table>}
			/>
		</main>
	);
};

export default page;
