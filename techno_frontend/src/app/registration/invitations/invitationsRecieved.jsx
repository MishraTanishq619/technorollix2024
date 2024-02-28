'use client';
import { useState, useEffect } from 'react';
import { redirect, useSearchParams } from 'next/navigation';

function ReceivedInvitations() {
  const [invitations, setInvitations] = useState([]);
  const [leaderEmail, setLeaderEmail] = useState('');

  const searchParams = useSearchParams();
  const emailRef = searchParams.get('emailRef');

  useEffect(() => {
    // console.log(emailRef);
    setLeaderEmail(emailRef);
    // console.log(leaderEmail);
  }, []);

  useEffect(() => {
    fetch(
      `http://10.60.41.209:4000/api/event/invitations/email/${emailRef}` // shreyrajput54@gmail.com
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
  }, []);

  return (
    <div className="w-full flex flex-col items-center mx-4 gap-5">
      {/* {console.log(invitations.invitation)} */}
      <p className="text-4xl text-white font-bold">Invitations</p>
      <div className="flex flex-col items-center justify-center gap-5  md:w-[63rem]  h-full p-5">
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
            className={`bg-black bg-opacity-50 p-4 mx-4 rounded-lg border-4 w-full border-red-500 flex justify-between gap-10`}
          >
            <div>
              <h2 className="text-lg font-bold text-white">Team: {i.teamId}</h2>
              <h2 className="text-lg font-bold text-white">
                Event: {i.eventId}
              </h2>
              <p className="text-lg font-bold text-white">
                Inviter: {i.inviterEmail}
              </p>
              <p className="text-lg font-bold text-white">Status: {i.status}</p>
            </div>
            <div className="flex flex-col justify-around gap-4">
              <button
                className="btn overflow-hidden relative w-25 md:w-40 bg-white text-red-600 py-3 px-2 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-red-400 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-red-500 hover:before:animate-ping transition-all duration-300"
                onClick={() => {
                  try {
                    // console.log({
                    // 	teamId: i.teamId,
                    // 	inviterEmail: i.inviterEmail,
                    // 	inviteeEmail: i.inviteeEmail,
                    // 	response: "accept",
                    // });
                    fetch('http://10.60.41.209:4000/api/update/team-invite', {
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
                    }).then(() => window.location.reload());
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                <span className="relative">Accept</span>
              </button>
              <button
                className="btn overflow-hidden relative w-40 bg-red-700 text-white py-3 px-2 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-1/2 before:rounded-full before:bg-red-500 before:top-0 before:left-1/4 before:transition-transform before:opacity-0 before:hover:opacity-100 hover:text-orange-200 hover:before:animate-ping transition-all duration-300"
                onClick={() => {
                  try {
                    fetch('http://10.60.41.209:4000/api/update/team-invite', {
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
                    }).then(() => window.location.reload());
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
      {/* <button
        className="m-4 btn overflow-hidden relative w-64 bg-blue-500 text-white py-4 px-4 rounded-xl font-bold uppercase -- before:block before:absolute before:h-full before:w-full before:bg-blue-400 before:left-0 before:top-0 before:-translate-y-full hover:before:translate-y-0 before:transition-transform"
        onClick={() => {
          window.location.href = `/registration/next?emailRef=${leaderEmail}`;
        }}
      >
        Next
      </button> */}
      <Button2
        onClick={() => {
          window.location.href = `/registration/next?emailRef=${leaderEmail}`;
        }}
        className={'text-8xl'}
      >
        Next
      </Button2>
    </div>
  );
}

export default ReceivedInvitations;

//

import React from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/utils/cn';

function Button2({
  borderRadius = '1.75rem',
  children,
  as: Component = 'button',
  containerClassName,
  borderClassName,
  duration,
  className,
  onClick,
  ...otherProps
}) {
  return (
    <Component
      className={cn(
        'bg-transparent relative text-xl  h-16 w-40 p-[1px] overflow-hidden ',
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
}

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
