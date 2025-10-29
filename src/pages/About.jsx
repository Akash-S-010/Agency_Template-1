import React from "react";
import AboutHero from "../components/about/AboutHero";
import CompanyData from "../components/about/CompanyData";
import WhyChooseUs from "../components/about/WhyChooseUs";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";

const sectionRevealProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

const About = () => {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <motion.section
        className="pb-24 px-6 md:px-12 lg:px-20 bg-white"
        {...sectionRevealProps}
      >
        <div className="max-w-7xl mx-auto">
          <AboutHero />
        </div>
      </motion.section>

      {/* Company Snapshot */}
      <motion.section
        className="py-24 bg-white px-6 md:px-12 lg:px-20"
        {...sectionRevealProps}
      >
        <div className="max-w-7xl mx-auto">
          <CompanyData />
        </div>
      </motion.section>

      {/* Why Beyond */}
      <motion.section
        className="px-6 md:px-12 lg:px-20 bg-white"
        {...sectionRevealProps}
      >
        <div className="max-w-7xl mx-auto">
          <WhyChooseUs />
        </div>
      </motion.section>

      {/* Mission, Vision & Values */}
      <motion.section
        className="py-24 px-6 md:px-12 lg:px-20 bg-slate-50"
        {...sectionRevealProps}
      >
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
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-24 px-6 md:px-12 lg:px-20 text-slate-900"
        {...sectionRevealProps}
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-normal">
            Ready to start your next chapter?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Let’s discuss how our team can help you achieve measurable growth with strategic marketing and digital experiences.
          </p>
          <Button text="Get in Touch" className="mx-auto" />
        </div>
      </motion.section>
    </main>
  );
};

export default About;
