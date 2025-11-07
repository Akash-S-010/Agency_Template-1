import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Button from "../ui/Button";

const phrases = ["Limitations.", "Expectations.", "Boundaries."];

export default function Hero({ showPreloader = true, onPreloaderComplete }) {
  const [phase, setPhase] = useState(showPreloader ? "preloader" : "hero");
  const [phraseIndex, setPhraseIndex] = useState(0);

  /* ────── PRELOADER (unchanged) ────── */
  useEffect(() => {
    if (!showPreloader) {
      setPhase("hero");
      return undefined;
    }

    const zoomTimeout = setTimeout(() => setPhase("zoom"), 5000);
    const heroTimeout = setTimeout(() => setPhase("hero"), 5600);
    return () => {
      clearTimeout(zoomTimeout);
      clearTimeout(heroTimeout);
    };
  }, [showPreloader]);

  useEffect(() => {
    if (phase === "hero" && showPreloader) {
      onPreloaderComplete?.();
    }
  }, [phase, showPreloader, onPreloaderComplete]);

  useEffect(() => {
    if (phase === "hero" || phase === "zoom") return;
    const cycle = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 1800);
    return () => clearInterval(cycle);
  }, [phase]);

  const currentPhrase = useMemo(() => phrases[phraseIndex], [phraseIndex]);

  const circleTransition =
    phase === "zoom"
      ? { duration: 1.2, ease: "easeInOut" }
      : { duration: 0.4, ease: "easeOut" };

  /* ────── Variants for reveal animation ────── */
  const topTextVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const midContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  const bottomTextVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <>
      {/* ────── PRELOADER (unchanged) ────── */}
      {phase !== "hero" && (
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-white">
          <div className="relative flex items-center justify-center px-6 text-3xl font-semibold tracking-tight text-black md:text-6xl">
            <div className="flex items-baseline gap-2 md:gap-4">
              <motion.span
                animate={{ opacity: phase === "zoom" ? 0 : 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="whitespace-nowrap leading-none"
              >
                We are
              </motion.span>
              <span className="relative inline-flex items-baseline leading-none">
                <motion.span
                  className="relative z-10 -mr-1 mb-1 block h-2 w-2 rounded-full bg-primary md:mb-2 md:h-3 md:w-3"
                  initial={{ scale: 1 }}
                  animate={{ scale: phase === "zoom" ? 520 : 1 }}
                  transition={circleTransition}
                  style={{ transformOrigin: "center" }}
                />
                <motion.span
                  className="absolute -left-1 bottom-1 h-2 w-2 rounded-full bg-primary md:bottom-2 md:h-3 md:w-3"
                  initial={{ scale: 0 }}
                  animate={{ scale: phase === "zoom" ? 520 : 0 }}
                  transition={circleTransition}
                  style={{ transformOrigin: "center" }}
                />
                <motion.span
                  className="font-black text-primary"
                  animate={{ opacity: phase === "zoom" ? 0 : 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  beyond
                </motion.span>
              </span>
              <motion.div
                animate={{ opacity: phase === "zoom" ? 0 : 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative inline-flex w-[200px] items-baseline leading-none md:w-[420px]"
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentPhrase}
                    initial={{ opacity: 0, y: "0.2em" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-0.2em" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="whitespace-nowrap text-3xl font-semibold tracking-tight text-black md:text-6xl"
                    style={{ position: "absolute", left: 0, top: 0 }}
                  >
                    {currentPhrase}
                  </motion.span>
                </AnimatePresence>
                <span className="invisible whitespace-nowrap text-3xl font-semibold tracking-tight text-black md:text-6xl">
                  {currentPhrase}
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {/* ────── HERO SECTION ────── */}
      <section className="relative flex min-h-screen flex-col overflow-hidden bg-primary px-6 pb-16 pt-26 text-white md:px-12 md:pb-20">
        <div className="flex flex-1 flex-col justify-center gap-4 md:gap-16">
          {/* Top-left heading */}
          <motion.div
            key="top-heading"
            variants={topTextVariants}
            initial="hidden"
            animate={phase === "hero" ? "visible" : "hidden"}
            className="max-w-[95vw] text-center"
          >
            <h1 className="font-black font-title uppercase leading-[1.1] md:leading-[0.9] tracking-tight text-[14vw] sm:text-[13vw] md:text-[10vw]">
              Best Digital
              <br />
              Marketing
            </h1>
          </motion.div>

          {/* Main content layout */}
          <motion.div
            key="content-layout"
            variants={bottomTextVariants}
            initial="hidden"
            animate={phase === "hero" ? "visible" : "hidden"}
            className="flex w-full flex-col gap-10"
          >
            <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:gap-12 md:text-right">
              {/* Paragraph + buttons */}
              <motion.div
                key="mid-content"
                variants={midContentVariants}
                initial="hidden"
                animate={phase === "hero" ? "visible" : "hidden"}
                className="order-2 flex w-full max-w-2xl flex-col items-center justify-center text-center md:order-1 md:items-start md:text-left"
              >
                <p className="mb-8 text-sm text-white/80 sm:text-base md:text-lg lg:text-xl md:mb-10">
                  Transform your online presence with innovative strategies and
                  measurable results. We craft marketing solutions that connect
                  audiences, drive engagement, and accelerate business growth.
                </p>
                <div className="flex w-full flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center md:items-start md:justify-start">
                  <Button
                    text="Request a quote"
                    variant="inverted"
                    className="w-full sm:w-auto sm:min-w-[200px] !px-8 !py-3 text-sm font-semibold uppercase tracking-wider md:!py-4 md:text-base"
                    onClick={() => {
                      const contactSection = document.querySelector("#contact");
                      contactSection?.scrollIntoView({ behavior: "smooth" });
                    }}
                  />
                  <Button
                    text="Why us"
                    variant="primary"
                    className="w-full sm:w-auto sm:min-w-[200px] border border-white/50 bg-transparent text-sm font-semibold uppercase tracking-wider text-white !px-8 !py-3 transition hover:border-white hover:bg-white/10 md:!py-4 md:text-base"
                    onClick={() => {
                      const whySection = document.querySelector("#why-us");
                      whySection?.scrollIntoView({ behavior: "smooth" });
                    }}
                  />
                </div>
              </motion.div>

              {/* Right-aligned title */}
              <div className="order-1 flex w-full justify-center md:order-2 md:w-auto md:justify-end md:pb-0">
                <h2 className="font-black font-title uppercase leading-[1] md:leading-[0.9] tracking-tight text-center sm:text-right text-6xl sm:text-[14vw] md:text-[11vw] text-white">
                  Company
                  <br />
                  in Dubai
                </h2>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
