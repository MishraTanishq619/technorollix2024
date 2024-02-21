import React from "react";
import LegacyCards from "./LegacyCards";

const LegacyCardsContainer = () => {
	return (
		<div id="cardContainer" className=" h-[36rem] mt-16 flex mx-4 overflow-y-hidden">
			<LegacyCards src={"mainbg.jpg"} />
			<LegacyCards src={"mainbg.jpg"} />
			<LegacyCards src={"mainbg.jpg"} />
			<LegacyCards src={"mainbg.jpg"} />
			<LegacyCards src={"mainbg.jpg"} />
			<LegacyCards src={"mainbg.jpg"} />
			<LegacyCards src={"mainbg.jpg"} />
		</div>
	);
};

export default LegacyCardsContainer;
