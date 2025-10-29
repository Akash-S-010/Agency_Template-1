import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    id: "1",
    question: "What services does Beyond Agency provide?",
    answer:
      "Beyond Agency offers a complete range of top marketing services in Dubai, including SEO, social media marketing, paid advertising, branding, web design, and content marketing — all designed to help your business grow online.",
  },
  {
    id: "2",
    question:
      "Why is Beyond Agency considered the best digital marketing agency in Dubai?",
    answer:
      "We combine creativity, data-driven strategies, and a passionate team of specialists to deliver measurable results, making us recognized as the best digital marketing agency in Dubai.",
  },
  {
    id: "3",
    question: "How experienced is Beyond Agency?",
    answer:
      "As a young yet dynamic company, we have quickly earned a reputation as the best marketing agency in Dubai, helping brands achieve visibility, engagement, and conversions through expert digital campaigns.",
  },
  {
    id: "4",
    question:
      "Can Beyond Agency manage end-to-end digital marketing strategies?",
    answer:
      "Absolutely. As the best digital marketing company in Dubai, we create integrated campaigns that include SEO, social media, paid ads, and content marketing to ensure cohesive and effective online growth.",
  },
  {
    id: "5",
    question: "How does Beyond Agency measure success?",
    answer:
      "We track performance through key metrics such as website traffic, leads, conversions, and ROI to ensure that our top marketing services in Dubai deliver measurable results for every client.",
  },
  {
    id: "6",
    question: "How can I start working with Beyond Agency?",
    answer:
      "Getting started is easy. Contact our team via form, email, or phone, and our experts will provide a tailored strategy to help your business leverage the services of the best digital marketing agency in Dubai.",
  },
];

const FaqSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="min-h-screen bg-white text-black flex items-center justify-center py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Left Column - Header */}
          <div className="md:col-span-4">
            <h2 className="text-4xl md:text-7xl font-light leading-tight mb-8">
              FAQs
            </h2>
            <p className="text-muted text-xl font-light">
              Got questions? We’ve got answers.
            </p>
            <p className="text-muted hidden md:block">
              Still unsure?{" "}
              <a
                href="#"
                className="text-primary font-medium underline-offset-4 hover:underline transition"
              >
                Let’s talk
              </a>
            </p>
          </div>

          {/* Right Column - Accordion */}
          <div className="md:col-span-8 space-y-1">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="border-b border-primary/30 last:border-b-0"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex justify-between items-center py-5 text-left text-black font-medium text-base md:text-lg hover:text-gray-700 transition-colors focus:outline-none cursor-pointer"
                >
                  {item.question}
                  <motion.div
                    animate={{ rotate: openId === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="h-5 w-5 text-primary" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pr-8 text-muted font-light leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <p className="mt-12 text-muted text-center md:hidden">
          Still unsure?{" "}
          <a
            href="#"
            className="text-primary font-medium underline-offset-4 hover:underline transition"
          >
            Let’s talk
          </a>
        </p>
      </div>
    </section>
  );
};

export default FaqSection;
