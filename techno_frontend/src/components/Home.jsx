"use client";
import React from "react";
import Countdown from "./Countdown";

function Home() {
	return (
		
		<div className="flex flex-col items-center  text-white  justify-center h-[100%] w-full">
			<img
				src="tehnoLogo_prev_ui.png"
				alt="Logo"
				className="m-2 h-[30%]"
			/>

			{/* <p className="text-[146px] underline">TECHNOROLLIX</p> */}
			{/* <p className="text-[19px] mb-24 flex ">
				A National Level Cultural Fest 2024
			</p> */}
			<div className="flex items-center justify-center mb-4">
				<Countdown />
			</div>
			<p className="text-[26px] m-1 ">REGISTRATIONS : 0000</p>
			<p className="text-[26px] m-1 mb-16">IMPRESSIONS : 0000</p>
			<button className="bg-orange-500 text-3xl px-8 py-4 rounded-md transition-transform transform hover:scale-105">
				<a href="/registration">Register</a>
			</button>
		</div>
	);
}

export default Home;
