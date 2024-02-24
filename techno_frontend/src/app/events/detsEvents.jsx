import React from "react";

function EventsDetails({
	imageLink = "logo.png",
	paragraph = "loredkjfbhsdjkfh skjdhf hsldkjfhskjdfhsdjfkdh skjdfhjsdfhsdfj kjds",
	rules,
	heading = "Headuoig",
	theme = "Headuoig",
	judgeMentalCriteria,
	arrangement = 0,
}) {
	return (
		<><div className="pt-10 w-full flex flex-col items-center gap-10">
		{/* <AboutCard
			imageLink="logo.png"
			paragraph="loredkjfbhsdjkfh skjdhf hsldkjfhskjdfhsdjfkdh skjdfhjsdfhsdfj kjds"
			heading="Headuoig"
			arrangement={1}
		/> */}

		<div
			id="about"
			className={`flex w-[80%] flex-wrap  h-auto border-2 border-slate-200 p-2 ${"flex-row-reverse"
				}`}
		>
			<div
				id="about-pic"
				className="w-full px-4 h-1/3 py-4 md:py-10 flex justify-center items-center "
			>
				<img src={imageLink} className="h-full w-full"></img>
                {/* pp */}
			</div>
			<div
				id="about-text"
				className="w-full px-4 h-full py-1 md:py-10 text-white bg-black bg-opacity-35 "
			>
				<div className="px-3 py-1 md:py-4 text-2xl md:text-5xl font-bold">
					{heading}
				</div>
				<div className="px-3 py-1 md:py-4 text-1rem md:text-4rem font-medium text-justify">
					{paragraph}
				</div>
				<div className="px-3 py-1 md:py-4 text-1xl md:text-2xl font-bold">
					{theme}
				</div>
				<div className="px-3 py-1 md:py-4 text-1ls font-medium text-justify">
					{rules}
				</div>
				<div className="px-3 py-1 md:py-4 text-1xl md:text-2xl font-bold">
					{judgeMentalCriteria}
				</div>
			</div>
		</div>
	</div>
		</>
	);
}

export default EventsDetails;
