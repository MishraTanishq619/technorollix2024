// import EventCard from "@/components/EventCard";
// import EventsRegistrationPage from "./components/eventRegistrationCard";
import EventsRegistrationPage from "@/app/legacy/components/eventRegistrationCard";

import React from "react";

function page() {
	return (
		<div className="w-full h-screen py-24 bg-cover  bg-center bg-[url('/mainbg.jpg')] flex flex-col items-center justify-center">
			<p className="text-4xl text-white font-bold">EventsCheckbox</p>
			<div className=" flex flex-wrap gap-4 items-center justify-evenly overflow-scroll border-2 w-full h-full p-5 ">
				<EventsRegistrationPage/>
			</div>
		</div>
	);
}

export default page;
