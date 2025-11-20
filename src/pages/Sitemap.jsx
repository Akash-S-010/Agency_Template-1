import React from "react";
import { Link } from "react-router-dom";
import BlurText from "../components/ui/BlurText";
import { MoveRight } from "lucide-react";

const Sitemap = () => {
  const sitemapSections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Careers", path: "/careers" },
        { name: "Contact Us", path: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "SEO Services", path: "/services/seo" },
        { name: "Social Media Marketing", path: "/services/social-media-marketing" },
        { name: "Performance Marketing", path: "/services/performance-marketing" },
        { name: "Branding", path: "/services/branding" },
        { name: "Talent Management", path: "/services/talent-management" },
        { name: "Digital PR", path: "/services/digital-pr" },
        { name: "Web Development", path: "/services/web-development" },
        { name: "Production", path: "/services/production" },
      ],
    },
    {
      title: "Legal & Information",
      links: [
        { name: "Terms of Services", path: "/terms" },
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Sitemap", path: "/sitemap" },
      ],
    },
  ];

  return (
    <main className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl space-y-6 pt-24">
            <span className="inline-block px-4 py-2 text-primary text-xs uppercase font-light rounded-full">
              /-- Sitemap
            </span>
            <h1 className="font-title text-3xl md:text-6xl font-bold leading-tight text-primary">
              <BlurText
                as="span"
                text="Website Sitemap"
                animateBy="words"
                direction="bottom"
                delay={80}
                className="block"
              />
            </h1>
            <p className="max-w-3xl text-base md:text-xl text-slate-600 leading-relaxed">
              Navigate through all pages and sections of our website. Find
              exactly what you're looking for with our comprehensive sitemap.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {sitemapSections.map((section, index) => (
              <div key={index} className="space-y-6">
                <h2 className="text-2xl font-semibold text-black border-b-2 border-primary pb-3">
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.path}
                        className="text-slate-700 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        <span className="group-hover:translate-x-2 transition-transform duration-200">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-black mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Get in touch with us and we'll guide you
            to the right place.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-4 px-8 py-3 bg-primary text-white font-semibold hover:bg-primary/90 transition-all duration-300"
          >
            Contact Us
            <MoveRight  size={18}/>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Sitemap;
