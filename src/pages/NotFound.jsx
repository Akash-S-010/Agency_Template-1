import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlurText from "../components/ui/BlurText";
import Button from "../components/ui/Button";

const NotFound = () => {
  const [titleDone, setTitleDone] = useState(false);
  return (
    <main className="bg-white text-black min-h-screen flex items-center">
      <section className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
          <BlurText
            as="h1"
            text="404"
            animateBy="chars"
            direction="center"
            delay={100}
            className="font-extrabold text-[64px] leading-none md:text-[120px] text-black"
            wordClassName="text-black"
            onAnimationComplete={() => setTitleDone(true)}
          />

          <BlurText
            as="h2"
            text="Page not found"
            animateBy="words"
            direction="bottom"
            delay={80}
            className={`font-semibold text-2xl md:text-4xl text-black transition-all duration-500 ${
              titleDone ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            wordClassName="text-black"
          />

          <p
            className={`max-w-2xl text-base md:text-lg text-black/70 mt-2 transition-all duration-500 delay-150 ${
              titleDone ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            The page you are looking for doesn’t exist, was moved, or the URL is incorrect.
          </p>

          <div
            className={`mt-6 flex flex-col sm:flex-row gap-4 sm:justify-center transition-opacity duration-500 delay-300 ${
              titleDone ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link to="/">
              <Button text="Back to Home" className="sm:w-56" />
            </Link>
            <Link to="/services">
              <Button text="View Services" className="sm:w-56" theme="white" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
