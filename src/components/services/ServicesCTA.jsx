import React from 'react';
import Button from '../ui/Button';

const ServicesCTA = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-normal mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how our comprehensive digital solutions can help you achieve your goals and drive remarkable growth.
        </p>
        <Button text="Get Started Today" className="mx-auto" />
      </div>
    </section>
  );
};

export default ServicesCTA;