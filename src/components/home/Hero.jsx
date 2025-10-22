import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Lazy-load the iframe when the Hero section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once loaded
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
      style={{ contain: "paint", transform: "translateZ(0)" }} // Optimize rendering
    >
      {/* Loading Fallback */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: isVisible ? 0 : 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{ willChange: "opacity" }} // Optimize animation
      >
        <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
      </motion.div>

      {/* Spline 3D Animation Background (Lazy-Loaded) */}
      {isVisible && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <iframe
            src="https://my.spline.design/3dglassherobg-LeGQVHqrhtEagS0kt0piWIp4/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-full h-[calc(100%+100px)]"
            title="3D Background Animation"
            style={{ pointerEvents: "none" }}
            loading="lazy" // Use lazy loading for iframe
            onLoad={() => console.log("Iframe loaded")}
          />
        </div>
      )}

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
          WEBSITES <span className="text-primary">•</span> Mobile App <span className="text-primary">•</span> Development
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