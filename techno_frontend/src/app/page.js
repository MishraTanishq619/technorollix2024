import React from "react";
import Home from "@/components/Home";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const page = () => {
	return (
		<main className="h-full w-full overflo-x-hidden">
			<video autoPlay muted loop id="bgVideo">
				<source src="videoplayback.mp4" type="video/mp4" />
			</video>
			<Header />
			<Home />
		</main>
	);
};

export default page;
