import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ReusableFAQ = ({ faqData, title = "FAQs", subtitle = "Got questions? We’ve got answers.", ctaText = "Still unsure? Let’s talk" }) => {
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
              {title}
            </h2>
            <p className="text-muted text-xl font-normal">
              {subtitle}
            </p>
            <p className="text-muted font-normal hidden md:block">
              {ctaText}{" "}
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
                className="border-b border-gray-300 last:border-b-0"
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
                    <ChevronDown className="h-5 w-5 text-black" />
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
                      <div className="pb-6 pr-8 text-muted font-normal leading-relaxed">
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
          {ctaText}{" "}
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

export default ReusableFAQ;
