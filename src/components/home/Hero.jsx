import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import BlurText from "../ui/BlurText";
import { Highlighter } from "../ui/Highlighter";
import { SplashCursor } from "../ui/SplashCursor";

// const image =
// "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1200";

const Hero = () => {
  const [contentVisible, setContentVisible] = useState(false);
  const heroRef = useRef(null);
  const navigate = useNavigate();

  return (
    <section ref={heroRef} className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 z-0">
        <SplashCursor targetRef={heroRef} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen select-none w-full  items-center justify-center px-6 py-24 md:px-20">
        <div className="flex w-full flex-col items-center gap-12 text-center mt-10">
          <div className="space-y-4">
            <h1 className="mt-6 font-title text-6xl font-light text-white md:text-7xl md:leading-tight">
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
                className="block font-extrabold leading-tight text-7xl md:text-9xl"
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
              className={`mx-auto max-w-3xl text-lg leading-tight text-white/70 transition-all duration-700 md:text-xl md:leading-relaxed ${
                contentVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Transform your online presence with innovative strategies and
              measurable results. We craft{" "}
              <Highlighter
                action="highlight"
                color="#030c8e"
                active={contentVisible}
                delay={1000}
              >
                marketing solutions
              </Highlighter>{" "}
              that connect audiences , drive engagement, and accelerate{" "}
              <Highlighter
                action="underline"
                color="#ccfe00"
                active={contentVisible}
                delay={2000}
              >
                business growth.
              </Highlighter>
            </p>
          </div>

          <div
            className={`w-full flex flex-col items-center gap-4 transition-all duration-700 md:flex-row md:justify-center ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <Button
              text="Request a quote"
              variant="secondary"
              className="w-full !px-4 !py-3 text-sm font-semibold uppercase border border-white/50 md:w-56"
              onClick={() => navigate('/contact')}
            />
            <Button
              text="Why us"
              variant="secondary"
              className="w-full !px-4 !py-3 text-sm font-semibold uppercase border border-white/50 md:w-56"
              onClick={() => {
                const whySection = document.querySelector("#why-us");
                whySection?.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2">
        <h1 className="text-center font-black text-[20vw] text-white/10">
          Marketing
        </h1>
      </div>
    </section>
  );
};

export default Hero;
