import React, { useRef, memo } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

import { servicesOverview } from "./servicesContent.js";

const services = servicesOverview.map((service) => {
  const descriptionArray = Array.isArray(service.description)
    ? service.description
    : [];
  const featureArray = Array.isArray(service.features)
    ? service.features
    : Array.isArray(service.bulletPoints)
    ? service.bulletPoints
    : [];

  return {
    slug: service.slug,
    title: service.title,
    category: service.category,
    summary: descriptionArray[0] ?? service.headline,
    supportingCopy: descriptionArray.slice(1),
    features: featureArray,
    metrics: service.metrics ?? {},
  };
});

const IntroCard = memo(function IntroCard({ progress, range, targetScale }) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{ scale, willChange: "transform" }}
        className="w-full h-full overflow-hidden bg-white border border-gray-200 shadow-sm"
      >
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 lg:p-12 xl:p-16 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-primary leading-tight mb-6">
            Our Services
          </h1>

          <p className="text-lg md:text-2xl lg:text-3xl font-light text-slate-600 leading-relaxed max-w-3xl mb-8">
            Comprehensive digital solutions tailored to elevate your brand and
            drive business growth through innovative design and technology.
          </p>

          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-light border border-blue-600/20 text-primary">
            <Award size={16} className="text-primary" />
            Professional Services
          </div>
        </div>
      </motion.div>
    </div>
  );
});
IntroCard.displayName = "IntroCard";

const ServiceCard = memo(function ServiceCard({
  i,
  slug,
  title,
  summary,
  supportingCopy,
  category,
  features,
  metrics,
  progress,
  range,
  targetScale,
}) {
  const scale = useTransform(progress, range, [1, targetScale]);
  const isAlternateBackground = i % 2 === 0;
  const cardBackgroundClass = isAlternateBackground ? "bg-blue-50" : "bg-white";
  const paragraphClass =
    "text-sm md:text-base lg:text-lg font-normal text-muted lg:text-slate-600 leading-relaxed md:leading-relaxed lg:leading-relaxed";
  const secondaryParagraphClass =
    "text-sm md:text-base lg:text-lg font-normal text-muted lg:text-slate-600 leading-relaxed md:leading-relaxed lg:leading-relaxed";
  const featureParagraphClass =
    "text-sm md:text-base lg:text-lg text-black leading-relaxed";

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          willChange: "transform",
        }}
        className={`w-full h-full border border-gray-200 overflow-hidden shadow-sm ${cardBackgroundClass}`}
      >
        <div className="relative z-10 h-full grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-0 lg:gap-x-6 px-5 md:px-10 lg:px-16 py-6 md:py-8 lg:py-12 min-h-full border-t border-b border-gray-200">
          <div className="flex flex-col justify-center max-w-3xl lg:max-w-2xl space-y-3 md:space-y-6 lg:space-y-8">
            <p className="text-xs font-normal tracking-wide text-primary/70 uppercase hidden md:block">
              - {category}
            </p>

            <div className="space-y-3 md:space-y-5 lg:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-light text-primary leading-tight">
                {title}
              </h2>

              <p className={paragraphClass}>{summary}</p>

              {supportingCopy && supportingCopy.length > 0 && (
                <p className={paragraphClass}>{supportingCopy[0]}</p>
              )}
            </div>

            {Object.keys(metrics).length > 0 && (
              <div className="grid grid-cols-3 gap-2 md:gap-3 lg:gap-4">
                {Object.entries(metrics).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <div className="text-base md:text-xl lg:text-2xl font-semibold text-primary">
                      {value}
                    </div>
                    <div className="text-xs md:text-sm uppercase tracking-wide text-muted">
                      {key}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {supportingCopy && supportingCopy.length > 1 && (
              <div className="space-y-2 md:space-y-3">
                {supportingCopy.slice(1).map((paragraph, idx) => (
                  <p key={idx} className={secondaryParagraphClass}>
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            <Link
              to={`/services/${slug}`}
              className="group inline-flex w-fit items-center gap-2 px-5 py-2.5 lg:px-6 lg:py-3 font-normal text-sm md:text-base bg-primary text-white hover:bg-blue-700 transition-all hover:px-7 lg:hover:px-8"
            >
              Learn More
              <ExternalLink
                size={18}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </div>

          <div className="flex items-center justify-start lg:justify-end">
            <div className="w-full max-w-xl space-y-4 md:space-y-6 lg:space-y-8">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="border-b border-slate-200 pb-2.5 md:pb-3 lg:pb-4"
                >
                  <p className={featureParagraphClass}>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
});
ServiceCard.displayName = "ServiceCard";

const MainServices = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const introRange = [0, 1];
  const introScale = 1;

  return (
    <main ref={containerRef} className="relative bg-gray-50">
      <IntroCard
        progress={scrollYProgress}
        range={introRange}
        targetScale={introScale}
      />

      {services.map((service, i) => {
        const idx = i + 1;
        const targetScale = 1 - (services.length - idx) * 0.005;
        const range = [idx / (services.length + 1), 1];

        return (
          <ServiceCard
            key={idx}
            i={idx}
            slug={service.slug}
            title={service.title}
            summary={service.summary}
            supportingCopy={service.supportingCopy}
            category={service.category}
            features={service.features}
            metrics={service.metrics}
            progress={scrollYProgress}
            range={range}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

export default MainServices;
