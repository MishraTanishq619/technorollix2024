import React from "react";
// import EventsRegistrationPage from "./components/eventRegistrationCard";
import EventsRegistrationPage from "../registration/next/eventRegistrationCard";
import LegacyCardsContainer from "@/components/LegacyCardsContainer";

const page = () => {
	return (
		<div className="pt-8 ">
			<p className="fixed -my-5 text-center text-8xl text-slate-100 font-mono font-bold w-full">
				Legacy
			</p>
			<LegacyCardsContainer />
		</div>
	);
};

export default page;
