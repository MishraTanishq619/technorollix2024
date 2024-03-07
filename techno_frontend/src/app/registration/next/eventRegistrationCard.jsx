'use client';
import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';

function EventsRegistrationPage() {
  const [events, setEvents] = useState([]);
  const [registeredEvents, setregisteredEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [additionalDetails, setAdditionalDetails] = useState([]);
  const [leaderEmail, setLeaderEmail] = useState('');
  const [teammateEmails, setTeammateEmails] = useState([]);
  const [entryFee, setEntryFee] = useState(0);
  const [IsOpjuStudent, setIsOpjuStudent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isEntered, setIsEntered] = useState(false);
  const [notPaid, setNotPaid] = useState(true);
  const [paymentId, setPaymentId] = useState('');
  // const [entryFee, setEntryFee] = useState(0);
  const url = 'https://smartpay.easebuzz.in/125084/Technorollix2024';
  // const url = `https://smartpay.easebuzz.in/125084/Technorollix2024/${entryFee}-payment`;
  const searchParams = useSearchParams();
  const emailRef = searchParams.get('emailRef');
  useEffect(() => {
    setLeaderEmail(emailRef);
  }, []);

  useEffect(() => {
    fetch('http://technorollix.opju.ac.in:4000/api/allMainEvents')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));

    fetch(
      `http://technorollix.opju.ac.in:4000/api/participant/eventId/${emailRef}`
    )
      .then((response) => response.json())
      .then((data) => setregisteredEvents(data))
      .catch((error) =>
        console.error('Error fetching registeredEvents:', error)
      );
    fetch(
      `http://technorollix.opju.ac.in:4000/api/user/universityVerification/${emailRef}`
    )
      .then((response) => response.json())
      .then((data) => setIsOpjuStudent(data))
      .catch((error) =>
        console.error('Error fetching registeredEvents:', error)
      );
  }, []);
  const handlePaymentIdChange = (e) => {
    setPaymentId(e.target.value);
    setIsEntered(false);
  };
  const handleClosePopup = (event) => {
    if (event.target.classList.contains('overlay')) {
      setIsOpen(false);
    }
  };
  const CalculateFee = () => {
    // let fee = 0;
    // console.log(registeredEvents.length);
    // console.log(selectedEvents);
    if (selectedEvents.length === 0) {
      setEntryFee(0);
    } else if (selectedEvents.length <= 3) {
      setEntryFee(200);
    } else if (selectedEvents.length <= 5) {
      setEntryFee(300);
    } else if (selectedEvents.length <= 7) {
      setEntryFee(500);
    } else {
      setEntryFee(1000);
    }
    // return fee;
  };
  const handleEventCardClick = (eventId) => {
    const selectedIndex = selectedEvents.indexOf(eventId);
    const isEventSelected = selectedIndex !== -1;
    // console.log('Clicked ', eventId);

    if (isEventSelected) {
      const updatedSelectedEvents = [...selectedEvents];
      updatedSelectedEvents.splice(selectedIndex, 1);
      setSelectedEvents(updatedSelectedEvents);
      const updatedAdditionalDetails = [...additionalDetails];
      updatedAdditionalDetails.splice(selectedIndex, 1);
      setAdditionalDetails(updatedAdditionalDetails);
    } else {
      setSelectedEvents([...selectedEvents, eventId]);
      setAdditionalDetails([...additionalDetails, '']);
    }
  };
  const openTab = () => {
    if (IsOpjuStudent) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleAdditionalDetailsChange = (index, value) => {
    const updatedAdditionalDetails = [...additionalDetails];
    updatedAdditionalDetails[index] = value;
    setAdditionalDetails(updatedAdditionalDetails);
  };
  const handlePaste = (event) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData('text');
    setPaymentId(pastedText);
  };

  return (
    <div className="w-full flex flex-col items-center my-4 gap-5">
      {/*  */}
      <div
        id="alert-1"
        className="hidden fixed z-[9999]   items-center p-4 mb-4 text-red-600 rounded-lg bg-blue-50 dark:bg-red-800 dark:text-white"
        role="alert"
      >
        <svg
          className="flex-shrink-0 w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div className="ms-3 text-lg font-medium mx-2">
          Invalid Transaction Id.
        </div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 border-2 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-red-500 inline-flex items-center justify-center h-6 w-6 dark:bg-red-900 dark:text-white "
          data-dismiss-target="#alert-1"
          aria-label="Close"
          onClick={dismissAlert}
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
      {/*  */}
      <p className="text-4xl text-white font-bold">EventsCheckbox</p>
      <div className="flex flex-wrap items-center  justify-evenly  w-[96%] h-full py-10 rounded-xl bg-[#ffffff33]">
        {events.map((event, index) => (
          <div
            key={event.eventId}
            className="transform transition  hover:scale-110"
          >
            <div
              className={` p-4 rounded-lg mx-4 my-2   ${
                registeredEvents.includes(event.eventId)
                  ? 'border-red-600 bg-black border-4 '
                  : ''
              }${
                selectedEvents.includes(event.eventId)
                  ? 'bg-[#ff0000aa] min-h-40 max-w-80 '
                  : 'bg-[#000000] min-h-40 max-w-80'
              } `}
              onClick={
                registeredEvents.includes(event.eventId)
                  ? null
                  : () => handleEventCardClick(event.eventId)
              }
            >
              <div className="flex flex-wrap">
                <div className="mx-3 w-full my-2">
                  <img
                    src={`/thumbnail/${event.eventpic}`}
                    alt="Image"
                    className="object-cover "
                  />
                </div>
                <div className="min-w-40 w-full my-2 flex flex-col gap-3">
                  <h2
                    className={`text-red-600
								${registeredEvents.includes(event.eventId) ? '' : 'hidden'} 
							`}
                  >
                    Already Registered
                  </h2>
                  <h2 className="text-lg font-bold text-white">
                    {event.eventName}
                  </h2>
                  <p className="text-12px font-bold text-white">
                    {event.eventDescription}
                  </p>
                  <div className="flex justify-between text-lg font-bold text-white w-full">
                    {/* djdsufhsu */}
                    <p className="">
                      {event.teamSize > 0
                        ? 'TeamSize: ' + event.teamSize
                        : 'Have Sub-Events'}
                    </p>
                    <p className="">Prize: {event.priceMoney}</p>
                  </div>
                  {/* <p className="text-lg font-bold text-white">
								Entry Fee: {event.entryFee}
							</p> */}
                </div>
              </div>
              {selectedEvents.includes(event.eventId) && (
                <div className="border-2 rounded-md border-blue-400">
                  <input
                    type="text"
                    placeholder="Additional Details (optional)"
                    style={{
                      border: 'none',
                      outline: 'none',
                      boxShadow: 'none',
                    }}
                    className="bg-black w-full px-5 py-1 rounded-md text-white "
                    value={
                      additionalDetails[
                        selectedEvents.indexOf(event.eventId)
                      ] || ''
                    }
                    onChange={(e) =>
                      handleAdditionalDetailsChange(
                        selectedEvents.indexOf(event.eventId),
                        e.target.value
                      )
                    }
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
        <div>
          {/* <h2 className="text-white">
            Total price:
            {selectedEvents.length === 0
              ? '0'
              : CalculateFee(selectedEvents, registeredEvents)}
          </h2> */}
          <p></p>
        </div>
      </div>
      <button
        className="bg-orange-600  rounded-md text-3xl px-6 py-3 items-center justify-center my-10"
        // onClick={
        //   IsOpjuStudent
        //     ? () => {
        //       try {
        //         fetch(
        //           'http://technorollix.opju.ac.in:4000/api/team-registration/event',
        //           {
        //             method: 'POST',
        //             body: JSON.stringify({
        //               eventId: selectedEvents,
        //               leader: leaderEmail,
        //               additionalDetails: additionalDetails,
        //               teammates: teammateEmails.filter(
        //                 (email) => email.trim() !== ''
        //               ),
        //             }),
        //             headers: {
        //               'Content-type': 'application/json',
        //             },
        //           }
        //         )
        //           .then(async (res) => {
        //             if (!res.ok) {
        //               throw new Error(`HTTP error! Status: ${res.status}`);
        //             }
        //             window.location.href = `/registration/next/subevents?emailRef=${emailRef}`;
        //             const json = await res.json();
        //           })
        //           .catch((error) => {
        //             console.log('Error during fetch:', error);
        //           });
        //       } catch (error) {
        //         console.log(error);
        //       }
        //     }
        //     : () => {
        //       if (IsOpjuStudent) {
        //         console.log(entryFee);
        //         setIsOpen(false);
        //       } else {
        //         CalculateFee()
        //         setIsOpen(true);
        //       }
        //     }
        // }
        onClick={() => {
          CalculateFee();
          setIsOpen(true);
        }}
      >
        Submit
      </button>
      {isOpen && (
        <div className="overlay" onClick={handleClosePopup}>
          <div className="bg-[#000000] neon-text-red-lighter shadow-md rounded-lg p-6">
            <div className="mt-4">
              <p className="text-lg font-semibold">
                You have selected {selectedEvents.length} events
              </p>
              {IsOpjuStudent ? (
                <></>
              ) : (
                <p className="text-lg font-semibold">
                  Your total entry fee is {entryFee}
                </p>
              )}
            </div>
            {notPaid ? (
              <button
                className=" bg-orange-400 mt-4  rounded-md text-1xl px-3 py-1 justify-end"
                onClick={
                  IsOpjuStudent
                    ? () => {
                        try {
                          fetch(
                            'http://technorollix.opju.ac.in:4000/api/team-registration/event',
                            {
                              method: 'POST',
                              body: JSON.stringify({
                                eventId: selectedEvents,
                                leader: leaderEmail,
                                additionalDetails: additionalDetails,
                                teammates: teammateEmails.filter(
                                  (email) => email.trim() !== ''
                                ),
                              }),
                              headers: {
                                'Content-type': 'application/json',
                              },
                            }
                          )
                            .then(async (res) => {
                              if (!res.ok) {
                                throw new Error(
                                  `HTTP error! Status: ${res.status}`
                                );
                              }
                              window.location.href = `/registration/next/subevents?emailRef=${emailRef}`;
                              const json = await res.json();
                            })
                            .catch((error) => {
                              console.log('Error during fetch:', error);
                            });
                        } catch (error) {
                          console.log(error);
                        }
                      }
                    : () => {
                        setNotPaid(false);
                        window.open(url, '_blank', 'noopener,noreferrer');
                      }
                }
              >
                {/* Okay */}
                {IsOpjuStudent ? <p>Submit</p> : <p>Pay</p>}
              </button>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Enter easebuzz Id"
                  value={paymentId}
                  onChange={handlePaymentIdChange}
                  className={`bg-transparent border-2 px-2 py-2 text-white w-40 md:w-50`}
                />
                {isEntered ? (
                  <p className="neon-red-text-light">
                    You entered: {paymentId} <br />
                    Click Submit Again.
                  </p>
                ) : (
                  <p></p>
                )}
                <button
                  className=" bg-orange-400 mt-4  rounded-md text-1xl px-3 py-1 justify-end"
                  onClick={
                    isEntered
                      ? () => {
                          try {
                            fetch(
                              'http://technorollix.opju.ac.in:4000/api/payment/gateway/receipt',
                              {
                                method: 'POST',
                                body: JSON.stringify({
                                  userEmail: leaderEmail,
                                  paymentId: paymentId,
                                  numberOfEvents: selectedEvents.length,
                                  paidEntryFee: entryFee,
                                }),
                                headers: {
                                  'Content-type': 'application/json',
                                },
                              }
                            )
                              .then(async (res) => {
                                if (!res.ok) {
                                  throw new Error(
                                    `HTTP error! Status: ${res.status}`
                                  );
                                }
                                try {
                                  fetch(
                                    'http://technorollix.opju.ac.in:4000/api/team-registration/event',
                                    {
                                      method: 'POST',
                                      body: JSON.stringify({
                                        eventId: selectedEvents,
                                        leader: leaderEmail,
                                        additionalDetails: additionalDetails,
                                        teammates: teammateEmails.filter(
                                          (email) => email.trim() !== ''
                                        ),
                                      }),
                                      headers: {
                                        'Content-type': 'application/json',
                                      },
                                    }
                                  )
                                    .then(async (res) => {
                                      if (!res.ok) {
                                        throw new Error(
                                          `HTTP error! Status: ${res.status}`
                                        );
                                      }
                                      window.location.href = `/registration/next/subevents?emailRef=${emailRef}`;
                                      const json = await res.json();
                                    })
                                    .catch((error) => {
                                      console.log('Error during fetch:', error);
                                    });
                                } catch (error) {
                                  console.log(error);
                                }
                                // window.location.href = `/registration/next/subevents?emailRef=${emailRef}`;
                                const json = await res.json();
                              })
                              .catch((error) => {
                                alertHandler();
                                console.log('Error during fetch:', error);
                              });
                          } catch (error) {
                            console.log(error);
                          }
                        }
                      : () => {
                          setIsEntered(true);
                        }
                  }
                >
                  {/* Okay */}
                  <p>Submit</p>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default EventsRegistrationPage;

// "/api/user/universityVarification/:email"

function alertHandler() {
  let alertBox = document.getElementById('alert-1');
  alertBox.style.display = 'flex';
}

function dismissAlert() {
  let alertBox = document.getElementById('alert-1');
  alertBox.style.display = 'none';
}
