"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

function EventsRegistrationPage() {
	const [events, setEvents] = useState([]);
	const [registeredEvents, setregisteredEvents] = useState([]);

	const [selectedEvents, setSelectedEvents] = useState([]);
	const [additionalDetails, setAdditionalDetails] = useState([]);
	const [leaderEmail, setLeaderEmail] = useState("");
	const [teammateEmails, setTeammateEmails] = useState([]);

	const searchParams = useSearchParams();
	const emailRef = searchParams.get("emailRef");

	useEffect(() => {
		setLeaderEmail(emailRef);
	}, []);

	useEffect(() => {
		fetch("http://technorollix.opju.ac.in:4000/api/allEvents")
			.then((response) => response.json())
			.then((data) => setEvents(data))
			.catch((error) => console.error("Error fetching events:", error));

		fetch(`http://technorollix.opju.ac.in:4000/api/participant/eventId/${emailRef}`)
			.then((response) => response.json())
			.then((data) => setregisteredEvents(data))
			.catch((error) =>
				console.error("Error fetching registeredEvents:", error)
			);
	}, []);

	const handleEventCardClick = (eventId) => {
		const selectedIndex = selectedEvents.indexOf(eventId);
		const isEventSelected = selectedIndex !== -1;

		if (isEventSelected) {
			const updatedSelectedEvents = [...selectedEvents];
			updatedSelectedEvents.splice(selectedIndex, 1);
			setSelectedEvents(updatedSelectedEvents);

			const updatedAdditionalDetails = [...additionalDetails];
			updatedAdditionalDetails.splice(selectedIndex, 1);
			setAdditionalDetails(updatedAdditionalDetails);
		} else {
			setSelectedEvents([...selectedEvents, eventId]);
			setAdditionalDetails([...additionalDetails, ""]);
		}
	};

	const handleAdditionalDetailsChange = (index, value) => {
		const updatedAdditionalDetails = [...additionalDetails];
		updatedAdditionalDetails[index] = value;
		setAdditionalDetails(updatedAdditionalDetails);
	};

	return (
		<div>
			<p className="text-4xl text-white font-bold">EventsCheckbox</p>
			<div className="flex flex-wrap items-center justify-evenly border-2 w-2/3 h-full p-5">
				{events.map((event, index) => (
					<div key={event.eventId}>
						<div
							className={`bg-black p-4 rounded-lg border-4 border-blue-500 ${
								selectedEvents.includes(event.eventId)
									? "bg-grey-500"
									: ""
							} ${
								registeredEvents.includes(event.eventId)
									? "border-green-700"
									: ""
							}`}
							onClick={
								registeredEvents.includes(event.eventId)
									? null
									: () => handleEventCardClick(event.eventId)
							}
						>
							<h2
								className={`text-red-600
								${registeredEvents.includes(event.eventId) ? "" : "hidden"} 
							`}
							>
								Already Registered
							</h2>
							<h2 className="text-lg font-bold text-white">
								{event.eventName}
							</h2>
							<p className="text-lg font-bold text-white">
								Team Size: {event.teamSize}
							</p>
							<p className="text-lg font-bold text-white">
								Price: {event.priceMoney}
							</p>
							<p className="text-lg font-bold text-white">
								Entry Fee: {event.entryFee}
							</p>
							{selectedEvents.includes(event.eventId) && (
								<input
									type="text"
									placeholder="Additional Details"
									value={
										additionalDetails[
											selectedEvents.indexOf(
												event.eventId
											)
										] || ""
									}
									onChange={(e) =>
										handleAdditionalDetailsChange(
											selectedEvents.indexOf(
												event.eventId
											),
											e.target.value
										)
									}
									onClick={(e) => e.stopPropagation()}
								/>
							)}
						</div>
					</div>
				))}
				<div>
					<h2 className="text-white">Selected Events</h2>
					<ul>
						{selectedEvents.map((eventId, index) => (
							<li key={eventId} className="text-white">
								Event ID: {eventId}, Additional Details:{" "}
								{additionalDetails[index]}
							</li>
						))}
					</ul>
				</div>
			</div>
			<button
				className="bg-orange-600 ml-56 rounded-md text-3xl px-6 py-3 items-center justify-center mt-10"
				onClick={() => {
					try {
						fetch(
							"http://technorollix.opju.ac.in:4000/api/team-registration/event",
							{
								method: "POST",
								body: JSON.stringify({
									eventId: selectedEvents,
									leader: leaderEmail,
									additionalDetails: additionalDetails,
									teammates: teammateEmails.filter(
										(email) => email.trim() !== ""
									),
								}),
								headers: {
									"Content-type": "application/json",
								},
							}
						)
							.then(async (res) => {
								if (!res.ok) {
									throw new Error(
										`HTTP error! Status: ${res.status}`
									);
								}
								window.location.href = `/registration/next/myteam?emailRef=${emailRef}`;
								const json = await res.json();
							})
							.catch((error) => {
								console.log("Error during fetch:", error);
							});
					} catch (error) {
						console.log(error);
					}
				}}
			>
				Submit
			</button>
		</div>
	);
}

export default EventsRegistrationPage;
