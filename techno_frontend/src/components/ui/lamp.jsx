import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { BackgroundBeams } from "./background-beams";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export default function LampContainer({ children, className }) {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* <BackgroundBeams /> */}
      <div
        className={cn(
          "relative flex h-full max-[600px]:h-2/3 flex-col items-center justify-center overflow-hidden bg-transparent w-full rounded-md z-0",
          className
        )}
      >
        {/* <div className="relative flex w-full flex-1 scale-y-25 items-center justify-center isolate z-0 ">
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "60rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              filter: "blur(10px)", // Add blur filter
            }}
            className="absolute inset-auto right-1/2 top-33 h-56 overflow-visible w-[30rem] bg-gradient-conic from-sky-300 via-transparent to-sky-300 text-white [--conic-position:from_70deg_at_center_top]"
          >
            <div className="absolute top-50 w-[100%] left-0 bg-transparent h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            <div className="absolute top-50 w-40 h-[100%] left-0 bg-transparent  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "60rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              filter: "blur(10px)", // Add blur filter
            }}
            className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-sky-300 text-white [--conic-position:from_290deg_at_center_top]"
          >
            <div className="absolute top-50 w-40 h-[100%] right-0 bg-transparent  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
            <div className="absolute top-50 w-[100%] right-0 bg-transparent h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          </motion.div>
          <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-transparent "></div>
        </div> */}
        <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
          {children}
        </div>
      </div>
    </div>
  );
}
