import React from "react";
import AboutHero from "../components/about/AboutHero";
import CompanyData from "../components/about/CompanyData";
import { TextReveal } from "../components/ui/TextReveal";

const About = () => {
  return (
    <main className="min-h-screen bg-white text-black px-4 md:px-20">
      <AboutHero />
      <CompanyData />
      <div className="flex flex-col min-h-screen items-center justify-center border-t border-primary/10  gap-8 bg-cover bg-center bg-no-repeat">
        <TextReveal
          text="is a strategic partner for brands that aim higher. Our real job is to elevate perceived value through bold thinking, distinct identity, crafted experiences and creativity that deliver real impact."
          className="text-center"
        />
      </div>
    </main>
  );
};

export default About;
