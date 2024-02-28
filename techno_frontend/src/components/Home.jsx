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

import localFont from "next/font/local";
const myFont = localFont({ src: "../app/fonts/rog.ttf" });

function Home() {
	const [isOpen, setIsOpen] = useState(false);
	const [email, setEmail] = useState("");
	const [verificationCode, setVerificationCode] = useState("");
	const [generatedNumber, setGeneratedNumber] = useState("");
	const [isValidEmail, setIsValidEmail] = useState(false);
	const [showVerification, setShowVerification] = useState(false);
	const [generateClicked, setgenerateClicked] = useState(false);
	const [retryTimer, setRetryTimer] = useState(300);

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
		fetch("http://technorollix.opju.ac.in:4000/api/visitCount")
			.then((response) => response.json())
			.then((data) => setVisitCount(data.visitCount))
			.catch((error) =>
				console.error("Error fetching visit count:", error)
			);

		fetch("http://technorollix.opju.ac.in:4000/api/allParticipants")
			.then((response) => response.json())
			.then((data) => setParticipantCount(data.length))
			.catch((error) =>
				console.error("Error fetching participant data:", error)
			);
	}, []);

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
		setgenerateClicked(false);
		validateEmail(email);
	};

	const generateNumber = async () => {
		setgenerateClicked(true);
		setRetryTimer(30);

		// Start the retry countdown
		const countdownInterval = setInterval(() => {
			setRetryTimer((prevTimer) => prevTimer - 1);
		}, 1000);

		// After 30 seconds, stop the countdown and show the retry button
		setTimeout(() => {
			clearInterval(countdownInterval);
		}, 30000);
		console.log("called");
		if (isValidEmail) {
			console.log("entered");
			const number = Math.floor(10000 + Math.random() * 90000);
			// console.log(number);
			setGeneratedNumber(number);
			// try {
			let otpdata = await fetch(
				"http://technorollix.opju.ac.in:4000/api/email/verify/otp",
				{
					method: "POST",
					body: JSON.stringify({
						user: email,
						number: number,
					}),
					headers: {
						"Content-type": "application/json",
						// user_email: email,
					},
				}
			).catch((error) => {
				console.log("Error during fetch:", error);
			});
			console.log(`otpdata ${otpdata}`);
			// } catch (error) {
			// 	console.log(error);
			// }
			setShowVerification(true);
		}
		console.log("exit");
	};

	const verifyCode = async () => {
		if (verificationCode === generatedNumber.toString()) {
			// window.location.href("/registration")
			try {
				const response = await fetch(
					`http://technorollix.opju.ac.in:4000/api/user/${email}`
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
			setIsValidEmail(true);
			console.log("set");
		}
		console.log(regex.test(email));

		// return regex.test(email);
	};

	return (
		<div
			className={`mt-10 flex flex-col items-center justify-center ${
				isOpen ? "glass-morphism" : ""
			} h-full w-full overflow-x-hidden overflow-y-scroll`}
		>
			<LampContainer>
				<motion.h1
					initial={{ opacity: 0.5, y: -500 }}
					whileInView={{ opacity: 1, y: 400 }}
					transition={{
						delay: 0.3,
						duration: 1.5,
						ease: "easeInOut",
					}}
					className="relative  bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
				>
<<<<<<< HEAD
					<img src="techno.PNG" alt="Logo" className="h-[42%]" />
=======
					{/* <img
						src="tehnoLogo_prev_ui.png"
						alt="Logo"
						className="h-[42%]"
					/> */}
					<h1 className={`${myFont.className} text-5rem text-white`}>TECHNOROLLIX</h1>
>>>>>>> 78c2c4d (rog font)
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
				// 				`http://technorollix.opju.ac.in:4000/api/user/${userResponse.email}`
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
				<div
					onClick={handleClosePopup}
					className="overlay flex flex-col items-center justify-center h-full w-full overflow-x-hidden overflow-y-scroll"
				>
					<div className="bg-black shadow-md rounded-lg p-6 max-w-80 px-10">
						<div className="flex items-center flex-wrap justify-center">
							<div className="border border-gray-300 flex-no-wrap rounded-md px-3 py-1 w-60">
								<input
									type="email"
									placeholder="Enter your email"
									value={email}
									onChange={handleEmailChange}
									style={{
										border: "none",
										outline: "none",
										boxShadow: "none",
									}}
									className={`bg-black border-none text-white w-${
										!showVerification ? 50 : 40
									}`}
								/>
								{/* <button onClick={generateNumber} className="btn text-white  bg-orange-400 ml-4  rounded-md text-1xl px-3 py-1 justify-end"> */}
								{!showVerification ? (
									<button
										onClick={generateNumber}
										className="text-blue-500 justify-end "
									>
										otp
									</button>
								) : retryTimer > 0 ? (
									<button
										disabled
										className="text-blue-500 justify-end"
									>
										{retryTimer}...
									</button>
								) : (
									<button
										onClick={generateNumber}
										className="text-blue-500 justify-end"
									>
										Retry
									</button>
								)}
							</div>
							{!isValidEmail && generateClicked && (
								<p className="text-red-500 relative right-20 ml-8">
									Invalid email
								</p>
							)}
							<div>
								{!showVerification ? (
									<div></div>
								) : (
									<div className="mt-4 border border-gray-300 rounded-md px-3 w-60 py-1">
										<input
											type="text"
											placeholder="Enter verification code"
											value={verificationCode}
											onChange={(e) =>
												setVerificationCode(
													e.target.value
												)
											}
											style={{
												border: "none",
												outline: "none",
												boxShadow: "none",
											}}
											className="bg-black border-none text-white w-40"
										/>
										<button
											onClick={verifyCode}
											className="text-blue-500 justify-end"
										>
											Verify
										</button>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
			{/* <HeroParallaxDemo /> */}
		</div>
	);
}

export default Home;
