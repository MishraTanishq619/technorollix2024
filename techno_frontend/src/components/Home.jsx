"use client";
import React from "react";
import Countdown from "./Countdown";
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
	const [participantCount, setParticipantCount] = useState(0);
	const [visitCount, setVisitCount] = useState(0);

	useEffect(() => {
		// Fetch visit count from the API
		fetch('http://localhost:4000/api/visitCount')
		  .then(response => response.json())
		  .then(data => {
			console.log(data)
			setVisitCount(data.visitCount);
		  })
		  .catch(error => console.error('Error fetching visit count:', error));

		  fetch('http://localhost:4000/api/allParticipants')
			.then(response => response.json())
			.then(data => {
				// Assuming the response data is an array of participants
				// Calculate the total number of participants
				const totalParticipants = data.length;
				console.log(totalParticipants);
				setParticipantCount(totalParticipants);
			})
			.catch(error => {
				console.error('Error fetching participant data:', error);
			});
	  }, []);


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
			<p className="text-[26px] m-1 ">20<sup>th</sup> March to 22<sup>nd</sup> March</p>
			<p className="text-[26px] m-1 ">REGISTRATIONS : {participantCount}</p>
			<p className="text-[26px] m-1 mb-16">IMPRESSIONS : {visitCount}</p>
			<button className="bg-orange-500 text-3xl px-8 py-4 rounded-md transition-transform transform hover:scale-105">
				<a href="/registration">Register</a>
			</button>
		</div>
	);
}

export default Home;
