import React from "react";
import { FiTarget, FiEye, FiAward } from "react-icons/fi";

const pillars = [
  {
    id: "mission",
    label: "Our Mission",
    kicker: "Mission",
    icon: FiTarget,
    description:
      "Empowering businesses with innovative marketing built on strategy, creativity, and measurable performance to create lasting impact in the digital world.",
  },
  {
    id: "vision",
    label: "Our Vision",
    kicker: "Vision",
    icon: FiEye,
    description:
      "To be the forward-thinking partner ambitious brands trust to redefine modern marketing with bold ideas, intelligent execution, and results that matter.",
  },
  {
    id: "values",
    label: "Our Values",
    kicker: "Values",
    icon: FiAward,
    description:
      "We combine creativity, data, and collaboration with adaptability and passion—ensuring every project delivers excellence and momentum for our clients.",
  },
];

const MissionVisionValues = () => {
  return (
    <section className="relative overflow-hidden rounded-[40px] bg-white text-muted">
      <div className="relative px-8">
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl font-light leading-tight md:text-5xl text-black">
            The beliefs that power every partnership at Beyond Agency.
          </h2>
          <p className="text-sm text-slate-600 md:text-base">
            Each engagement is rooted in a clear mission, an ambitious vision,
            and values that keep our team aligned with your goals.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_25px_60px_-35px_rgba(15,23,42,0.25)] transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-primary/60 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative space-y-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 text-primary">
                    <pillar.icon className="h-6 w-6" />
                  </span>
                  <p className="text-sm uppercase tracking-[0.3em] text-primary">
                    {pillar.kicker}
                  </p>
                </div>
                <h3 className="text-2xl font-semibold text-black">
                  {pillar.label}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
