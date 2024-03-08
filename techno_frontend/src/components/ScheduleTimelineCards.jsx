'use client';
import { motion } from 'framer-motion';
import React from 'react';

const ScheduleTimelineCards = ({
  id,
  datetime,
  event_name,
  venue,
  WinWidthBool,
}) => {
  return (
    <motion.div
      // whileHover={{ scale: 1.1 }}
      // whileInView={{ scale: 1.1 }}
      // transition={{ delay: }}
      key={id}
      data-aos="flip-right"
      className={`my-14 md:my-8 flex justify-between  items-center w-full flex-row-reverse md:${
        id % 2 ? ' flex-row-reverse ' : 'flex-row '
      } left-timeline md:${id % 2 ? 'left' : 'right'}-timeline`}
    >
      <div className="order-1 w-5/12"></div>
      <motion.div
        whileInView={{ boxShadow: '5px 5px 30px red', scale: 1.2 }}
        viewport={WinWidthBool ? MobVariant : WebVariant}
        className={`order-1 w-11/12 md:w-5/12 px-3 py-4 text-left md:text-${
          id % 2 ? 'right' : 'left'
        }`}
      >
        <p className="mb-3 text-base text-yellow-300">{datetime}</p>
        <h4 className="mb-3 font-bold text-lg md:text-2xl">{event_name}</h4>
        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
          {venue}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ScheduleTimelineCards;

const WebVariant = { margin: '-410px 0px -810px 0px' };
const MobVariant = { margin: '-400px 0px -400px 0px' };
