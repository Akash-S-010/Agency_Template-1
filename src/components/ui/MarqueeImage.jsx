import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ImageCard = ({ index }) => {
  return (
    <div className="flex-shrink-0 w-[350px] h-[250px] rounded-3xl overflow-hidden shadow-lg">
      <img 
        src={`https://picsum.photos/350/250?random=${index}`}
        alt={`Gallery ${index}`}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const ParallaxRow = ({ images, speed, direction, baseOffset }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [baseOffset + (direction * -200), baseOffset + (direction * speed)]
  );

  return (
    <motion.div
      ref={ref}
      style={{ x }}
      className="flex gap-5 mb-5 will-change-transform"
    >
      {/* Duplicate images for seamless loop */}
      {[...images, ...images].map((img, idx) => (
        <ImageCard key={idx} index={img} />
      ))}
    </motion.div>
  );
};

export default function App() {
  // Generate image indices for each row
  const row1Images = Array.from({ length: 4 }, (_, i) => i);
  const row2Images = Array.from({ length: 4 }, (_, i) => i + 4);
  const row3Images = Array.from({ length: 4 }, (_, i) => i + 8);
  const row4Images = Array.from({ length: 4 }, (_, i) => i + 12);

  return (
    <div className="bg-white overflow-hidden">
      {/* Wrapper with slanted edges */}
      <div 
        className="relative w-full"
        style={{
          clipPath: 'polygon(0 0, 100% 4%, 100% 96%, 0 100%)',
          marginTop: '-5vh',
          marginBottom: '-5vh'
        }}
      >
        {/* Parallax Section with Diagonal Slope */}
        <div 
          className="w-full min-h-screen py-32" 
          style={{ 
            transform: 'rotate(-18deg) scale(1.15)', 
            transformOrigin: 'center center',
            overflow: 'visible'
          }}
        >
          <ParallaxRow images={row1Images} speed={200} direction={1} baseOffset={-300} />
          <ParallaxRow images={row2Images} speed={250} direction={-1} baseOffset={100} />
          <ParallaxRow images={row3Images} speed={225} direction={1} baseOffset={-200} />
          <ParallaxRow images={row4Images} speed={275} direction={-1} baseOffset={50} />
        </div>
      </div>
    </div>
  );
}