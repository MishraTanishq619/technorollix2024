import React from "react";
import EventCard from "@/components/EventCard";
const page = () => {
	return (
		<div className="w-full h-screen py-24 bg-cover  bg-center bg-[url('/mainbg.jpg')]  flex flex-wrap gap-10 items-center justify-evenly overflow-scroll">
			<EventCard />
			<EventCard />
			<EventCard />
			<EventCard />
			<EventCard />
			<EventCard />
			<EventCard />
			<EventCard />
			<EventCard />
			{/* <EventCard /> */}
			<EventCard />
			<EventCard />
			<EventCard />
			<EventCard />
			<EventCard />
		</div>
	);
};

export default page;
