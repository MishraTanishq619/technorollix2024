import React from "react";
// import EventsRegistrationPage from "./components/eventRegistrationCard";
import EventsRegistrationPage from "../registration/next/eventRegistrationCard";
import LegacyCardsContainer from "@/components/LegacyCardsContainer";
import Header from "@/components/Header";
import {LayoutGridDemo} from "@/components/galleryContents";


const page = () => {
	return (
		<main className="w-full">
			<Header />
			{/* <div className="pt-8 "> */}
			<p className="fixed  text-center text-8xl text-slate-100 font-mono font-bold w-full h-full">
				Legacy
			</p>
			<LegacyCardsContainer />
			<div>

			{/* <LayoutGridDemo/> */}
			</div>
		{/* </div> */}
		</main>
	);
};

export default page;
