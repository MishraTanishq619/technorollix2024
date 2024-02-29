import ContactCard from "@/components/ContactCard";
import CardHoverEffectDemo from "@/components/cardTrackhover";
import React from "react";
import Header from "@/components/Header";
import AnimatedTooltipPreview1 from "@/components/AnimatedToolTip1";
import AnimatedTooltipPreview2 from "@/components/AnimatedToolTip2";
import AnimatedTooltipPreview3 from "@/components/AnimatedToolTip3";
import AnimatedTooltipPreview4 from "@/components/AnimatedToolTip4";
import AnimatedTooltipPreview5 from "@/components/AnimatedToolTip5";
import AnimatedTooltipPreview6 from "@/components/AnimatedToolTip6";


const page = () => {
	return (
		<div className="w-full py-10  mx-auto flex flex-wrap justify-evenly gap-2 md:gap-4 ls:gap-4">
			<Header />
			<CardHoverEffectDemo />
			<div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center`}>
			<AnimatedTooltipPreview1/>
			<AnimatedTooltipPreview2/>
			<AnimatedTooltipPreview3/>
			<AnimatedTooltipPreview4/>
			<AnimatedTooltipPreview5/>
			<AnimatedTooltipPreview6/>
			</div>
		</div>
	);
};

export default page;
