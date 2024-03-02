import React from "react";
import EventsDetails from "../detsEvents";
import Header from "@/components/Header";
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {

	return (
		<main className="w-full h-screen">
			<Header />
			<EventsDetails
				imageLink="../posters/talentHunt.png"
				prize={9000}
				heading="Talent Hunt"
				paragraph={<><p>Get ready to ignite the stage with your exceptional talents and mesmerize the world with your
					awe-inspiring performances! Join us on an electrifying odyssey of creativity, where dreams take
					flight and legends are born. Unleash your boundless potential, seize the spotlight, and let your
					brilliance shine like a supernova, illuminating the universe with your extraordinary gifts!</p></>}
				subHeading="“Unleash Your Campus Star Power!”"
				theme={<p>Harmony in chaos: Finding beauty in complexity</p>}
				subEventHeading={"Events"}
				subEvents={<>
					<table><tbody>
						<tr>
							<td className="neon-text-red-light">Open Mic</td>
							<td className="neon-text-red-light">Musical Showcase</td>
							<td className="neon-text-red-light">Beat Battle</td>
							<td className="neon-text-red-light">Art and Craft</td>
						</tr>
						<tr>
							<td><li>Poetry</li></td>
							<td><li>Instrumental</li></td>
							<td><li>Dance faceoff</li></td>
							<td><li>Painting</li></td>
						</tr>
						<tr>
							<td><li>Storytelling</li></td>
							<td><li>Beat boxing</li></td>
							<td></td>
							<td><li>Hand craft</li></td>
						</tr>
						<tr>
							<td><li>Standup comedy</li></td>
							<td><li>Rap Battle</li></td>
							<td></td>
							<td><li>Face Painting</li></td>
						</tr>
						<tr>
							<td><li>Mimicry</li></td>
							<td></td>
							<td></td>
							<td><li>Glass Painting</li></td>
						</tr>
					</tbody></table>
				</>}
				rulesHeading={"Rules of the event:"}
				rules={<>
					<br />	<p className="neon-text-red-lighter">OPEN MIC</p>
					<ol className="list-decimal">
						<li>
							Participants must perform original poetry written by themselves.
						</li>
						<li>
							Participants must bring any props or notes they require for their performance.
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
					<br /><p className="neon-text-red-lighter">RAP BATTLE RULES</p>
					<ol className="list-decimal">
						<li>
							Participants take turns delivering verses without interruption.
						</li>
						<li>
							Vulgar languages are not allowed; no personal attacks or offensive content..
						</li>
						<li>
							Use of pre-written verses is generally allowed, but spontaneity is encouraged.
						</li>
					</ol>
					<br /><p className="neon-text-red-lighter">DANCE FACEOFF RULES</p>
					<ol className="list-decimal">
						<li>
							Participants should follow the rhythm of the music, stay within the designated dance area, and be considerate of others.
						</li>
						<li>
							Judges evaluate based on creativity, technique, and stage presence.
						</li>
						<li>
							No physical contact or offensive gestures allowed.
						</li>
						<li>
							Fair play is essential; any unsportsmanlike behavior may result in disqualification.
						</li>
					</ol>
					<br /><p className="neon-text-red-lighter">ART AND CRAFTS</p>
					<ol className="list-decimal">
						<li>
							Participants create original artwork using any painting medium.
						</li>
						<li>
							Participants must showcase handmade craft works.
						</li>
						<li>
							Participants must bring their own crafting items and their own painting supplies, including canvas, paints, brushes, and easels.
						</li>
						<li>
							Finished crafts will be evaluated based on visual appeal and craftsmanship.
						</li>
						<li>
							Time limit:- 10 minutes.
						</li>
					</ol>
				</>}
				// roundsHeading={"Rounds:"}
				// rounds={<>
				// 	<p>There will be only a single round.</p>
				// </>}
				judgeMentalCriteria={<>
					<li>Originality and uniqueness.</li>
					<li>Performance quality and confidence.</li>
					<li>Audience engagement and connection.</li>
					<li>Overall impact and memorability.</li>
					<li>Judges will evaluate based on rhyme skill, flow, and overall performance for the rap battle.</li>
				</>}
				eventVenue={<p>Not Confirmed yet</p>}
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
