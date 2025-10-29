import React from "react";
import AboutHero from "../components/about/AboutHero";
import CompanyData from "../components/about/CompanyData";
import WhyChooseUs from "../components/about/WhyChooseUs";
import { TextReveal } from "../components/ui/TextReveal";
import Button from "../components/ui/Button";

const About = () => {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <AboutHero />
        </div>
      </section>

      {/* Company Snapshot */}
      <section className="py-24 bg-slate-50 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <CompanyData />
        </div>
      </section>

      {/* Why Beyond */}
      <section className="px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <WhyChooseUs />
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center space-y-3">
              <h3 className="text-lg md:text-xl font-heading text-primary uppercase tracking-[0.2em]">
                Mission
              </h3>
              <p className="text-slate-600 text-base">
                Empower businesses with innovative marketing that drives measurable growth, strengthens brand presence, and leaves lasting impact.
              </p>
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-lg md:text-xl font-heading text-primary uppercase tracking-[0.2em]">
                Vision
              </h3>
              <p className="text-slate-600 text-base">
                Become the forward-thinking, results-driven partner redefining modern marketing through creativity, strategy, and relentless execution.
              </p>
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-lg md:text-xl font-heading text-primary uppercase tracking-[0.2em]">
                Values
              </h3>
              <p className="text-slate-600 text-base">
                We believe in creativity, data-led decisions, and collaboration. Innovation, adaptability, and passion guide every project from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 md:px-12 lg:px-20 text-slate-900">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-normal">
            Ready to start your next chapter?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Let’s discuss how our team can help you achieve measurable growth with strategic marketing and digital experiences.
          </p>
          <Button text="Get in Touch" className="mx-auto" />
        </div>
      </section>
    </main>
  );
};

export default About;
