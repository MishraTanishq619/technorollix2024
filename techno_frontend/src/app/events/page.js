import React from "react";
import EventsViewPage from "./eventsPages";
import Header from "@/components/Header";

const page = () => {
	
	return (
		<main className="w-full h-screen">
			<Header />
		{/* <div className="w-full h-screen py-24 bg-cover  bg-center bg-[url('/mainbg.jpg')]  flex flex-wrap gap-10 items-center justify-evenly overflow-scroll"> */}
			<EventsViewPage/>
		</main>
	);
};

export default page;
