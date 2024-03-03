import React from "react";
import EventsDetails from "../detsEvents";
import Header from "@/components/Header";
import { BackgroundBeams } from '@/components/ui/background-beams';

const page = () => {

	return (
		<main className="w-full h-screen">
			<Header />
			<EventsDetails
				imageLink="../posters/codigo.png"
				prize={20000}
				heading="Codigo – Sponsored by CodeForIT"
				paragraph={<>
					<p>“Unlock your coding potential at our university&#39;s premier coding event! Dive into challenges,
						network with peers, and elevate your skills. Whether you&#39;re a beginner or a coding pro, join us
						for an unforgettable experience of innovation and collaboration. Save the date and let&#39;s code
						together!”</p> <br />
					<div>
						<h1 className="neon-text-red-light">Event 1: Code</h1> <br />
						<ol className="list-decimal">
							<li>First round will be Screening Round, set of MCQs
								<ul className="list-disc">
									<li>Basic Maths for Programming</li>
									<li>Searching and Sorting</li>
									<li>Char, String, Arrays, Pointers</li>
									<li>Time &amp; Space Complexity</li>
								</ul>
							</li>
						</ol><br />
						<ol className="list-decimal">
							<li>Second round will be Online Assessment(Real Problem Solving)
								<ul className="list-disc">
									<li>Recursion</li>
									<li>OOPs</li>
									<li>LinkedLists</li>
									<li>Stacks</li>
									<li>Queues</li>
								</ul>
							</li>
						</ol><br />
						<ol className="list-decimal">
							<li>Third round will be Technical Round(Real Problem Solving)
								<ul className="list-disc">
									<li>Trees</li>
									<li>Graphs</li>
									<li>Dynamic Programming</li>
								</ul>
							</li>
						</ol><br />
					</div><div>
						<h1 className="neon-text-red-light">Event 2: Design</h1> <br />
						<ol className="list-decimal">
							<li>1. Single round (Time limit on the spot will be conveyed)
								<ul className="list-disc">
									<li>UI/UX: A real life scenario will be provided on the spot.</li>
								</ul>
							</li>
						</ol><br />
					</div>
				</>}
				// subHeading="“Don't worry about the results; focus only on your actions - a lesson from the Bhagavad Gita”"
				theme={<p>Embracing Diversity: Uniting Through Technology</p>}
				rulesHeading={"Rules of the event:"}
				rules={<>
					<li>
					First round will have 25 questions, time limit 30mins.
					</li>
					<li>
					According to number of participants, the management will decide the qualifying number
on the spot itself for second round.
					</li>
					<li>
					Second Round: Out of 5 Problems, do any 3. (Time limit on the spot will be conveyed)
According to number of participants, the management will decide the qualifying number on
the spot itself for second round.
					</li>
					<li>
					Third Round: 3 questions, do them all. (Time limit on the spot will be conveyed)
Winner will be decided among these factors:
					</li>
				</>}
				eventVenue={<p>TB-01</p>}
				judgeMentalCriteria={<>
				<li>Maximum question solved</li>
				<li>Maximum test cases passed</li>
				<li>Submission Time</li>
				<li>Time &amp; Space Complexity</li>
				</>}
				facultyCoordinators={<table>
					<tbody>
						<tr>
							<td>Dr. R N Shukla</td>
							<td>+91 9826321667</td>
						</tr>
					</tbody></table>}
				eventManagers={<table>
					<tbody>
						<tr>
							<td>Nirmalayya</td>
							<td>+91 7978389641</td>
						</tr>
						<tr>
							<td>Suryanshu</td>
							<td>+91 7008575068</td>
						</tr>
					</tbody></table>
				}
			/>
		</main>
	);
};

export default page;
