"use client"
import { useState, useEffect } from 'react';

function EventsRegistrationPage() {
    const [events, setEvents] = useState([]);
    const [selectedEvents, setSelectedEvents] = useState([]);
    const [additionalDetails, setAdditionalDetails] = useState([]);
    // Function to handle event card click
    const handleEventCardClick = (eventId) => {
        // Check if the event is already selected
        const selectedIndex = selectedEvents.indexOf(eventId);
        const isEventSelected = selectedIndex !== -1;

        if (isEventSelected) {
            // If already selected, remove from selectedEvents array
            const updatedSelectedEvents = [...selectedEvents];
            updatedSelectedEvents.splice(selectedIndex, 1);
            setSelectedEvents(updatedSelectedEvents);

            // Remove additional details for the unselected event
            const updatedAdditionalDetails = [...additionalDetails];
            updatedAdditionalDetails.splice(selectedIndex, 1);
            setAdditionalDetails(updatedAdditionalDetails);
        } else {
            // If not selected, add to selectedEvents array
            setSelectedEvents([...selectedEvents, eventId]);
            // Add empty additional detail placeholder
            setAdditionalDetails([...additionalDetails, '']);
        }
    };

    // Function to handle additional details input change
    const handleAdditionalDetailsChange = (index, value) => {
        const updatedAdditionalDetails = [...additionalDetails];
        updatedAdditionalDetails[index] = value;
        setAdditionalDetails(updatedAdditionalDetails);
    };

    useEffect(() => {
        // Fetch event data from the API endpoint
        fetch('http://localhost:4000/api/allEvents')
            .then(response => response.json())
            .then(data => setEvents(data))
            .catch(error => console.error('Error fetching events:', error));
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4">
            {events.map((event, index) => (
                <div
                    key={event.eventId}
                    className={`bg-${selectedEvents.includes(event.eventId) ? 'red' : 'gray'}-200 p-4 rounded-lg`}
                    onClick={() => handleEventCardClick(event.eventId)}
                >
                    <h2 className="text-lg font-bold">{event.eventName}</h2>
                    <p>Team Size: {event.teamSize}</p>
                    <p>Price: {event.priceMoney}</p>
                    <p>Entry Fee: {event.entryFee}</p>
                    {selectedEvents.includes(event.eventId) && (
                        <input
                            type="text"
                            placeholder="Additional Details"
                            value={additionalDetails[selectedEvents.indexOf(event.eventId)] || ''}
                            onChange={(e) => handleAdditionalDetailsChange(selectedEvents.indexOf(event.eventId), e.target.value)}
                            onClick={(e) => e.stopPropagation()} // Stop event propagation
                        />
                    )}
                </div>
            ))}
            {/* Display selected event IDs and additional details */}
            <div>
                <h2>Selected Events</h2>
                <ul>
                    {selectedEvents.map((eventId, index) => (
                        <li key={eventId}>
                            Event ID: {eventId}, Additional Details: {additionalDetails[index]}
                        </li>
                    ))}
                </ul>
                <button
                    className="m-3 bg-orange-600 ml-96 mb-8 rounded-md text-3xl px-6 py-3"
                    onClick={() => {
                        console.log("daba");
                        console.log(selectedEvents);
                        console.log(additionalDetails);
                        try {
                            fetch("http://localhost:4000/api/team-registration/event",{
                                method: 'GET',
                                headers: {user_email}
                            },{
                                method: "POST",
                                body: JSON.stringify({
                                    eventId: selectedEvents,
                                    leader: leader,
                                    additionalDetails: additionalDetails
                                }),
                                headers: {
                                    "Content-type": "application/json",
                                },
                            })
                                .then(async (res) => {
                                    if (!res.ok) {
                                        throw new Error(`HTTP error! Status: ${res.status}`);
                                    }
                                    // alert("ho gya bhenco");
                                    const json = await res.json();

                                    // Process the response JSON here
                                })
                                .catch((error) => {
                                    console.log("Error during fetch:", error);
                                    // Handle the error appropriately (e.g., show a message to the user)
                                });
                            ``;
                        } catch (error) {
                            console.log(error);
                        }
                    }}
                >Submit</button>
            </div>
        </div>
    );
}

export default EventsRegistrationPage;
