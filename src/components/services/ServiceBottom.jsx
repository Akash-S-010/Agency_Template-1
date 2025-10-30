import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const capabilityColumns = [
  {
    title: "Strategy & Growth",
    items: [
      "Go-to-market playbooks",
      "Growth marketing audits",
      "Campaign architecture",
      "Measurement frameworks",
    ],
  },
  {
    title: "Creative & Content",
    items: [
      "Narrative development",
      "Content sprints",
      "Motion & film production",
      "Launch toolkits",
    ],
  },
  {
    title: "Product & Experience",
    items: [
      "UX research & prototyping",
      "Design systems",
      "Web & app development",
      "Performance optimization",
    ],
  },
  {
    title: "Partnerships & Amplification",
    items: [
      "Influencer programs",
      "Talent management",
      "PR & reputation",
      "Lifecycle automation",
    ],
  },
];

const ServiceBottom = () => {
  return (
    <section className="pt-24 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="col-span-12 md:col-span-8">
          <p className="text-xs md:text-sm uppercase text-muted tracking-wider mb-6">
            How we deliver
          </p>
          <p className="text-3xl md:text-4xl font-normal leading-tight text-black">
            Multidisciplinary squads built to ship outcomes, not just assets.
          </p>
          <p className="text-base md:text-lg text-muted leading-relaxed mt-6 max-w-3xl">
            From market analysis and creative direction to engineering and performance, every engagement is handled by specialists who collaborate as one integrated team.
          </p>
        </div>

        <div className="col-span-12 md:col-span-4 flex items-start md:items-center justify-end">
          <p className="text-sm text-muted">Going Beyond Expectations.</p>
        </div>
      </div>

        <hr className="border-t border-gray-200" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {capabilityColumns.map((column, index) => (
            <div
              key={column.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white/95 p-8 shadow-[0_28px_60px_-32px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-2 hover:border-primary/50"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/70 to-primary/40 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative flex flex-1 flex-col gap-5 cursor-pointer">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase text-primary">
                    /- {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 leading-tight">
                  {column.title}
                </h3>
                <ul className="flex flex-1 flex-col justify-start space-y-3 text-muted text-sm md:text-base">
                  {column.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <FiCheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBottom;
