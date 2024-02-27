import ContactCard from "@/components/ContactCard";
import CardHoverEffectDemo from "@/components/cardTrackhover";
import React from "react";
import Header from "@/components/Header";
import AnimatedTooltipPreview from "@/components/AnimatedToolTip";

const page = () => {
	return (
		<div className="w-full p-10 flex flex-wrap justify-evenly gap-6">
			<Header />
			<p>Accomodation</p>
		</div>
	);
};

export default page;
