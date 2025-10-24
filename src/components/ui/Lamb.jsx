import React from "react";
import { motion } from "framer-motion";

const LampContainer = ({ children }) => {
  return (
    <div className="relative flex flex-col items-center w-full min-h-screen bg-black overflow-hidden py-20">
      {/* 💡 Lamp Glow Section */}
      <div className="relative flex items-center justify-center w-full py-32 z-0">
        {/* Left Glow Arc */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute right-1/2 h-56 w-[30rem] bg-gradient-conic from-primary via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute left-0 bottom-0 z-20 w-full h-40 bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute left-0 bottom-0 z-20 w-40 h-full bg-black [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right Glow Arc */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-primary [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute right-0 bottom-0 z-20 w-full h-40 bg-black [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute right-0 bottom-0 z-20 w-40 h-full bg-black [mask-image:linear-gradient(to_left,white,transparent)]" />
        </motion.div>

        {/* Lamp Center Blur and Highlights */}
        <div className="absolute top-1/2 w-full h-48 translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 w-full h-48 bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-primary opacity-50 blur-3xl"></div>

        {/* Lamp Glow Body */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-primary blur-2xl"
        />
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-primary"
        />

        {/* Background Mask to Fade Lamp Bottom */}
        <div className="absolute z-40 w-full h-44 -translate-y-[12.5rem] bg-black"></div>
      </div>

      {/* Content Section — add your content here */}
      <div className="relative z-50 flex flex-col items-center w-full -mt-20 px-5">
        {children}
      </div>
    </div>
  );
};

const LampDemo = () => {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="w-full max-w-4xl"
      >
        <h2 className="text-center text-sm font-normal tracking-widest text-slate-400 mb-16">
          WHY WORK WITH US?
        </h2>

        <div className="space-y-12 text-white">
          {/* 100% - Work completed in house */}
          <div className="flex items-center justify-between border-b border-primary/30 pb-12">
            <div className="text-7xl md:text-7xl font-light">
              100%
            </div>
            <div className="text-2xl md:text-3xl font-light text-right">
              Work completed all
              <br />
              assignments
            </div>
          </div>

          {/* 10+ - Years crafting digital experiences */}
          <div className="flex items-center justify-between border-b border-primary/30 pb-12">
            <div className="text-7xl md:text-8xl font-light">
              10+
            </div>
            <div className="text-2xl md:text-3xl font-light text-right">
              Years crafting digital
              <br />
              experiences
            </div>
          </div>

          {/* 150+ - Happy clients */}
          <div className="flex items-center justify-between pb-12">
            <div className="text-7xl md:text-8xl font-light">
              150+
            </div>
            <div className="text-2xl md:text-3xl font-light text-right">
              Happy clients
            </div>
          </div>
        </div>
      </motion.div>
    </LampContainer>
  );
};

export default LampDemo;
