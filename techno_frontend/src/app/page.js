import React from "react";
import Home from "@/components/Home";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const page = () => {
	return (
		<main className="h-full w-full">
			<Home />
		</main>
	);
};

export default page;
