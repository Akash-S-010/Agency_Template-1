import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    id: "1",
    question: "What services do you offer?",
    answer:
      "We provide end-to-end digital solutions including Web Development, Mobile App Development (iOS & Android), Digital Marketing (SEO, PPC, Social Media), Branding, and Graphic Design. We help businesses build a strong online presence from strategy to execution.",
  },
  {
    id: "2",
    question: "How long does it take to build a website?",
    answer:
      "A standard business website takes 4–6 weeks. Complex platforms (e.g., e-commerce, dashboards) may take 8–12 weeks. We provide a detailed timeline after understanding your requirements during the discovery phase.",
  },
  {
    id: "3",
    question: "Do you offer custom mobile apps?",
    answer:
      "Yes! We develop native and cross-platform mobile apps using React Native, Flutter, Swift, and Kotlin. From MVP to full-scale apps with backend integration, we deliver secure, scalable, and user-centric mobile solutions.",
  },
  {
    id: "4",
    question: "What is your design and branding process?",
    answer:
      "Our branding process includes research, mood boards, logo design, color palette, typography, and brand guidelines. We ensure your visual identity reflects your mission and resonates with your target audience.",
  },
  {
    id: "5",
    question: "Can you help with SEO and digital marketing?",
    answer:
      "Absolutely. We offer SEO audits, on-page optimization, content strategy, link building, Google Ads, and social media marketing. Our data-driven approach improves visibility, traffic, and conversions.",
  },
  {
    id: "6",
    question: "What technologies do you use for web development?",
    answer:
      "We use modern stacks: React, Next.js, Vue.js, Node.js, Laravel, WordPress, Shopify, and headless CMS. We choose the best tools based on performance, scalability, and your business goals.",
  },
  {
    id: "7",
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes. We offer monthly maintenance packages including updates, security monitoring, backups, performance optimization, and priority support. Keep your digital assets secure and running smoothly.",
  },
];

const FaqSection = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center py-16 px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Left Column - Header */}
          <div className="md:col-span-4">
            <h2 className="text-4xl md:text-7xl font-light leading-tight mb-8">
              FAQs
            </h2>
            <p className="text-gray-400 text-xl font-light">
              Got questions? We’ve got answers.
            </p>
            <p className="text-gray-400 hidden md:block">
              Still unsure?{" "}
              <a
                href="#"
                className="text-white font-medium underline-offset-4 hover:underline transition"
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
                  className="w-full flex justify-between items-center py-5 text-left text-white font-medium text-base md:text-lg hover:text-gray-300 transition-colors focus:outline-none cursor-pointer"
                >
                  {item.question}
                  <motion.div
                    animate={{ rotate: openId === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="h-5 w-5 text-gray-500" />
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
                      <div className="pb-6 pr-8 text-gray-300 font-light leading-relaxed">
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
        <p className="mt-12 text-gray-400 text-center md:hidden">
          Still unsure?{" "}
          <a
            href="#"
            className="text-white font-medium underline-offset-4 hover:underline transition"
          >
            Let’s talk
          </a>
        </p>
      </div>
    </section>
  );
};

export default FaqSection;