import AboutCard from "@/components/AboutCard";
import { TracingBeam } from "@/components/ui/tracingBeam";
import React from "react";
import Header from "@/components/Header";

const page = () => {
	return (
		<TracingBeam>
			<Header />
			<div className="pt-10 w-full flex flex-col items-center gap-10">
				<AboutCard
					imageLink="logo.png"
					paragraph="loredkjfbhsdjkfh skjdhf hsldkjfhskjdfhsdjfkdh skjdfhjsdfhsdfj kjds"
					heading="Headuoig"
					arrangement={1}
				/>
				<AboutCard
					imageLink="logo.png"
					paragraph="loredkjfbhsdjkfh skjdhf hsldkjfhskjdfhsdjfkdh skjdfhjsdfhsdfj kjds"
					heading="Headuoig"
					arrangement={0}
				/>
				<AboutCard
					imageLink="logo.png"
					paragraph="loredkjfbhsdjkfh skjdhf hsldkjfhskjdfhsdjfkdh skjdfhjsdfhsdfj kjds"
					heading="Headuoig"
					arrangement={1}
				/>
				<AboutCard
					imageLink="logo.png"
					paragraph="loredkjfbhsdjkfh skjdhf hsldkjfhskjdfhsdjfkdh skjdfhjsdfhsdfj kjds"
					heading="Headuoig"
					arrangement={0}
				/>
				<AboutCard
					imageLink="logo.png"
					paragraph="loredkjfbhsdjkfh skjdhf hsldkjfhskjdfhsdjfkdh skjdfhjsdfhsdfj kjds"
					heading="Headuoig"
					arrangement={1}
				/>
				<AboutCard
					imageLink="logo.png"
					paragraph="loredkjfbhsdjkfh skjdhf hsldkjfhskjdfhsdjfkdh skjdfhjsdfhsdfj kjds"
					heading="Headuoig"
					arrangement={0}
				/>
				<AboutCard
					imageLink="logo.png"
					paragraph="loredkjfbhsdjkfh skjdhf hsldkjfhskjdfhsdjfkdh skjdfhjsdfhsdfj kjds"
					heading="Headuoig"
					arrangement={1}
				/>
				<AboutCard
					imageLink="logo.png"
					paragraph="loredkjfbhsdjkfh skjdhf hsldkjfhskjdfhsdjfkdh skjdfhjsdfhsdfj kjds"
					heading="Headuoig"
					arrangement={0}
				/>
				<AboutCard
					imageLink="logo.png"
					paragraph="loredkjfbhsdjkfh skjdhf hsldkjfhskjdfhsdjfkdh skjdfhjsdfhsdfj kjds"
					heading="Headuoig"
					arrangement={1}
				/>
				<AboutCard
					imageLink="logo.png"
					paragraph="loredkjfbhsdjkfh skjdhf hsldkjfhskjdfhsdjfkdh skjdfhjsdfhsdfj kjds"
					heading="Headuoig"
					arrangement={0}
				/>
			</div>
		</TracingBeam>
	);
};

export default page;
