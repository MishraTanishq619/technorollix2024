"use client";
import React, { useState, useEffect } from "react";
import Countdown from "./Countdown";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import Button from "./ui/movingBorderButton";
import LampContainer from "./ui/lamp";
import { motion } from "framer-motion";
import TypewriterEffectSmoothDemo from "./typeWriterDemo";
import HeroParallaxDemo from "./heroParalloxEvents";

import localFont from 'next/font/local'
const myFont = localFont({ src: '../app/fonts/subway.ttf' })

function Home() {
	const [isOpen, setIsOpen] = useState(false);
	const [email, setEmail] = useState("");
	const [verificationCode, setVerificationCode] = useState("");
	const [generatedNumber, setGeneratedNumber] = useState("");
	const [isValidEmail, setIsValidEmail] = useState(false);
	const [showVerification, setShowVerification] = useState(false);
	const [generateClicked, setgenerateClicked] = useState(false);


	const handleNormalButtonClick = () => {
		setIsOpen(true);
	};

	const handleClosePopup = (event) => {
		if (event.target.classList.contains("overlay")) {
			setIsOpen(false);
		}
	};

	const [participantCount, setParticipantCount] = useState(0);
	const [visitCount, setVisitCount] = useState(0);

	useEffect(() => {
		fetch("http://10.60.41.209:4000/api/visitCount")
			.then((response) => response.json())
			.then((data) => setVisitCount(data.visitCount))
			.catch((error) =>
				console.error("Error fetching visit count:", error)
			);

		fetch("http://10.60.41.209:4000/api/allParticipants")
			.then((response) => response.json())
			.then((data) => setParticipantCount(data.length))
			.catch((error) =>
				console.error("Error fetching participant data:", error)
			);
	}, []);

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
		setgenerateClicked(false)
		validateEmail(email);
	};

	const generateNumber = async () => {
		setgenerateClicked(true)
		console.log("called");
		if (isValidEmail) {
			console.log("entered");
			const number = Math.floor(10000 + Math.random() * 90000);
			console.log(number);
			setGeneratedNumber(number);
			try {
				fetch("http://localhost:4000/api/email/verify/otp", {
					method: "POST",
					body: JSON.stringify({
						user: email,
						number: number
					}),
					headers: {
						"Content-type": "application/json",
						// user_email: email,
					},
				}).catch((error) => {
					console.log(
						"Error during fetch:",
						error
					);
				});
				``;
			} catch (error) {
				console.log(error);
			}
			setShowVerification(true);
		}
		console.log(("exit"));
	};

	const verifyCode = async () => {
		if (verificationCode === generatedNumber.toString()) {
			// window.location.href("/registration")
			try {
				const response = await fetch(
					`http://10.60.41.209:4000/api/user/${email}`
				);

				if (response.status === 409) {
					window.location.href = `/registration/invitations?emailRef=${email}`;
				} else if (response.status === 404) {
					// const userData = await response.json();
					// const { picture, email, name } = userData;
					window.location.href = `/registration?urlRef=${email}`;
				} else {
					// Handle other status codes if needed
				}
			} catch (error) {
				console.error("Error during registration:", error);
			}
			console.log("Code verified successfully");
		} else {
			// Code verification failed
			console.log("Invalid verification code");
		}
	};

	const validateEmail = (email) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (regex.test(email)) {
			setIsValidEmail(true)
			console.log("set");
		}
		console.log(regex.test(email));

		// return regex.test(email);
	};

	return (
		<div className="flex flex-col items-center justify-center  h-full w-full overflow-x-hidden overflow-y-scroll">
			<LampContainer>
				<motion.h1
					initial={{ opacity: 0.5, y: 450 }}
					whileInView={{ opacity: 1, y: 250 }}
					transition={{
						delay: 0.3,
						duration: 0.8,
						ease: "easeInOut",
					}}
					className="relative  bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
				>
					<img
						src="tehnoLogo_prev_ui.png"
						alt="Logo"
						className="h-[42%]"
					/>
					<div className="flex justify-center">
						<TypewriterEffectSmoothDemo />
					</div>

					<div className="flex items-center justify-center mb-0">
						<Countdown />
					</div>
					<Button
						className="px-6 py-2 rounded-md transition-transform transform hover:scale-105"
						onClick={handleNormalButtonClick}
					>
						<p className="text-2xl">Register</p>
					</Button>
				</motion.h1>
			</LampContainer>
			{isOpen && (
				// <div className="overlay" onClick={handleClosePopup}>
				// 	<GoogleLogin
				// 		onSuccess={async (credentialResponse) => {
				// 			const userResponse = jwtDecode(
				// 				credentialResponse.credential
				// 			);
				// 			const result = await fetch(
				// 				`http://10.60.41.209:4000/api/user/${userResponse.email}`
				// 			);
				// 			console.log(result);
				// 			if (result.status === 409) {
				// 				window.location.href = `/registration/invitations?emailRef=${userResponse.email}`;
				// 			} else if (result.status === 404) {
				// 				window.location.href = `/registration?urlRef=${userResponse.picture}/email?=${userResponse.email}/name?=${userResponse.name}`;
				// 			}
				// 		}}
				// 		onError={() => {
				// 			console.log("Login Failed");
				// 		}}
				// 	/>
				// </div>
				<div className="overlay flex flex-col items-center justify-center h-full w-full overflow-x-hidden overflow-y-scroll">
					<div>
						<input
							type="text"
							placeholder="Enter your email"
							value={email}
							onChange={handleEmailChange}
							className="border border-gray-300 rounded-md px-3 py-1"
						/>
						{!isValidEmail && generateClicked && <p className="text-red-500">Invalid email</p>}
					</div>
					<div>
						{!showVerification ? (
							<button onClick={generateNumber} className="btn text-white">
								Generate
							</button>
						) : (
							<div>
								<input
									type="text"
									placeholder="Enter verification code"
									value={verificationCode}
									onChange={(e) => setVerificationCode(e.target.value)}
									className="border border-gray-300 rounded-md px-3 py-1"
								/>
								<button onClick={verifyCode} className="btn text-white">
									Verify
								</button>
							</div>
						)}
					</div>
				</div>
			)}
			{/* <HeroParallaxDemo /> */}
		</div>
	);
}

export default Home;
