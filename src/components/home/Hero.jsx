import React, { useState } from "react";
import ColorBends from "../ui/ColorBends";
import { MoveRight } from "lucide-react";
import BlurText from "../ui/BlurText";

const Hero = () => {
  const [pointerPos, setPointerPos] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / (rect.width || 1)) * 2 - 1;
    const y = -(((event.clientY - rect.top) / (rect.height || 1)) * 2 - 1);
    setPointerPos({ x, y });
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-primary"
      onPointerMove={handlePointerMove}
    >
      <ColorBends
        className="absolute inset-0 z-0 opacity-90"
        colors={["#0c1dbf", "#1d33f5", "#000000"]}
        rotation={28}
        speed={0.25}
        scale={1}
        frequency={1}
        warpStrength={1.05}
        parallax={0.5}
        noise={0.08}
        transparent
        pointerX={pointerPos.x}
        pointerY={pointerPos.y}
      />

      {/* Content - Higher z-index with pointer events */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-6 md:px-12 lg:px-20">
        <div className="text-center font-heading text-white w-full max-w-6xl">
          <BlurText
            as="h1"
            text="The Best Digital Marketing Company in Dubai"
            animateBy="words"
            direction="center"
            delay={120}
            className="text-4xl md:text-6xl text-center lg:text-7xl font-semibold leading-tight mb-6"
          />
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-normal">
            Transform your online presence with innovative strategies and
            measurable results. We craft marketing solutions that connect
            audiences, drive engagement, and accelerate business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="button"
              className="group font-medium flex items-center justify-center px-6 py-3 text-md bg-primary text-white border border-white hover:bg-blue-700 hover:border-white transition-all duration-300 cursor-pointer min-w-[200px] relative z-20"
            >
              Request a Quote
              <span className="inline-block ml-4 group-hover:translate-x-1 transition">
                <MoveRight size={22} className="text-white" />
              </span>
            </button>
            <button
              type="button"
              className="group font-medium flex items-center justify-center px-6 py-3 text-md bg-white text-blue-600 border border-white hover:bg-gray-100 hover:text-blue-700 transition-all duration-300 cursor-pointer min-w-[200px] relative z-20"
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
                  className="text-blue-600 group-hover:text-blue-700"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Hero);