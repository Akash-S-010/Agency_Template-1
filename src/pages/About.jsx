import React from "react";
import AboutHero from "../components/about/AboutHero";
import CompanyData from "../components/about/CompanyData";
import WhyChooseUs from "../components/about/WhyChooseUs";
import MissionVisionValues from "../components/about/MissionVisionValues";
import ReusableFAQ from "../components/ui/ReusableFAQ";
import { motion } from "framer-motion";

const sectionRevealProps = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

const aboutFaqData = [
  {
    id: "1",
    question: "How did Beyond Agency start?",
    answer:
      "Beyond Agency was founded to help brands achieve success in digital marketing Dubai, combining creativity, strategy, and measurable results for impactful campaigns.",
  },
  {
    id: "2",
    question: "How long has Beyond Agency been in business?",
    answer:
      "Although just over a year old, our team has already earned a strong reputation as the best advertising company in Dubai, delivering innovative and effective marketing solutions.",
  },
  {
    id: "3",
    question: "What is Beyond Agency’s mission and vision?",
    answer:
      "Our mission is to empower businesses with creative strategies that drive growth, while our vision is to be recognized as a results-driven marketing partner, redefining modern marketing for every client.",
  },
  {
    id: "4",
    question: "What makes Beyond Agency unique?",
    answer:
      "We combine a creative-first approach with data-driven strategies. As a passionate team of specialists in digital marketing Dubai, we craft campaigns that go beyond ordinary marketing.",
  },
  {
    id: "5",
    question: "Who is part of the Beyond Agency team?",
    answer:
      "Our team consists of strategists, designers, SEO and social media experts, and content creators — all focused on delivering measurable results and helping brands grow in Dubai and beyond.",
  },
  {
    id: "6",
    question: "How does Beyond Agency approach client projects?",
    answer:
      "We use insight, creativity, and strategy to plan, execute, and optimize campaigns. This approach ensures every project delivers impactful results, reflecting our reputation as one of the best advertising companies in Dubai.",
  },
];

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
        className="py-24 px-6 md:px-12 lg:px-20 bg-white"
        {...sectionRevealProps}
      >
        <div className="max-w-7xl mx-auto">
          <WhyChooseUs />
        </div>
      </motion.section>

      {/* Mission, Vision & Values */}
      <motion.section
        className="py-24 px-6 md:px-12 lg:px-20 bg-white"
        {...sectionRevealProps}
      >
        <MissionVisionValues />
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="pb-24 px-6 md:px-12 lg:px-20 bg-white"
        {...sectionRevealProps}
      >
        <div className="max-w-7xl mx-auto">
          <ReusableFAQ
            title="FAQs"
            subtitle="Learn more about Beyond Agency’s story and approach."
            ctaText="Need more details?"
            faqData={aboutFaqData}
          />
        </div>
      </motion.section>
    </main>
  );
};

export default About;
