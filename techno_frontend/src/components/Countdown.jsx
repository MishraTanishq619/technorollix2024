"use client";
import React, { useEffect, useState } from "react";
import localFont from 'next/font/local'
const digitalFont = localFont({src: '../app/fonts/digital.ttf'})
function Countdown() {
  const [day1, setDay1] = useState(0);
  const [hour1, setHour1] = useState(0);
  const [min1, setMin1] = useState(0);
  const [second1, setSecond1] = useState(0);
  const [day2, setDay2] = useState(0);
  const [hour2, setHour2] = useState(0);
  const [min2, setMin2] = useState(0);
  const [second2, setSecond2] = useState(0);

  useEffect(() => {
    const targetTime = new Date("March 20,2024 00:00:00").getTime();

    setInterval(() => {
      const currentTime = new Date().getTime();
      const diff = targetTime - currentTime;
      const day = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hour = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((diff % (1000 * 60)) / 1000);

      var arr_day = day.toString().split("");
      var arr_hour = hour.toString().split("");
      var arr_min = min.toString().split("");
      var arr_second = second.toString().split("");

      if (arr_day.length === 1) {
        arr_day.unshift("0");
        // console.log(arr_day);
      }
      if (arr_hour.length === 1) {
        arr_hour.unshift("0");
        // console.log(arr_hour);
      }
      if (arr_min.length === 1) {
        arr_min.unshift("0");
        // console.log(arr_min);
      }
      if (arr_second.length === 1) {
        arr_second.unshift("0");
        // console.log(arr_second);
      }

      if (diff > 0) {
        setDay1(arr_day[0]);
        setHour1(arr_hour[0]);
        setMin1(arr_min[0]);
        setSecond1(arr_second[0]);
        setDay2(arr_day[1]);
        setHour2(arr_hour[1]);
        setMin2(arr_min[1]);
        setSecond2(arr_second[1]);
      }
    }, 1000);
  }, []);

  return (
    <div className={`flex text-3xl  w-auto h-24 rounded-md  mb-4 max-md:h-16 max-md:p-1  text-white ${digitalFont.className}`}>
      <span className={`glass-morphism neon-text p-4 m-2 rounded-md flex items-center max-md:m-[2px] max-md:p-3 max-md:text-xl`}>
        {day1}
      </span>
      <span className="glass-morphism neon-text p-4 m-2 rounded-md flex items-center max-md:m-[2px] max-md:p-3 max-md:text-xl">
        {day2}
      </span>
      <div className="text-center flex items-center text-[min(3vw,2rem)] max-md:m-[2px] max-md:p-1 max-md:text-xl  ">
        :
      </div>

      <span className=" glass-morphism neon-text  p-4 m-2 rounded-md flex items-center text-[min(3vw,2rem)] max-md:m-[2px] max-md:p-3 max-md:text-xl">
        {hour1}
      </span>
      <span className="  glass-morphism neon-text p-4 m-2 rounded-md flex items-center text-[min(3vw,2rem)] max-md:m-[2px] max-md:p-3 max-md:text-xl">
        {hour2}
      </span>
      <div className="text-center  neon-text flex items-center text-[min(3vw,2rem)] max-md:m-[2px] max-md:p-1 max-md:text-xl ">
        :
      </div>

      <span className="glass-morphism neon-text p-4 m-2 rounded-md flex items-center text-[min(3vw,2rem)] max-md:m-[2px] max-md:p-3 max-md:text-xl">
        {min1}
      </span>
      <span className="glass-morphism neon-text p-4 m-2 rounded-md flex items-center text-[min(3vw,2rem)] max-md:m-[2px] max-md:p-3 max-md:text-xl">
        {min2}
      </span>
      <div className="text-center flex items-center text-[min(3vw,2rem)] max-md:m-[2px] max-md:p-1 max-md:text-xl ">
        :
      </div>

      <span className="glass-morphism neon-text p-4 m-2 rounded-md flex items-center text-[min(3vw,2rem)] max-md:m-[2px] max-md:p-3 max-md:text-xl">
        {second1}
      </span>
      <span className="glass-morphism neon-text text-white p-4 m-2 rounded-md flex items-center text-[min(3vw,2rem)] max-md:m-[2px] max-md:p-3 max-md:text-xl">
        {second2}
      </span>
    </div>
  );
}

export default Countdown;
