import React from "react";

function EventCard({
	prize = 999,
	title = "title",
	description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
	members = 4,
	entryFee = 400,onClick
}) {
	return (
		<>
			<div
				id="event-holder"
				className="bg-gray-800 text-white h-72 w-[21%]  rounded-md grid grid-rows-12 transition-transform transform hover:scale-105"
				onClick={onClick}
			>
				<div
					id="event-image"
					className="bg-gray-700 row-span-6 flex justify-end "
				>
					<img src="https://lh3.googleusercontent.com/a/ACg8ocJCurJUJ11ehDYcie3j5sn_ApjEBbCJREu0wT2yKp5IjQw=s96-c" alt={title} />

					<p className="absolute pr-2 pt-2">PRIZE POOL : {prize}</p>
				</div>
				<div className=" row-span-6 grid grid-rows-6">
					<div className="row-span-2 text-3xl px-2 py-2  ">
						{title}
					</div>
					<div className="row-span-2 text-md p-2 ">{description}</div>
					<div className="row-span-2 flex justify-between ">
						<div className=" pl-2 text-lg py-3  ">
							members :{members}
						</div>
						<div className=" pr-2 text-lg py-3  ">
							Entry fee:{entryFee}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default EventCard;
