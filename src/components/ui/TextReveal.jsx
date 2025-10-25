import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function TextReveal({ className = "" }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const text =
    "We believe in a world where technology fosters your everyday experiences. And our mission is to make it happen!";
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={`relative z-0 h-[200vh] ${className}`}>
      {/* Sticky viewport that holds the centered text */}
      <div className="sticky top-0 flex h-screen items-center justify-center bg-transparent px-6">
        <div className="max-w-3xl w-full">
          <p className="flex flex-wrap text-left text-2xl leading-tight text-white/30 md:text-3xl lg:text-4xl xl:text-5xl">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word
                  key={i}
                  progress={scrollYProgress}
                  range={[start, end]}
                >
                  {word}
                </Word>
              );
            })}{" "}
            {/* space after the last word */}
          </p>
        </div>
      </div>
    </div>
  );
}

function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mx-1 md:mx-1.5 lg:mx-2">
      {/* faint background copy */}
      <span className="absolute inset-0 font-light text-white/20">
        {children}
      </span>

      {/* animated revealing word */}
      <motion.span
        style={{ opacity }}
        className="font-light text-white"
      >
        {children}
      </motion.span>
    </span>
  );
}