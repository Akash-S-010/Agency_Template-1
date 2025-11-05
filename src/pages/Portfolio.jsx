import React from "react";
import PortfolioHero from "../components/portfolio/PortfolioHero";
import PortfolioGallery from "../components/portfolio/PortfolioGallery";
import PageCTA from "../components/ui/PageCTA";

const Portfolio = () => {
  return (
    <main className="bg-white text-black">
      <div className="px-6 md:px-12 lg:px-20">
        <PortfolioHero />
      </div>

      <section>
        <div className="px-6 md:px-12 lg:px-20">
          <PortfolioGallery />
        </div>
      </section>

      <PageCTA
        title="Ready to elevate your next launch?"
        description="Partner with our multidisciplinary team to bring clarity, polish, and measurable outcomes to your digital initiatives."
        buttonText="Start a Project"
      />
    </main>
  );
};

export default Portfolio;
