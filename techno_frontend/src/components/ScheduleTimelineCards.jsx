'use client';
import { motion } from 'framer-motion';
import React from 'react';

const ScheduleTimelineCards = ({ id, date, heading, paragraph }) => {
  return (
    <motion.div
      // whileHover={{ scale: 1.1 }}
      // whileInView={{ scale: 1.1 }}
      // transition={{ delay: }}
      key={id}
      data-aos="flip-right"
      className={`mb-8 flex justify-between  items-center w-full ${
        id % 2 ? ' flex-row-reverse left' : ' right'
      }-timeline`}
    >
      <div className="order-1 w-5/12"></div>
      <motion.div
        whileInView={{ boxShadow: '5px 5px 30px red', scale: 1.2 }}
        viewport={{ margin: '-600px' }}
        className={`order-1 w-5/12 px-3 py-4 text-${id % 2 ? 'right' : 'left'}`}
      >
        <p className="mb-3 text-base text-yellow-300">{date}</p>
        <h4 className="mb-3 font-bold text-lg md:text-2xl">{heading}</h4>
        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
          {paragraph}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ScheduleTimelineCards;
