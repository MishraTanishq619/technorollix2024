import React from "react";
import EventsDetails from "../detsEvents";
import Header from "@/components/Header";
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {

	return (
		<main className="w-full h-screen">
			<Header />
			<EventsDetails
				imageLink="../posters/aaghaaz.png"
				prize={18000}
				heading="AAGHAAZ -THE ETHNIC FASHION SHOW"
				paragraph={<><p><b>AAGHAAZ - THE FASHION SHOW Hey You!!!</b> Step into a realm where imagination dances with
					reality, where dreams take shape in fabric and color. “AGHAAZ -THE ETHNIC FASHION SHOW"
					is a fashion show that transcends the boundaries of time and space, inviting you to embark on a
					mesmerizing voyage through the epochs of fashion.</p></>}
				subHeading="BE YOUR OWN LABLE"
				theme={<p>RED CARPET</p>}
				rulesHeading={"Rules of the event:"}
				rules={<>
					<li>
						All the participants should come half and hour before the how
					</li>
					<li>
						Students must be prepared with their attire.
					</li>
					<li>No students shall be allowed for direct participation in final rounds, and no students is entitled for wildcard entries except for students outside of OPJUS</li>
					<li>
						No vulgarism is allowed in clothes selection
					</li>
					<li>
						The score evaluation will be done based on a walk, presentation, and q/a round etc....
					</li>
					<li>
						Judges result will be concluded as the final result and shall be accepted by each and every student
					</li>
				</>}
				roundsHeading={"Rounds: There will be 3 rounds"}
				rounds={<>
					<li>1<sup>st</sup> ROUND TOLLYWOOD (changes may happen in future)</li>
					<li>2<sup>nd</sup> and 3<sup>rd</sup> ROUND WILL BE DECLARED BEFORE 2-3 DAYS.</li>
				</>}
				judgeMentalCriteria={<>
					<p>It will be based on the following parameters:</p>
					<li>PERSONALITY</li>
					<li>WALK</li>
					<li>QUESTION\ANSWER</li>
					<li>COMMUNICATION</li>
				</>}
				eventVenue={<p>IN FRONT OF CHEMISTRY LAB (ROUND 1 & ROUND 2)</p>}
				facultyCoordinators={<table>
					<tbody>
						<tr>
							<td>PROF. TULIKA GUPTA</td>
							{/* <td>+91 </td> */}
							{/* <td>@opju.ac.in</td> */}
						</tr>
					</tbody></table>}
				eventManagers={<table>
					<tbody>
						<tr>
							<td>Vaibhav Singh</td>
							<td>+91 9109016426</td>
						</tr>
						<tr>
							<td>Diksha Rathore</td>
							<td>+91 8827403973</td>
						</tr>
						<tr>
							<td>Parth Singh Thakur</td>
							<td>+91 8889055521</td>
						</tr>
						<tr>
							<td>Charulata Chouhan</td>
							<td>+91 7987399785</td>
						</tr>
						<tr>
							<td>Sejal Jamwal</td>
							<td>+91 9685005224</td>
						</tr>
						<tr>
							<td>Karan Singh Chauhan</td>
							<td>+91 6264630990</td>
						</tr>
					</tbody></table>}
			/>
		</main>
	);
};

export default page;
