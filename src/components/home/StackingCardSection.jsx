import React, { useRef, useState, useEffect } from "react";

const cards = [
  {
    title: "Highly Rated",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum illum aspernatur ipsam consequatur, enim provident corrupti quam, aliquid odio!",
    video:"https://www.pexels.com/download/video/4199353/",
    color: "from-blue-500 to-purple-600",
  },
  {
    title: "Fully Accredited",
    description:
      "With quality standard certifications like ISO and Google Partner, we're a trusted partner you can rely on.",
    video:
      "https://www.pexels.com/download/video/8971250/",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Fully Bespoke",
    description:
      "Everything we create is custom-designed and developed by our team, tailored specifically to your needs. No templates, no generic designs, just something unique and made for you!",
    video:
      "https://www.pexels.com/download/video/19197449/",
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Guaranteed Service",
    description:
      "Leading brands rely on us. Our service is fully guaranteed and backed by a warranty, ensuring complete support for every project we take on.",
    video:
      "https://www.pexels.com/download/video/7579950/",
    color: "from-orange-500 to-red-600",
  },
];

function StackCard({ card, index, totalCards, activeIndex }) {
  const cardRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const cardTop = rect.top;

      if (cardTop <= 0) {
        const progress = Math.abs(cardTop) / windowHeight;
        const targetScale = 1 - (totalCards - index) * 0.05;
        const currentScale = Math.max(targetScale, 1 - progress * 0.05);
        setScale(currentScale);
      } else {
        setScale(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [index, totalCards]);

  const topOffset = index * 10;

  return (
    <div
      ref={cardRef}
      className="h-screen flex items-center justify-center sticky"
      style={{ top: `${topOffset}px` }}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-transform duration-300 ease-out"
        style={{
          transform: `scale(${scale})`,
          width: "90%",
          maxWidth: "900px",
          height: "500px",
        }}
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
              className="w-full h-full object-cover block"
              style={{ display: 'block' }}
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
      </div>
    </div>
  );
}

export default function StackingCards() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

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
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black">
      <main ref={containerRef} className="relative pt-20">
        <div className="flex max-w-7xl mx-auto">
          {/* Left Sticky Tracker */}
          <div className="hidden md:flex flex-col w-1/5 justify-center items-start pl-8 pr-4 sticky top-0 h-screen">
            <ul className="space-y-8">
              {cards.map((card, index) => (
                <li key={index} className="relative flex items-center">
                  <div
                    className={`absolute -left-6 w-1 h-10 bg-white rounded-full transition-all duration-300 ${
                      activeIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <span
                    className={`font-light text-lg cursor-pointer transition-all duration-300 ${
                      activeIndex === index
                        ? "text-white translate-x-2"
                        : "text-gray-500 translate-x-0"
                    }`}
                  >
                    {card.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Stacking Cards */}
          <div className="w-full md:w-4/5 md:pl-4">
            {cards.map((card, index) => (
              <StackCard
                key={index}
                card={card}
                index={index}
                totalCards={cards.length}
                activeIndex={activeIndex}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}