import React from "react";
import PortfolioHero from "../components/portfolio/PortfolioHero";
import PortfolioGallery from "../components/portfolio/PortfolioGallery";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";

const sectionRevealProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

const Portfolio = () => {
  return (
    <main className="bg-white text-slate-900">
      <motion.div
        className="px-6 md:px-12 lg:px-20"
        {...sectionRevealProps}
      >
        <PortfolioHero />
      </motion.div>

      <motion.section className="bg-slate-50" {...sectionRevealProps}>
        <div className="px-6 md:px-12 lg:px-20">
          <PortfolioGallery />
        </div>
      </motion.section>

      <motion.section
        className="py-24 px-6 md:px-12 lg:px-20 text-slate-900"
        {...sectionRevealProps}
      >
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-normal">
            Ready to elevate your next launch?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Partner with our multidisciplinary team to bring clarity, polish, and measurable outcomes to your digital initiatives.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button text="Start a Project" />
            <span className="text-sm text-slate-500">Let’s build momentum together.</span>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default Portfolio;
