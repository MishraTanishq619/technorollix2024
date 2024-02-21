import Registration from "@/components/Registration";
import React from "react";

function page() {
	return (
		<main className="w-full h-screen pt-16 bg-fixed bg-cover  bg-center bg-[url('/mainbg.jpg')] flex flex-col items-center justify-center ">
			<Registration />
		</main>
	);
}

export default page;
