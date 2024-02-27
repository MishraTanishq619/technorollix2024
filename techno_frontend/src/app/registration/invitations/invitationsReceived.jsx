"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

function ReceivedInvitations() {
	const [invitations, setInvitations] = useState([]);
	const [leaderEmail, setLeaderEmail] = useState("");

	const searchParams = useSearchParams();
	const emailRef = searchParams.get("emailRef");

	useEffect(() => {
		setLeaderEmail(emailRef);
	}, []);

	useEffect(() => {
		fetch("http://technorollix.opju.ac.in:4000/api/allEvents")
			.then((response) => response.json())
			.then((data) => setInvitations(data))
			.catch((error) => console.error("Error fetching events:", error));
	}, []);

	return (
		<div>
			<p className="text-4xl text-white font-bold">EventsCheckbox</p>
			<div className="flex flex-wrap items-center justify-evenly border-2 w-2/3 h-full p-5">
				{invitations.map((invitation, index) => (
					<div key={invitation.invitationId}>
						<div
							className={`bg-black p-4 rounded-lg border-4 border-blue-500`}
						>
							<h2 className="text-lg font-bold text-white">
								{invitation.eventName}
							</h2>
							<p className="text-lg font-bold text-white">
								Team Size: {invitation.teamSize}
							</p>
							<p className="text-lg font-bold text-white">
								Price: {invitation.priceMoney}
							</p>
							<p className="text-lg font-bold text-white">
								Entry Fee: {invitation.entryFee}
							</p>
						</div>
					</div>
				))}
			</div>
			{/* <button
        className="bg-orange-600 ml-56 rounded-md text-3xl px-6 py-3 items-center justify-center mt-10"
        onClick={() => {
          try {
            fetch(
              "http://10.60.41.209:4000/api/team-registration/event",
              {
                method: "POST",
                body: JSON.stringify({
                  eventId: selectedEvents,
                  leader: leaderEmail,
                  additionalDetails: additionalDetails,
                  teammates: teammateEmails.filter(
                    (email) => email.trim() !== ""
                  ),
                }),
                headers: {
                  "Content-type": "application/json",
                },
              }
            )
              .then(async (res) => {
                if (!res.ok) {
                  throw new Error(`HTTP error! Status: ${res.status}`);
                }
                window.location.href = `/`;
                const json = await res.json();
              })
              .catch((error) => {
                console.log("Error during fetch:", error);
              });
          } catch (error) {
            console.log(error);
          }
        }}
      >
        Submit
      </button> */}
		</div>
	);
}

export default ReceivedInvitations;
