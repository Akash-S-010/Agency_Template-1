import React from "react";
import ServicesHero from "../components/services/ServicesHero";
import MainServices from "../components/services/MainServices";
import ServicesCTA from "../components/services/ServicesCTA";
import TechStackSection from "../components/services/TechStackSection";

const Service = () => {
  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl px-4 md:px-20">
          <ServicesHero />
        </div>
      </section>

      {/* Services Section with Stacking Cards */}
      <MainServices />

      {/* Tech Stack Section */}
      <div className="px-4 md:px-20 mt-24">
        <TechStackSection />
      </div>

      {/* Call to Action */}
      <ServicesCTA />
    </main>
  );
};

export default Service;
