import React from "react";
import AboutHero from "../components/about/AboutHero";
import CompanyData from "../components/about/CompanyData";
import WhyChooseUs from "../components/about/WhyChooseUs";
import { TextReveal } from "../components/ui/TextReveal";
import Button from "../components/ui/Button";


const About = () => {
  return (
    <main className="bg-white text-black px-4 md:px-20">
      {/* Hero Section */}
      <section className="bg-white py-4 md:py-8">
        <div className="max-w-7xl mx-auto">
          <AboutHero />
        </div>
      </section>

      {/* Company Data Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <CompanyData />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Mission Statement */}
      <section>
        <div className="max-w-4xl mx-auto text-center">
          <TextReveal
            text="We empower businesses with innovative technology and strategic creativity to deliver exceptional digital experiences that drive growth."
            className="text-lg md:text-xl leading-relaxed text-gray-800 font-light"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-normal mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals with our expert solutions.
          </p>
          <Button text="Get in Touch" className="mx-auto" />
        </div>
      </section>
    </main>
  );
};


export default About;
