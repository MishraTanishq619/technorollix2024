import React from "react";

function AboutCard({
	imageLink = "logo.png",
	paragraph = "loredkjfbhsdjkfh skjdhf hsldkjfhskjdfhsdjfkdh skjdfhjsdfhsdfj kjds",
	heading = "Headuoig",
	arrangement = 0,
}) {
	return (
		<>
			<div
				id="about"
				className={`flex w-[80%]  h-[40rem] border-2 border-slate-200 p-2 ${
					arrangement && "flex-row-reverse"
				}`}
			>
				<div
					id="about-pic"
					className="w-1/2 px-4 h-full py-10 flex justify-center items-center "
				>
					<img src={imageLink} className="h-full w-full"></img>
				</div>
				<div
					id="about-text"
					className="w-1/2 px-4 h-full py-10 text-white bg-black bg-opacity-35 "
				>
					<div className="px-3 py-4 text-5xl font-bold">
						{heading}
					</div>
					<div className="px-3 py-4 text-3xl font-medium">
						{paragraph}
					</div>
				</div>
			</div>
		</>
	);
}

export default AboutCard;
