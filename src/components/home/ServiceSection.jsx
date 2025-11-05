import React from "react";
import {
  FaPalette,
  FaSearch,
  FaHashtag,
  FaBullhorn,
  FaChartLine,
  FaCode,
  FaUsers,
  FaVideo,
} from "react-icons/fa";
import { FaP } from "react-icons/fa6";
import { Link } from "react-router-dom";

// Utility function for class merging
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Variants configuration (only differences)
const VARIANTS = {
  card1: {
    container: "bg-white z-0 border border-gray-300 shadow-md",
    hover: "group-hover:text-white",
    circle: {
      show: true,
      base: "absolute -z-10 -top-4 -right-4 bg-primary h-8 w-8 rounded-full origin-center transition-transform ease-out",
      hover: "duration-600 group-hover:scale-[35]",
      initial: "scale-100",
    },
    corner: {
      show: true,
      bg: "bg-primary",
    },
  },
};

const ServiceCard = ({
  IconComponent,
  title,
  description,
  variant = "card1",
  link = "#",
}) => {
  const config = VARIANTS[variant];
  const base =
    "group block relative min-h-[220px] w-full max-w-[400px] rounded-lg px-8 py-6 m-3 no-underline overflow-hidden cursor-pointer";

  return (
    <Link to={link} className={cn(base, config.container)}>
      {/* Expanding Circle */}
      {config.circle?.show && (
        <div
          className={cn(
            config.circle.base,
            config.circle.initial,
            config.circle.hover
          )}
        />
      )}

      {/* Content */}
      <h3
        className={cn(
          "text-3xl font-normal leading-7 text-black mb-4 transition-all duration-300",
          config.hover
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "font-normal text-muted leading-relaxed transition-all duration-300",
          config.hover
        )}
      >
        {description}
      </p>

      {/* Corner Icon */}
      {config.corner?.show && IconComponent && (
        <div
          className={cn(
            "flex items-center justify-center absolute w-10 h-10 overflow-hidden top-0 right-0 rounded-tr-lg rounded-bl-[40px]",
            config.corner.bg
          )}
        >
          <IconComponent className="text-white text-lg -mt-1 -mr-1" />
        </div>
      )}

      {/* Skewed Corner (card4 only) */}
      {config.skew?.show && (
        <div className={config.skew.wrapper}>
          {IconComponent && (
            <div className={config.skew.icon}>
              <IconComponent className="text-xl" />
            </div>
          )}
        </div>
      )}
    </Link>
  );
};

const DEFAULT_SERVICES = [
  {
    icon: FaSearch,
    title: "Search Engine Optimization",
    description:
      "Boost your visibility with proven SEO strategies that attract the right audience. From keyword optimization to technical audits, every detail drives organic growth.",
    link: "/services",
  },
  {
    icon: FaHashtag,
    title: "Social Media Marketing",
    description:
      "Build strong social media identities that connect with your audience and drive results. From content strategy to paid campaigns, every post is built to perform.",
    link: "/services",
  },
  {
    icon: FaChartLine,
    title: "Performance Marketing",
    description:
      "Get measurable outcomes with data-driven campaigns designed to maximize ROI. From Google Ads to social media campaigns, we optimize every channel for impact.",
    link: "/services",
  },
  {
    icon: FaPalette,
    title: "Branding",
    description:
      "Build a brand that speaks before you do. We craft powerful brand identities that stand out and stay remembered, from logo design to full brand strategy.",
    link: "/services",
  },
  {
    icon: FaUsers,
    title: "Talent Management",
    description:
      "Connecting talent with opportunity. Our talent management solutions help brands and creators collaborate seamlessly, managing partnerships that deliver real impact.",
    link: "/services",
  },
  {
    icon: FaBullhorn,
    title: "Digital PR",
    description:
      "Shape perception, build authority, stay visible. We position your brand through online media, influencers, and digital storytelling built for the digital age.",
    link: "/services",
  },
  {
    icon: FaCode,
    title: "Web Development",
    description:
      "From sleek design to powerful functionality, we create websites that perform. Every page is optimized for user experience, speed, and conversion.",
    link: "/services",
  },
  {
    icon: FaVideo,
    title: "Production",
    description:
      "Creative production that captures attention. From concept to final cut, we produce visuals that tell your brand story with impact.",
    link: "/services",
  },
];

const ServiceSection = ({ variant = "card1", services = DEFAULT_SERVICES }) => (
  <section className="min-h-screen py-24 md:py-32 px-6 md:px-12 lg:px-20">
    <div className="max-w-7xl mx-auto text-black">
      {/* Header - Left Aligned */}
      <div className="mb-14">
        <h1 className="font-title text-3xl md:text-7xl font-bold mb-3 md:mb-6 text-primary">
          What We Do.
        </h1>
        <p className="text-muted font-normal max-w-3xl text-xl leading-relaxed">
          Comprehensive digital marketing solutions tailored to elevate your
          brand and drive business growth through innovative strategies and
          measurable results.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center lg:justify-start items-stretch">
        {services.map((service, i) => (
          <ServiceCard
            key={i}
            IconComponent={service.icon}
            title={service.title}
            description={service.description}
            link={service.link}
            variant={variant}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ServiceSection;
