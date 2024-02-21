import React from "react";

const LegacyCards = ({ src }) => {
	return (
		<div
			id="card"
			className="w-[30rem] h-full  rounded-3xl -mx-4 overflow-hidden"
		>
			<div className="w-full h-full  overflow-hidden p-8 rounded-3xl transition-[0.2s] hover:p-0">
				<img
					src={src}
					alt="Img"
					className=" h-full w-full border-2 border-slate-500  rounded-3xl"
				/>
			</div>
		</div>
	);
};

export default LegacyCards;
