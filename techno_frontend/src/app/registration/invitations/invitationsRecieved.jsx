"use client";
import { useState, useEffect } from "react";
import { redirect, useSearchParams } from "next/navigation";

function ReceivedInvitations() {
	const [invitations, setInvitations] = useState([]);
	const [leaderEmail, setLeaderEmail] = useState("");

	const searchParams = useSearchParams();
	const emailRef = searchParams.get("emailRef");

	useEffect(() => {
		// console.log(emailRef);
		setLeaderEmail(emailRef);
		// console.log(leaderEmail);
	}, []);

	useEffect(() => {
		fetch(
			`http://technorollix.opju.ac.in:4000/api/event/invitations/email/${emailRef}` // shreyrajput54@gmail.com
		)
			.then((response) => response.json())
			.then((data) => {
				setInvitations(data);
				// console.log(data.totalInvitation);
				return data;
			})
			// .then((data) => {
			// 	if (data.totalInvitation === 0) {
			// 		console.log("hrere");
			// 		redirect(`/next?emailRef=${emailRef}`);
			// 	} else {
			// 		console.log("totalinvitation = ", data.totalInvitation);
			// 	}
			// })
			.catch((error) => console.error("Error fetching events:", error));
		// .finally(() => {});
	}, []);

	return (
		<div>
			{/* {console.log(invitations.invitation)} */}
			<p className="text-4xl text-white font-bold">Invitations</p>
			<div className="flex flex-wrap items-center justify-evenly border-2 w-2/3 h-full p-5">
				<p className="text-white text-2xl">
					You have total {invitations.totalInvitation} pending
					invitations.
				</p>
				{invitations.invitation?.map((i, index) => (
					<div
						key={i.eventId}
						className={`bg-black p-4 rounded-lg border-4 border-blue-500 flex gap-10`}
					>
						<div>
							<h2 className="text-lg font-bold text-white">
								Team: {i.teamId}
							</h2>
							<h2 className="text-lg font-bold text-white">
								Event: {i.eventId}
							</h2>
							<p className="text-lg font-bold text-white">
								Inviter: {i.inviterEmail}
							</p>
							<p className="text-lg font-bold text-white">
								Status: {i.status}
							</p>
						</div>
						<div className="flex flex-col justify-around gap-4">
							<button
								className="btn overflow-hidden relative w-40 bg-green-700 text-white py-3 px-2 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-green-600 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-orange-200 hover:before:animate-ping transition-all duration-300"
								onClick={() => {
									try {
										// console.log({
										// 	teamId: i.teamId,
										// 	inviterEmail: i.inviterEmail,
										// 	inviteeEmail: i.inviteeEmail,
										// 	response: "accept",
										// });
										fetch(
											"http://technorollix.opju.ac.in:4000/api/update/team-invite",
											{
												method: "PUT",
												body: JSON.stringify({
													teamId: i.teamId,
													inviterEmail:
														i.inviterEmail,
													inviteeEmail:
														i.inviteeEmail,
													response: "accept",
												}),
												headers: {
													"Content-type":
														"application/json",
												},
											}
										).then(() => window.location.reload());
									} catch (error) {
										console.log(error);
									}
								}}
							>
								<span className="relative">Accept</span>
							</button>
							<button
								className="btn overflow-hidden relative w-40 bg-red-700 text-white py-3 px-2 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-red-500 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-orange-200 hover:before:animate-ping transition-all duration-300"
								onClick={() => {
									try {
										fetch(
											"http://technorollix.opju.ac.in:4000/api/update/team-invite",
											{
												method: "PUT",
												body: JSON.stringify({
													teamId: i.teamId,
													inviterEmail:
														i.inviterEmail,
													inviteeEmail:
														i.inviteeEmail,
													response: "decline",
												}),
												headers: {
													"Content-type":
														"application/json",
												},
											}
										).then(() => window.location.reload());
									} catch (error) {
										console.log(error);
									}
								}}
							>
								<span className="relative">Decline</span>
							</button>
						</div>
					</div>
				))}
			</div>
			<button
				className="m-4 btn overflow-hidden relative w-64 bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-full before:bg-blue-400 before:left-0 before:top-0 before:-translate-y-full hover:before:translate-y-0 before:transition-transform"
				onClick={() => {
					window.location.href = `/registration/next?emailRef=${leaderEmail}`;
				}}
			>
				Next
			</button>
		</div>
	);
}

export default ReceivedInvitations;
