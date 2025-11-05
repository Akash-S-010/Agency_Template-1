import React from "react";
import BlurText from "../ui/BlurText";

const PortfolioHero = () => {
  return (
    <section className="bg-white py-40">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <span className="inline-block px-4 py-2 text-primary text-xs uppercase font-light rounded-full">
          /-- Portfolio
        </span>
        <h1 className="font-title text-3xl md:text-6xl font-normal leading-tight text-black">
          <BlurText
            as="span"
            text="Crafting digital products that inspire confidence"
            animateBy="words"
            direction="bottom"
            delay={80}
            className="block"
          />
        </h1>
        <p className="max-w-3xl text-base md:text-xl text-slate-600 leading-relaxed">
          Explore a curated selection of our recent work across platforms,
          campaigns, and identities. Every engagement is built to deliver
          measurable business impact and delightful user experiences.
        </p>
      </div>
    </section>
  );
};

export default PortfolioHero;
