"use client"
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const HoverEffect = ({
  items,
  className,
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={`px-20 max-[1200px]:px-5 py-10 w-full flex flex-wrap gap-10${className}`}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
        className="relative group block p-2 h-full "
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full p-2 bg-neutral-200 bg-red-500/[0.8] block rounded-3xl"
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
            <CardImage src={item.image}/>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.email}</CardDescription>
            <CardDescription>{item.role}</CardDescription>
            <CardDescription>{item.phoneNumber}</CardDescription>
          </Card>
        </Link>
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
      className={`rounded-2xl h-80 w-60 overflow-hidden p-2 md:p-4 bg-black bg-opacity-20 border border-transparent border-white/[0.2] group-hover:border-slate-700 relative z-8 ${className}`}
    >
      <div className="relative z-5">
        <div className="p-0 md:p-4">{children}</div>
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
      className={`mt-1 text-zinc-400 tracking-wide leading-relaxed text-sm ${className}`}
    >
      {children}
    </p>
  );
};

export const CardImage = ({
  src,
  className,
  children,
}) => {
  return (
    <div>
      <img
      className={`mt-1 text-zinc-400 h-40 w-40 rounded-full tracking-wide leading-relaxed text-sm ${className}`}
      src = {src}
    >
      {children}
    </img>
    </div>
  );
};
