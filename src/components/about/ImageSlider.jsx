import React from "react";
import { motion } from "framer-motion";

const InfiniteSlider = ({ images }) => {

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-6"
        animate={{
          x: [0, -50 * images.length + "%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteSlider;
