"use client";
import React, { useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import {  } from '@react-oauth/google';

function Header() {
	// console.log(globalThis.innerWidth);
	return <>{globalThis.innerWidth > 780 ? <WebLook /> : <MobLook />}</>;
}

const WebLook = () => {
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
					{/* <div className="flex items-center justify-end pr-6  transition-transform transform hover:scale-105">
						<CiMenuFries />
					</div> */}
				</div>
			</div>
		</>
	);
};

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MobLook = () => {
	return (
		<>
			<div
				id="div-conatiner"
				className=" bg-[#000] h-24 bg-opacity-40 flex justify-around  text-2xl fixed z-10 top-0 w-full left-0 pt-2 text-white"
			>
				<div className="flex justify-around ">
					<a
						href="/"
						className="transition-transform transform hover:scale-105"
					>
						<img src="/logo.png " className=" pb-4"></img>
					</a>
				</div>

				<div className="flex justify-around ">
					<div className="flex items-center justify-end pr-6  transition-transform transform hover:scale-105">
						<DropdownMenu>
							<DropdownMenuTrigger>
								<CiMenuFries />
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuLabel>Pages</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<a
										href="/about"
										className="flex items-center justify-start w-full h-full  transition-transform transform hover:scale-105"
									>
										ABOUT
									</a>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<a
										href="/legacy"
										className="flex items-center justify-start w-full h-full  transition-transform transform hover:scale-105"
									>
										LEGACY
									</a>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<a
										href="/events"
										className="flex items-center justify-start w-full h-full  transition-transform transform hover:scale-105"
									>
										EVENTS
									</a>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<a
										href="/contact"
										className="flex items-center justify-start w-full h-full  transition-transform transform hover:scale-105"
									>
										CONTACT
									</a>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
