"use client";
import { useState, useEffect } from "react";
import EventCard from "@/components/EventCard";
import ThreeDCardDemo from "@/components/threeDCard";

function EventsViewPage() {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		// Fetch event data from the API endpoint
		fetch("http://10.60.41.209:4000/api/allEvents")
			.then((response) => response.json())
			.then((data) => setEvents(data))
			.catch((error) => console.error("Error fetching events:", error));
	}, []);

	return (
		<div className="w-full h-screen flex flex-wrap items-start justify-evenly">
			{events.map((event, index) => (
				<>
					{/* <EventCard prize={event.priceMoney} title={event.eventName} description={event.eventDescription} members={event.teamSize} entryFee={event.entryFee} onClick={() => handleEventCardClick(event.eventId)}/> */}
					<ThreeDCardDemo
						prize={event.priceMoney}
						title={event.eventName}
						description={event.eventDescription}
						members={event.teamSize}
						entryFee={event.entryFee}
						onClick={() =>
							(window.location.href = `/events/startUp_event`)
						}
					/>
				</>
			))}
		</div>
	);
}

export default EventsViewPage;
