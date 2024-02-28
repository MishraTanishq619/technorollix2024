'use client';
import React, { useState, useEffect } from 'react';
import Countdown from './Countdown';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import Button from './ui/movingBorderButton';
import LampContainer from './ui/lamp';
import { motion } from 'framer-motion';
import TypewriterEffectSmoothDemo from './typeWriterDemo';
import HeroParallaxDemo from './heroParalloxEvents';

import localFont from 'next/font/local';
const myFont = localFont({ src: '../app/fonts/rog.ttf' });

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [generatedNumber, setGeneratedNumber] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [generateClicked, setgenerateClicked] = useState(false);
  const [retryTimer, setRetryTimer] = useState(300);

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
    console.log('called');
    if (isValidEmail) {
      console.log('entered');
      const number = Math.floor(10000 + Math.random() * 90000);
      // console.log(number);
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
      ).catch((error) => {
        console.log('Error during fetch:', error);
      });
      console.log(`otpdata ${otpdata}`);
      // } catch (error) {
      // 	console.log(error);
      // }
    }
    console.log('exit');
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
      console.log('Code verified successfully');
    } else {
      // Code verification failed
      console.log('Invalid verification code');
    }
  };
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
      setIsValidEmail(true);
      console.log('set');
    }
    if (!regex.test(email)) {
      setIsValidEmail(false);
      console.log('not set');
    }
    console.log(regex.test(email));

    // return regex.test(email);
  };

  return (
    <div
      className={`absolute mt-10 flex flex-col items-center justify-center ${
        isOpen ? 'glass-morphism' : ''
      } h-full w-full overflow-x-hidden overflow-y-scroll`}
    >
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 0 }}
          whileInView={{ opacity: 1, y: 400 }}
          transition={{
            delay: 0.3,
            duration: 1.5,
            ease: 'easeInOut',
          }}
          className="relative  bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <img
            src="techno.PNG"
            alt="Logo"
            className="h-[46%] max-[800px]:h-auto max-[800px]:w-80vw mx-auto"
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
        </motion.h1>
      </LampContainer>
      {isOpen && (
        // <div className="overlay" onClick={handleClosePopup}>
        // 	<GoogleLogin
        // 		onSuccess={async (credentialResponse) => {
        // 			const userResponse = jwtDecode(
        // 				credentialResponse.credential
        // 			);
        // 			const result = await fetch(
        // 				`http://10.60.41.209:4000/api/user/${userResponse.email}`
        // 			);
        // 			console.log(result);
        // 			if (result.status === 409) {
        // 				window.location.href = `/registration/invitations?emailRef=${userResponse.email}`;
        // 			} else if (result.status === 404) {
        // 				window.location.href = `/registration?urlRef=${userResponse.picture}/email?=${userResponse.email}/name?=${userResponse.name}`;
        // 			}
        // 		}}
        // 		onError={() => {
        // 			console.log("Login Failed");
        // 		}}
        // 	/>
        // </div>
        <div
          onClick={handleClosePopup}
          className="overlay flex flex-col items-center justify-center h-full w-full overflow-x-hidden overflow-y-scroll"
        >
          <div className="bg-[#ffffff66] text-white shadow-md rounded-lg p-6 -mt-[8rem] px-10">
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
                  className={`bg-transparent border-2 px-2 py-2 text-white w-${
                    !showVerification ? 50 : 50
                  }`}
                />
                {/* <button onClick={generateNumber} className="btn text-white  bg-orange-400 ml-4  rounded-md text-1xl px-3 py-1 justify-end"> */}
                {!showVerification ? (
                  <button
                    onClick={generateNumber}
                    className="text-white  bg-red-600 p-1 px-3 text-sm  "
                  >
                    Get OTP
                  </button>
                ) : retryTimer > 0 ? (
                  <button
                    disabled
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    {retryTimer}...
                  </button>
                ) : (
                  <button
                    onClick={generateNumber}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Retry
                  </button>
                )}
                {!isValidEmail && generateClicked && (
                  <p className="text-red-500 border border-red-500 p-2 font-bold right-20 ml-4">
                    Invalid Email
                  </p>
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
                      onChange={(e) => setVerificationCode(e.target.value)}
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
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <HeroParallaxDemo /> */}
    </div>
  );
}

export default Home;
