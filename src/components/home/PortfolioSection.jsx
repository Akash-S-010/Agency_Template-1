import { ReactLenis } from "lenis/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MoveRight, Sparkles } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DATA – Unified dark background, refined content                   */
/* ------------------------------------------------------------------ */
const services = [
  {
    title: "UI UX Design",
    description:
      "We craft pixel-perfect, user-centered interfaces that drive engagement and growth.",
    technologies: [
      "UI UX Consulting",
      "UX Research",
      "Usability Testing",
      "UX Audit",
      "UI UX Design",
      "Design System Audit",
      "Visual Design",
    ],
    imageGrid: true,
  },
  {
    title: "Web Design",
    description:
      "High-conversion websites that look stunning and perform flawlessly across all devices.",
    technologies: [
      "Website Strategy",
      "UX Planning",
      "Custom UX/UI Design",
      "Responsive Design",
      "Landing Page Design",
      "Custom Web Development",
      "Post-Launch & Maintenance",
    ],
  },
  {
    title: "Build Product (MVP)",
    description:
      "Launch fast. Validate ideas. Scale smart. We build MVPs that get real user feedback.",
    technologies: [
      "Discovery & MVP Strategy",
      "UX/UI Design for MVP",
      "Prototypes & Wireframes",
      "Front & Back Development",
      "Third-Party API & Integration",
      "Quality Assurance & Testing",
      "Launch & Post-MVP Iteration",
    ],
  },
  {
    title: "Webflow",
    description:
      "No-code, high-performance websites with enterprise-grade design and animations.",
    technologies: [
      "Figma to Webflow Build",
      "Full Webflow Design + Dev",
      "CMS Architecture",
      "Animations & Interactions",
      "Webflow SEO Setup",
      "No-code Integrations",
      "Enterprise Webflow Builds",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  MAIN COMPONENT                                                    */
/* ------------------------------------------------------------------ */
export default function PortfolioSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root options={{ smoothWheel: true, lerp: 0.07 }}>
      <main ref={container} className="relative bg-[#0a0a0a]">
        {services.map((s, i) => {
          const targetScale = 1 - (services.length - 1 - i) * 0.05;
          return (
            <Card
              key={i}
              i={i}
              {...s}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </ReactLenis>
  );
}

/* ------------------------------------------------------------------ */
/*  CARD COMPONENT – Solid Dark BG, Premium UI                        */
/* ------------------------------------------------------------------ */
const Card = ({
  i,
  title,
  description,
  technologies,
  progress,
  range,
  targetScale,
  imageGrid,
}) => {
  const cardRef = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);
  const y = useTransform(progress, range, [0, -100]);
  const opacity = useTransform(progress, range, [1, 0.9]);

  return (
    <div
      ref={cardRef}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: "#0a0a0a", // Solid dark background
          scale,
          y,
          opacity,
          top: `calc(${i * 20}px)`,
        }}
        className="absolute inset-0 text-white flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-20 py-16 overflow-hidden"
      >
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 opacity-50 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-900 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-900 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border border-white/20">
              <Sparkles size={16} className="text-yellow-400" />
              Service {i + 1} of {services.length}
            </div>

            {/* Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {title}
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
              {description}
            </p>

            {/* Tech List */}
            <ul className="space-y-3">
              {technologies.map((tech, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-base md:text-lg text-gray-400"
                >
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                  {tech}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button className="group mt-8 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 bg-white text-black hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-xl">
              Get Started
              <MoveRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* RIGHT: Image Grid */}
          <div className="flex justify-center lg:justify-end">
            {imageGrid ? (
              <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-md">
                {[
                  "https://picsum.photos/320/420?random=20",
                  "https://picsum.photos/320/420?random=21",
                  "https://picsum.photos/320/420?random=22",
                  "https://picsum.photos/320/420?random=23",
                ].map((src, idx) => (
                  <div
                    key={idx}
                    className={`relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 ${
                      idx === 1
                        ? "translate-y-8"
                        : idx === 2
                        ? "-translate-y-6"
                        : ""
                    }`}
                  >
                    <img
                      src={src}
                      alt={`mock-${idx}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="relative">
                <img
                  src="https://picsum.photos/400/600?random=24"
                  alt="product"
                  className="rounded-3xl shadow-2xl max-w-sm border border-white/10"
                />
                {i === 2 && (
                  <div className="absolute -top-12 -right-12 bg-white p-4 rounded-2xl shadow-2xl border border-gray-200">
                    <img
                      src="https://picsum.photos/200/300?random=25"
                      alt="phone"
                      className="w-36 rounded-xl"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff20 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff20 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>
    </div>
  );
};