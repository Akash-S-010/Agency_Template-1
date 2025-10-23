import React, { useState, Suspense } from "react";
import { motion } from "framer-motion";
const SplineBg = React.lazy(() => import("../ui/SplineBg"));

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Loading Fallback */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{ willChange: "opacity" }} // Optimize animation
      ></motion.div>

      {/* Spline 3D Animation Background (replaced iframe with Spline component) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="w-full h-full pointer-events-none">
          {/* SplineBg handles its own rendering */}
          <Suspense fallback={<div>Loading...</div>}>
            <SplineBg />
          </Suspense>
        </div>
      </div>

      {/* Optimized Overlay (Removed backdrop-blur) */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/60 to-black/30 z-10"
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
        <p className="text-sm text-gray-500 font-body md:text-base tracking-wider font-normal absolute bottom-10 z-10 left-6 md:left-12 lg:left-20 uppercase">
          WEBSITES <span className="text-primary">•</span> Mobile App{" "}
          <span className="text-primary">•</span> Development
        </p>
        <p className="text-sm text-gray-500 font-body md:text-base tracking-wider font-normal absolute bottom-10 z-10 right-6 md:right-12 lg:right-20 uppercase">
          DIGITAL MARKETING <span className="text-primary">•</span> DESIGNING
        </p>
      </motion.div>
    </section>
  );
};

// Memoize the Hero component to prevent unnecessary re-renders
export default React.memo(Hero);
