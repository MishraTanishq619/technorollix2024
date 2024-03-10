'use client';
import React, { useState, useEffect, useRef } from 'react';
import Countdown from './Countdown';
import Button from './ui/movingBorderButton';
import { motion } from 'framer-motion';
import TypewriterEffectSmoothDemo from './typeWriterDemo';

import localFont from 'next/font/local';
const myFont = localFont({ src: '../app/fonts/rog.ttf' });
function Home() {
  //
  let pastedTextValue = '';
  var crsr = document.querySelector('#cursor');

  document.addEventListener('mousemove', function (dets) {
    crsr.style.left = dets.x - 150 + 'px';
    crsr.style.top = dets.y - 150 + 'px';
  });

  //
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [generatedNumber, setGeneratedNumber] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [generateClicked, setgenerateClicked] = useState(false);
  const [retryTimer, setRetryTimer] = useState(300);

  const pasteemail = useRef();

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
    fetch('http://10.60.41.209:4000/api/visitCount')
      .then((response) => response.json())
      .then((data) => setVisitCount(data.visitCount))
      .catch((error) => console.error('Error fetching visit count:', error));

    fetch('http://10.60.41.209:4000/api/allParticipants')
      .then((response) => response.json())
      .then((data) => setParticipantCount(data.length))
      .catch((error) =>
        console.error('Error fetching participant data:', error)
      );
  }, []);

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
    if (isValidEmail) {
      const number = Math.floor(10000 + Math.random() * 90000);
      setGeneratedNumber(number);
      // try {
      let otpdata = await fetch(
        'http://10.60.41.209:4000/api/email/verify/otp',
        {
          method: 'POST',
          body: JSON.stringify({
            user: email,
            number: number,
          }),
          headers: {
            'Content-type': 'application/json',
            // user_email: email,
          },
        }
      ).catch((error) => {});
      // } catch (error) {
      // }
    }
  };

  const verifyCode = async () => {
    if (verificationCode === generatedNumber.toString()) {
      // window.location.href("/registration")
      try {
        const response = await fetch(
          `http://10.60.41.209:4000/api/user/${email}`
        );

        if (response.status === 409) {
          window.location.href = `/registration/invitations?emailRef=${email}`;
        } else if (response.status === 404) {
          // const userData = await response.json();
          // const { picture, email, name } = userData;
          window.location.href = `/registration?urlRef=${email}`;
        } else {
          // Handle other status codes if needed
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
    } else {
      // Code verification failed
      let invalidOTP = document.getElementById('invalidOTP');
      invalidOTP.style.display = 'block';
      return false;
    }
  };
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
      setIsValidEmail(true);
    }
    if (!regex.test(email)) {
      setIsValidEmail(false);
    }

    // return regex.test(email);
  };
  const handlePaste = (event) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData('text');
    setEmail(pastedText);
    setgenerateClicked(false);
    validateEmail(pastedText);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setgenerateClicked(false);
    validateEmail(e.target.value);
  };
  return (
    <div
      className={`absolute mt-0 flex flex-col items-center justify-center ${
        isOpen ? 'glass-morphism' : ''
      } h-full w-full overflow-x-scroll overflow-y-scroll `}
    >
      {/*  */}
      <div id="cursor"></div>
      {/*  */}
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
      {/*  */}
      {/* <LampContainer> */}
      <motion.div
        initial={{ opacity: 0.5, y: -400 }}
        animate={{ opacity: 1, y: window.innerWidth < 800 ? -20 : 100 }}
        transition={{
          delay: 0.3,
          duration: 1.5,
          ease: 'easeInOut',
        }}
        className="relative  bg-gradient-to-br from-slate-300 to-slate-500 py-4  bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <img
          src="techno.PNG"
          alt="Logo"
          className="h-[46%] max-[800px]:h-auto max-[800px]:w-80vw mx-auto overflow-visible"
        />

        <div className="flex justify-center">
          <TypewriterEffectSmoothDemo />
        </div>

        <div className="flex items-center justify-center mb-0">
          <Countdown />
        </div>
        <Button
          className={`px-6 py-2 rounded-md transition-transform transform hover:scale-105 `}
          onClick={handleNormalButtonClick}
        >
          <p className={`${myFont.className} text-2xl neon-text-blue-light`}>
            Register
          </p>
        </Button>
        <br />
        <button
          className={`px-6 py-2 rounded-md transition-transform transform hover:scale-105 `}
          onClick={() => {
            window.location.href = '/team';
          }}
        >
          <p className={`${myFont.className} text-2xl neon-text-blue-light`}>
            Manage Team
          </p>
        </button>
      </motion.div>
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
      {/* <HeroParallaxDemo /> */}
      <div className="fixed right-2 bottom-2 text-white text-lg sm:text-2xl flex items-center tracking-widest">
        Made with{' '}
        <span>
          <img src="heartIcon.png" alt="I" className="h-7 w-6 m-2" />{' '}
        </span>
        by{' '}
        <a
          href="codeforit.in"
          className="neon-text-blue transform transition hover:scale-110"
        >
          CodeForIT
        </a>
      </div>
    </div>
  );
}

export default Home;

function alertHandler() {
  let alertBox = document.getElementById('alert-1');
  alertBox.style.display = 'flex';
}

function dismissAlert() {
  let alertBox = document.getElementById('alert-1');
  alertBox.style.display = 'none';
}
