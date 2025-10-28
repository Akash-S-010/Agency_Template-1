import React from "react";
import PortfolioHero from "../components/portfolio/PortfolioHero";
import PortfolioGallery from "../components/portfolio/PortfolioGallery";
import Button from "../components/ui/Button";

const Portfolio = () => {
  return (
    <main className="bg-white text-black px-4 md:px-20">
      <PortfolioHero />
      <PortfolioGallery />

      <section className="py-16 text-black">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-normal">
            Ready to Elevate Your Next Launch?
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Partner with our multidisciplinary team to bring clarity, polish, and measurable
            outcomes to your digital initiatives.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button text="Start a Project" />
            <span className="text-sm text-gray-500">Let’s build momentum together.</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
