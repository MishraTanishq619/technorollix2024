"use client";
import { z } from "zod";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Invitestatuses from "./Invitestatuses";

const page = () => {
	const [registeredEvents, setregisteredEvents] = useState([]);
	const [reqTeamsArray, setreqTeamsArray] = useState([]);
	const [events, setEvents] = useState([]);
	// const [myEvents, setMyEvents] = useState([]);
	const searchParams = useSearchParams();
	const emailRef = searchParams.get("emailRef");

	let reqEvents = [];
	useEffect(() => {
		fetch("http://10.60.41.209:4000/api/allEvents")
			.then((response) => response.json())
			.then((data) => setEvents(data))
			.catch((error) => console.error("Error fetching events:", error));

		fetch(`http://10.60.41.209:4000/api/registeredTeam/eventId/${emailRef}`)
			.then((response) => response.json())
			.then((data) => {
				setregisteredEvents(data.eventIdArray);
				setreqTeamsArray(data.teamIdArray);
			})
			.catch((error) =>
				console.error("Error fetching registeredEvents:", error)
			);
		// reqEvents;
	}, []);
	reqEvents = events.filter((e) => registeredEvents.includes(e.eventId));

	// setMyEvents(reqEvents);

	const validInputEmailHandler = async (email, teamId) => {
		// console.log(email, teamId);

		// to get team id
		let response = await fetch(
			"http://10.60.41.209:4000/api/create/team-invite",
			{
				method: "POST",
				body: JSON.stringify({
					teamId: teamId,
					inviterEmail: emailRef,
					inviteeEmail: email,
				}),
				headers: {
					"Content-type": "application/json",
				},
			}
		)
			.then((response) => response.json())
			.then((data) => {
				// console.log(data);
				return data;
			})
			.catch((error) => console.error("Error fetching TeamId:", error));
		// console.log("response: ", response);
	};

	const invalidInputEmailHandler = () => {
		let status = document.getElementById("status");
		status.innerText = "Invalid Email.";
		status.style.color = "red";
	};
	return (
		<div className="w-full flex justify-center">
			{/* {console.log(reqEvents)} */}
			<div className="w-[90%]">
				<p className="text-4xl text-white font-bold">My Team</p>
				<div className="flex flex-col items-center gap-10 border-2 w-full  ">
					<p className="text-white text-2xl">
						Different Events and Your Team.
					</p>
					{reqEvents?.map((i, index) => (
						<div
							// key={i.eventId}
							className={`bg-black p-4 rounded-lg border-4 border-blue-500 w-[90%] flex justify-around gap-10`}
						>
							<div>
								<h2 className="text-lg font-bold text-white">
									Event Name: {i.eventName}
								</h2>
								<h2 className="text-lg font-bold text-white">
									Entry Fee: {i.entryFee}
								</h2>
								<p className="text-lg font-bold text-white">
									Prize Money: {i.priceMoney}
								</p>
								<p className="text-lg font-bold text-white">
									Team Size: {i.teamSize}
								</p>
							</div>
							<div id="statuses" className="text-yellow-500">
								<Invitestatuses
									emailRef={emailRef}
									eventId={i.eventId}
								/>
							</div>
							<div className="flex flex-col justify-around gap-4">
								<div>
									<input
										type="email"
										name="inputEmail"
										id={`inputEmail${index}`}
										placeholder="Email of partner"
									/>
									<p id={`status${index}`} className=""></p>
								</div>

								<button
									className="btn overflow-hidden relative w-40 bg-green-700 text-white py-3 px-2 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-green-600 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-orange-200 hover:before:animate-ping transition-all duration-300"
									onClick={() => {
										// validation

										// creating a schema for strings
										const emailSchema = z.string().email({
											message: "Invalid email address",
										});

										let inputEm = emailSchema.safeParse(
											document.getElementById(
												`inputEmail${index}`
											).value
										);

										inputEm.success
											? validInputEmailHandler(
													inputEm.data,
													reqTeamsArray[index]
											  )
											: invalidInputEmailHandler();
										window.location.reload();
									}}
								>
									<span className="relative">Invite</span>
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default page;

// const Component = ({ eventId, emailRef }) => {
// 	useEffect(() => {
// 		let response = "ahwbdhwafwa";
// 		response = fetch(
// 			"http://10.60.41.209:4000/api/event/invite/status/byInviter/eventId",
// 			{
// 				method: "POST",
// 				body: JSON.stringify({
// 					teamId: eventId,
// 					inviterEmail: emailRef,
// 				}),
// 				headers: {
// 					"Content-type": "application/json",
// 				},
// 			}
// 		)
// 			.then((response) => response.json())
// 			.then((data) => {
// 				// console.log(data);
// 				return data;
// 			})
// 			.catch((error) => console.error("Error fetching TeamId:", error));
// 		console.log("and response: ", response);
// 	}, []);
// 	return <div>Component</div>;
// };
