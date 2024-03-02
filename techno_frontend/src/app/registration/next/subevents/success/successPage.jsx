"use client";
import React from "react";
import { useState, useEffect } from 'react';
import UserCard from "./userConfirmationCard";

function RegitrationSuccessfu() {
    
	const [isOpen, setIsOpen] = useState(false);

	const handleNormalButtonClick = () => {
		setIsOpen(true);
	};

	const handleClosePopup = (event) => {
		if (event.target.classList.contains('overlay')) {
			setIsOpen(false);
		}
	};

	return (

		<div className="flex flex-col items-center  text-white  justify-center h-[100%] w-full">
			<button className="bg-orange-500 text-3xl px-6 py-2 rounded-md transition-transform transform hover:scale-105" onClick={handleNormalButtonClick}>Register</button>
			{isOpen && (
                <div className="overlay" onClick={handleClosePopup}>
                    <UserCard/>
					<p className="text-black">okay</p>
				</div>
			)}
		</div>
	);
}


export default RegitrationSuccessfu;
