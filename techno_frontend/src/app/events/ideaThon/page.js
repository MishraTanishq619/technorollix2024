import React from "react";
import EventsDetails from "../detsEvents";
import Header from "@/components/Header";
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {

	return (
		<main className="w-full h-screen">
			<Header />
			<EventsDetails
				imageLink="../posters/ideaThon.png"
				prize={18000}
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
				rules={<>
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
						Team must have to complete their presentation within a time limit of 08 minutes.
					</li>
					<li>
						A ‘warning bell’ will ring at 06 minutes during the presentation. It will indicate that
						the last two minutes remaining for the presenter to complete their presentation.
					</li>
					<li>
						After the ringing of the warning bell, the presenter must focus on summarizing or
						concluding their presentation.
					</li>
					<li>
					Two minutes will be given for the Query round.
					</li>
				</>}
				roundsHeading={"Rounds:"}
				rounds={<>
					<p>There will be only a single round.</p>
				</>}
				judgeMentalCriteria={<>
					<p>Every presenter’s idea will be evaluated on five different criteria, mainly:</p>
					<li>Uniqueness of the idea.</li>
					<li>Feasibility of the presenter’s idea.</li>
					<li>Way of presentation.</li>
					<li>Response to Questionnaire.</li>
					<li>Scalability of the Idea.</li>
					<p>Each criterion will contain a maximum of 20 points, with all the criteria summing up to a total of 100 points.</p>
				</>}
				eventVenue={<p>FB-14 (EE seminar hall) and FB-08</p>}
				facultyCoordinators={<table>
					<tbody>
						<tr>
							<td>Dr Swapnasarit Kar</td>
						</tr>
						<tr>
							<td>Dr Dharmender Singh Saini</td>
						</tr>
						<tr>
							<td>Dr Guru Prakash</td>
						</tr>
						<tr>
							<td>Dr Saroj Kumar Chandra</td>
						</tr>
						<tr>
							<td>Dr Sandeep Biswal</td>
						</tr>
						<tr>
							<td>Dr Pranjal Kumar</td>
						</tr>
						<tr>
							<td>Dr Gopal Krishna Rathore</td>
						</tr>
					</tbody></table>}
				eventManagers={<table>
					<tbody>
						<tr>
							<td>Prakash Kumar Nishad</td>
							<td>+91 9109016426</td>
						</tr>
						<tr>
							<td>Prakash Ranjan</td>
							<td>+91 9337909673</td>
						</tr>
						<tr>
							<td>Mani Pushpak Bala</td>
							<td>+91 8966819205</td>
						</tr>
						<tr>
							<td>Lukesh Kurrey</td>
							<td>+91 6263706596</td>
						</tr>
						<tr>
							<td>Ritika Sahu</td>
							<td>+91 6260169681</td>
						</tr>
					</tbody></table>}
			/>
		</main>
	);
};

export default page;
