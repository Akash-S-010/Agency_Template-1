import React from "react";
import AboutHero from "../components/about/AboutHero";
import CompanyData from "../components/about/CompanyData";
import WhyChooseUs from "../components/about/WhyChooseUs";
import { TextReveal } from "../components/ui/TextReveal";
import Button from "../components/ui/Button";

const About = () => {
  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <AboutHero />
        </div>
      </section>

      {/* Company Data Section */}
      <section className="py-24 md:py-32 bg-gray-50 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <CompanyData />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Mission, Vision & Values */}
      <section className="py-24 md:py-32 bg-white px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-heading text-primary mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To empower businesses with innovative marketing solutions that
                drive measurable growth, enhance brand presence, and create
                lasting impact in the digital world.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-heading text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be recognized as a forward-thinking, results-driven marketing
                partner, redefining modern marketing through creativity,
                strategy, and going beyond client expectations.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-heading text-primary mb-4">
                Our Values
              </h3>
              <p className="text-gray-600">
                We believe in creativity, data-driven decisions, and
                collaboration to deliver meaningful results. Innovation,
                adaptability, and passion guide our work, ensuring every project
                achieves excellence and lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 md:py-32 text-black px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-normal mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals with
            our expert solutions.
          </p>
          <Button text="Get in Touch" className="mx-auto" />
        </div>
      </section>
    </main>
  );
};

export default About;
