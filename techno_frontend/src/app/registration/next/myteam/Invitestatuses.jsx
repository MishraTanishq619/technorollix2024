import React, { useEffect, useState } from "react";

const ComponentFunc = async (eventId, emailRef) => {
	let response = "ahwbdhwafwa";
	console.log(eventId, emailRef);
	response = await fetch(
		"http://10.60.41.209:4000/api/event/invite/status/byInviter/eventId",
		{
			method: "POST",
			body: JSON.stringify({
				eventId: eventId,
				inviterEmail: emailRef,
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
	// console.log("and response: ", response);
	return response;
};

const Invitestatuses = ({ eventId, emailRef }) => {
	const [inviteesArray, setInviteesArray] = useState([]);
	useEffect(() => {
		console.log(eventId, emailRef);
		ComponentFunc(eventId, emailRef).then((response) =>
			setInviteesArray(response.invitation)
		);
	}, []);

	return (
		<div>
			<ul className="text-yellow-400">
				{console.log("Here", inviteesArray)}
				{inviteesArray?.map((i, k) => {
					return (
						<li key={k}>
							{i.inviteeEmail} : {i.status}
						</li>
					);
				})}
			</ul>
			
		</div>
	);
};

export default Invitestatuses;
