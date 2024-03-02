import React from "react";
import EventsDetails from "../detsEvents";
import Header from "@/components/Header";
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {

	return (
		<main className="w-full h-screen">
			<Header />
			<EventsDetails
				imageLink="../posters/treasureHunt.png"
				prize={10000}
				heading="IDEATHON"
				paragraph={<><p>An Ideathon is a short, engaging brainstorming event where individuals from different backgrounds
					address some of the most pressing challenges of our time. Individuals and students having different
					skills and interests converge to diagnose predefined problems, identify the best opportunities and ideate
					the most viable solution. Here participants throw in their propositions and present them to get feedback
					and what they should be working on or how they should advance regarding their ideas. Participants
					work in teams and utilize design thinking and innovative learning practices to envision and collaborate
					on possible solutions. Ideathon is not restricted to one common subject as it usually varies from
					marketing to philosophy to science</p></>}
				subHeading="“SPARK CREATIVITY, IGNITING IDEAS”"
				theme={<p>Harmony in chaos: Finding beauty in complexity</p>}
				rulesHeading={"Rules of the event:"}
				rules={<><ul>
					<li>
						Every participant must reach the designated venue 15 minutes before the event’s commencement.
					</li>
					<li>
						An abstract must be submitted from every individual/team prior to the
						commencement of the event. The abstract must contain a brief summary of the
						presenter’s central theme/idea (maximum 400 words).
					</li>
					<li>
					Participants must have an “Innovative” solution to the existing problems.
					</li>
					<li>
					A participant can participate individually or in a team according to their willingness.
					</li>
					<li>
					Teams/participants attaining the maximum number of points out of the total will bethe winners.
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
				</ul>
				</>}
				roundsHeading={"Rounds:"}
				rounds={<>
					<p>There will be only a single round.</p>
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
