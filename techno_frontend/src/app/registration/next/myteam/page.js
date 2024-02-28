'use client';
import { z } from 'zod';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Invitestatuses from './Invitestatuses';
import { motion } from 'framer-motion';

const page = () => {
  const [registeredEvents, setregisteredEvents] = useState([]);
  const [reqTeamsArray, setreqTeamsArray] = useState([]);
  const [events, setEvents] = useState([]);
  // const [myEvents, setMyEvents] = useState([]);
  const searchParams = useSearchParams();
  const emailRef = searchParams.get('emailRef');

  let reqEvents = [];
  useEffect(() => {
    fetch('http://10.60.41.209:4000/api/allEvents')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));

    fetch(`http://10.60.41.209:4000/api/registeredTeam/eventId/${emailRef}`)
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
  reqEvents = events.filter((e) => registeredEvents.includes(e.eventId));

  // setMyEvents(reqEvents);

  const validInputEmailHandler = async (email, teamId) => {
    // console.log(email, teamId);

    // to get team id
    let response = await fetch(
      'http://10.60.41.209:4000/api/create/team-invite',
      {
        method: 'POST',
        body: JSON.stringify({
          teamId: teamId,
          inviterEmail: emailRef,
          inviteeEmail: email,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        return data;
      })
      .catch((error) => console.error('Error fetching TeamId:', error));
    window.location.reload();

    // console.log("response: ", response);
  };

  const invalidInputEmailHandler = (index) => {
    let inputEmail = document.getElementById(`inputEmail${index}`);

    // alert(<AlertComponent />);
    alertHandler();
  };
  return (
    <div className="w-full flex justify-center my-10">
      {/* {console.log(reqEvents)} */}
      <div
        id="alert-1"
        className="hidden absolute z-[99]   items-center p-4 mb-4 text-red-600 rounded-lg bg-blue-50 dark:bg-red-800 dark:text-white"
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
        <p className="text-4xl text-white flex font-bold  my-4">
          <p className="w-[100%] text-center md:ml-[10%]">Team Construction </p>

          <button
            className="bg-red-500 text-3xl px-6 py-2 mb-4  rounded-md transition-transform item-center justify-center transform hover:scale-105"
            onClick={() => {
              window.location.href = '/';
            }}
          >
            Home
          </button>
        </p>
        <div className="flex flex-col items-center gap-10  w-full  ">
          <p className="text-white text-2xl w-full py-4 text-left">
            Different Events and Your Team:
          </p>
          {reqEvents?.map((i, index) => (
            <motion.div
              whileHover={{ scale: 0.95 }}
              transition={{
                type: 'tween',
              }}
              key={i.eventId}
              className={`bg-black bg-opacity-50 p-4 px-10 mx-4 rounded-lg border-4 w-[22rem] md:w-full border-red-500 flex  justify-between md:items-center flex-col md:flex-row   gap-10`}
            >
              <div className=" py-3 md:py-5  text-left   text-white  text-nowrap">
                <h2 className="text-lg font-bold m-2 ">
                  Event Name: {i.eventName}
                </h2>
                <h2 className="text-lg font-bold m-2 ">
                  Entry Fee: {i.entryFee}
                </h2>
                <p className="text-lg font-bold m-2 ">
                  Prize Money: {i.priceMoney}
                </p>
                <p className="text-lg font-bold m-2 ">
                  Team Size: {i.teamSize}
                </p>
              </div>
              <div
                id="statuses"
                className="text-yellow-500 py-3 md:py-5 text-lg "
              >
                <Invitestatuses emailRef={emailRef} eventId={i.eventId} />
              </div>
              <div className="flex flex-col items-center justify-around  gap-4">
                <div>
                  <input
                    type="email"
                    name="inputEmail"
                    id={`inputEmail${index}`}
                    placeholder="Email of partner"
                    className="p-2 rounded-sm"
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

                    inputEm.success
                      ? validInputEmailHandler(
                          inputEm.data,
                          reqTeamsArray[index]
                        )
                      : invalidInputEmailHandler(index);
                  }}
                >
                  <span className="relative">Invite</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

const AlertComponent = () => {
  return (
    <div
      id="alert-1"
      class="flex items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
      role="alert"
    >
      <svg
        class="flex-shrink-0 w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <span class="sr-only">Info</span>
      <div class="ms-3 text-sm font-medium">
        A simple info alert with an{' '}
        <a href="#" class="font-semibold underline hover:no-underline">
          example link
        </a>
        . Give it a click if you like.
      </div>
      <button
        type="button"
        class="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
        data-dismiss-target="#alert-1"
        aria-label="Close"
      >
        <span class="sr-only">Close</span>
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

function alertHandler() {
  let alertBox = document.getElementById('alert-1');
  alertBox.style.display = 'flex';
}

function dismissAlert() {
  let alertBox = document.getElementById('alert-1');
  alertBox.style.display = 'none';
}
