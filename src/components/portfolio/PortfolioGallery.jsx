import React, { useMemo, useState } from "react";
import PortfolioFilter from "./PortfolioFilter";
import { portfolioCategories, portfolioProjects } from "./portfolioData";

const PortfolioGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return portfolioProjects;
    return portfolioProjects.filter(
      (project) => project.category.toLowerCase() === activeCategory.toLowerCase()
    );
  }, [activeCategory]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col gap-6">
          <div className="space-y-4 max-w-3xl mb-12">
            <h2 className="text-2xl md:text-4xl font-heading font-normal text-black">
              Selected Case Studies
            </h2>
            <p className="text-base md:text-lg text-muted max-w-2xl">
              Filter the work by category to discover how we craft cohesive digital journeys for
              global brands and ambitious startups alike.
            </p>
          </div>
          <PortfolioFilter
            categories={portfolioCategories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden border border-gray-200 shadow-sm bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute bottom-6 left-6 right-6 flex items-center justify-between opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="text-sm uppercase tracking-[0.3em] text-white">View Case</span>
                <span className="text-sm text-white/80">↗</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
