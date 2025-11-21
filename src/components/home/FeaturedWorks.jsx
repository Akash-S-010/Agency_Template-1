import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const featuredProjects = [
  {
    id: 1,
    title: "Pets Website",
    category: "Website Development",
    description: "A comprehensive e-commerce platform for pet products with seamless user experience, custom CMS integration, and responsive design optimized for conversions.",
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "E-commerce", "CMS"],
  },
  {
    id: 2,
    title: "VM Website",
    category: "Website Development",
    description: "Modern corporate website featuring dynamic content management, interactive UI elements, and performance-optimized architecture for enterprise-level scalability.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Corporate", "Performance"],
  },
];

const FeaturedWorks = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20">
      <div className="mx-auto">
        {/* Section Header */}
        <div
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-normal text-black mb-4">
            Recent Projects We're Proud Of
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl">
            Explore our latest work showcasing innovative solutions, creative
            excellence, and measurable results for our clients.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Project Info */}
              <div className="p-8">
                <span className="inline-block px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full mb-4">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-semibold text-black mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                {/* <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>View Project</span>
                  <ArrowRight className="w-5 h-5" />
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div
          className="text-center"
        >
          <Button 
            text="View All Projects" 
            onClick={() => navigate('/portfolio')}
            className={"mx-auto"}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
