"use client";
import EventCard from "@/components/EventCard";
import { useRouter } from "next/navigation";
import React from "react";

function page() {
	const router = useRouter();
	// console.log(router.query);
	return (
		<div className="w-full h-screen py-24 bg-cover  bg-center bg-[url('/mainbg.jpg')] flex flex-col items-center justify-center">
			<p className="text-4xl text-white font-bold">EventsCheckbox</p>
			<div className=" flex flex-wrap gap-10 items-center justify-evenly overflow-scroll border-2 w-2/3 h-2/3 p-5 ">
				{/* events */}
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
		</div>
	);
}

export default page;
