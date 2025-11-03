import React from "react";
import ServicesHero from "../components/services/ServicesHero";
import MainServices from "../components/services/MainServices";
import PageCTA from "../components/ui/PageCTA";
import ServiceBottom from "../components/services/ServiceBottom";
import ServiceFaqSection from "../components/services/ServiceFaqSection";

const Service = () => {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <ServicesHero />
        </div>
      </section>

      {/* Services Section with Stacking Cards */}
      <section className="bg-slate-50">
        <MainServices />
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <ServiceBottom />
        </div>
      </section>

      {/* Service FAQ Section */}
      <section className=" bg-white">
        <div className="max-w-7xl mx-auto">
          <ServiceFaqSection />
        </div>
      </section>

      {/* Call to Action */}
      <PageCTA
        title="Ready to transform your next chapter?"
        description="Let’s explore how our multidisciplinary team can co-create campaigns, platforms, and products that drive momentum for your brand."
        buttonText="Book a Strategy Call"
      />
    </main>
  );
};

export default Service;
