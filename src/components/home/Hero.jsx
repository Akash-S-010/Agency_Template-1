import React from "react";
import { MoveRight } from "lucide-react";
import BlurText from "../ui/BlurText";
import heroVideo from "../../assets/globe.mp4";
const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-primary">
      {" "}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        autoPlay
        loop
        muted
        playsInline
      >
        {" "}
        <source src={heroVideo} type="video/mp4" />{" "}
      </video>{" "}
      <div className="absolute inset-0 z-0 bg-primary mix-blend-multiply" />{" "}
      {/* Content - Higher z-index with pointer events */}{" "}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-6 md:px-12 lg:px-20">
        {" "}
        <div className="text-center font-heading text-white w-full max-w-6xl">
          {" "}
          <BlurText
            as="h1"
            text="The Best Digital Marketing Company in Dubai"
            animateBy="words"
            direction="center"
            delay={120}
            className="text-4xl md:text-6xl text-center lg:text-7xl font-title font-bold leading-tight mb-6"
          />{" "}
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed font-normal">
            {" "}
            Transform your online presence with innovative strategies and
            measurable results. We craft marketing solutions that connect
            audiences, drive engagement, and accelerate business growth.{" "}
          </p>{" "}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {" "}
            <button
              type="button"
              className="group font-medium flex items-center justify-center px-6 py-3 text-md bg-primary text-white border border-white hover:bg-blue-700 hover:border-white transition-all duration-300 cursor-pointer min-w-[200px] relative z-20"
            >
              {" "}
              Request a Quote{" "}
              <span className="inline-block ml-4 group-hover:translate-x-1 transition">
                {" "}
                <MoveRight size={22} className="text-white" />{" "}
              </span>{" "}
            </button>{" "}
            <button
              type="button"
              className="group font-medium flex items-center justify-center px-6 py-3 text-md bg-white text-blue-600 border border-white hover:bg-gray-100 hover:text-blue-700 transition-all duration-300 cursor-pointer min-w-[200px] relative z-20"
              onClick={() =>
                document
                  .getElementById("why-us-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {" "}
              Why Us{" "}
              <span className="inline-block ml-4 group-hover:translate-x-1 transition">
                {" "}
                <MoveRight
                  size={22}
                  className="text-blue-600 group-hover:text-blue-700"
                />{" "}
              </span>{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default React.memo(Hero);
