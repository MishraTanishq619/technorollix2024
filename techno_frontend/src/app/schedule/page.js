import ContactCard from "@/components/ContactCard";
import CardHoverEffectDemo from "@/components/cardTrackhover";
import React from "react";
import Header from "@/components/Header";
import AnimatedTooltipPreview from "@/components/AnimatedToolTip";
import "@/app/schedule/jasghdhsaa.css";

const page = () => {
	return (
		<div className="w-full p-10 ">
			<Header />
			<p>Schedule</p>
			<TimeLine />
		</div>
	);
};

export default page;

//
const data = [
	{
		title: 2017,
		content:
			"ipsum dolor sit amet, quo ei simul congue exerci, ad nec ecto \
		  mnesarchum, vim ea mazim fierent detracto.Ea quis ndis his, te \
		  elitvoluptua dignissim per, habeo iusto primis ea eam.",
	},
	{
		title: 2018,
		content:
			"ipsum dolor sit amet, quo ei simul congue exerci, ad nec ecto \
		  mnesarchum, vim ea mazim fierent detracto.Ea quis ndis his, te \
		  elitvoluptua dignissim per, habeo iusto primis ea eam.",
	},
	{
		title: 2019,
		content:
			"ipsum dolor sit amet, quo ei simul congue exerci, ad nec ecto \
		  mnesarchum, vim ea mazim fierent detracto.Ea quis ndis his, te \
		  elitvoluptua dignissim per, habeo iusto primis ea eam.",
	},
	{
		title: 2020,
		content:
			"ipsum dolor sit amet, quo ei simul congue exerci, ad nec ecto \
		  mnesarchum, vim ea mazim fierent detracto.Ea quis ndis his, te \
		  elitvoluptua dignissim per, habeo iusto primis ea eam.",
	},
];

function TimeLine() {
	let direction = "";
	return (
		<>
			<div className="timeline">
				{data.map((bloc, index) => {
					direction = direction === "left" ? "right" : "left";
					return (
						<TimeLineBloc
							data={bloc}
							direction={direction}
							key={index}
						/>
					);
				})}
			</div>
		</>
	);
}

function TimeLineBloc({ data, direction }) {
	return (
		<div className={`container ${direction}`}>
			<article className="content">
				<h2>{data.title}</h2>
				<p>{data.content}</p>
			</article>
		</div>
	);
}
