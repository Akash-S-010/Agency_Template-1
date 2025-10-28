import React from "react";

const PortfolioHero = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <span className="text-sm uppercase tracking-[0.3em] text-primary/70">
          Portfolio
        </span>
        <h1 className="font-heading text-3xl md:text-6xl font-normal leading-tight">
          Crafting Digital Products That Inspire Confidence
        </h1>
        <p className="max-w-3xl text-lg md:text-xl text-gray-600 leading-relaxed">
          Explore a curated selection of our recent work spanning web platforms, mobile
          applications, branding systems, and product identity. Every project is designed to
          deliver measurable business impact and delightful user experiences.
        </p>
      </div>
    </section>
  );
};

export default PortfolioHero;
