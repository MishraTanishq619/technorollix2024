"use client";
import React from "react";
import Countdown from "./Countdown";
import { useState, useEffect } from 'react';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import Button from "./ui/movingBorderButton";
import { Boxes } from "./ui/boxes";
import LampContainer from "./ui/lamp";
import { motion } from "framer-motion";
import TypewriterEffectSmoothDemo from "./typeWriterDemo";


function Home() {
	const [isOpen, setIsOpen] = useState(false);

	const handleNormalButtonClick = () => {
		setIsOpen(true);
	};

	const handleClosePopup = (event) => {
		if (event.target.classList.contains('overlay')) {
			setIsOpen(false);
		}
	};
	// const login = useGoogleLogin({
	// 	onSuccess:credentialResponse => {
	// 		UserResponse = jwtDecode(credentialResponse)
	// 		console.log(UserResponse);
	// 	  },
	// 	flow: 'auth-code',
	// });
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

		<div className="flex flex-col items-center  text-white  justify-center h-full w-full overflow-x-hidden overflow-y-scroll">
			<Boxes />
			<LampContainer>
				<motion.h1
					initial={{ opacity: 0.5, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
				>
					<img
						src="tehnoLogo_prev_ui.png"
						alt="Logo"
						className="m-2 h-[30%]"
					/>
				<div className="flex justify-center"><TypewriterEffectSmoothDemo/></div>
				</motion.h1>
				</LampContainer>
				{/* <p className="text-[146px] underline">TECHNOROLLIX</p> */}
				{/* <p className="text-[19px] mb-24 flex ">
				A National Level Cultural Fest 2024
			</p> */}
				<div className="flex items-center justify-center mb-0">
					<Countdown />
				</div>
				{/* <p className="text-[26px] m-0 ">20<sup>th</sup> March to 22<sup>nd</sup> March</p> */}
				<p className="text-[26px] m-0 ">REGISTRATIONS : {participantCount}</p>
				<p className="text-[26px] mb-2 ">IMPRESSIONS : {visitCount}</p>
				{/* <button className="bg-orange-500 text-3xl px-8 py-4 rounded-md transition-transform transform hover:scale-105" onClick={() => login()}> */}
				{/* <GoogleLogin
				onSuccess={async credentialResponse => {
					const userResponse = jwtDecode(credentialResponse.credential)
					const result = await fetch(`http://localhost:4000/api/user/${userResponse.email}`);
					console.log(result);
					if (result.status === 409) {
						window.location.href = `/registration/next?emailRef=${userResponse.email}`;
					} else if (result.status === 404) {
						window.location.href = `/registration?urlRef=${userResponse.picture}/email?=${userResponse.email}/name?=${userResponse.name}`;
					}

				}}
				onError={() => {
					console.log('Login Failed');
				}}
			/> */}
				{/* <button className="bg-orange-500 text-3xl px-6 py-2 rounded-md transition-transform transform hover:scale-105" onClick={handleNormalButtonClick}>Register</button> */}
				<Button className=" px-6 py-2 rounded-md transition-transform transform hover:scale-105" onClick={handleNormalButtonClick}><p className="text-2xl">Register</p></Button>
				{isOpen && (
					<div className="overlay" onClick={handleClosePopup}>
						<GoogleLogin
							onSuccess={async credentialResponse => {
								const userResponse = jwtDecode(credentialResponse.credential)
								const result = await fetch(`http://localhost:4000/api/user/${userResponse.email}`);
								console.log(result);
								if (result.status === 409) {
									window.location.href = `/registration/next?emailRef=${userResponse.email}`;
								} else if (result.status === 404) {
									window.location.href = `/registration?urlRef=${userResponse.picture}/email?=${userResponse.email}/name?=${userResponse.name}`;
								}
							}}
							onError={() => {
								console.log('Login Failed');
							}}
						/>
					</div>
				)}
			
			{/* Register */}
			{/* </button> */}
		</div>
	);
}


export default Home;
