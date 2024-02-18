"use client";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import {  } from '@react-oauth/google';



function Header() {
	return (
		<>
			<div
				id="div-conatiner"
				className=" bg-[#000] bg-opacity-40 grid grid-cols-8 text-2xl fixed z-10 top-0 w-full left-0 pt-2 text-white"
			>
				<a
					href="/"
					className="transition-transform transform hover:scale-105"
				>
					<img src="/logo.png " className="col-span-2 pb-4"></img>
				</a>

        <span id="space" className="col-span-1 "></span>
        <a
          href="/about"
          className="flex items-center justify-end col-span-1 transition-transform transform hover:scale-105"
        >
          ABOUT
        </a>
        <a
          href="/legacy"
          className="flex items-center justify-end col-span-1 transition-transform transform hover:scale-105"
        >
          LEGACY
        </a>
        <a
          href="/events"
          className="flex items-center justify-end col-span-1 transition-transform transform hover:scale-105"
        >
          EVENTS
        </a>
        <a
          href="/contact"
          className="flex items-center justify-end col-span-1 transition-transform transform hover:scale-105"
        >
          CONTACT
        </a>
        <div className="flex items-center justify-end pr-6 col-span-1 transition-transform transform hover:scale-105">
          <CiMenuFries />
        </div>
      </div>
    </>
  );
}

export default Header;
