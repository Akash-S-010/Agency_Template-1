import React from "react";
import BlurText from "../ui/BlurText";

const bannerImage =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&auto=format&fit=crop&q=80";

const AboutHero = () => {
  return (
    <div className="pt-40">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 text-primary text-xs uppercase font-light rounded-full">
                /-- About us
              </span>
              <h1 className="font-title text-5xl md:text-7xl font-light leading-tight text-black">
                <BlurText
                  as="span"
                  text="Digital Marketing"
                  animateBy="words"
                  delay={80}
                  direction="bottom"
                  className="inline-block"
                />
                <BlurText
                  as="span"
                  text="in Dubai"
                  animateBy="words"
                  delay={200}
                  direction="bottom"
                  className="block text-primary"
                />
              </h1>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-1.5 h-20 bg-primary rounded-full flex-shrink-0 mt-3"></div>
              <p className="text-xl md:text-2xl text-muted leading-relaxed font-light max-w-3xl">
                In just one year, Beyond Agency has emerged as a trusted leader in digital marketing in Dubai, delivering results-driven solutions for businesses of all sizes.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
              <img
                src={bannerImage}
                alt="Beyond Agency team collaborating on digital marketing strategies"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-slate-900/30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
