// import EventCard from "@/components/EventCard";
// import EventsRegistrationPage from "./components/eventRegistrationCard";
import EventsRegistrationPage from "@/app/registration/next/eventRegistrationCard";
import { Suspense } from 'react';

import React from "react";

function page() {
	return (
		<div className="w-full h-screen items-center justify-evenly ml-56 mt-12">
			{/* <div className=" "> */}
				{/* <EventsRegistrationPage/> */}
				<Suspense fallback={<div>Loading...</div>}>
					<EventsRegistrationPage />
				</Suspense>
			{/* </div> */}
		</div>
	);
}

export default page;
