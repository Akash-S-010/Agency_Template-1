import React, { useState } from "react";
import { motion } from "framer-motion";
import heroBg from "../../assets/hero_bg.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden ">
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center bg"
        initial={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{ willChange: "opacity" }} // Optimize animation
      ></motion.div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-primary">
        {/* <div className="w-full h-full pointer-events-none bg-cover bg-center relative" style={{ backgroundImage: `url(${heroBg})` }}>
        </div> */}
      </div>

      {/* Optimized Overlay*/}
      <div
        className="absolute inset-0  backdrop-blur-xs"
        style={{ willChange: "transform" }} // Optimize rendering
      />

      {/* Content */}
      <motion.div
        className="relative z-20 h-full flex flex-col justify-center items-center px-6 md:px-12 lg:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        style={{ willChange: "opacity" }} // Optimize animation
      >
        <div className="text-left font-heading text-white">
          <h1 className="text-6xl md:text-9xl font-semibold leading-tight mb-8">
            Digital
            <br />
            <span className="ml-0 md:ml-20">Brilliance.</span>
          </h1>
        </div>
        <p className="text-sm text-black font-body md:text-base tracking-wider font-normal absolute bottom-10 z-10 left-6 md:left-12 lg:left-20 uppercase">
          WEBSITES <span className="text-white">•</span> Mobile App{" "}
          <span className="text-white">•</span> Development
        </p>
        <p className="text-sm text-black font-body md:text-base tracking-wider font-normal absolute bottom-10 z-10 right-6 md:right-12 lg:right-20 uppercase">
          DIGITAL MARKETING <span className="text-white">•</span> DESIGNING
        </p>
      </motion.div>
    </section>
  );
};

export default React.memo(Hero);
