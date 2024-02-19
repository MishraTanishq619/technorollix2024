// import EventCard from "@/components/EventCard";
// import EventsRegistrationPage from "./components/eventRegistrationCard";
import EventsRegistrationPage from "@/app/legacy/components/eventRegistrationCard";

import React from "react";

function page() {
	return (
		<div className="w-full h-screen py-24 bg-cover  bg-center bg-[url('/mainbg.jpg')] flex flex-col items-center justify-center">
			<p className="text-4xl text-white font-bold">EventsCheckbox</p>
			<div className=" ">
				<EventsRegistrationPage/>
			</div>
		</div>
	);
}

export default page;
