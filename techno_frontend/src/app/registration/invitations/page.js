import { Suspense } from 'react';

import React from "react";
import ReceivedInvitations from './invitationsReceived';

function page() {
	return (
		<div className="w-full h-screen items-center justify-evenly ml-56 mt-12">
			{/* <div className=" "> */}
				{/* <EventsRegistrationPage/> */}
				<Suspense fallback={<div>Loading...</div>}>
					<ReceivedInvitations/>
				</Suspense>
			{/* </div> */}
		</div>
	);
}

export default page;
