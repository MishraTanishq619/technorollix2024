'use client';
import React, { useEffect, useState } from 'react';
import EventsDetails from "../detsEvents";
import Header from "@/components/Header";
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {
	
	const eventId = 'event-RJ Hunt-202403';
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
				imageLink="../posters/rjHunt.png"
				prize={6000}
				heading="Radio Jockey (RJ) Hunt"
				paragraph={<><p>Unleash your inner voice! Join the Radio Jockey (RJ) Hunt and let your stories echo through the waves. Hunt and compete for the title of the ultimate campus voice.
					Are you ready to be heard? </p></>}
				// subHeading="“Where Minds Clash and Ideas Illuminate”"
				theme={<p>Multiverse Melange</p>}
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
				rules={<><ol>
					<li className="neon-text-red-lighter">Eligibility:</li>
					<ul>
						<li>
							Participants must be full-time students of a college or university..
						</li>
						<li>
							Each participant can register individually or in a team but not more than 2. (Can be modified if needed)
						</li>
					</ul>
					<li className="neon-text-red-lighter">Audition Format:</li>
					<ul>
						<li>
							Auditions will be based on various skills such as storytelling, voice modulation, spontaneity, and wit.
						</li>
						<li>
							Time limit for each participant during auditions.
						</li>
					</ul>
					<li className="neon-text-red-lighter">Content Guidelines:</li>
					<ul>
						<li>
							Content must be appropriate, avoiding any offensive language or topics.
						</li>
						<li>
							Originality is encouraged, but adaptations are allowed.
						</li>
					</ul>
					<li className="neon-text-red-lighter">Technical Requirements:</li>
					<ul>
						<li>
							Participants must bring their own music or sound effects if they choose to incorporate them.
						</li>
						<li>
							Limited time for technical setup during auditions.
						</li>
					</ul>
				</ol>
				</>}
				roundsHeading={"Rounds: There will be 3 rounds"}
				rounds={<>
					<ul>
						<li>1st round Auditions based on voice Modulation, Narration, Storytelling, Spontaneity, Creativity and Originality etc. ping.</li>
						<li>After audition participants will be given time to prepare their scripts based on various themes provided after clearing the auditions. For pre-finale or Round 1 of the competition the participants have to provide a recorded audio clip (recording must be done in the presence of the event managers and one of the faculty-coordinators). The clips will be uploaded on the official Instagram account of RJ Hunt. Participant have to promote their respective post to get good comments and likes, however the final judgment will include experts remarks also.</li>
						<li>In the finale round i.e., Round 3, participants have to conduct an offline (classroom) podcast in-front of the audience and judges. (Terms and conditions will be updated after clearing Round 2 (pre-finale)).</li>
					</ul>
				</>}
				judgeMentalCriteria={<>
					<p>It will be based on following parameters:</p>
					<ul>
						<li>Voice Modulation (20 points): Ability to modulate voice for different moods and tones.</li>
						<li>Creativity and Originality (20 points): Uniqueness of content and creative storytelling.</li>
						<li>Spontaneity (15 points): Quick thinking and responses to unexpected situations.</li>
						<li>Engagement with Audience (15 points): Connection with listeners, maintaining interest.</li>
						<li>Overall Presentation (30 points): Overall impression, flow, and execution of the segment.</li>
					</ul>
				</>}
				eventVenue={<p>EE Seminar Hall (FB-14)</p>}
				facultyCoordinators={<table>
					<tbody>
						<tr>
							<td>Dr. Deepak Patel</td>
							<td>+91 9981260497</td>
						</tr>
					</tbody></table>}
				eventManagers={<table>
					<tbody>
						<tr>
							<td>Manish Kumar Verma</td>
							<td>+91 9304526839</td>
						</tr>
						<tr>
							<td>Apurv Sinha</td>
							<td>+91 8010000296</td>
						</tr>
						<tr>
							<td>Puja Pandey </td>
							<td>+91 7471177157</td>
						</tr>
					</tbody></table>}
			/>
		</main>
	);
};

export default page;
