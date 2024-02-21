import React from "react";

function ContactCard({
	imageLink = "logo.png",
	name = "Dwayne Patel",
	branch = "branch",
	email = "email@gmail.com",
	phone = "9876786564",
}) {
	return (
		<>
			<div className="bg-slate-500 w-72 text-center p-2 rounded-lg">
				<img src={imageLink} className="w-full p-8 h-[14rem]"></img>
				<div id="name" className="text-4xl font-medium">
					{name}
				</div>
				<div id="branch" className="text-3xl font-medium">
					{branch}
				</div>
				<div id="additional-dets" className="">
					<div id="email" className="text-3xl font-medium">
						{email}
					</div>
					<div id="phone" className="text-3xl font-medium">
						{phone}
					</div>
				</div>
			</div>
		</>
	);
}

export default ContactCard;
