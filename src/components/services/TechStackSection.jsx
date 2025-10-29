import React from "react";

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

const TechStackSection = () => {
  return (
    <section className="py-24 border-t border-gray-200 bg-white">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {capabilityColumns.map((column) => (
            <div key={column.title} className="p-6 border border-gray-200 rounded-3xl shadow-sm bg-white">
              <h3 className="text-lg font-semibold text-primary mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3 text-muted text-sm md:text-base">
                {column.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
