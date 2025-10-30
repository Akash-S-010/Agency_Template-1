import React from "react";
import {
  FiCheckCircle,
  FiUsers,
  FiAward,
  FiClock,
  FiShield,
  FiZap,
  FiBarChart2,
  FiGlobe,
  FiHeart,
} from "react-icons/fi";

const features = [
  {
    icon: <FiZap className="w-8 h-8 text-primary" />,
    title: "Creative-First Approach",
    description:
      "Every strategy begins with creativity. We design bold ideas that capture attention, connect emotionally, and inspire action ensuring your brand stands out in a crowded digital world.",
  },
  {
    icon: <FiBarChart2 className="w-8 h-8 text-primary" />,
    title: "Data-Driven Strategies",
    description:
      "We don't guess we analyze. Every decision is backed by real data, helping you invest smarter and achieve measurable results that matter to your business.",
  },
  {
    icon: <FiGlobe className="w-8 h-8 text-primary" />,
    title: "Remote-First Culture",
    description:
      "Our remote-first structure allows us to bring together top marketing minds from around the world. This flexibility fuels innovation, efficiency, and round-the-clock collaboration.",
  },
  {
    icon: <FiHeart className="w-8 h-8 text-primary" />,
    title: "Passionate Team of Specialists",
    description:
      "From strategists and designers to SEO and social media experts, our team lives and breathes digital marketing. Passion drives us, results define us.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading text-primary font-normal mb-4">
            Why Beyond?
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Choosing the right marketing partner can make all the difference and
            Beyond Agency is built to help brands go further, faster. What sets
            us apart isn't just what we do, but how we do it — with creativity,
            precision, and passion driving every campaign.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:bg-primary/5 transition-colors duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
