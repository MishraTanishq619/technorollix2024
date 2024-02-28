"use client";
import React, { useEffect, useState } from "react";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import {  } from '@react-oauth/google';

import localFont from "next/font/local";
const digitalFont = localFont({ src: "../app/fonts/brankovic.ttf" });
function Header() {
	// console.log(globalThis.innerWidth);
	return <>{globalThis.innerWidth < 780 ? <MobLook /> : <WebLook />}</>;
}

const WebLook = () => {
	return (
		<>
			<div
				id="div-conatiner"
				className={`${digitalFont.className} absolute bg-opacity-70 h-[4rem] flex justify-between  text-2xl fixed z-100 top-0 w-auto left-0 pt-1 text-neon-red text-white`}
			>
				<div className="flex justify-around w-[100%]">
					<a
						href="/"
						className="transition-transform transform hover:scale-110 "
					>
						<img
							src="/logo.png "
							className="w-full pb-4 h-[5rem]"
						></img>
					</a>
				</div>
			</div>
			<div
				id="div-conatiner"
				className={`${digitalFont.className} absolute bg-opacity-70 h-[4rem] flex justify-between  text-2xl fixed z-10 top-0 w-1/2 right-0 pt-1 text-neon-red text-white`}
			>
				<div className="flex justify-around neon-text-red w-[100%]">
					<a
						href="/about"
						className="flex items-center justify-end   transition-transform transform hover:scale-110"
					>
						ABOUT
					</a>
					<a
						href="/legacy"
						className="flex items-center justify-end   transition-transform transform hover:scale-110"
					>
						LEGACY
					</a>
					<a
						href="/events"
						className="flex items-center justify-end   transition-transform transform hover:scale-110"
					>
						EVENTS
					</a>
					<a
						href="/contact"
						className="flex items-center justify-end   transition-transform transform hover:scale-110"
					>
						CONTACT
					</a>

					<ul className="navbar-links float-right">
						<li
							className="navbar-dropdown flex items-center justify-center "
							// onClick={DropdownState ? dropRev : drop}
							// onDoubleClick={dropRev}
						>
							<div className="flex items-center justify-end  pr-6  transition-transform transform hover:scale-110">
								<CiMenuBurger />
								{/* <CiMenuFries /> */}
							</div>
							<div id="dropdown" className="dropdown ">
								<a
									href="/schedule"
									className="flex items-center justify-start   transition-transform transform hover:scale-110"
								>
									SCHEDULE
								</a>
								<a
									href="/accomodation"
									className="flex items-center justify-start   transition-transform transform hover:scale-110"
								>
									ACCOMODATION
								</a>
								<a
									href="/studentambassador"
									className="flex items-center justify-start   transition-transform transform hover:scale-110"
								>
									STUDENT AMBASSADOR
								</a>
								<a
									href="/sponsers"
									className="flex items-center justify-start   transition-transform transform hover:scale-110"
								>
									SPONSOR
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

const MobLook = () => {
	const [DropdownState, setDropdownState] = useState(0);
	const drop = () => {
		setDropdownState(1);
		let dropdown = document.getElementById("dropdown");
		dropdown.style.visibility = "visible";
		dropdown.style.opacity = 1;
		dropdown.style.transform = "translateY(0px)";
	};

	const dropRev = () => {
		setDropdownState(0);
		let dropdown = document.getElementById("dropdown");
		dropdown.style.visibility = "hidden";
		dropdown.style.opacity = 0;
		dropdown.style.transform = "translateY(50px)";
	};
	return (
		<>
			<div
				id="div-conatiner"
				className=" bg-[#000] h-24 bg-opacity-40 flex justify-around  text-2xl fixed z-10 top-0 w-full left-0 pt-2 text-white"
			>
				<div className="flex justify-around ">
					<a
						href="/"
						className="transition-transform transform hover:scale-110 w-40"
					>
						<img src="/logo.png " className=" my-4"></img>
					</a>
				</div>

				<div className="flex justify-around ">
					<div className="flex items-center justify-end  pr-6  transition-transform transform hover:scale-110">
						<ul className="navbar-links">
							<li
								className="navbar-dropdown"
								onClick={DropdownState ? dropRev : drop}
								// onDoubleClick={dropRev}
							>
								<div className="flex items-center justify-end  pr-6  transition-transform transform hover:scale-110">
									<CiMenuFries />
								</div>
								<div id="dropdown" className="dropdown">
									<a
										href="/about"
										className="flex items-center justify-start   transition-transform transform hover:scale-110"
									>
										ABOUT
									</a>
									<a
										href="/legacy"
										className="flex items-center justify-start   transition-transform transform hover:scale-110"
									>
										LEGACY
									</a>
									<a
										href="/events"
										className="flex items-center justify-start   transition-transform transform hover:scale-110"
									>
										EVENTS
									</a>
									<a
										href="/contact"
										className="flex items-center justify-start   transition-transform transform hover:scale-110"
									>
										CONTACT
									</a>
									<a
										href="/schedule"
										className="flex items-center justify-start   transition-transform transform hover:scale-110"
									>
										SCHEDULE
									</a>
									<a
										href="/accomodation"
										className="flex items-center justify-start   transition-transform transform hover:scale-110"
									>
										ACCOMODATION
									</a>
									<a
										href="/studentambassador"
										className="flex items-center justify-start   transition-transform transform hover:scale-110"
									>
										STUDENT AMBASSADOR
									</a>
									<a
										href="/sponsers"
										className="flex items-center justify-start   transition-transform transform hover:scale-110"
									>
										SPONSOR
									</a>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
