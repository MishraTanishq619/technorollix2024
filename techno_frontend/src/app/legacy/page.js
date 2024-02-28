"use client";
import React, { useEffect } from "react";
// import EventsRegistrationPage from "./components/eventRegistrationCard";
import EventsRegistrationPage from "../registration/next/eventRegistrationCard";
import LegacyCardsContainer from "@/components/LegacyCardsContainer";
import Header from "@/components/Header";
import { LayoutGridDemo } from "@/components/galleryContents";
import AOS from "aos";
import "aos/dist/aos.css";

const page = () => {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: false,
		});
	}, []);
	return (
		<main className="w-full h-screen">
			<Header />
			{/* <div className="pt-8 "> */}
			<p
				style={{ fontFamily: "ROG LyonsType" }}
				className="absolute  text-center text-8xl text-slate-100 font-mono font-bold w-full h-full my-32"
				data-aos="fade-in"
			>
				LEGACY
			</p>
			<LegacyCardsContainer />
			<div>{/* <LayoutGridDemo/> */}</div>
			{/* </div> */}
		</main>
	);
};

export default page;
