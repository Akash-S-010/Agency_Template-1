import { useState } from "react";
import Button from "../ui/Button";
import BlurText from "../ui/BlurText";

const image =
  "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1200";

const Hero = () => {
  const [contentVisible, setContentVisible] = useState(false);

  return (
    <section className="relative flex h-screen w-full items-center overflow-hidden bg-primary text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

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
                Company
                in Dubai
              </span>
            </h1>
            <p
              className={`max-w-3xl text-lg leading-tight md:leading-relaxed text-white/70 md:text-xl transition-all duration-700 ${
                contentVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Transform your online presence with innovative strategies and
              measurable results. We craft marketing solutions that connect
              audiences, drive engagement, and accelerate business growth.
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
    </section>
  );
};

export default Hero;
