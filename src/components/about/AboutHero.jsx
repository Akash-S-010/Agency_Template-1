import React from "react";

const AboutHero = () => {
  return (
    <div className="max-w-6xl flex flex-col gap-6 pt-32">
      <span className="text-xs uppercase tracking-[0.35em] text-primary/70">
        About
      </span>
      <h1 className="font-heading text-3xl md:text-6xl font-normal leading-tight text-slate-900">
        Digital marketing leadership born in Dubai, built for global impact
      </h1>
      <p className="max-w-3xl text-base md:text-xl text-slate-600 leading-relaxed">
        Beyond Agency blends creativity, precision, and performance to help brands grow stronger, smarter, and beyond expectations. In just one year we’ve become a trusted partner for ambitious teams across the region.
      </p>
      <p className="max-w-3xl text-base md:text-xl text-slate-600 leading-relaxed">
        From SEO and social media to paid advertising and branding, every engagement is tailored to the outcomes that matter—connecting the right audiences, amplifying visibility, and unlocking measurable growth.
      </p>
    </div>
  );
};

export default AboutHero;
