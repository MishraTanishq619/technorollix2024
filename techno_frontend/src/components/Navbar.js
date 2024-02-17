import React from "react";

const Navbar = () => {
	return (
		<div className="w-full bg-red-400 flex items-center py-2 justify-between px-[5%]">
			<div>
				<p>Logo</p>
			</div>
			<div className="flex gap-8 text-2xl">
				<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/legacy">Legacy</a>
				<a href="/events">Events</a>
				<a href="/contact">Contact</a>
			</div>
		</div>
	);
};

export default Navbar;
