import React from 'react';
import Button from '../ui/Button';

const ServicesCTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center border border-gray-200 rounded-3xl shadow-sm bg-gradient-to-br from-white via-white to-primary/10">
        <div className="py-12 space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-normal text-slate-900">
            Ready to transform your next chapter?
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Let’s explore how our multidisciplinary team can co-create campaigns, platforms, and products that drive momentum for your brand.
          </p>
          <Button text="Book a Strategy Call" className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;