"use client"
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const EventSelector = ({
  items,
  className,
  onClick
}) => {
  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [additionalDetails, setAdditionalDetails] = useState([]);
  const [leaderEmail, setLeaderEmail] = useState();
  const handleEventCardClick = (eventId) => {
      // Check if the event is already selected
      const selectedIndex = selectedEvents.indexOf(eventId);
      const isEventSelected = selectedIndex !== -1;

      if (isEventSelected) {
          // If already selected, remove from selectedEvents array
          const updatedSelectedEvents = [...selectedEvents];
          updatedSelectedEvents.splice(selectedIndex, 1);
          setSelectedEvents(updatedSelectedEvents);

          // Remove additional details for the unselected event
          const updatedAdditionalDetails = [...additionalDetails];
          updatedAdditionalDetails.splice(selectedIndex, 1);
          setAdditionalDetails(updatedAdditionalDetails);
      } else {
          // If not selected, add to selectedEvents array
          setSelectedEvents([...selectedEvents, eventId]);
          // Add empty additional detail placeholder
          setAdditionalDetails([...additionalDetails, '']);
      }
  };

  // Function to handle additional details input change
  const handleAdditionalDetailsChange = (index, value) => {
      const updatedAdditionalDetails = [...additionalDetails];
      updatedAdditionalDetails[index] = value;
      setAdditionalDetails(updatedAdditionalDetails);
  };

  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 ${className}`}
      onClick={() => handleEventCardClick(event.eventId)}
    >
      {items.map((item, idx) => (
        <div
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}) => {
  return (
    <div
      className={`rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent border-white/[0.2] group-hover:border-slate-700 relative z-20 ${className}`}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}) => {
  return (
    <h4 className={`text-zinc-100 font-bold tracking-wide mt-4 ${className}`}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}) => {
  return (
    <p
      className={`mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm ${className}`}
    >
      {children}
    </p>
  );
};
