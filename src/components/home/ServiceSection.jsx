import React from "react";
import {
  FaPalette,
  FaShoppingCart,
  FaPencilRuler,
  FaBullhorn,
  FaMobileAlt,
  FaCode,
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
          "font-light text-muted leading-6 transition-all duration-300",
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
    icon: FaCode,
    title: "Web Design & Development",
    description:
      "Creating stunning, responsive websites that combine beautiful design with seamless functionality to deliver exceptional user experiences.",
    link: "/services",
  },
  {
    icon: FaShoppingCart,
    title: "Ecommerce Development",
    description:
      "Building robust online stores with secure payment gateways, inventory management, and optimized checkout experiences to boost your sales.",
    link: "/services",
  },
  {
    icon: FaPencilRuler,
    title: "Branding & Identity",
    description:
      "Crafting unique brand identities that resonate with your audience, from logo design to complete brand guidelines and visual systems.",
    link: "/services",
  },
  {
    icon: FaPalette,
    title: "Graphic Design",
    description:
      "Delivering creative visual solutions including marketing materials, social media graphics, and print designs that make your brand stand out.",
    link: "/services",
  },
  {
    icon: FaBullhorn,
    title: "Digital Marketing",
    description:
      "Strategic digital campaigns across SEO, social media, and paid advertising to increase your online visibility and drive meaningful results.",
    link: "/services",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Application",
    description:
      "Developing native and cross-platform mobile apps with intuitive interfaces and powerful features for iOS and Android devices.",
    link: "/services",
  },
];

const ServiceSection = ({ variant = "card1", services = DEFAULT_SERVICES }) => (
  <div className="min-h-screen py-20 px-4 md:px-20">
    <div className="px-4 text-black">
      {/* Header - Left Aligned */}
      <div className="mb-14">
        <h1 className="text-3xl md:text-7xl font-normal mb-3 md:mb-6 text-primary">What We Do.</h1>
        <p className="text-muted font-light max-w-3xl text-xl">
          Comprehensive digital solutions tailored to elevate your brand and drive business growth through innovative design and technology.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center lg:justify-start items-stretch max-w-7xl mx-auto">
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
  </div>
);

export default ServiceSection;