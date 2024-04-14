'use client';

import { z } from 'zod';
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import localFont from 'next/font/local';
import Button from '@/components/ui/movingBorderButton';
import Invitestatuses from '../registration/next/subevents/myteam/Invitestatuses';

const page = () => {
  const [Loaded, setLoaded] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [generatedNumber, setGeneratedNumber] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [generateClicked, setgenerateClicked] = useState(false);
  const [retryTimer, setRetryTimer] = useState(300);
  const [isVerified, setisVerified] = useState(false);

  const handleNormalButtonClick = () => {
    setIsOpen(true);
  };

  const handleClosePopup = (event) => {
    if (event.target.classList.contains('overlay')) {
      setIsOpen(false);
    }
  };

  const [participantCount, setParticipantCount] = useState(0);
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    fetch('http://127.0.0.1:4000/api/visitCount')
      .then((response) => response.json())
      .then((data) => setVisitCount(data.visitCount))
      .catch((error) => console.error('Error fetching visit count:', error));

    fetch('http://127.0.0.1:4000/api/allParticipants')
      .then((response) => response.json())
      .then((data) => setParticipantCount(data.length))
      .catch((error) =>
        console.error('Error fetching participant data:', error)
      );

    // return (window.location.href = '/team');
    return () => {
      console.info(performance.navigation.type);
      if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
        console.info('This page is reloaded');
        window.location.href = '/team';
      }
    };
  }, [Loaded]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setgenerateClicked(false);
    validateEmail(email);
  };

  const generateNumber = async () => {
    setgenerateClicked(true);
    if (isValidEmail) {
      setShowVerification(true);
    }
    setRetryTimer(30);

    // Start the retry countdown
    const countdownInterval = setInterval(() => {
      setRetryTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // After 30 seconds, stop the countdown and show the retry button
    setTimeout(() => {
      clearInterval(countdownInterval);
    }, 30000);
    // console.log('called');
    if (isValidEmail) {
      // console.log('entered');
      const number = Math.floor(10000 + Math.random() * 90000);
      console.log('OTP is : ' + number);
      setGeneratedNumber(number);
      // try {
      let otpdata = await fetch('http://127.0.0.1:4000/api/email/verify/otp', {
        method: 'POST',
        body: JSON.stringify({
          user: email,
          number: number,
        }),
        headers: {
          'Content-type': 'application/json',
          // user_email: email,
        },
      }).catch((error) => {
        // console.log('Error during fetch:', error);
        console.log(error);
      });
      // console.log(`otpdata ${otpdata}`);
      // } catch (error) {
      // }
    }
    // console.log('exit');
  };

  const verifyCode = async () => {
    if (verificationCode === generatedNumber.toString()) {
      // window.location.href("/registration")
      try {
        const response = await fetch(`http://127.0.0.1:4000/api/user/${email}`);

        if (response.status === 200) {
          //   window.location.href = `/registration/invitations?emailRef=${email}`;
          setisVerified(true);
          setIsOpen(false);
          // } else if (response.status === 404) {
          // const userData = await response.json();
          // const { picture, email, name } = userData;
        } else {
          window.location.href = `/registration?urlRef=${email}`;
          // Handle other status codes if needed
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
      // console.log('Code verified successfully');
    } else {
      // Code verification failed
      let invalidOTP = document.getElementById('invalidOTP');
      invalidOTP.style.display = 'block';
      // console.log('Invalid verification code');
      return false;
    }
  };
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
      setIsValidEmail(true);
      // console.log('set');
    }
    if (!regex.test(email)) {
      setIsValidEmail(false);
      // console.log('not set');
    }
    // console.log(regex.test(email));

    // return regex.test(email);
  };
  const handlePaste = (event) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData('text');
    setEmail(pastedText);
    setgenerateClicked(false);
    validateEmail(pastedText);
  };

  return (
    // <div className=" flex justify-center w-full">
    <div
      className={` text-white mt-0 flex flex-col items-center  ${
        isOpen ? 'glass-morphism' : ''
      } w-full h-screen `}
    >
      <div
        id="alert-1"
        className="hidden absolute z-[99] items-center p-4 mt-20 mb-4 text-red-600 rounded-lg bg-blue-50 dark:bg-red-800 dark:text-white"
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
        <div className="ms-3 text-lg font-medium mx-2">Invalid Email.</div>
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
      <div className="mt-10 mx-5 w-full">
        <div className="text-6xl font-bold text-center w-full flex justify-center items-center relative">
          <p className="">Manage Team</p>
          <button
            className=" md:absolute md:right-12 bg-red-500 text-xl md:text-3xl px-6 py-2 h-14 md:h-auto mb-2 mx-4 rounded-md transition-transform item-center justify-center transform hover:scale-110"
            onClick={() => {
              window.location.href = '/';
            }}
          >
            Exit
          </button>
        </div>

        <div className="w-full flex justify-center my-4 ">
          {!isVerified ? (
            <Button className={'text-4xl'} onClick={() => setIsOpen(true)}>
              Click
            </Button>
          ) : (
            <BrowserRouter>
              <NavigationRoutes email={email} />
            </BrowserRouter>
          )}
        </div>
      </div>
      {isOpen && (
        <div
          onClick={handleClosePopup}
          className="overlay flex flex-col items-center justify-center h-full w-full overflow-x-scroll "
        >
          <div className="bg-[#ffffff66] text-white shadow-md rounded-lg py-6 -mt-[8rem] px-10">
            <div
              className={`flex items-center bg-[#000000bb] flex-wrap ${
                !showVerification ? '' : 'flex-col'
              } justify-center`}
            >
              <div
                className={` flex ${
                  !showVerification ? ' flex-no-wrap' : ''
                } rounded-md px-1 py-1 justify-between `}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  style={{
                    border: 'none',
                    outline: 'none',
                    boxShadow: 'none',
                  }}
                  onPaste={(e) => {
                    handlePaste(e);
                  }}
                  autoComplete="email"
                  className={`bg-transparent border-2 px-2 py-2 text-white w-40 md:w-50`}
                />
                {/* <button onClick={generateNumber} className="btn text-white  bg-orange-400 ml-4  rounded-md text-1xl px-3 py-1 justify-end"> */}
                {!showVerification ? (
                  <button
                    onClick={generateNumber}
                    className="text-white  bg-red-600 py-1 px-3 text-sm"
                  >
                    Get OTP
                  </button>
                ) : retryTimer > 0 ? (
                  <button
                    disabled
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    {retryTimer}...
                  </button>
                ) : (
                  <button
                    onClick={generateNumber}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Retry
                  </button>
                )}
                {!isValidEmail && generateClicked && (
                  <p className="text-red-500 border border-red-500 p-2 font-bold  md:right-20 ml-4">
                    Invalid Email
                  </p>
                  // alertHandler()
                )}
              </div>

              <div>
                {!showVerification ? (
                  <div></div>
                ) : (
                  <div className="mt-4  flex   rounded-md w-full  px-3  py-1">
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={verificationCode}
                      onChange={(e) => {
                        let invalidOTP = document.getElementById('invalidOTP');
                        invalidOTP.style.display = 'none';
                        setVerificationCode(e.target.value);
                      }}
                      style={{
                        border: 'none',
                        outline: 'none',
                        boxShadow: 'none',
                      }}
                      className="bg-transparent border-2 px-2 py-2 text-white w-32"
                    />
                    <button
                      onClick={verifyCode}
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      Verify
                    </button>
                    <p
                      id="invalidOTP"
                      className="hidden text-red-500 border border-red-500 p-2 font-bold  md:right-20 ml-4"
                    >
                      Invalid OTP
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="text-black mt-4 text-1xl">
              <p>Note: OPJU students use your Official mail</p>
              <p id="pasteemail" className="hidden text-red-700 font-semibold">
                Note: Copy-Paste Will not Work.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;

const alertHandler = () => {
  let alertBox = document.getElementById('alert-1');
  alertBox.style.display = 'flex';
};

const dismissAlert = () => {
  let alertBox = document.getElementById('alert-1');
  alertBox.style.display = 'none';
};

//

const My_Team = ({ emailRef }) => {
  //   console.log(emailRef);
  const [registeredEvents, setregisteredEvents] = useState([]);
  const [reqTeamsArray, setreqTeamsArray] = useState([]);
  const [events, setEvents] = useState([]);
  // const [myEvents, setMyEvents] = useState([]);
  const searchParams = useSearchParams();
  // const emailRef = searchParams.get('emailRef');

  // let reqEvents = [];
  useEffect(() => {
    fetch('http://127.0.0.1:4000/api/allEvents')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));

    fetch(`http://127.0.0.1:4000/api/registeredTeam/eventId/${emailRef}`)
      .then((response) => response.json())
      .then((data) => {
        setregisteredEvents(data.eventIdArray);
        setreqTeamsArray(data.teamIdArray);
      })
      .catch((error) =>
        console.error('Error fetching registeredEvents:', error)
      );
    // reqEvents;
  }, []);
  let reqEvents = events.filter((e) => registeredEvents.includes(e.eventId));
  // console.log('reqEvents:');
  // console.log(reqEvents, registeredEvents);

  const validInputEmailHandler = async (email, teamId) => {
    // console.log(email, teamId);

    // to get team id
    let response = await fetch('http://127.0.0.1:4000/api/create/team-invite', {
      method: 'POST',
      body: JSON.stringify({
        teamId: teamId,
        inviterEmail: emailRef,
        inviteeEmail: email,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        return data;
        // window.location.reload();
      })
      .catch((error) => {
        console.error('Error fetching TeamId:', error);
        alertHandler2();
      });

    // console.log("response: ", response);
  };

  const invalidInputEmailHandler = (index) => {
    let inputEmail = document.getElementById(`inputEmail${index}`);
    // console.log(inputEmail.value);

    // alert(<AlertComponent />);
    alertHandler2();
  };
  return (
    <div className="md:w-[63rem] flex justify-center mx-auto my-10">
      {/* {console.log(reqEvents)} */}
      <div
        id="alert-2"
        className="hidden fixed z-[99]   items-center p-4 mb-4 text-red-600 rounded-lg bg-blue-50 dark:bg-red-800 dark:text-white"
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
          Invalid Email or Number of Members Exceeded.
        </div>
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 border-2 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-red-500 inline-flex items-center justify-center h-6 w-6 dark:bg-red-900 dark:text-white "
          data-dismiss-target="#alert-1"
          aria-label="Close"
          onClick={dismissAlert2}
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
      <div className="w-[90%]">
        <div className="text-3xl xsm:text-4xl text-white flex font-bold  my-4">
          <div className="w-[100%] text-center ">Team Construction </div>
        </div>
        <div className="flex flex-col items-center gap-10  w-full  ">
          {reqEvents?.map(
            (i, index) =>
              i.teamSize > 1 && (
                <motion.div
                  whileHover={{ scale: 0.95 }}
                  transition={{
                    type: 'tween',
                  }}
                  key={i.eventId}
                  className={`bg-black bg-opacity-50 p-4 px-10 mx-4 rounded-lg border-4 w-[95vw] xsm:w-[22rem] md:w-full border-red-500 flex  justify-between md:items-center flex-col md:flex-row   gap-10`}
                >
                  <div className=" py-3 md:py-5  text-left   text-white  text-wrap">
                    <h2 className="text-lg font-bold m-2 ">
                      Event Name: {i.eventName}
                    </h2>
                    <p className="text-lg font-bold m-2 ">
                      Team Size: {i.teamSize}
                    </p>
                  </div>
                  <div
                    id="statuses"
                    className="text-yellow-500 py-3 md:py-5  text-lg "
                  >
                    <Invitestatuses
                      emailRef={emailRef}
                      eventId={i.eventId}
                      teamId={
                        reqTeamsArray[
                          registeredEvents.findIndex((e) => e == i.eventId)
                        ]
                      }
                    />
                  </div>
                  {i.teamSize > 1 && (
                    <div className="flex flex-col items-center justify-around  gap-4">
                      <div>
                        <input
                          type="email"
                          name="inputEmail"
                          id={`inputEmail${index}`}
                          placeholder="Email of partner"
                          className="p-2 w- rounded-sm  w-[9rem] xsm:w-[18rem] md:w-auto text-black"
                        />
                        <p id={`status${index}`} className="mt-3 mx-2"></p>
                      </div>

                      <button
                        className="btn overflow-hidden relative w-40 bg-red-700 text-white py-3 px-2 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-red-600 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-orange-200 hover:before:animate-ping transition-all duration-300"
                        onClick={() => {
                          // validation

                          // creating a schema for strings
                          const emailSchema = z.string().email({
                            message: 'Invalid email address',
                          });

                          let inputEm = emailSchema.safeParse(
                            document.getElementById(`inputEmail${index}`).value
                          );
                          //   console.log(
                          //     reqEvents,
                          //     registeredEvents
                          //   );
                          inputEm.success
                            ? validInputEmailHandler(
                                inputEm.data,

                                reqTeamsArray[
                                  registeredEvents.findIndex(
                                    (e) => e == i.eventId
                                  )
                                ]
                              ) // teamId
                            : invalidInputEmailHandler(index);
                        }}
                      >
                        <span className="relative">Invite</span>
                      </button>
                    </div>
                  )}
                </motion.div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

const alertHandler2 = () => {
  let alertBox = document.getElementById('alert-2');
  alertBox.style.display = 'flex';
};

const dismissAlert2 = () => {
  let alertBox = document.getElementById('alert-2');
  alertBox.style.display = 'none';
};

//

const Participations = ({ emailRef }) => {
  //   console.log(emailRef);
  // const [registeredEvents, setregisteredEvents] = useState([]);
  // const [reqTeamsArray, setreqTeamsArray] = useState([]);
  const [events, setEvents] = useState([]);
  // const [myEvents, setMyEvents] = useState([]);
  // const searchParams = useSearchParams();
  // const emailRef = searchParams.get('emailRef');

  // let reqEvents = [];
  useEffect(() => {
    fetch(`http://127.0.0.1:4000/api/myParticipations/allTeam/${emailRef}`)
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        // console.log(data);
      })
      .catch((error) => console.error('Error fetching events:', error));
  }, []);
  let reqEvents = events;
  // console.log('reqEvents:');
  // console.log(reqEvents, registeredEvents);

  return (
    <div className="md:w-[63rem] flex justify-center my-10 mx-auto">
      {/* {console.log(reqEvents)} */}
      <div
        id="alert-2"
        className="hidden fixed z-[99]   items-center p-4 mb-4 text-red-600 rounded-lg bg-blue-50 dark:bg-red-800 dark:text-white"
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
          Invalid Email or Number of Members Exceeded.
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
      <div className="w-[90%]">
        <div className="text-3xl xsm:text-4xl text-white flex font-bold  my-4">
          <div className="w-[100%] text-center ">My Participations</div>
        </div>
        <div className="flex flex-col items-center gap-10  w-full  ">
          {reqEvents?.map((i, index) => (
            <motion.div
              whileHover={{ scale: 0.95 }}
              transition={{
                type: 'tween',
              }}
              key={index}
              className={`bg-black bg-opacity-50 p-4 px-10 mx-4 rounded-lg border-4 w-[95vw] xsm:w-[22rem] md:w-full border-red-500 flex  justify-between md:items-center flex-col md:flex-row   gap-10`}
            >
              <div className=" py-3 md:py-5  text-left   text-white  text-wrap">
                <h2 className="text-lg font-bold m-2 ">
                  Event Name: {i.event.eventName}
                </h2>
                <p className="text-lg font-bold m-2 ">
                  Team Size: {i.event.teamSize}
                </p>
              </div>
              <div
                id="statuses"
                className="text-yellow-500 py-3 md:py-5  text-lg "
              >
                <ul className="text-white">
                  <li className={` text-xl font-semibold p-2`}>
                    Leader: {i.leader}
                  </li>
                  {i.teamMembers?.map((j, k) => {
                    return (
                      <li key={k} className={` text-xl p-4`}>
                        {j}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

//

const NavigationRoutes = ({ email }) => {
  const navigate = useNavigate();
  // window.addEventListener('beforeunload')

  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center gap-3">
        <Button
          onClick={() => {
            // window.location.href = `/team/ReceivedInvitations?emailRef=${email}`;
            navigate('/team/RecievedInvitations');
          }}
        >
          Invitations
        </Button>
        <Button
          onClick={() => {
            navigate('/team/Participations');
            // window.location.href = `/team/LeadingTeam?emailRef=${email}`;
          }}
        >
          Participations
        </Button>
        <Button
          onClick={() => {
            navigate('/team/My_Team');
            // window.location.href = `/team/LeadingTeam?emailRef=${email}`;
          }}
        >
          Manage Team
        </Button>
      </div>
      <Routes>
        <Route
          path="/team/RecievedInvitations"
          element={<RecievedInvitations emailRef={email} />}
        />
        <Route
          path="/team"
          index
          element={
            <p className="text-2xl md:text-6xl m-5 w-full text-center">
              Click any of Above.
            </p>
          }
        />

        <Route path="/team/My_Team" element={<My_Team emailRef={email} />} />
        <Route
          path="/team/Participations"
          element={<Participations emailRef={email} />}
        />
      </Routes>
    </div>
  );
};

//

const RecievedInvitations = ({ emailRef }) => {
  const [Clicked, setClicked] = useState(0);
  const [invitations, setInvitations] = useState([]);
  const [leaderEmail, setLeaderEmail] = useState('');

  const searchParams = useSearchParams();
  //   const emailRef = searchParams.get('emailRef');

  useEffect(() => {
    // console.log(emailRef);
    setLeaderEmail(emailRef);
    // console.log(leaderEmail);
  }, []);

  useEffect(() => {
    fetch(
      `http://127.0.0.1:4000/api/eventName/inviterName/invitations/email/${emailRef}`
    )
      .then((response) => response.json())
      .then((data) => {
        setInvitations(data);
        // console.log(data.totalInvitation);
        return data;
      })
      // .then((data) => {
      // 	if (data.totalInvitation === 0) {
      // 		console.log("hrere");
      // 		redirect(`/next?emailRef=${emailRef}`);
      // 	} else {
      // 		console.log("totalinvitation = ", data.totalInvitation);
      // 	}
      // })
      .catch((error) => console.error('Error fetching events:', error));
    // .finally(() => {});
  }, [Clicked]);

  return (
    <div className="w-full flex flex-col items-center md:mx-4 pt-10 gap-5">
      {/* {console.log(invitations.invitation)} */}
      <p className="text-4xl text-white font-bold">Invitations</p>
      <div className="flex flex-col items-center justify-center gap-5  md:w-[63rem]  h-full md:p-5">
        <p className="text-white text-2xl">
          Pending Invitations: {invitations ? invitations.totalInvitation : '0'}
        </p>
        {invitations.invitation?.map((i, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{
              type: 'tween',
            }}
            key={i.eventId}
            className={`bg-black bg-opacity-50 p-4 mx-4 rounded-lg border-4 w-full border-red-500 flex max-md:flex-col justify-between gap-10`}
          >
            <div className="">
              {/* <h2 className="text-lg font-bold text-white">Team: {i.teamId}</h2> */}
              <h2 className="text-lg font-bold text-white">
                Event: {i.eventName}
              </h2>
              <p className="text-lg font-bold text-white">
                Inviter: {i.inviterName}
              </p>
              <p className="text-lg font-bold text-white">Status: {i.status}</p>
            </div>
            <div className="flex flex-col justify-around gap-4">
              <button
                className="btn overflow-hidden relative w-25 md:w-40 bg-white text-red-600 py-3 px-2 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-red-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-red-500 hover:before:animate-ping transition-all duration-300"
                onClick={() => {
                  try {
                    fetch('http://127.0.0.1:4000/api/update/team-invite', {
                      method: 'PUT',
                      body: JSON.stringify({
                        teamId: i.teamId,
                        inviterEmail: i.inviterEmail,
                        inviteeEmail: i.inviteeEmail,
                        response: 'accept',
                      }),
                      headers: {
                        'Content-type': 'application/json',
                      },
                    }).then(() => setClicked(Clicked + 1));
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                <span className="relative">Accept</span>
              </button>
              <button
                className="btn overflow-hidden relative w-25 md:w-40 bg-red-700 text-white py-3 px-2 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-red-500 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-orange-200 hover:before:animate-ping transition-all duration-300"
                onClick={() => {
                  try {
                    fetch('http://127.0.0.1:4000/api/update/team-invite', {
                      method: 'PUT',
                      body: JSON.stringify({
                        teamId: i.teamId,
                        inviterEmail: i.inviterEmail,
                        inviteeEmail: i.inviteeEmail,
                        response: 'decline',
                      }),
                      headers: {
                        'Content-type': 'application/json',
                      },
                    }).then(() => setClicked(Clicked + 1));
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                <span className="relative">Decline</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

//
// /api/user / name / ${ email }

const getInviter = async (email) => {
  // console.log('entered');
  let data = fetch(`http://127.0.0.1:4000/api/user/name/${email}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      return data;
    })
    .catch((error) => {
      console.error('Error fetching events:', error);
      // return null;
    });
  return data;
};

const getEvent = async (eventId) => {
  // console.log('entered');
  let data = fetch(`http://127.0.0.1:4000/api/eventName/byEventId/${eventId}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      return data;
    })
    .catch((error) => {
      console.error('Error fetching events:', error);
      // return null;
    });
  return data;
};
//

import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/utils/cn';

const Button2 = ({
  borderRadius = '1.75rem',
  children,
  as: Component = 'button',
  containerClassName,
  borderClassName,
  duration,
  className,
  onClick,
  ...otherProps
}) => {
  return (
    <Component
      className={cn(
        'bg-transparent relative text-xl  h-16 w-40 mb-12 p-[1px] overflow-hidden ',
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              'h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--red-600)_40%,transparent_60%)]',
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          'relative bg-transparent border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-xl antialiased',
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
        onClick={onClick}
      >
        {children}
      </div>
    </Component>
  );
};

const MovingBorder = ({ children, duration = 2000, rx, ry, ...otherProps }) => {
  const pathRef = useRef(null);
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'inline-block',
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
