import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  {
    title: "Highly Rated",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum illum aspernatur ipsam consequatur, enim provident corrupti quam, aliquid odio!",
    video: "https://www.pexels.com/download/video/4199353/",
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "Fully Accredited",
    description:
      "With quality standard certifications like ISO and Google Partner, we're a trusted partner you can rely on.",
    video: "https://www.pexels.com/download/video/8971250/",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Fully Bespoke",
    description:
      "Everything we create is custom-designed and developed by our team, tailored specifically to your needs. No templates, no generic designs, just something unique and made for you!",
    video: "https://www.pexels.com/download/video/19197449/",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Guaranteed Service",
    description:
      "Leading brands rely on us. Our service is fully guaranteed and backed by a warranty, ensuring complete support for every project we take on.",
    video: "https://www.pexels.com/download/video/7579950/",
    color: "from-orange-500 to-red-600",
  },
];

function StackCard({ card, index, totalCards }) {
  const cardRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (totalCards - index) * 0.05]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.5, 1, 1]
  );

  return (
    <div
      ref={cardRef}
      className="h-screen flex items-center justify-center sticky"
      style={{ top: `${index * 10}px` }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="bg-white rounded-3xl shadow-2xl overflow-hidden w-[90%] max-w-[900px] h-[500px]"
      >
        <div className="h-full flex flex-col md:flex-row">
          {/* Left Video */}
          <div className="w-full md:w-1/2 h-48 md:h-full relative overflow-hidden bg-black">
            <video
              src={card.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-normal mb-4 text-black">
              {card.title}
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {card.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SidebarTracker({ cards }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking && containerRef.current) {
        window.requestAnimationFrame(() => {
          const container = containerRef.current;
          const scrollTop = window.pageYOffset;
          const containerTop = container.offsetTop;
          const containerHeight = container.offsetHeight;

          const scrollProgress =
            (scrollTop - containerTop) / (containerHeight - window.innerHeight);
          const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

          const index = Math.min(
            Math.floor(clampedProgress * cards.length),
            cards.length - 1
          );
          setActiveIndex(Math.max(0, index));

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [cards.length]);

  return (
    <div
      ref={containerRef}
      className="hidden md:flex flex-col w-1/5 justify-center items-start pl-8 pr-4 sticky top-0 h-screen"
    >
      <ul className="space-y-8">
        {cards.map((card, index) => (
          <motion.li
            key={index}
            className="relative flex items-center"
            initial={false}
            animate={{
              x: activeIndex === index ? 8 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className="absolute -left-6 w-1 h-10 bg-white rounded-full"
              initial={false}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <span
              className={`font-light text-lg cursor-pointer transition-colors duration-300 ${
                activeIndex === index ? "text-white" : "text-gray-500"
              }`}
            >
              {card.title}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default function StackingCards() {
  return (
    <div className="bg-black">
      <main className="relative pt-20">
        <div className="flex max-w-7xl mx-auto">
          {/* Left Sticky Tracker */}
          <SidebarTracker cards={cards} />

          {/* Right Stacking Cards */}
          <div className="w-full md:w-4/5 md:pl-4">
            {cards.map((card, index) => (
              <StackCard
                key={index}
                card={card}
                index={index}
                totalCards={cards.length}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}