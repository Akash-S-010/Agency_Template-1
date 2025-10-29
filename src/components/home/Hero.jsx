import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import GradientBarsBackground from "../ui/GradientBarsBackground";
import { MoveRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-900">
      <GradientBarsBackground
        numBars={11}
        gradientFrom="#111dbf"
        gradientTo="transparent"
        animationDuration={2}
      />

      {/* Optimized Overlay*/}
      {/* <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-slate-900/80"
        style={{ willChange: "transform" }} // Optimize rendering
      /> */}

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
            <button
              type="button"
              className="group font-medium flex items-center justify-center px-6 py-3 text-md bg-primary text-white border-primary hover:bg-blue-600 hover:border-blue-600  transition-all duration-300 cursor-pointer min-w-[200px]"
            >
              Request a Quote
              <span className="inline-block ml-4 group-hover:translate-x-1 transition">
                <MoveRight
                  size={22}
                  className="text-white"
                />
              </span>
            </button>
            <button
              type="button"
              className="group font-medium flex items-center justify-center px-6 py-3 text-md bg-white text-primary border-white hover:bg-gray-100 hover:text-blue-600 hover:px-8 transition-all duration-300 cursor-pointer min-w-[200px]"
              onClick={() =>
                document
                  .getElementById("why-us-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Why Us
              <span className="inline-block ml-4 group-hover:translate-x-1 transition">
                <MoveRight
                  size={22}
                  className="text-primary group-hover:text-blue-600"
                />
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default React.memo(Hero);
