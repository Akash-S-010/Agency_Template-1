import { useEffect, useMemo, useState } from "react";
import Button from "../ui/Button";
import BlurText from "../ui/BlurText";
import { Highlighter } from "../ui/Highlighter";
import { Particles, initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// const image =
  // "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1200";

const Hero = () => {
  const [contentVisible, setContentVisible] = useState(false);
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setParticlesReady(true));
  }, []);

  const particlesOptions = useMemo(
    () => ({
      background: { color: "transparent" },
      fullScreen: { enable: false },
      fpsLimit: 50,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          grab: { distance: 180, links: { opacity: 0.6 } },
          push: { quantity: 3 },
        },
      },
      particles: {
        number: { value: 35, density: { enable: false } },
        color: { value: "#d7e7ff" },
        opacity: { value: 0.75, random: { enable: true, minimumValue: 0.5 } },
        size: { value: { min: 2, max: 4.5 } },
        move: {
          enable: true,
          speed: 3.3,
          direction: "none",
          center: { x: 88, y: 50, mode: "percent" },
          random: true,
          outModes: { default: "bounce" },
        },
        links: {
          enable: true,
          distance: 130,
          color: "#bcd8ff",
          opacity: 1.5,
          width: 1.2,
        },
        shadow: {
          enable: true,
          blur: 3,
          color: "#5a7bd6",
          offset: {
            x: 0,
            y: 0,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <section className="relative flex h-screen w-full items-center overflow-hidden bg-primary text-white">
      {particlesReady && contentVisible && (
        <Particles
          id="hero-particles"
          className="absolute inset-0"
          options={particlesOptions}
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full items-center px-6 md:px-20 py-24">
        <div className="flex w-full flex-col gap-12">
          <div className="space-y-4">
            <h1 className="font-title text-6xl font-normal md:leading-tight text-white md:text-7xl mt-10">
              <span
                className={`block transition-all duration-700 ${
                  contentVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                The Best
              </span>
              <BlurText
                as="span"
                text="Digital Marketing"
                animateBy="words"
                direction="bottom"
                delay={120}
                className="block font-bold leading-tight text-7xl md:text-9xl"
                wordClassName="text-white"
                onAnimationComplete={() => setContentVisible(true)}
              />
              <span
                className={`block transition-all duration-700 ${
                  contentVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                Company in Dubai
              </span>
            </h1>
            <p
              className={`max-w-3xl text-lg leading-tight md:leading-relaxed text-white/70 md:text-xl transition-all duration-700 ${
                contentVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Transform your online presence with{' '}
              <Highlighter
                action="highlight"
                color="#030c8e"
                active={contentVisible}
                delay={1000}
              >
                 innovative strategies
              </Highlighter>{" "}
              and measurable results. We craft marketing solutions that connect
              audiences , drive engagement, and accelerate {' '}
              <Highlighter
                action="highlight"
                color="#030c8e"
                active={contentVisible}
                delay={2000}
              >
                business growth.
              </Highlighter>
            </p>
          </div>

          <div
            className={`flex flex-col items-start gap-4 sm:flex-row sm:items-center transition-all duration-700 ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <Button
              text="Request a quote"
              variant="secondary"
              className="w-full sm:w-auto !px-4 !py-3 text-sm font-semibold uppercase border border-white/50"
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            />
            <Button
              text="Why us"
              variant="secondary"
              className="w-full sm:w-auto  !px-4 !py-3 text-sm font-semibold uppercase border border-white/50"
              onClick={() => {
                const whySection = document.querySelector("#why-us");
                whySection?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-20%]">
        <h1 className="text-white/10 font-black text-[20vw]">Marketing</h1>
      </div>
    </section>
  );
};

export default Hero;
