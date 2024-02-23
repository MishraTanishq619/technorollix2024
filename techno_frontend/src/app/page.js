import React from "react";
import Home from "@/components/Home";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const page = () => {
	return (
		<main className="h-full w-full overflo-x-hidden">
			<Header />
			<Home />
		</main>
	);
};

export default page;
