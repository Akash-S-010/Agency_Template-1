import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ImageCard = ({ url, label }) => {
  return (
    <div className="flex-shrink-0 w-[350px] h-[250px] rounded-3xl overflow-hidden shadow-lg">
      <img 
        src={url}
        alt={label}
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
        <ImageCard key={idx} url={img.url} label={img.label} />
      ))}
    </motion.div>
  );
};

export default function MarqueeImage() {
  const row1Images = [
    {
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
      label: "Modern office workspace",
    },
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
      label: "Team collaboration",
    },
    {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      label: "Analytics dashboard",
    },
    {
      url: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
      label: "Startup meeting",
    },
  ];

  const row2Images = [
    {
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
      label: "Web development",
    },
    {
      url: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=900&q=80",
      label: "Coding workspace",
    },
    {
      url: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
      label: "SEO analytics",
    },
    {
      url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
      label: "Tech brainstorming",
    },
  ];

  const row3Images = [
    {
      url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80",
      label: "Team meeting tech",
    },
    {
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
      label: "Digital marketing setup",
    },
    {
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
      label: "Business strategy",
    },
    {
      url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
      label: "Creative tech team",
    },
  ];

  const row4Images = [
    {
      url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&q=80",
      label: "Office collaboration",
    },
    {
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
      label: "Tech startup workspace",
    },
    {
      url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
      label: "Video conference meeting",
    },
    {
      url: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=900&q=80",
      label: "Professional developer",
    },
  ];

  return (
    <div className="bg-white overflow-hidden h-screen">
      {/* Wrapper with slanted edges */}
      <div 
        className="relative w-full h-full"
        style={{
          clipPath: 'polygon(0 4%, 100% 0, 100% 96%, 0 100%)',
        }}
      >
        {/* Parallax Section with Diagonal Slope */}
        <div 
          className="w-full h-full flex flex-col justify-center" 
          style={{ 
            transform: 'rotate(-18deg) scale(1.15)', 
            transformOrigin: 'center center',
            overflow: 'visible'
          }}
        >
          <ParallaxRow images={row1Images} speed={50} direction={1} baseOffset={-300} />
          <ParallaxRow images={row2Images} speed={60} direction={-1} baseOffset={100} />
          <ParallaxRow images={row3Images} speed={55} direction={1} baseOffset={-200} />
          <ParallaxRow images={row4Images} speed={65} direction={-1} baseOffset={50} />
        </div>
      </div>
    </div>
  );
}