"use client";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import {  } from '@react-oauth/google';

function Header() {
	return (
		<>
			<div
				id="div-conatiner"
				className=" bg-blue bg-opacity-100 flex justify-between  text-2xl fixed z-10 top-0 w-full left-0 pt-2 text-white -33"
			>
				<div className="flex justify-around w-[35%]">
					<a
						href="/"
						className="transition-transform transform hover:scale-105"
					>
						<img src="/logo.png " className=" pb-4"></img>
					</a>
				</div>

				<div className="flex justify-around w-[60%]">
					<a
						href="/about"
						className="flex items-center justify-end  transition-transform transform hover:scale-105"
					>
						ABOUT
					</a>
					<a
						href="/legacy"
						className="flex items-center justify-end  transition-transform transform hover:scale-105"
					>
						LEGACY
					</a>
					<a
						href="/events"
						className="flex items-center justify-end  transition-transform transform hover:scale-105"
					>
						EVENTS
					</a>
					<a
						href="/contact"
						className="flex items-center justify-end  transition-transform transform hover:scale-105"
					>
						CONTACT
					</a>
					<div className="flex items-center justify-end pr-6  transition-transform transform hover:scale-105">
						<CiMenuFries />
          
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
