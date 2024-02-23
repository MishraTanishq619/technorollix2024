"use client"
import React, { useState, useEffect } from "react";
import Countdown from "./Countdown";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import Button from "./ui/movingBorderButton";
import LampContainer from "./ui/lamp";
import { motion } from "framer-motion";
import TypewriterEffectSmoothDemo from "./typeWriterDemo";
import HeroParallaxDemo from "./heroParalloxEvents";


function Home() {
    const [isOpen, setIsOpen] = useState(false);

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
        fetch('http://localhost:4000/api/visitCount')
            .then(response => response.json())
            .then(data => setVisitCount(data.visitCount))
            .catch(error => console.error('Error fetching visit count:', error));

        fetch('http://localhost:4000/api/allParticipants')
            .then(response => response.json())
            .then(data => setParticipantCount(data.length))
            .catch(error => console.error('Error fetching participant data:', error));
    }, []);

    return (
        <div className="flex flex-col items-center justify-center bg-cover bg-fixed bg-no-repeat bg-center bg-[url('/star-wars-fight.png')] h-full w-full overflow-x-hidden overflow-y-scroll">
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 450 }}
                    whileInView={{ opacity: 1, y: 200 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative  bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    <img
                        src="tehnoLogo_prev_ui.png"
                        alt="Logo"
                        className="h-[42%]"
                    />
                    <div className="flex justify-center"><TypewriterEffectSmoothDemo /></div>

                    <div className="flex items-center justify-center mb-0">
                        <Countdown />
                    </div>
                    <Button className="px-6 py-2 rounded-md transition-transform transform hover:scale-105" onClick={handleNormalButtonClick}><p className="text-2xl">Register</p></Button>
                </motion.h1>
            </LampContainer>
            {isOpen && (
                <div className="overlay" onClick={handleClosePopup}>
                    <GoogleLogin
                        onSuccess={async credentialResponse => {
                            const userResponse = jwtDecode(credentialResponse.credential)
                            const result = await fetch(`http://localhost:4000/api/user/${userResponse.email}`);
                            console.log(result);
                            if (result.status === 409) {
                                window.location.href = `/registration/next?emailRef=${userResponse.email}`;
                            } else if (result.status === 404) {
                                window.location.href = `/registration?urlRef=${userResponse.picture}/email?=${userResponse.email}/name?=${userResponse.name}`;
                            }
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </div>
            )}
            <HeroParallaxDemo />
        </div>
    );
}

export default Home;
