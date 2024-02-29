import React from 'react';
import './Splash.css';
const SplashScreen = () => {
  let x = 50;
  return (
    <div className="w-full h-screen  transform transition-opacity">
      <div class="loader-div">
        <span class={`loader rotate-[${x * 5}deg]`}>
          <span
            style={{ animation: 'loading-dotsA 0.8s infinite ' }}
            className={`rotate-[${x * 5}deg]`}
          ></span>
          <span
            style={{ animation: 'loading-dotsB 0.5s infinite ' }}
            className={`rotate-[${x * 7}deg]`}
          ></span>
          <span
            style={{ animation: 'loading-dotsC 0.4s infinite ' }}
            className={`rotate-[${x * 1}deg]`}
          ></span>
          <span
            style={{ animation: 'loading-dotsD 0.6s infinite ' }}
            className={`rotate-[${x * 3}deg]`}
          ></span>
          <span
            style={{ animation: 'loading-dotsE 0.4s infinite ' }}
            className={`rotate-[${x * 2}deg]`}
          ></span>
          <span
            style={{ animation: 'loading-dotsF 0.5s infinite ' }}
            className={`rotate-[${x * 4}deg]`}
          ></span>
        </span>
      </div>
    </div>
  );
};

export default SplashScreen;
