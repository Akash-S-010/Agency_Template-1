import React, { useState } from "react";
import { motion } from "framer-motion";
import heroBg from "../../assets/hero_bg.jpg";
import Button from "../ui/Button";

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
        <div className="text-center font-heading text-white w-full max-w-6xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
            The Best Digital Marketing
            <br />
            Company in Dubai
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto font-light">
            Transform your online presence with innovative strategies and
            measurable results. We craft marketing solutions that connect
            audiences, drive engagement, and accelerate business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              text="Request a Quote"
              className="min-w-[200px] bg-primary text-white border-white hover:bg-white hover:text-primary"
            />
            <Button
              text="Why Us"
              className="min-w-[200px] bg-transparent text-white border-white hover:bg-white hover:text-primary"
              onClick={() =>
                document
                  .getElementById("why-us-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default React.memo(Hero);
