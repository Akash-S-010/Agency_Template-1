import React from "react";
import PortfolioHero from "../components/portfolio/PortfolioHero";
import PortfolioGallery from "../components/portfolio/PortfolioGallery";
import PageCTA from "../components/ui/PageCTA";

const Portfolio = () => {
  return (
    <main className="bg-white text-slate-900">
      <div className="px-6 md:px-12 lg:px-20">
        <PortfolioHero />
      </div>

      <section className="bg-slate-50">
        <div className="px-6 md:px-12 lg:px-20">
          <PortfolioGallery />
        </div>
      </section>

      <PageCTA
        title="Ready to elevate your next launch?"
        description="Partner with our multidisciplinary team to bring clarity, polish, and measurable outcomes to your digital initiatives."
        buttonText="Start a Project"
        secondaryText="Let’s build momentum together."
      />
    </main>
  );
};

export default Portfolio;
